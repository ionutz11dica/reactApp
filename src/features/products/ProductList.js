import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { CardDeck } from 'react-bootstrap'
import ProductItem from './ProductItem';
import {setProducts} from './actions';
import { getAllProducts } from '../../api';

const getProducts = (state) => state.products;

const ProductList = () => {
  const products = useSelector(getProducts, shallowEqual)

  const dispatch = useDispatch()
  
  useEffect(() => {
    async function getProductsData() {
      const resp = await getAllProducts();
      if (resp.data.length > 0) {
        dispatch(setProducts(resp.data))
      }
    }

    getProductsData()

  }, [dispatch])


  return(
  <CardDeck>
    {
      products.filteredList.length > 0 ?
      products.filteredList.map((product) => {
        return <ProductItem key={product.id} 
        id={product.id} 
        title={product.title}/>
      }) :
      products.list.length > 0 ? 
        products.list.map((product) => {
          return <ProductItem key={product.id} 
          id={product.id} 
          title={product.title}/>
        }) :
        null
    }
  </CardDeck>)
}

export default ProductList

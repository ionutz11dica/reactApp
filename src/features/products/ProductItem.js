import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {addProductToShoppingCart} from './actions';

const selectProductById = (state, productId) => {
  return state.products.list.find((product) => product.id === productId)
}

const ProductItem = ({ id }) => {
  const product = useSelector((state) => selectProductById(state, id))
  const { title, description, price, imageUrl } = product

  const dispatch = useDispatch()

  const onAddToShoppingCart = () => {
    dispatch(addProductToShoppingCart(product.id));
  }

  return (
    <Card style={{minWidth: '375.97px', maxWidth: '375.97px', marginRight: 0, marginTop: '15px'}} className="text-center">
        <Card.Img variant="top" src={imageUrl} width="375.97" height="375.97"/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary" onClick={onAddToShoppingCart} style={{fontSize: '12px'}}>Add to bag</Button>
        </Card.Body>
        <Card.Footer>
        <span className="text-muted center" style={{fontSize: 'small'}}>{`${price} $`}</span>
        </Card.Footer>
    </Card>
  )
}

export default ProductItem

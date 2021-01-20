import React, { useState } from 'react'
import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../api';
import { searchList, setProducts } from '../products/actions';


const selectProducts = (state) => {
    return state.products;
  }

const NavBar = () => {
    const dispatch = useDispatch();
    const {nrProductsInCart} =  useSelector((state) => selectProducts(state));

    const [query, setQuery] = useState('');

    const handleSearch = () => {
      dispatch(searchList(query));
    }

    const handleChange = async (e) => {
        if (e.target.value === '') {
            const data = await getAllProducts()
            if (data.length > 0) {
                dispatch(setProducts(data))
            }
        }
        setQuery(e.target.value);
    }
  
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{'marginBottom': 0, borderRadius: 0}}>
            <Navbar.Brand href="#home" style={{'fontSize':'20px'}}>BigFootShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{fontSize: '14px'}}>
                <Nav className="mr-auto">
                <Nav.Link href="#sneakers">Sneakers</Nav.Link>
                <Nav.Link href="#sweatshirts">Sweatshirts</Nav.Link>
                <NavDropdown title="Men" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#men/shirts">Shirts</NavDropdown.Item>
                    <NavDropdown.Item href="#men/jeans">Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#men/shorts">Shorts</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#men/shoes">Shoes</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Women" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#women/dress">Dress</NavDropdown.Item>
                    <NavDropdown.Item href="#women/jeans">Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#women/shorts">Shorts</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#women/bestseller">Bestseller</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                </Nav>
                <Form inline style={{fontSize: '16px'}}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                        onChange={(e) => handleChange(e)}/>
                    <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                </Form>
                <Navbar.Brand href="#home">
                    <FaShoppingCart color="white" size='25' style={{marginTop: '10px'}}/>
                    {
                        nrProductsInCart > 0 ? 
                        <span class='badge badge-warning' id='lblCartCount'> {nrProductsInCart} </span> : 
                        null
                    }
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>
  )
}

export default NavBar

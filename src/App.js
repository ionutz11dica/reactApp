import './App.css';
import ProductList from './features/products/ProductList';
import NavBar from './features/common/NavBar';
import Breadcrumbs from './features/common/Breadcrumbs';
import SideBar from './features/common/SibeBar';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    
    <div className="App">
      
      <nav>
        <NavBar/>
        <Breadcrumbs/>
      </nav>
      <div className="fullHeight" style={{marginTop: '-10px'}}>
        <Container style={{margin: '0', padding: '0', maxWidth: '100%', overflow: 'scroll'}} className="fullHeight">
          <Row className="fullHeight">
            <Col xs={1} md={4} sm={3} xl={3} lg={3} style={{margin: '0', padding: '0'}}>
              <SideBar/>
            </Col>
            <Col xs={1} md={6} sm={3} xl={9} lg={9} style={{margin: '15px 0 0 -80px', padding: '0', paddingBottom: '120px'}}>
              <ProductList/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;

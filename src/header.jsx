import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import antpool from "./assets/antpool.png"
import binence from "./assets/Binance-logo-large-1719335732.jpg"
import btc from "./assets/Logo-white-sq-4056408089.png"
import Logo from "./assets/TokenBrandedBitcoin.svg";


import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge
} from 'mdb-react-ui-kit';


function NavbarHeader(){
  return(
    <Navbar bg="light" data-bs-theme="light">
      <div className='alig-content-center justify-content-center m-4 p-3'>
         <img src={Logo} style={{width: "100px"}}></img>
      </div>
     <Navbar.Brand href="#home" className='justify-content-center align-content-center text-align-center'> Crypto Coin </Navbar.Brand>
    <Container>
    <Dropdown>
    <Dropdown.Toggle variant="dark" id="dropdown-basic" className='justify-content-center'>
        POOLS
      </Dropdown.Toggle>
     

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Antpool <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="https://btc.com/es">BTC.com <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Binance.com <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
    <Dropdown.Toggle variant="warning" id="dropdown-basic">
        ASIC Mineria
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Antpool <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2">BTC.com <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Binance.com <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    

 
    
     <Dropdown>
    <Dropdown.Toggle variant="warning" id="">
        Noticias
      </Dropdown.Toggle>
      <Row>
        <Col>
        <Dropdown.Menu className=''>
      <Dropdown.Item href="#/action-1"> MetaVerso <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Juegos  <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3"> BitCoin <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-1"> Antpool <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2"> ethereum <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3">  <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-1">Antpool <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2">BTC.com <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Binance.com <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-1">Antpool <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2">BTC.com <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Binance.com <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
      </Dropdown.Menu>
        </Col>
      </Row>
    </Dropdown>
   
  
    <Dropdown>
    <Dropdown.Toggle variant="warning" id="">
        Mercados
      </Dropdown.Toggle>
      <Row>
        <Col>
        <Dropdown.Menu className=''>
      <Dropdown.Item href="#/action-1"> MetaVerso <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Juegos  <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3"> BitCoin <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-1"> Antpool <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2"> ethereum <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3">  <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-1">Antpool <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2">BTC.com <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Binance.com <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-1">Antpool <img src={antpool} style={{width: "100px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2">BTC.com <img src={btc} style={{width: "50px"}}></img></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Binance.com <img src={binence} style={{width: "50px"}}></img></Dropdown.Item>
      </Dropdown.Menu>
        </Col>
      </Row>
    </Dropdown>

    <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        </svg></Nav>
        <a href="/bitcoins">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
           <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
         </svg>
           </a>
        <a href='/users'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
             <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
          </a>  
          <div className='container d-flex'>
            <Button type='btn btn-outline-primary'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                 </svg>
                  Linkedin
             </Button>
             <Button type='btn btn-outline-success'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-browser-chrome" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                 </svg>
                 Chrome
             </Button>
          </div> 
    </Container>
  </Navbar>
)
};


export default NavbarHeader;
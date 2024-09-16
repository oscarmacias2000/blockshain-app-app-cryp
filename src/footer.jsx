import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Dropdown from 'react-bootstrap/Dropdown';
import { SiBitcoin } from "react-icons/si";
import { SiEthereum } from "react-icons/si";
import Logo from "./assets/guyi6.jpg";




export default function FooterMain() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                    <Dropdown>
                        <Dropdown.Toggle variant='warning'> Bitcoin </Dropdown.Toggle>
                        <Dropdown.Menu>
                           <Dropdown.Item><h6>About Bitcoin</h6></Dropdown.Item>    
                           <Dropdown.Item href='https://bitcoin.org/en/'>Bitcoin <SiBitcoin size={"30px"} /> 
          </Dropdown.Item>
                        </Dropdown.Menu> 
                    </Dropdown>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                   <Dropdown>
                     <Dropdown.Toggle variant='warning'>
                        ethereum
                     <Dropdown.Menu>
                         <Dropdown.Item href='https://ethereum.org/en/'> ethereum <SiEthereum size={"30px"}></SiEthereum></Dropdown.Item>
                       </Dropdown.Menu>
                     </Dropdown.Toggle>
                   </Dropdown>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                   Mexico,Sinaloa 6941642749  MEX
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                    oscarantoniomacias2000@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 6941642749
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 6941642749
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        oscarmacias2000   
        <div className='d-grid p-3 m-4'>
              <div className='row-3 g-2'>
                  <div className='col g-1'>
                  <img src={Logo} style={{width: "100px"}}></img>
                  </div>
                  <div className='col g-1'>
                  <img src={Logo} style={{width: "100px"}}></img>
                  </div>
                 
              </div>
        </div>
        </a>
      </div>
    </MDBFooter>
  );
};




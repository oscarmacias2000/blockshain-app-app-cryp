import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Dropdown from 'react-bootstrap/Dropdown';
import { SiBitcoin } from "react-icons/si";
import { SiEthereum } from "react-icons/si";
import { SiTether } from "react-icons/si";
import { SiDogecoin } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { TbCurrencyXrp } from "react-icons/tb";
import { SiSolana } from "react-icons/si";
import { FaMonero } from "react-icons/fa";
import "./App.css";



export default function Subfooter() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
           <Dropdown className='Coins_2000  d-flex justify-content-center align-content-center'>
               <div className='row-1'>
                   <div className='col-12'>
                   <Dropdown.Toggle variant='success'>
                   <SiBitcoin style={{width: "100px", height: "100px"}}/>
                    </Dropdown.Toggle>
                    <Dropdown.Toggle variant='success'>
                      <FaMonero style={{width: "100px", height: "100px"}}></FaMonero>
                    </Dropdown.Toggle>
                    <Dropdown.Toggle variant='success'>
                       <SiSolana  style={{width: "100px", height: "100px"}}></SiSolana>
                    </Dropdown.Toggle>
                   <Dropdown.Toggle variant='success'>
                     <TbCurrencyXrp   style={{width: "100px", height: "100px"}}></TbCurrencyXrp>
                  </Dropdown.Toggle>
                     <Dropdown.Toggle variant='success'>
                        <SiDogecoin  style={{width: "100px", height: "100px"}}></SiDogecoin>
                      </Dropdown.Toggle>
                      <Dropdown.Toggle variant='success'>
                        <SiTether  style={{width: "100px", height: "100px"}}></SiTether>
                      </Dropdown.Toggle>
                      <Dropdown.Toggle variant='success'>
                          <SiLitecoin style={{width: "100px", height: "100px"}}></SiLitecoin>
                      </Dropdown.Toggle>
                      <Dropdown.Toggle variant='success'>
                        <SiEthereum style={{width: "100px", height: "100px"}}></SiEthereum>
                      </Dropdown.Toggle>
                   </div>
               </div>
           </Dropdown>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='d-flex justify-content-center'>
              <div className='container m-50 p-5'>
                <div className='container titulo'>
                     <a href=''><h1>DOCS</h1></a>
                </div>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
              </div>

              <div className='container m-50 p-5'>
                <div className='container titulo'>
                     <a href=''><h1>NEWS</h1></a>
                </div>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
              </div>

              <div className='container m-50 p-5'>
                <div className='container titulo'>
                     <a href=''><h1>ABOUT US</h1></a>
                </div>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
              </div>

              <div className='container m-50 p-5'>
                <div className='container titulo'>
                     <a href=''><h1>ASICS</h1></a>
                </div>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
              </div>
              <div className='container m-50 p-5'>
                <div className='container titulo'>
                     <a href=''><h1> GPUs</h1></a>
                </div>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
                 <a href='/1'> <h6>Criptomonedas Disponibles </h6></a>
                 <a href='/1'> <h6>Algoritmos Criptomonedas </h6></a>
              </div>

             
          </div>
      </section>
    </MDBFooter>
  );
};




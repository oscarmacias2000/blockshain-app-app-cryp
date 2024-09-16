import React from 'react';
import BTC from '../assets/395434.svg';

export default function Images() {
  return (
     <div className='container'>
        <div className='row'>
             <div className='col-3'>
             <div className='bg-image hover-zoom'>
              <img src={BTC} style={{width: "1000px"}}></img>
              </div>
             </div>
        </div>
     </div>
  );
}
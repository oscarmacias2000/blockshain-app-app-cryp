import Binance from "../assets/Binance-logo-large-1719335732.jpg";
import ETH from "../assets/wp2337132-blockchain-wallpapers.png";
import LTC from "../assets/1951023-bitcoin-vs-litecoin-whats-the-difference.jpg";
import ETC from "../assets/etherum-classifc.png";
import Image from 'react-bootstrap/Image';
import  { Routes,Route} from 'react-router-dom';


function WithHeaderExample() {

  const route = (<h1> HELLO TO YOU!</h1>);
  return (
  
    <div class="container d-grid">
      <div class="cards">
        <div class="card card-two">
        <div class="spinner-grow" role="status">
               <span class="visually-hidden">Loading...</span>
             </div>
          <h2 class="card-title">BTC</h2> <img src={Binance}></img>
          <p class="date"> 05/07/2024 </p>
          <p class="description">Aunque es posible que los ETF de Ether no puedan igualar los flujos de entrada de los ETF de bitcoin, los expertos del sector esperan que superen la media de lanzamiento de ETF.</p>
        </div>
        <div class="card card-two">
        <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
             </div>
          <h2 class="card-title">ETH</h2> <img src={ETH}></img>
          <p class="date"> 05/07/2024 </p>
          <p class="description">Aunque es posible que los ETF de Ether no puedan igualar los flujos de entrada de los ETF de bitcoin, los expertos del sector esperan que superen la media de lanzamiento de ETF.</p>
        </div>
        
        <div class="card card-three">
        <div class="spinner-grow" role="status">
               <span class="visually-hidden">Loading...</span>
             </div>
          <h2 class="card-title">ETC</h2><img src={ETC}></img>
          <p class="date"> 05/07/2024</p>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
        </div>
        
        <div class="card card-four">
        <div class="spinner-grow" role="status">
               <span class="visually-hidden">Loading...</span>
             </div>
          <h2 class="card-title">LTC</h2> <img src={LTC}></img>
          <p class="date"> 05/07/2024</p>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
        </div>
      </div>
    </div>

  );
}

export default WithHeaderExample;
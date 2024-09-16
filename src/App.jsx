import NavbarHeader from './header';
import WithHeaderExample from './sections/card';
import FooterMain from './footer';
import Subfooter from './subfooter';
import Images from './sections/images';
import "./App.css";

function AppComponent() {

return (
  <>
  <header>
       <NavbarHeader/>
   </header>
   <body>
     <main>
       <WithHeaderExample/>
       <div className='container'>
         <Images/>
       </div>
     <footer>
     <Subfooter/>
     <FooterMain/>
     </footer>
     </main>
   </body>
 </>
)
}


export default AppComponent;
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import LoginComponent from "./login";
import AppComponent from "./App";



export default function RenderComponent(){
       const IsAuthenticated = localStorage.getItem('auth') === 'true';



       return(
        <Router>
            <Routes>
               <Route path="/" element={<LoginComponent/>}>
               </Route>
               <Route path="/Render" element={IsAuthenticated ? <AppComponent/> : 
                <Navigate to='/'></Navigate> 
              }>
              </Route>
            </Routes>
        </Router>
       )
};





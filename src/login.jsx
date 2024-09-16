import { useState } from "react";
import { useNavigate } from "react-router";



export default function LoginComponent(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

     const handleSumit = (e) =>{
          e.preventDefault();
     };


     if(username === 'admin' && password === 'password'){
       
        
        localStorage.setItem('auth', 'true');
        navigate('/Render'); 
    }else{
         alert('credenciales no identificables') 
    }

   return(
      <form onSubmit={handleSumit}>
          <input 
          type="text" 
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          placeholder="username"
          > 
          </input>
         <input 
          type="text"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          placeholder="password">
          </input>
      </form>
   )

};
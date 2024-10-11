import { Navigate } from "react-router";

export default function Protectedroute({children}){
    const isAuth = localStorage.getItem('auth');
    return isAuth ? children : <Navigate to="/Login"/>
}
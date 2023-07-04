import { Outlet } from "react-router-dom";
import Navigation from "../components/nav-bar/Navbar";

// import 'bootstrap/dist/css/bootstrap.min.css';
const Layout =({user,setUser})=>{
    return (
        <> 
            <Navigation/>
            <Outlet/>
        </>
    )
}

export default Layout;
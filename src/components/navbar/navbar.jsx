import { Link,useLocation } from "react-router-dom";
import { Reorder } from "@mui/icons-material";
import { useState,useEffect } from "react";


import './navbar.styles.css'
const Navbar = () => {

    const [expandNavbar,setExpandNavbar] = useState(false);
    
    const Location = useLocation();
    
    useEffect(()=>{
        setExpandNavbar(false)
    },[Location])
    return (
        <div className="navbar" id ={ expandNavbar? 'open':'close'} >
            <div className="toggleButton">
                <button onClick={()=>{
                    setExpandNavbar((prev)=>!prev);
                    }}>
                    <Reorder/>
                </button>
            </div>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>
            
        </div>
    )
}

export default Navbar;
import {Outlet} from "react-router-dom";
import {Footer} from "../../components/Footer/Footer.jsx";
import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {useState} from "react";

export const Default = ()=>
{
    const [sign,setSign]=useState(false);
    return(
        <div>
            <Navbar sign={sign} setSign={setSign}/>
            <Outlet/>
            <Footer/>
        </div>
)
}
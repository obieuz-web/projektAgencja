import {Link, Navigate, useLocation} from "react-router-dom";
import "./Navbar.css"
import {useEffect, useState} from "react";
export const Navbar = ({links=[{name:"Strona głowna",path:"/"}]}) => {
    let location=useLocation();
    const [sign,setSign]=useState(false);
    const [redirectOut,setRedirectOut]=useState(false);

    useEffect(() => {
        setRedirectOut(false);
        if(localStorage.getItem("email")!==null&&!sign){
            setSign(true);
        }
    }, [location]);
    return (
        <nav>
            <a href={'/'}><img src={'../images/logo/logo.png'}/></a>
            <div className={'navigation-links'}>
                <div className={'navigation-pages'}>
                    {links.map((link)=>{
                        return <Link to={''+link.path} className={"navigation-link"}>{link.name}</Link>
                    })}
                    {sign && <span className={"navigation-link"} onClick={()=>{
                        localStorage.clear();
                        setSign(false);
                        if(location.pathname==="/Dashboard"){
                            setRedirectOut(true);
                        }
                    }}>Wyloguj się</span>}
                    {!sign && <Link to={'/zaloguj'} className={"navigation-link"}>Zaloguj się</Link>}
                    {redirectOut && <Navigate replace to="../"/>}
                </div>
            </div>
        </nav>
    )
}
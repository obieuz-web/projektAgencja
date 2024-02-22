import "./Dashboard.css"
import {Navigate} from "react-router-dom";

export const Dashboard = ()=>{
    if(localStorage.getItem("password")===null||localStorage.getItem("email")===null) {
        return (
            <Navigate replace to="../zaloguj"/>
        )
    }
    return(
        <div className={'dashboard-container'}>
            <div className={'dashboard-main'}>
                <div className={'dashboard-text-wrapper'}>
                    <h3>Właśnie sprzedałeś poniższe dane:</h3>
                    <span>Imię: {localStorage.getItem('imie')}</span>
                    <span>Nazwisko: {localStorage.getItem('nazwisko')}</span>
                    <span>E-mail: {localStorage.getItem('email')}</span>
                    <span>Numer telefonu: {localStorage.getItem('numer')}</span>
                    <span>Miasto zameldowania: {localStorage.getItem('miasto')}</span>
                </div>
            </div>
        </div>
    )
}
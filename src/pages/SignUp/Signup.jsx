import "./Signup.css"
import {SignUpForm} from "../../components/SignUpForm/SignUpForm.jsx";

export const Signup = ()=>{

    let miasta = [
        "Gdańsk",
        "Gdynia",
        "Kościerzyna",
        "Borkowo",
    ]

    return(
        <div className={'signup-container'}>
            <SignUpForm miasta={miasta}/>
        </div>
    )
}
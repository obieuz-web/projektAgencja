import "./SignIn.css";
import {SignInForm} from "../../components/SignInForm/SignInForm.jsx";

export const SignIn = ()=>{
    let users=[
        {
            email:"robert@gmail.com",
            password:"123",
            imie:"Robert",
            nazwisko:"Zajac",
            numer:"577833922",
            miasto:"Gdańsk"
        },
        {
            email:"piotr@gmail.com",
            password:"321",
            imie:"Piotr",
            nazwisko:"Szczesniak",
            numer:"773833922",
            miasto:"Borkowo"
        },
        {
            email:"skm@gmail.com",
            password:"skm",
            imie:"SKM",
            nazwisko:"Trójmiasto",
            numer:"867362459",
            miasto:"Kościerzyna"
        }
    ]
    return (
        <div className={'signin-container'}>
            <SignInForm users={users}/>
        </div>
    )
}
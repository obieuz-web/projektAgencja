import {Link, Navigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import "./SignInForm.css"

export const SignInForm = ({users}) => {
    const [redirect,setRedirect]=useState(false);
    const [passwordError,setPasswordError]=useState(<span className={'opis'}>Hasło</span>);
    const [emailError,setEmailError]=useState(<span className={"opis"}>E-mail</span>);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } =useForm(
        {
            mode: 'onSubmit',
            reValidateMode:'onChange',
        }
    )

    useEffect(() => {
        if(errors.email){
            setEmailError(<span className={"opis-error"}>Niepoprawny adres E-mail</span>);
        }
        else{
            setEmailError(<span className={"opis"}>E-mail</span>);
        }
    }, [errors.email]);

  return(
      <div className={'signin-form'}>
          <form onSubmit={handleSubmit((data)=>{
              users.map((user)=>{
                  if((data.email===user.email)&&(data.password===user.password)){
                      localStorage.setItem("email",""+user.email);
                      localStorage.setItem("password",""+user.password);
                      localStorage.setItem("imie",""+user.imie);
                      localStorage.setItem("nazwisko",""+user.nazwisko);
                      localStorage.setItem("numer",""+user.numer);
                      localStorage.setItem("miasto",""+user.miasto);
                      setRedirect(true);
                  }
              })
              if(!redirect){
                  setPasswordError(<span className={'opis-error'}>Niepoprawne hasło</span>);
              }
          })}>
              {redirect && <Navigate replace to="../dashboard" />}

              {emailError}
              <input className={'email'} {...register("email",{required:true,pattern: /^\S+@\S+\.\S{2,}$/})}/>
              {passwordError}
              <input className={'password'} type={'password'} {...register("password",{required:true})}/>

              <button type={'submit'} className={'submit-button'}>Wyślij</button>
              <div className={'signup-button'}>
                  <Link to={'../SignUp'} className={'signup-link'}>Nie masz konta?</Link>
              </div>
          </form>
      </div>
  )
}
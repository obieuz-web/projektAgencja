import {Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import "./SignUpForm.css"

export const SignUpForm = ({miasta}) => {
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

    const [redirect,setRedirect]=useState(false);
    const [imie,setImie]=useState(<span className={'opis'}>Imię</span>);
    const [nazwisko,setNazwisko]=useState(<span className={'opis'}>Nazwisko</span>);
    const [email,setEmail]=useState(<span className={'opis'}>E-mail</span>);
    const [numer,setNumer]=useState(<span className={'opis'}>Numer telefonu</span>);
    const [password,setPassword]=useState(<span className={'opis'}>Hasło</span>);

    useEffect(() => {
        if(errors.imie){
            setImie(<span className={"opis-error"}>Imię powinno zawierać 3 znaki</span>);
        }
        else{
            setImie(<span className={'opis'}>Imię</span>);
        }
        if(errors.nazwisko){
            setNazwisko(<span className={"opis-error"}>Nazwisko powinno zawierać 3 znaki</span>);
        }
        else{
            setNazwisko(<span className={'opis'}>Nazwisko</span>);
        }
        if(errors.email){
            setEmail(<span className={"opis-error"}>E-mail powinien być poprawnym adresem E-mail</span>);
        }
        else{
            setEmail(<span className={'opis'}>E-mail</span>);
        }
        if(errors.numer){
            setNumer(<span className={"opis-error"}>Numer telefonu zaczyna się od 5,6,7,8,9 i zawiera 9 cyfr</span>);
        }
        else{
            setNumer(<span className={'opis'}>Numer telefonu</span>);
        }
        if(errors.password){
            setPassword(<span className={"opis-error"}>Hasło zawiera 8 do 30 znaków,1 wielką i małą litere, 1 cyfre</span>);
        }
        else{
            setPassword(<span className={'opis'}>Hasło</span>);
        }
    }, [errors.imie,errors.nazwisko,errors.email,errors.numer,errors.password]);
  return(
      <div className={'signup-form'}>
          <form onSubmit={handleSubmit((data)=>{
              console.log(data);
              setRedirect(true);
          })}>
              {redirect && <Navigate replace to="../zaloguj" />}

              {imie}
              <input className={'imie'} {...register("imie",{required:true,minLength:3})}/>

              {nazwisko}
              <input className={'nazwisko'} {...register("nazwisko",{required:true,minLength:3})}/>

              {email}
              <input className={'email'} {...register("email",{required:true,pattern:/^\S+@\S+\.\S{2,}$/})}/>

              {numer}
              <input className={'numer'} {...register("numer",{required:true,maxLength:9,pattern:/^[5-9]{1,}/})}/>

              <span className={'opis'}>Miasto</span>
              <select className={'miasto'} {...register("miasto",{required:true})}>
                  {miasta.map((miasto)=>{
                      return (
                          <option value={miasto}>{miasto}</option>
                      )
                  })}
              </select>
              {password}
              <input className={'haslo'} type={'text'} {...register("password",{required:true,minLength:8,maxLength:30,pattern:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/})}/>

              <button className={'submit-button'} type={'submit'}>Wyślij</button>
          </form>
      </div>
  )
}
import React, {useState} from "react";
import "firebase/auth";
import { authService, firebaseInstance } from "../myBase";

const Auth = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("")
    const onChange = (event) => {
       const {target: {name,value}} =event;
       if(name === "email") {
           setEmail(value)
       } else if(name === "password") {
           setPassword(value);
       }
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        let data;
        try{
            if(newAccount){
            //create account , 계정 만들면 자동으로 로그인된다.
            data = await authService.createUserWithEmailAndPassword(email, password);
        } else {
            //login 
            data = await authService.signInWithEmailAndPassword(email, password);
        }}catch(error){
            setError(error.message);
        }
    }
    const toggleAccount = ()=> setNewAccount(prev => !prev);
    const onSocailClick = async(event) => {
        const {target: {name}} =event;
        let provider;
        if(name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if(name === "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="email" required value={email} onChange={onChange}/>
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign In 하러 가기" : "Create Account 하러 가기 "} </span>
            <div>
                <button onClick={onSocailClick} name="google">Continue with Google</button>
                <button onClick={onSocailClick} name="github">Continue with Github</button>
            </div>
        </div>
        )
}



export default Auth;
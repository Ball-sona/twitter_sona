import { Router } from "react-router-dom";
import React, {useState, useEffect} from "react";
import AppRouter from "./AppRouter";
import {authService} from "../myBase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //firebase가 초기화할때까지 기다렸다가, isLoggedIn 값을 바꿔주기 위함
  useEffect ( ()=> {
    authService.onAuthStateChanged( (user)=> {
      if(user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
        setInit(true);
      });
  },[]);
  return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
    </>
  );
}

export default App;

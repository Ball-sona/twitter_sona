import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../myBase";

export default ()=>{
    const history = useHistory();
    const onLogoutClick = () => {    
        authService.signOut(); //로그아웃은 하는데, /profile에 그대로 남아있다. 
        history.push("/"); //home으로 돌아가게 한다.
    }
    return (
        <>
        <button onClick={onLogoutClick}>Log out</button>
        </>
    )
}

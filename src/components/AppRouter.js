import React, {useState} from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation /> }
            <Switch>
                {isLoggedIn ? (
                <>
                <Route exact path="/">
                    <Home />
                </Route> 
                <Route exact path="/profile">
                    <Profile />
                </Route> 
                </> 
                ):( 
                <>
                <Route exact path="/">
                    <Auth />
                </Route>
                </>
                )}
            </Switch>
        </Router>
    )

}

export default AppRouter;

//Redirect는 Profile.js 에서 hook을 이용해서 사용하였다. 

import { Redirect } from "react-router-dom";
import React from 'react';

export class AuthorizationCheck {
    constructor() {
        console.trace("AUTHENTICATION CHECK IS OUTDATED! USE \"props.authentication\" INSTEAD!");
    }

    checkLogin(){
        
        try {
            return sessionStorage.getItem('loggedIn') == false || sessionStorage.getItem('loggedIn') == null;
        }catch(err){
            return false;
        }
    }

    redirectToLogin(){
        let redirect = <></>
        try {
            if(sessionStorage.getItem('loggedIn') == false || sessionStorage.getItem('loggedIn') == null){
                redirect = <Redirect to='/' />
            }
        }catch(err){
            redirect = <Redirect to='/' />
        }
        return redirect;
    }

    checkAuthLevel(){
        try {
            return sessionStorage.getItem('authLevel') > 1;
        }catch(err){
            return false;
        }
    }

    checkIdentity(){
        try {
            return sessionStorage.getItem('identity') == true;
        }catch(err){
            return false;
        }
    }

    checkRelatives(relativeIn){
        try {
            if(sessionStorage.getItem('relatives').indexOf(relativeIn) >= 0){
                return true;
            }else{
                return false;
            }
        }catch(err){
            return false;
        }
    }
    
}

export default AuthorizationCheck;
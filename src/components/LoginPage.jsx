import React, { useState, useEffect } from 'react';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {LOGIN} from '../apicalls'
import { Link , Redirect} from "react-router-dom";
import '../style/LoginPage.scss';
const LoginPage = (props) => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [errorDialog, setErrorDialog] = useState(false);

    const httpLink = createHttpLink({
        uri: 'https://sead-rails.herokuapp.com/graphql',
        headers: {
            "Content-Type": "application/json",
        }
    })

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })
    
    const login = async () =>{
        if ((email == "") || (password == "")) {
            setErrorDialog(true);
          } else {
            let data = await client
              .query({
                query: LOGIN,
                variables: {
                  "email": email,
                  "password": password
                }
              });
            loginCheckAndSuccessful(data)
          }   
    }

    const loginCheckAndSuccessful = async (data) => {
        const { login } = data.data;
        if (login !== null) {
          console.log(data.data.login.id)
          props.setUserID(login.id)
        } else {
          setPassword('')
          setErrorDialog(true);
        }
      }

    const renderRedirect = () => {
        console.log(props.id)
        if (props.userID != -1) {
            return (<Redirect to='/notes' />)
        }
    }

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const clickLogin = () => {
        console.log(email);
        console.log(password);
        login();
    }

    const errorDialogRender = (text) => {
    if (errorDialog) {
        return (
        <div className="error-dialog">
            <p>{text}</p>
        </div>
        )
    } else {
        return (
        <></>
        )
    }
    }

  return (
    <>
    {renderRedirect()}
    <div className="login-page">
        <div className="login-page-container">
            <div className="login-page-container-inner">
                <input className="login-page-input" type="text" placeholder="Email" value={email} onChange={updateEmail}></input>
                <input className="login-page-input" type="text" placeholder="Password" value={password} onChange={updatePassword} ></input>{/*type="password"*/}
                <input className="login-page-button" type="button" value="Login" onClick={clickLogin}></input>
                
            </div>  
        </div>
    </div>
    {errorDialogRender('Invalid Login')}
    </>
  );
}

export default LoginPage;

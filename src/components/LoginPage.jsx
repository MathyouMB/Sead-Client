import React, { useState, useEffect } from 'react';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {LOGIN} from '../apicalls'
import '../style/LoginPage.scss';
const LoginPage = (props) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

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

        let data = await client
            .query({
                query: LOGIN,
                variables: {
                    "email": email,
                    "password": password
                  }
            });
        console.log(data);
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

  return (
    <div className="login-page">
        <div className="login-page-container">
            <div className="login-page-container-inner">
                <input className="login-page-input" type="text" placeholder="Email" value={email} onChange={updateEmail}></input>
                <input className="login-page-input" type="text" placeholder="Password" value={password} onChange={updatePassword}></input>
                <input className="login-page-button" type="button" value="Login" onClick={clickLogin}></input>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;

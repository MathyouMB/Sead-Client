import React, { useState, useEffect } from 'react';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {CREATENOTE} from '../apicalls'
import { Link , Redirect} from "react-router-dom";
import '../style/CreateNotePage.scss';
const CreateNotePage = (props) => {

    let [title, setTitle] = useState("");
    let [text, setText] = useState("");
    let [redirect, setRediret] = useState(false);
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
    
    const createNote = async () =>{
        if ((title == "") || (text == "")) {
            setErrorDialog(true);
          } else {
            let data = await client
              .mutate({
                mutation: CREATENOTE,
                variables: {
                  "userId": props.userID,
                  "title": title,
                  "text": text
                }
              });
              setRediret(true)
              console.log(data);
          }   
    }

    const renderRedirect = () => {
        if (props.userID == -1) {
            return (<Redirect to='/login' />)
        }else{
            if(redirect){
                return (<Redirect to='/notes' />)  
            }
        }
    }

    const updateTitle = (event) => {
        setTitle(event.target.value);
    }

    const updateText = (event) => {
        setText(event.target.value);
    }

    const clickLogin = () => {
        console.log(title);
        console.log(text); 
        createNote();
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
    <div className="create-note-page">
        <div className="create-note-page-container">
            <div className="create-note-page-container-inner">
                <input className="create-note-page-input" type="text" placeholder="Title" value={title} onChange={updateTitle}></input>
                <textarea className="create-note-page-input" id="create-note-page-text" type="text" placeholder="Text" value={text} onChange={updateText} ></textarea>{/*type="password"*/}
                <input className="create-note-page-button" type="button" value="Add" onClick={clickLogin}></input>
                
            </div>  
        </div>
    </div>
    {errorDialogRender('Invalid Entry')}
    </>
  );
}

export default CreateNotePage;

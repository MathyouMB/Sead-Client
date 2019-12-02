import React, { useState, useEffect } from 'react';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {NOTE} from '../apicalls'
import '../style/ReadPage.scss';


const ReadPage = (props) => {
    let [index, setIndex] = useState(0);
    let [note, setNote] = useState("");
    let [parsedText, setParsedText] = useState([]);
    let [loading,setLoading] = useState(true);

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

    useEffect(() => {
        if(loading){
            queryData();
        }  
    })

    const queryData = async () =>{
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        let data = await client
            .query({
                query: NOTE,
                variables: {
                    "id": id
                  }
            });
        console.log(data);
        setNote(data.data.note)
        setParsedText(parseText(data.data.note.text))
        setLoading(false)
    }

    const parseText = (text) =>{
        console.log(text.split("."));
        return(text.split("."));
    }

    const decreaseIndex = () =>{
        console.log(index)
        if(index > 0){
            setIndex(index-1)
        }
    }

    const increaseIndex = () =>{
        console.log(index)
        console.log(index+":"+parsedText.length)
        if(index+1 < parsedText.length-1){
            setIndex(index+1)
        }
    }



  return (
    <div className="read-page">
        <div className="read-page-container">
            {loading ? 
                "Loading..."
                : 
                <span className="read-page-text">{parsedText[index]+"."}</span>
            }
        </div>
        <div className="read-page-buttons">
            <input className="read-button" type="button" value="Backward" onClick={()=>{decreaseIndex()}}></input>
            <input className="read-button" type="button" value="Forward" onClick={()=>{increaseIndex()}}></input>
        </div>
        
    </div>
  );
}

export default ReadPage;

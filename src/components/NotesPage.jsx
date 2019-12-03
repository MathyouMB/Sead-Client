import React, { useState, useEffect } from 'react';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {USER} from '../apicalls'
import Note from './Note'
import '../style/NotesPage.scss';

const NotesPage = (props) => {

    let [notes, setNotes] = useState("");
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

    const queryData = async () =>{

        let data = await client
            .query({
                query: USER,
                variables: {
                    "id": props.userID
                  }
            });
        console.log(data);
        console.log(data.data.user.notes)
        setNotes(data.data.user.notes);
        setLoading(false)
    }

    useEffect(() => {
        if(loading && props.userID != -1){
            queryData();
        }  
    })



  return (
    <div className="notes-page">
       <div className="note-wrapper">
            {loading ? 
                "Loading..."
                : 
                notes.map((ele) => <Note id={ele.id} title={ele.title} text={ele.text}/>)
            }
    
       </div>

    </div>
  );
}

export default NotesPage;

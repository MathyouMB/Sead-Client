import React, { useState, useEffect } from 'react';
import './style/App.scss';
import {USERS} from './apicalls'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import LoginPage from './components/LoginPage'
import NotesPage from './components/NotesPage'
import ReadPage from './components/ReadPage'
import Header from './components/Header'

const App = (props) => {

  let [id, setId] = useState(-1);

  return (
    <div className="app">
      <Header/>
       <Router>
          <Route path="/login" component={LoginPage} />
          <Route path="/notes" component={NotesPage}/>
          <Route path="/read" component={ReadPage}/>
       </Router>
    </div>
  );
}

export default App;

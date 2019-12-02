import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

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

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
)

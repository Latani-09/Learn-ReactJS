
import './App.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import GraphiQL from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import 'graphiql/graphiql.css';
function App() {
  
  const fetcher = createGraphiQLFetcher({ url: 'http://localhost:4000/graphql' });

  return (

   <>
   <GraphiQL fetcher={fetcher} />

{/** 
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
*/}</>
    
    
  );
}

export default App;

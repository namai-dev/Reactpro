import React, {Fragment, useState} from 'react';
import Adevert from './Componets/Adevert';
import Cards from './Componets/Cards';
import Header from './Componets/Header';
import Instractions from './Componets/Instractions';
import LoginForm from './Componets/LoginForm';
import NewsFeed from './Componets/NewsFeed';


function App() {
  
   
  
  return (
    <div>

<Header/>
      <Adevert/>
      <NewsFeed/>
      <Cards/>
      <Instractions/>
    </div>
      
    
    
  );
  }


export default App;

import React from 'react'
import './App.css'
import Out from './components/Out'
import In from './components/In'
import  Addminus from './components/Addminus'
import Time from './components/time'

import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "reactstrap";

function App() {
  const { isAuthenticated, user } = useAuth0();
  return (
    
      <div >
      
        <Container className="flex-grow-1 mt-5">
         <li> {
        isAuthenticated && <p>Hello{user.name}
        <br/>
        <Time />
        <br />
        <Addminus /> 
          </p>}</li>
          

         
 
           {isAuthenticated && (
           <li>
        <Out />
         </li>
       
          )} 
 
 {!isAuthenticated && (
    <li>
        <In />
        
    </li>
 )}



        </Container>
       <br/>  
       <br/>  
       <br/>  
       <br/>  
       <br/>  
       <br/>  
       <br/>  
       <br/>  
       <br/>  
       <br/>  
        <p>
      Sample Project of login logout using <a href="https://react.dev">  react</a>
    </p>
      </div>
   
  );
};

export default App;
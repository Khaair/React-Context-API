import React from 'react';
import './App.css';
import { DadaProvider } from './Component/Mycontext';
import Nati from './Component/Nati';
import Son from './Component/Son';

function App() {


  return(
    <>

    <DadaProvider value={"Dada send a messageeee"}>
    <Son/>

    <Nati/>
    </DadaProvider>
       
    </>
  )


    
     
  
  
}

export default App;

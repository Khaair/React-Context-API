import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [add,setAdd] = useState(100)

  const [sub,setSub] = useState(100)

  useEffect(()=>{
    console.log("Add updated",add)
  },[])
  return (
    <div className="App">
    <h1>{add}</h1>
    <h1>{sub}</h1>

   

    <button onClick = {() => setAdd(add+1)}>Increment</button>

    <button onClick = {() => setSub(sub-1)}>Decrement</button>
    
     
    </div>
  );
}

export default App;

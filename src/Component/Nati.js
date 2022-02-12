import React from 'react';
import { PutiConsumer } from './Mycontext';


export default function Nati() {
  return (
    
        <PutiConsumer>
            {
                msg=>{
                    return (<>
                    <h>hi there {msg}</h>
                    </>)
                }
            }
        </PutiConsumer>
    
  )
}

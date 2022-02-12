import React from 'react';
import { PutiConsumer } from './Mycontext';

export default function Puti() {
  return (
    <div>
        <PutiConsumer>
            {
                msg=>{
                    return msg;
                }
            }
        </PutiConsumer>
        
    </div>
  )
}

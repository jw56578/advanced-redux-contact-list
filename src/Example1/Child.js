import React, { Component } from 'react';
import GrandChild from './GrandChild';

function Child(props) {
  var message = props.message;
  if(message === "dirty joke"){
    message = "sensored";
  }
  return (
    <div className="App">
      --I am Child
      <GrandChild 
      callGreatGrandParent={(message)=>{
        //i don't want my grandchild talking to parent
          if(message !== "i love you too"){
            props.callGreatGrandParent(message);
          }
          else{
            props.callGreatGrandParent("message intercepted");
          }
        }
      }
        message={message}/>
    </div>
  );
}
export default Child;


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
      callGreatGrandParent={(msg)=>{
        if(msg !== "i love you too"){
          props.callGreatGrandParent("intercepted");
        }
        else
          props.callGreatGrandParent(msg);
      }}
        message={message}/>
    </div>
  );
}

export default Child;


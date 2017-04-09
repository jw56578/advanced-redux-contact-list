import React, { Component } from 'react';
import GrandChild from './GrandChild';

function Child(props) {
  var messageToChild = props.message;
  if(messageToChild === "dirty joke"){
    messageToChild = "hello";
  }
  return (
    <div className="App">
      --I am Child
      <GrandChild 
      callGreatGrandParent={props.callGreatGrandParent}
        message={messageToChild}/>
    </div>
  );
}
export default Child;
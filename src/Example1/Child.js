import React, { Component } from 'react';
import GrandChild from './GrandChild';

function Child(props) {
  return (
    <div className="App">
      --I am Child
      <GrandChild 
      callGreatGrandParent={props.callGreatGrandParent}
        message={props.message}/>
    </div>
  );
}
export default Child;
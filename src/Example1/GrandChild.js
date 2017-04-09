import React, { Component } from 'react';
import Child from './GreatGrandChild';

function GrandChild(props) {
  return (
    <div className="App">
      ---I am Grand Child
      <Child 
      callGreatGrandParent={
        ()=>{
          props.callGreatGrandParent('you are okay i guess');
        }
      } 
      message={props.message}/>
    </div>
  );
}
export default GrandChild;
import React, { Component } from 'react';
import Child from './Child';
import 'whatwg-fetch'

function Parent() {
  return (
    <div className="App">
      I'm the parent
      <Child
        callGreatGrandParent={(msg)=>{
            alert(msg);
        }}
        message={"dirty joke"}/>
    </div>
  );
}
export default Parent;
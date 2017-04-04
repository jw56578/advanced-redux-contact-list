import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  render() {
    return (
      <div className="App">
        I'm the parent
        <Child
         callGreatGrandParent={(msg)=>{
              alert(msg);
         }}
         message={'I love my great grand child'}/>
      </div>
    );
  }
  }
export default Parent;
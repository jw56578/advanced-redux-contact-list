import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(){
    this.state = {message:'I love my great grand child'};
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="App">
        I'm the parent
        <Child
         callGreatGrandParent={(msg)=>{
              alert(msg);
         }}
         message={this.state.message}/>
      </div>
    );
  }
  }
export default Parent;
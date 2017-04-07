import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Child extends Component {
  render() {
    return (
      <div className="App">
        --I am Child
        <GrandChild 
        callGreatGrandParent={(msg)=>{
          if(msg !== "i love you too"){
            this.props.callGreatGrandParent(msg);
          }
        }}
         message={this.props.message}/>
      </div>
    );
  }
  }
export default Child;


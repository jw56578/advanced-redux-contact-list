import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Child extends Component {
  render() {
    return (
      <div className="App">
        --I am Child
        <GrandChild 
        callGreatGrandParent={(msg)=>{
          //we do not want components randomly preventing other components from getting the data it wants
          //great grand child should be able to talk to parent if it wants to

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


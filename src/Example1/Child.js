import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Child extends Component {
  render() {
    return (
      <div className="App">
        --I am Child
        <GrandChild 
        callGreatGrandParent={(message)=>{
         //i don't want my grandchild talking to parent
            if(message !== "i love you too"){
              this.props.callGreatGrandParent(message);
            }
          }
        }
         message={this.props.message}/>
      </div>
    );
  }
  }
export default Child;


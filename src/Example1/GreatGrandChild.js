import React, { Component } from 'react';

class GreatGrandChild extends Component {

  render() {
    return (
      <div className="App">
        ----I am the great grand child
        does my great grand parent love me:
        <h1>{this.props.message}</h1>
        <button value="call old grampy" type="button" onClick={()=>{
          this.props.callGreatGrandParent("i love you too");
          }} >
          Call old granddad
          </button>
      </div>
    );
  }
  }
export default GreatGrandChild;
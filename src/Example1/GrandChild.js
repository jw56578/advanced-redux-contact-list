import React, { Component } from 'react';
import Child from './GreatGrandChild';

class GrandChild extends Component {
  render() {
    return (
      <div className="App">
        ---I am Grand Child
        <Child 
        callGreatGrandParent={this.props.callGreatGrandParent} 
        message={this.props.message}/>
      </div>
    );
  }
  }
export default GrandChild;
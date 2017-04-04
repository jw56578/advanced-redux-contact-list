import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Child extends Component {
  render() {
    return (
      <div className="App">
        --I am Child
        <GrandChild 
        callGreatGrandParent={this.props.callGreatGrandParent}
         message={this.props.message}/>
      </div>
    );
  }
  }
export default Child;

Child.propTypes = {
  callGreatGrandparent: React.PropTypes.func
};
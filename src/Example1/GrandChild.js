import React, { Component } from 'react';
import Child from './GreatGrandChild';

class GrandChild extends Component {
  render() {
  
    var child = "";
    // i don't want my grandparent sending my child dirty jokes
    if(this.props.message.value){
      child = <Child 
        callGreatGrandParent={this.props.callGreatGrandParent} 
        />
    }else{
      child = <Child 
        callGreatGrandParent={this.props.callGreatGrandParent} 
        message={this.props.message}/>
    }
    return (
      <div className="App">
        ---I am Grand Child
        {child}
        
      </div>
    );
  }
  }
export default GrandChild;
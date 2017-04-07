import React, { Component } from 'react';
import Child from './GreatGrandChild';

class GrandChild extends Component {
  render() {
  
    var child = "";
    //we do not want components randomly preventing other components from getting the data it wants
    //maybe child is 18 and doesn't need to be sensored by its parent
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
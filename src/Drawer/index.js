import React, { Component } from 'react';
import DrawArea from './DrawArea';
import ToolBox from './ToolBox';

class Drawer extends Component {
  handleToolSelect(name){
    console.log(name)
  }

  render() {
    return (
      <>
        <ToolBox onSelect={this.handleToolSelect}/>
        <DrawArea />
      </>
    );
  }
}

export default Drawer;
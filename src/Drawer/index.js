import React, { Component } from 'react';
import DrawArea from './DrawArea';
import ToolBox from './ToolBox';

class Drawer extends Component {
  render() {
    return (
      <>
        <ToolBox />
        <DrawArea />
      </>
    );
  }
}

export default Drawer;
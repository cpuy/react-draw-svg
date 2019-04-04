import React, { Component } from 'react';
import DrawArea from './DrawArea';
import ToolBox from './ToolBox';
import tools from './tools';

class Drawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tool: tools.stylo
    };

    this.handleToolSelect = this.handleToolSelect.bind(this);
  }

  handleToolSelect(name) {
    this.setState({ tool: tools[name] });
    console.log('selected tool: ', name)
  }

  render() {
    return (
      <>
        <ToolBox onSelect={this.handleToolSelect}/>
        <DrawArea tool={this.state.tool}/>
      </>
    );
  }
}

export default Drawer;
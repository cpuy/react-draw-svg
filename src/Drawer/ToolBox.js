import React, { Component } from 'react';
import tools from './tools';


const Tool = ({ name, tool }) => <div>{name}</div>;


class ToolBox extends Component {
  render() {
    return (
      <div className="ToolBox">
        {Object.keys(tools).map(name => <Tool key={name} name={name}/>)}
      </div>
    );
  }
}

export default ToolBox;
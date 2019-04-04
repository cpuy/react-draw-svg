import React, { Component } from 'react';
import tools from './tools';


const Tool = ({ name, onSelect }) => <div onClick={() => onSelect(name)}>{name}</div>;


class ToolBox extends Component {
  render() {
    return (
      <div className="ToolBox">
        {Object.keys(tools).map(name => <Tool key={name} name={name} onSelect={this.props.onSelect}/>)}
      </div>
    );
  }
}

export default ToolBox;
import React, { Component } from 'react';
import tools from './tools';


const Tool = ({ name, onSelect, selected }) => <div onClick={() => onSelect(name)} className={selected.name === name ? 'setected' : ''}>{name}</div>;


class ToolBox extends Component {
  render() {
    return (
      <div className="ToolBox">
        {Object.keys(tools).map(name => <Tool key={name} name={name} onSelect={this.props.onSelect} selected={this.props.selected}/>)}
      </div>
    );
  }
}

export default ToolBox;
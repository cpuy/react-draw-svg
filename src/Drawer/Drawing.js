import React from 'react';
import tools from './tools';

/**
 * abstract the SVG logic away
 * receive the points to draw as props
 *  for every line, render the individual lines using DrawingLine
 */
function Drawing({ lines }) {

  return (
    <svg className="drawing">
      {
        Object.keys(tools).flatMap(name => {
        const Renderer = tools[name].drawingComponent;
        return lines[tools[name].stateSelector].map((line, index) => (
          <Renderer key={index} line={line}/>
        ))})
      }
    </svg>
  );
}

export default Drawing;
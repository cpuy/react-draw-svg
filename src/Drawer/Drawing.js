import React from 'react';
import DrawingPath from './DrawingPath';
import DrawingLine from './DrawingLine';

/**
 * abstract the SVG logic away
 * receive the points to draw as props
 *  for every line, render the individual lines using DrawingLine
 */
function Drawing({ lines }) {
  return (
    <svg className="drawing">
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}

export default Drawing;
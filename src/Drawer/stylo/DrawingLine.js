import React from 'react';

function DrawingLine({ line }) {
  return <line x1={line.first().get('x')}
               y1={line.first().get('y')}
               x2={line.last().get('x')}
               y2={line.last().get('y')}
               stroke="blue"
               strokeWidth={3}
  />;
}

export default DrawingLine;
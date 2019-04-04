import React from 'react';

function DrawingLine({ line }) {
  const pathData = "M " +
    line
      .map(p => {
        return `${p.get('x')} ${p.get('y')}`;
      })
      .join(" L ");

  return <line x1={line.first().get('x')} y1={line.first().get('y')} x2={line.last().get('x')} y2={line.last().get('y')} stroke="black" stroke-width="2"/>;
}

export default DrawingLine;
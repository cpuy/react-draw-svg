import React from 'react';

function DrawingPath({ line }) {
  const pathData = "M " +
    line
      .map(p => {
        return `${p.get('x')} ${p.get('y')}`;
      })
      .join(" L ");

  return <path
    className="path"
    d={pathData}
    strokeWidth={3}
  />;
}

export default DrawingPath;
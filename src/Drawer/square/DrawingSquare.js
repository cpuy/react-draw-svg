import React, { Component } from 'react';

class DrawingSquare extends Component {
  render() {

    const {line} = this.props;

    const width = Math.abs(line.first().get('x') - line.last().get('x'));
    const height = Math.abs(line.first().get('y') - line.last().get('y'))
    return (
      <rect x={line.first().get('x')} y={line.first().get('y')} width={width} height={height} />
    );
  }
}

export default DrawingSquare;
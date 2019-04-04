import DrawingPath from './DrawingPath';
import DrawingLine from './DrawingLine';

export default {
  stylo: {
    stateSelector: 'path',
    drawingComponent: DrawingPath
  },
  line: {
    stateSelector: 'line',
    drawingComponent: DrawingLine
  }
};
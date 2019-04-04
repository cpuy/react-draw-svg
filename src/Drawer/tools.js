import DrawingPath from './DrawingPath';
import DrawingLine from './DrawingLine';

export default {
  stylo: {
    stateSelector: 'paths',
    drawingComponent: DrawingPath
  },
  line: {
    stateSelector: 'lines',
    drawingComponent: DrawingLine
  }
};
import DrawingPath from './path/DrawingPath';
import DrawingLine from './stylo/DrawingLine';

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
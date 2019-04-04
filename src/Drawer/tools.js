import DrawingPath from './path/DrawingPath';
import DrawingLine from './stylo/DrawingLine';
import DrawingSquare from './square/DrawingSquare';

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






// square: {
//   stateSelector: 'squares',
//     drawingComponent: DrawingSquare
// }
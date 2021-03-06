import React from 'react';
import Immutable from 'immutable';
import Drawing from './Drawing';
import tools from './tools';

/**
 * Its main purpose is to handle mouse events
 */
export default class DrawArea extends React.Component {
   constructor() {
     super();

     this.state = {
       isDrawing: false
     };

     // init a list for each tools
     Object.keys(tools).forEach((name) => this.state[tools[name].stateSelector] = new Immutable.List());

     this.handleMouseDown = this.handleMouseDown.bind(this);
     this.handleMouseMove = this.handleMouseMove.bind(this);
     this.handleMouseUp = this.handleMouseUp.bind(this);
   }

   componentDidMount() {
     document.addEventListener("mouseup", this.handleMouseUp);
   }

   componentWillUnmount() {
     document.removeEventListener("mouseup", this.handleMouseUp);
   }

   handleMouseDown(mouseEvent) {
     if (mouseEvent.button !== 0) {
       return;
     }

     const point = this.relativeCoordinatesForEvent(mouseEvent);

     this.setState(prevState => ({
       [this.props.tool.stateSelector]: prevState[this.props.tool.stateSelector].push(new Immutable.List([point])),
       isDrawing: true
     }));
   }

   handleMouseMove(mouseEvent) {
     if (!this.state.isDrawing) {
       return;
     }

     const point = this.relativeCoordinatesForEvent(mouseEvent);

     this.setState(prevState =>  ({
       [this.props.tool.stateSelector]: prevState[this.props.tool.stateSelector].updateIn([prevState[this.props.tool.stateSelector].size - 1], line => line.push(point))
     }));
   }

   handleMouseUp() {
     this.setState({ isDrawing: false });
   }

   relativeCoordinatesForEvent(mouseEvent) {
     const boundingRect = this.refs.drawArea.getBoundingClientRect();
     return new Immutable.Map({
       x: mouseEvent.clientX - boundingRect.left,
       y: mouseEvent.clientY - boundingRect.top,
     });
   }


   render() {
     console.log(this.state)
     return (
       <div
         className="drawArea"
         ref="drawArea"
         onMouseDown={this.handleMouseDown}
         onMouseMove={this.handleMouseMove}
       >
         <Drawing lines={this.state} />
       </div>
     );
   }
 }
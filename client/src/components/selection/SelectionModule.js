import Draggable from 'react-draggable';
import React from 'react';
import Sandbox from '../Sandbox';

class SelectionModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: props.display,
      module: props.module,
    };
  }

  Drop(event) {
    document.elementsFromPoint(event.pageX, event.pageY).forEach((value) => {
      if (value.className === "sandbox")
        Sandbox.instance.addModule(this.state.module());
    });
    this.setState({ controlledPosition: { x: 0, y: 0 } });
  }

  drag(event) {
  }

  render() {
    return (
      <Draggable
        position={this.state.controlledPosition}
        onStop={(event) => this.Drop(event)}
        onDrag={(event) => this.drag(event)}>
        <div className='selection_element'>
          {this.state.display}
        </div>
      </Draggable >
    );
  }
}

export default SelectionModule;
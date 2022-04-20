import React, { Component } from 'react';
import Console from '../Console';
import Edition from '../Edition';

class SandboxModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      module: props.module
    }
  }

  callback = (module) => {
    this.setState({ module: module });
  }

  onClick() {
    Edition.instance.setSelectedModule(this.state.module, this.callback);
    Console.instance.setSelectedModule(this.state.module);
  }

  render() {
    return (
      <button className='sandbox_element'
        onClick={() => { this.onClick() }}>
        {this.state.module.display()}
      </button>
    );
  }
}

export default SandboxModule;
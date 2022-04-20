import React, { Component } from 'react';
import SandboxModule from './sandbox/SandboxModule';

class Sandbox extends Component {
  static instance;

  constructor(props) {
    super(props);
    Sandbox.instance = this;
    this.state = { modules: [] };
  }

  addModule(module) {
    var tmp = this.state.modules;
    tmp.push(module)
    this.setState({ modules: tmp });
  }

  render() {
    return (
      <div className='sandbox'>
        {this.state.modules.map((module) => <SandboxModule module={module} />)}
      </div>
    );
  }
}

export default Sandbox;
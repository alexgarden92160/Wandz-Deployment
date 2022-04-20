import React, { Component } from 'react';

class Edition extends Component {
  static instance;

  constructor(props) {
    super(props);
    Edition.instance = this;
    this.state = { module: { text: "" } };
  }

  setSelectedModule(module, callback) {
    this.setState({ module: module });
    this.setState({ callback: callback });
  }

  render() {
    return (
      <div className='edit'>
        <input type="text"
          value={this.state.module.text}
          onChange={(e) => {
            var tmp = this.state.module;
            tmp.text = e.target.value;
            this.setState({ module: tmp });
            this.state.callback(this.state.module);
          }} />
      </div >
    );
  }
}

export default Edition;
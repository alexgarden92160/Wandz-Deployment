import ModuleText from '../modules/ModuleText'
import SelectionModule from './SelectionModule';
import React, { Component } from 'react';

class SelectionText extends Component {
  module = () => {
    return new ModuleText();
  }

  render() {
    return (
      <SelectionModule
        display={<div className='selection_text'>Text</div>}
        module={this.module} />
    );
  }
}

export default SelectionText;
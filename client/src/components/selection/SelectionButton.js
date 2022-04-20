import ModuleButton from '../modules/ModuleButton'
import SelectionModule from './SelectionModule';
import React, { Component } from 'react';

class SelectionButton extends Component {
  module = () => {
    return new ModuleButton();
  }

  render() {
    return (
      <SelectionModule
        display={<div className='selection_button'>Button</div>}
        module={this.module} />
    );
  }
}

export default SelectionButton;
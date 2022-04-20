import ModuleImage from '../modules/ModuleImage'
import SelectionModule from './SelectionModule';
import React, { Component } from 'react';

class SelectionImage extends Component {
  module = () => {
    return new ModuleImage();
  }

  render() {
    return (
      <SelectionModule
        display={<div className='selection_button'>Image</div>}
        module={this.module} />
    );
  }
}

export default SelectionImage;
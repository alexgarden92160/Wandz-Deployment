import React from 'react';
import SelectionButton from './selection/SelectionButton';
import SelectionImage from './selection/SelectionImage';
import SelectionText from './selection/SelectionText';

const Selection = (props) => {
  return (
    <div className='selection'>
      <SelectionButton />
      <SelectionText />
      <SelectionImage />
    </div>
  );
};

export default Selection;
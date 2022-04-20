import React from 'react';
import Console from '../components/Console';
import Edition from '../components/Edition';
import Sandbox from '../components/Sandbox';
import Selection from '../components/Selection';

class Workspace extends React.Component {
  render() {
    return (
      <body>
        <div>
          <header className="header">
            <h1 style={{ color: 'white' }}>
              WANDZ
            </h1>
          </header>
        </div>
        < div className='workspace' >
          <Selection />
          <Sandbox />
          <Edition />
          <Console obj="Button" />
        </div >
      </body>
    );
  }

}

export default Workspace;
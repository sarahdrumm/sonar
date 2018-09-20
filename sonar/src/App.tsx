import * as React from 'react';
import './App.css';
import Buttons from './Button';
import Map from './Map';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Buttons/>
        <Map/>
      </div>
    );
  }
}

export default App;

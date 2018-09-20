import * as React from 'react';
import AddClickModal from './AddClickModal';
import './App.css';
import Buttons from './Button';
import Map from './Map';
import './Map.css'

class App extends React.Component {
  public render() {
    return (
      <div>
       <Buttons/>
       <Map/>
        <AddClickModal/>
      </div>
    );
  }
}

export default App;

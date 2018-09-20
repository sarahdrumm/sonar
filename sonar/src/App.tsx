import * as React from 'react';
// import AddClickModal from './AddClickModal';
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
      // <AddClickModal/>
    );
  }
}

export default App;

import * as React from 'react';
import AddClickModal from './AddClickModal';
import './App.css';
import Buttons from './Button';
import Map from './Map';
import ProfileModal from './ProfileModal';

class App extends React.Component {
  public render() {
    return (
      <div>
       <Buttons/>
       <Map/>
       <AddClickModal/>
       <ProfileModal/>
      </div>
    );
  }
}

export default App;

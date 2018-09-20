import * as React from 'react';
import AddClickModal from './AddClickModal';
import './App.css';
import Buttons from './Button';
import ClickModal from './ClickModal';
import Map from './Map';
import ProfileModal from './ProfileModal';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Buttons />
        <Map />
        <AddClickModal />
        <ProfileModal />
        <ClickModal />
      </div>
    );
  }
}

export default App;

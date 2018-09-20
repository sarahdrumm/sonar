import * as React from 'react';
import AddClickModal from './AddClickModal';
import './App.css';
import Buttons from './Button';
import ClickModal from './ClickModal';
import Map from './Map';
import './Map.css'
import ProfileModal from './ProfileModal';

class Home extends React.Component {
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

export default Home;

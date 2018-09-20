import * as React from 'react';
import AddClickModal from './AddClickModal';
import './App.css';
import Buttons from './Button';
import ClickModal from './ClickModal';
import Map from './Map';
<<<<<<< HEAD
import './Map.css'
=======
import ProfileModal from './ProfileModal';
>>>>>>> 1faca7d30a338eb4a89d57e5bba7e2c1bec81e70

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

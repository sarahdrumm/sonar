import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './Home';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/home" component={Home} />
    </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

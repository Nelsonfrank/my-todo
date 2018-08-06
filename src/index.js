import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Containers from './components/Containers';

ReactDOM.render(<Containers />, document.getElementById("root"));
registerServiceWorker();

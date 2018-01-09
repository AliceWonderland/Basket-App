import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { basketApp } from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(basketApp);

ReactDOM.render(
  <Provider store={store}>
	  <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



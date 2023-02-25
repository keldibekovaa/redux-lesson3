import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './components/Counter';
import {createStore} from "redux";
import {Provider} from "react-redux";


const store = createStore(Counter)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux'; // store u tanıtmaya yarar
import store from './redux/store';

// state için bir store muzun var ve bunu app e tanıttık prpvider ile sarmalayarak
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);

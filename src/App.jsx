import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <div>
              <Routes />
            </div>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Downloader from './components/Downloader';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));


class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Downloader />
        </Provider>
      </>
    )
  }
}

export default App;

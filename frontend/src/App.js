import React from 'react';
import './components/Layouts/styling.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './components/routes';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
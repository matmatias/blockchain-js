import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './ducks/store';

const MainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<MainApp />, document.getElementById("root"));

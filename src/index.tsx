// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store.getState());
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);

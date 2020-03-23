// import React from 'react';
// import ReactDom from 'react-dom';

// ReactDom.render(
// // `<h1>DUC VI DAI - DEP ZAI</h1>`
// `<div>sdsdsdsdsdsd</div>`
// ,
//     document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "jquery/dist/jquery.min.js";
import 'jquery';
import "popper.js/dist/umd/popper.min.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     appReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
// );

const store = createStore(
    appReducers,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
// registerServiceWorker();

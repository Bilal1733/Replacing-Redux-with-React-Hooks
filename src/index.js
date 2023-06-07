import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
 
import {legacy_createStore as createStore, combineReducers} from 'redux';
 
import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
import { Provider } from 'react-redux';
 
const rootReducer = combineReducers({
    shop: productReducer,
});
 
const store = createStore(rootReducer);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
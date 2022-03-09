import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./reducers/reducer.js";
import reduxThunk from 'redux-thunk';

initState = {};
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COPOSE__ || compose;
const store = createStore(reducer, initState, enhancer(applyMiddleware(reduxThunk)));

export default store;
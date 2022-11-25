import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? compose(
              applyMiddleware(thunk),
              window.__REDUX_DEVTOOLS_EXTENSION__(),
          )
        : applyMiddleware(thunk),
);

export default store;

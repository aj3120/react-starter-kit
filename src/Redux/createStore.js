import reduxlogger from 'redux-logger';
import createRootReducer from './combineReducers'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        reduxlogger// ... other middlewares ...
      ),
    ),
  )

  return store
}
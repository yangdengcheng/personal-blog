import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import { appReducer } from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = () => {
    const store = createStore(
        appReducer,
        composeEnhancers(
            applyMiddleware(thunk, createLogger)
        )
    )
    return store
}

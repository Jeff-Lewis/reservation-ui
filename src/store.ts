import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { initializeCurrentLocation } from 'redux-little-router'

import router, { Router } from './router'
import { setupSagas } from './sagas'

import reservations, { State as ReservationsState } from './reservations/reducer'

const sagaMiddleware = createSagaMiddleware()

export interface AppState {
  reservations: ReservationsState
  router: Router
}

const store = createStore(
  combineReducers({
    reservations,
    router: router.reducer
  }),
  {},
  compose(
    router.enhancer,
    applyMiddleware(sagaMiddleware),
    applyMiddleware(router.middleware),
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
  )
)

const initialLocation = (store.getState() as AppState).router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation as any))
}

setupSagas(sagaMiddleware)

export default store

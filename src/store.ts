import { createStore, combineReducers } from 'redux'

import reservations from './reservations/reducer'

export default createStore(
  combineReducers({
    reservations
  }),
  {},
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
)

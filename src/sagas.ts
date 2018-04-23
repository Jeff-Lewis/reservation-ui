// Sagas
import ReservationsSaga from './reservations/saga'
import { SagaMiddleware } from 'redux-saga'

export const setupSagas = (mw: SagaMiddleware<object>) => {
  mw.run(ReservationsSaga)
}

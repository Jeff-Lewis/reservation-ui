import { Reservation } from '../types/reservation'
import ReservationsTypes, { ActionTypeNames } from './actions'

export interface State {
  creating: boolean
  data: Reservation[]
  loading: boolean
}

const initialState: State = {
  creating: false,
  data: [],
  loading: false
}

export default (state: State = initialState, action: ReservationsTypes): State => {
  switch (action.type) {
    case ActionTypeNames.LOAD:
      return {
        creating: false,
        data: [],
        loading: true
      }
    case ActionTypeNames.ERROR:
      alert(`Unable to load reservations: ${action.payload}`)
      return {
        creating: false,
        data: [],
        loading: false
      }
    case ActionTypeNames.SUCCESS:
      return {
        creating: false,
        data: action.payload,
        loading: false
      }
    default:
      return state
  }
}

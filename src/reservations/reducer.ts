import { Reservation } from '../types/reservation'

export interface State {
  data: Reservation[]
  loading: boolean
}

const initialState: State = {
  data: [],
  loading: false
}

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    default:
      return state
  }
}

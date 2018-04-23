import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import ReservationsActions, { createReservation } from '../actions'
import { AppState } from '../../store'
import { Reservation } from '../../types/reservation'
import ReservationNewForm from './components/form/component'

export interface Props {
  creating: boolean
  createReservation (data: Reservation): void
}

export class ReservationsCreate extends React.Component<Props, object> {
  handleNewSubmit = (data: any) => {
    this.props.createReservation(data)
  }

  render () {
    return (
      <div className="card page-card">
        <div className="card-header">
          Create Reservation
        </div>
        <ReservationNewForm creating={this.props.creating} onSubmit={this.handleNewSubmit}/>
      </div>
    )
  }
}

const dispatchToProps = (dispatch: Dispatch<ReservationsActions>) => ({
  createReservation: (data: Reservation) => {
    dispatch(createReservation(data))
  }
})

const stateToProps = (state: AppState) => ({
  creating: state.reservations.creating
})

export default connect(stateToProps, dispatchToProps)(ReservationsCreate)

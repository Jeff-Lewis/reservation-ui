import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'redux-little-router'

import './container.css'

import ReservationsActions, { loadReservations } from '../actions'
import { AppState } from '../../store'
import { Reservation } from '../../types/reservation'

import ReservationRow from './components/reservation/component'

export interface Props {
  data: Reservation[]
  loading: boolean
  loadReservations (): void
}

export class ReservationsIndex extends React.Component<Props, object> {
  componentWillMount () {
    this.props.loadReservations()
  }

  render () {
    let loading = (this.props.loading) ? (<div className="text-center"><i className="fa fa-spinner fa-spin"/></div>) : null

    const reservations = this.props.data.map((reservation: Reservation) => (
      <ReservationRow reservation={reservation} key={reservation.id}/>
    ))

    return (
      <div className="card page-card">
        <form>
          <div className="card-header">
            Current Reservations
          </div>
          <div className="card-body reservations mb-4">
            {loading}
            <div className={'list-group'}>
              {reservations.reverse()}
            </div>
          </div>
          <div className="card-footer text-center">
            <Link
              href={'/new'}
              className="btn btn-block btn-fill btn-info btn-wd"
            >
              Create Reservation
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

const dispatchToProps = (dispatch: Dispatch<ReservationsActions>) => ({
  loadReservations: () => {
    dispatch(loadReservations())
  }
})

const stateToProps = (state: AppState) => ({
  data: state.reservations.data,
  loading: state.reservations.loading
})

export default connect(stateToProps, dispatchToProps)(ReservationsIndex)

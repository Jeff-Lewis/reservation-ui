import * as React from 'react'
import * as moment from 'moment'

import 'react-dates/lib/css/_datepicker.css'

import { DateRangePicker, FocusedInputShape } from 'react-dates'
import { Link } from 'redux-little-router'
import { Reservation } from '../../../../types/reservation'

export interface Props {
  creating: boolean
  onSubmit (data: Reservation): void
}

export interface State {
  arrivalDate: moment.Moment
  departureDate: moment.Moment
  hotelName: string
  name: string
  focusedInput: FocusedInputShape
}

export interface DatesInterface { startDate: moment.Moment, endDate: moment.Moment }

export class ReservationNewForm extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      arrivalDate: moment(),
      departureDate: moment().add(2, 'day'),
      hotelName: null,
      name: null,
      focusedInput: null
    }
  }

  updateDates = (dates: DatesInterface) => {
    this.setState({
      arrivalDate: dates.startDate,
      departureDate: dates.endDate
    })
  }

  validateAndSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    this.props.onSubmit({
      arrivalDate: this.state.arrivalDate.unix(),
      departureDate: this.state.departureDate.unix(),
      hotelName: this.state.hotelName,
      name: this.state.name
    })
  }

  render () {
    return (
      <form onSubmit={this.validateAndSubmit}>
        <div className="card-body">
          <div className="form-group">
            <label>Arrival / Departure</label>
            <DateRangePicker
              orientation={'vertical'}
              numberOfMonths={1}
              startDate={this.state.arrivalDate}
              startDateId="arrivalDate"
              endDate={this.state.departureDate}
              endDateId="endDate"
              onDatesChange={(dates: DatesInterface) => this.updateDates(dates)}
              required={true}
              minimumNights={1}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
          </div>
          <div className="form-group">
            <label>Hotel Name</label>
            <input
              type="text"
              name="hotelName"
              required={true}
              onChange={(evt) => this.setState({ hotelName: evt.target.value })}
              className="form-control"
            />
          </div>
          <div className="form-group mb-0">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              required={true}
              onChange={(evt) => this.setState({ name: evt.target.value })}
              className="form-control"
            />
          </div>
        </div>
        <div className="card-footer text-center">
          <button
            disabled={this.props.creating}
            type="submit"
            className="btn btn-block btn-fill btn-info btn-wd"
          >
            Create Reservation
          </button>
          <Link
            href={'/'}
            className="btn btn-block btn-fill btn-danger btn-wd"
          >
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}

export default ReservationNewForm

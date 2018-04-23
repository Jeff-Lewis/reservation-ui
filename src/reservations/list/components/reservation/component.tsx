import * as React from 'react'
import * as moment from 'moment'

import { Reservation } from '../../../../types/reservation'

interface Props {
  reservation: Reservation
}

export default ({ reservation }: Props) => {
  const dateFormat = 'MM-DD-YY'
  const arrival = moment.unix(reservation.arrivalDate).format(dateFormat)
  const departure = moment.unix(reservation.departureDate).format(dateFormat)
  const isPast = moment.unix(reservation.departureDate).isBefore(moment(), 'day')

  return (
    <div className={`list-group-item flex-column align-items-start reservation-row ${isPast ? 'disabled' : ''}`}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{reservation.name}</h5>
      </div>
      <p className="mb-1">
        Will arrive on <strong>{arrival}</strong> at <strong>{reservation.hotelName}</strong> and depart on <strong>{departure}</strong>
      </p>
    </div>
  )
}

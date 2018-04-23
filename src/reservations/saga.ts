import { put, takeLatest, call } from 'redux-saga/effects'
import {
  ActionTypeNames,
  CreateReservation, createReservationFailed, CreateReservationSuccess, createReservationSuccess,
  LoadReservations,
  loadReservationsFailed,
  loadReservationsSuccess
} from './actions'
import { push } from 'redux-little-router'
import client from '../client'
import gql from 'graphql-tag'

function * createReservation (action: CreateReservation) {
  try {
    yield call(client.mutate, {
      mutation: gql`
        mutation CreateReservation($arrivalDate: Int!, $departureDate: Int!, $hotelName: String!, $name: String!) {
          createReservation(data: {
            arrivalDate: $arrivalDate
            departureDate: $departureDate
            hotelName: $hotelName
            name: $name
          }) {
            id
          }
        }
      `,
      variables: action.payload
    })
    yield put(createReservationSuccess())
  } catch (e) {
    yield put(createReservationFailed(e.message))
  }
}

function * fetchReservations (action: LoadReservations) {
  try {
    const result = yield call(client.query, {
      query: gql`
        {
          reservations {
            arrivalDate
            departureDate
            hotelName
            id
            name
          }
        }
      `,
      fetchPolicy: 'network-only'
    })
    yield put(loadReservationsSuccess(result.data.reservations))
  } catch (e) {
    yield put(loadReservationsFailed(e.message))
  }
}

function * redirectToReservations (action: CreateReservationSuccess) {
  yield put(push('/', { updateRoutes: true }))
}

function * reservationsSaga () {
  yield takeLatest(ActionTypeNames.CREATE, createReservation)
  yield takeLatest(ActionTypeNames.CREATE_SUCCESS, redirectToReservations)
  yield takeLatest(ActionTypeNames.LOAD, fetchReservations)
}

export default reservationsSaga

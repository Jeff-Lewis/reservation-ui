import { Reservation } from '../types/reservation'

export enum ActionTypeNames {
  LOAD = 'LOAD_RESERVATIONS',
  SUCCESS = 'LOAD_RESERVATIONS_SUCCESS',
  ERROR = 'LOAD_RESERVATIONS_FAILED',
  CREATE = 'CREATE_RESERVATION',
  CREATE_FAILED = 'CREATE_RESERVATION_FAILED',
  CREATE_SUCCESS = 'CREATE_RESERVATION_SUCCESS'
}

export interface LoadReservations { type: ActionTypeNames.LOAD }
export const loadReservations = (): LoadReservations => ({
  type: ActionTypeNames.LOAD
})

export interface LoadReservationsSuccess { type: ActionTypeNames.SUCCESS, payload: Reservation[] }
export const loadReservationsSuccess = (data: Reservation[]): LoadReservationsSuccess => ({
  type: ActionTypeNames.SUCCESS,
  payload: data
})

export interface LoadReservationsFailed { type: ActionTypeNames.ERROR, payload: string }
export const loadReservationsFailed = (error: string): LoadReservationsFailed => ({
  type: ActionTypeNames.ERROR,
  payload: error
})

export interface CreateReservation { type: ActionTypeNames.CREATE, payload: Reservation }
export const createReservation = (data: Reservation): CreateReservation => ({
  type: ActionTypeNames.CREATE,
  payload: data
})

export interface CreateReservationSuccess { type: ActionTypeNames.CREATE_SUCCESS }
export const createReservationSuccess = (): CreateReservationSuccess => ({
  type: ActionTypeNames.CREATE_SUCCESS
})

export interface CreateReservationFailed { type: ActionTypeNames.CREATE_FAILED, payload: string }
export const createReservationFailed = (error: string): CreateReservationFailed => ({
  type: ActionTypeNames.CREATE_FAILED,
  payload: error
})

type ActionTypes = LoadReservations
  | LoadReservationsSuccess
  | LoadReservationsFailed
  | CreateReservation
  | CreateReservationFailed
  | CreateReservationSuccess

export default ActionTypes

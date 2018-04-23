import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'react-dates/initialize'
import { Provider } from 'react-redux'
import { Fragment } from 'redux-little-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import './index.css'

import ReservationsCreate from './reservations/create/container'
import ReservationsList from './reservations/list/container'

import registerServiceWorker from './registerServiceWorker'
import Store from './store'

ReactDOM.render(
  <Provider store={Store}>
    <div className="main-container">
      <video autoPlay={true} loop={true} muted={true} className="bg-video">
        <source src="/videos/bg.mp4" type="video/mp4"/>
      </video>
      <div className="main-content">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 text-center">
              <Fragment forRoute={'/'} withConditions={location => location.pathname === '/'}>
                <ReservationsList/>
              </Fragment>
              <Fragment forRoute={'/new'}>
                <ReservationsCreate/>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()

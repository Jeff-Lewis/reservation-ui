import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ReservationsList from './container'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ReservationsList/>, div)
  ReactDOM.unmountComponentAtNode(div)
})

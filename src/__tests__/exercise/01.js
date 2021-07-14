// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const root = document.createElement('div')
  document.body.append(root)
  ReactDOM.render(<Counter />, root)
  const [decrement, increment] = root.querySelectorAll('button')
  const message = root.firstChild.querySelector('div')
  expect(message.textContent).toBe('Current count: 0')
  increment.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0,
    }),
  )
  expect(message.textContent).toBe('Current count: 1')
  decrement.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0,
    }),
  )

  expect(message.textContent).toBe('Current count: 0')
  root.remove()
})

/* eslint no-unused-vars:0 */

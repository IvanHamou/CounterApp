import { useState, useEffect } from 'react'
import Counter from './components/Counter'
import SetCounter from './components/SetCounter'

export default function App() {

  return (
    <div>
      <h1>Simple Counter App</h1>
      <SetCounter/>
    </div>
  )
}
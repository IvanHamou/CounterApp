import { useState, useEffect } from 'react'
import Counter from './components/Counter'
import SetCounter from './components/SetCounter'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  console.log(count);
  

  return (
    <div>
      <h1>Simple Counter App</h1>
      <Counter/>
      <SetCounter setCount={setCount}/>
    </div>
  )
}
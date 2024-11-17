import { useState, useEffect } from 'react'
import Counter from './components/Counter'
import SetCounter from './components/SetCounter'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  const increment = () => setCount(count + 1)
  

  return (
    <div>
      <h1>Simple Counter App</h1>
      <Counter count={count} onIncrement={increment} />
      <SetCounter setCount={setCount}/>
    </div>
  )
}
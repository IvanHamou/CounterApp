import { useState } from 'react'

export default function SetCounter({ setCount }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCount = Number(inputValue)
    
    if (newCount !== 0 && !newCount) {
      alert('Please enter a valid number')
    } else {
      setCount(newCount)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Set counter value"
      />
      <button type="submit">
        Set Count
      </button>
    </form>
  )
}
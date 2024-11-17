export default function SetCounter({ setCount }) {


  return (
    <form>
      <input
        type="text"
        placeholder="Set counter value"
      />
      <button type="submit">
        Set Count
      </button>
    </form>
  )
}
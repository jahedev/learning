import React from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/counter"

function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>The count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App

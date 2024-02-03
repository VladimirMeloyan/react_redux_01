import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { plus } from './features/counter/counterSlice'
import Users from './components/users/Users'
import { useEffect } from 'react'
import { getUsersJSON } from './features/users/usersSlice'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getUsersJSON())
  }, [])

  return (
    <div className='App'>
      <h1>React redux</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispach(plus())}>add count</button>
      <hr />
      <Users/>
    </div>
  )
}

export default App

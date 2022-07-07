import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react"
import Title from "./Title";
import ProblemTable from "./ProblemTable"
import ShowProblem from "./ShowProblem"
import Leaderboard from "./Leaderboard"
import Login from "./Login"
import Register from "./Register"
// import StoreContext from "../store";
// import useStore from "../reducer";


function App() {

  const [problems, setProblems] = useState([])
  const [users, setUsers] = useState([ ])



  useEffect(() => {
    async function getProblems() {
      const res = await fetch('http://localhost:3201/api/v1/problems')
      setProblems(await res.json()) //updates the state and triggers rerender of the component
    }
    getProblems()
  }, [])


  async function addUser(username, password) {
    const newUser = { username, password}
    const res = await fetch('http://localhost:3201/api/v1/users', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
  const returnedUser = await res.json()
  setUsers([...users, returnedUser])
  return returnedUser._id
}




  return (
    <BrowserRouter>
      <Title />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<ProblemTable problems={problems} />} />
        <Route path="problem/:eulerId" element={<ShowProblem problems={problems} />} />
        <Route path="problem/:eulerId/leaderboard" element={<Leaderboard problems={problems} users={users} />} />
        <Route path="*" element={<h4>Page not found</h4>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
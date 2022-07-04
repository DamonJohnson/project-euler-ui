import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import Title from "./Title";
import ProblemTable from "./ProblemTable"
import ShowProblem from "./ShowProblem"
import Leaderboard from "./Leaderboard"


function App() {
  const [problems, setProblems] = useState([
    {
      id: 1,
      description: "Multiples of 3 or 5",
      question:
        "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. the sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.",
      solution: 233168,
    },
    {
      id: 3,
      description: "Largest prime factor",
      question:
        "the prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?",
      solution: 6857,
    },
  ])

  const [users, setUsers] = useState([
    {
      id: 1,
      userName: 'Adam',
      password: '12345'
    },
    {
      id: 2,
      userName: 'Ben',
      password: '12345'
    },
    {
      id: 3,
      userName: 'Chris',
      password: '12345'
    },
    {
      id: 1,
      userName: 'Dave',
      password: '12345'
    }
  ])
  
  return (
    <BrowserRouter>
      <Title />
      <Routes>
        <Route path="/" element={<ProblemTable problems={problems} />} />
        <Route path="problem/:id" element={<ShowProblem problems={problems} />}  />
        <Route path="problem/:id/leaderboard" element={<Leaderboard problems={problems} users={users} />} />
        <Route path = "*" element = {<h4>Page not found</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
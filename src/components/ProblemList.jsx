import { Link } from "react-router-dom"
import React, { useState } from "react"

function ProblemList() {
  const [problems, setProblems] = useState([
    {
      id: 1,
      description: "Multiples of 3 of 5",
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

  return (
    <>
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Problem Number
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Description
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Leaderboard
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {problems.map((problem, index) => (
                    <tr className="whitespace-nowrap" key={index}>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {problem.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {problem.description}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          href="#"
                          className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                        >
                          <Link to={`/problem/${problem.id}/leaderboard`}>
                            View
                          </Link>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProblemList

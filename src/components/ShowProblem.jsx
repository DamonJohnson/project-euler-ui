import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react"

function ShowProblem({ problems }) {
  const { id } = useParams()
  const [submission, setSubmission] = useState("")
  const problem = problems.find(problem => problem.id === parseInt(id))

  return (
    <>
      
      <div className="container mx-auto px-4 sm:px-6 xl:px-12">
        <h2 className="text-2xl pb-4 font-bold text-center">Problem {problem.id}: {problem.description}</h2>
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <p className="max-w-screen-md text-lg text-gray-600">{problem.question}</p>
          <form className="flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input required className="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={submission} onChange={e => setSubmission(e.target.value)} />
            <button type="submit" className="w-full rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max">Submit</button>
          </form>
          <span>
            <p className="text-blue-500 underline"><Link className='pr-6' to='/'>Problem list</Link><Link to='./leaderboard'>Leaderboard</Link></p>
          </span>
        </div>
      </div>
    </>
  )
}

export default ShowProblem
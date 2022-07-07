import { Link } from "react-router-dom"

function ProblemTable({problems}) {
  
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
                        {problem.eulerId}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-blue-500 underline">
                          <Link to={`/problem/${problem.eulerId}`}>{problem.description}</Link> 
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          href="#"
                          className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                        >
                          <Link to={`/problem/${problem.eulerId}/leaderboard`}>
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

export default ProblemTable

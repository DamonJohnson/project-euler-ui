
import { useParams, Link } from 'react-router-dom'

function Leaderboard({ problems, users }) {
    const { eulerId } = useParams()
    const problem = problems.find(problem => problem.eulerId == eulerId)

    return (
        <>
            <h1 className="text-2xl font-bold text-center">Leaderboard</h1>
            <h2 className="text-1xl pb-4 font-bold text-center">Problem {problem.eulerId}: {problem.description}</h2>
            <div className="container flex justify-center mx-auto">
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="border-b border-gray-200 shadow">
                            <table>
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Username
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Submission Date + Time
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            # Attempts
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {users.map((user, index) => (
                                        <tr className="whitespace-nowrap" key={index}>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {user.userName}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                22/03/22 1030 UTM +10
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                2
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                        </div>
                        <span>
            <p className="text-blue-500 underline text-center pt-4"><Link className='pr-6' to='/'>Problem list</Link></p>
          </span>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Leaderboard
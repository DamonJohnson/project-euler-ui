import React from 'react'
import { Link } from "react-router-dom";

function Register() {

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 xl:px-12">
                <h2 className="text-2xl pb-4 font-bold text-center">Create an account</h2>
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <form className>
                        <div className='w-80'>
                            <label className="max-w-screen-sm text-lg text-gray-600" for="username">Username:</label>
                            <input name='username' id='username' for='username' required className="w-full rounded-md border bg-gray-50 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <label className="max-w-screen-sm text-lg text-gray-600" for="password">Password:</label>
                            <input name='password' id='password' for='password' required className="w-full rounded-md border bg-gray-50 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <button type="submit" className="w-full rounded-md border border-blue-500 bg-blue-500 mt-5 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max">Register</button>
                    </form>
                    <span>
                        <p className="text-blue-500 underline"><Link to='/login'>Log in</Link></p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Register
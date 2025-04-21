import React from 'react'

const SignIn = () => {
  return (
    <div>
        <h2 className="text-lg font-bold mb-4">Sign In</h2>
        <input className="border w-full mb-3 px-3 py-2 rounded" placeholder="Email" />
        <input className="border w-full mb-3 px-3 py-2 rounded" placeholder="Password" type="password" />
        <button className="bg-[#7C3AED] text-white w-full py-2 rounded">Sign In</button>
    </div>
  )
}

export default SignIn
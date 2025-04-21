import React from 'react'

const SignUp = () => {
  return (
    <div>
        <h2 className="text-lg font-bold mb-4">Sign Up</h2>
        <input className="border w-full mb-3 px-3 py-2 rounded" placeholder="Name" />
        <input className="border w-full mb-3 px-3 py-2 rounded" placeholder="Email" />
        <input className="border w-full mb-3 px-3 py-2 rounded" placeholder="Password" type="password" />
        <button className="bg-[#7C3AED] text-white w-full py-2 rounded">Create Account</button>
    </div>
  )
}

export default SignUp
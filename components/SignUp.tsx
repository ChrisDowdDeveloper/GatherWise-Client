"use client"
import React, { useState } from 'react'
import Image from 'next/image'

type SignUpProps = {
  setAuthMode: (mode: "sign-in" | "sign-up") => void;
}

const SignUp = ({ setAuthMode }: SignUpProps) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
        <Image 
          src="/GatherWiseIcon/GatherWiseIcon.svg"
          width={50}
          height={50}
          alt='GatherWise Icon'
          className="mx-auto"
        />
        <h2 className="text-lg font-bold mb-4 text-center">Sign Up</h2>

        <p className='font-bold text-sm text-gray-900'>Your name</p>
        <input 
          className="border w-full mb-3 px-3 py-2 rounded" 
          required 
          onChange={(e) => setUserName(e.target.value)}
          value={userName || ""}
        />

        <p className='font-bold text-sm text-gray-900'>Email address</p>
        <input 
          className="border w-full mb-3 px-3 py-2 rounded" 
          placeholder="example@email.com" 
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
        />
        <p className='font-bold text-sm text-gray-900'>Password</p>
        <input 
          className="border w-full mb-3 px-3 py-2 rounded" 
          required 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""}
        />

        <button className="bg-[#7C3AED] text-white w-full py-2 rounded">Create Account</button>
        <p className='text-sm mt-3 text-center'>Already a member? <button onClick={() => setAuthMode("sign-in")} className='bg-transparent text-[#7C3AED]'>Log in</button></p>
    
        <p className='mt-10 text-xs text-center'>By signing up, you agree to Terms of Service, Privacy Policy, and Cookie Policy.</p>
    </div>
  )
}

export default SignUp
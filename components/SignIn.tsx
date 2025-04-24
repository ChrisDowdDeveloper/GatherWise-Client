import React, { useState } from 'react'
import Image from 'next/image'
import { signIn } from '@/utils/api';

type SignInProps = {
  setAuthMode: (mode: "sign-in" | "sign-up" | "forgot-password" | null) => void;
}

const SignIn = ({ setAuthMode }: SignInProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async() => {
    try {
      const user = await signIn(email, password);
      localStorage.setItem("userId", user.userId);
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("userName", user.name);
      setAuthMode(null);
    } catch (err: any) {
      console.error(err.message);
    }
  }

  return (
    <div>
        <Image 
          src="/GatherWiseIcon/GatherWiseIcon.svg"
          width={50}
          height={50}
          alt='GatherWise Icon'
          className="mx-auto"
        />
        <h2 className="text-lg font-bold mb-0 text-center text-gray-900">Sign In</h2>
        <p className='text-center mb-4 text-gray-900'>Not a member yet? 
          <button 
            className='bg-transparent text-[#7C3AED] ml-1'
            onClick={() => setAuthMode("sign-up")}>
              Sign up
          </button>
        </p>
        <p className='font-bold text-sm text-gray-900 tracking-wide'>Email</p>
        <input 
          className="border w-full mb-3 px-3 py-2 rounded" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='flex flex-row justify-between'>
          <p className='font-bold text-sm text-gray-900 tracking-wide'>Password</p>
          <button
            type="button"
            onClick={() => setAuthMode("forgot-password")}
            className="text-xs text-[#7C3AED] hover:underline"
          >
            Forgot password?
          </button>
        </div>
        
        <input 
          className="border w-full mb-3 px-3 py-2 rounded" 
          placeholder="Password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-[#7C3AED] text-white w-full py-2 rounded" onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default SignIn
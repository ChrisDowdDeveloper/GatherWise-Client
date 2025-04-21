import React from 'react'
import Image from 'next/image'

type SignInProps = {
  setAuthMode: (mode: "sign-in" | "sign-up") => void;
}

const SignIn = ({ setAuthMode }: SignInProps) => {
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
        <input className="border w-full mb-3 px-3 py-2 rounded" placeholder="Email" />
        <div className='flex flex-row justify-between'>
          <p className='font-bold text-sm text-gray-900 tracking-wide'>Password</p>
          {/*FIXME - Add a link to forgot password*/}
          <p className='text-xs text-[#7C3AED]'>Forgot password?</p>
        </div>
        
        <input className="border w-full mb-3 px-3 py-2 rounded" placeholder="Password" type="password" />
        <button className="bg-[#7C3AED] text-white w-full py-2 rounded">Sign In</button>
    </div>
  )
}

export default SignIn
"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-2">
        <Link href="/" className="flex items-center h-16">
            <Image
                src="/GatherWiseLogo/GatherWiseLogo.svg"
                alt="GatherWise Logo"
                width={130}
                height={150}
                className="object-contain h-full w-auto"
            />
        </Link>

            <div className='flex items-center space-x-5'>
                <a href='/login' className='text-sm uppercase tracking-wider'>Log In</a>
                <button
                    disabled={false}
                    type='button'
                    onClick={() => {}}
                    className='px-3 py-1 bg-[#7C3AED] text-white hover:bg-[#6B21A8] rounded-lg'
                >
                    <span className='text-sm uppercase tracking-wider'>Sign up</span>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
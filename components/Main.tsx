"use client"
import React from 'react'
import { SearchOutline } from 'react-ionicons';

const Main = () => {

  return (
    <div>
      <div>
        <p className='text-2xl text-left'>
          Plan <span className='font-bold text-[#7C3AED]'>Together.</span> <br />
          Connect <span className='font-bold text-[#7C3AED]'>Better.</span>
        </p>

        <div className="flex items-center gap-2">
            <input
            className="border border-gray-300 rounded-md p-2"
            onChange={() => {}}
            />
            <div className="flex">
                <input
                    className="border border-gray-300 rounded-l-md h-10 px-4 text-sm focus:outline-none"
                    placeholder="Search..."
                />

                <button
                    className="bg-[#7C3AED] rounded-r-md h-10 w-10 flex items-center justify-center"
                >
                    <SearchOutline
                    color={'#FFFFFF'}
                    height="20px"
                    width="20px"
                    />
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main

import React from 'react'

const CreateEventPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 gap-8 pb-10">
        <div className="w-100 md:w-[380px] h-72 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 text-center">
            <span className="text-base font-medium">Click to upload</span>
        </div>

        <div className="flex flex-col gap-4 pt-2 items-center md:items-start w-full md:w-auto">
            <div className="w-[220px]">
            <label htmlFor="eventName" className="block text-sm text-gray-600 mb-1">
                Name of Event
            </label>
            <input
                id="eventName"
                type="text"
                name="eventName"
                className="h-9 border border-gray-300 rounded-md px-3 text-sm w-full"
            />
            </div>

            <div className="w-[220px]">
            <label htmlFor="location" className="block text-sm text-gray-600 mb-1">
                Location
            </label>
            <input
                id="location"
                type="text"
                name="location"
                className="h-9 border border-gray-300 rounded-md px-3 text-sm w-full"
            />
            </div>
        </div>
        <div>
            <textarea>Add a description</textarea>
        </div>
    </div>



  )
}

export default CreateEventPage;
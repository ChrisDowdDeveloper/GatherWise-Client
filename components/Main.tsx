"use client"
import { CitySuggestions } from '@/types';
import { fetchCitySuggestions } from '@/utils/api';
import React, { useEffect, useState } from 'react'
import { SearchOutline } from 'react-ionicons';

const Main = () => {
  const [query, setQuery] = useState("");
  const [autocomplete, setAutocomplete] = useState<CitySuggestions[]>([]);
  const [eventName, setEventName] = useState("");
  
  useEffect(() => {
    const getSuggestions = async () => {
      const results = await fetchCitySuggestions(query);
      setAutocomplete(results);
    };

    const delay = setTimeout(() => {
      if(query) getSuggestions();
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div>
      <div>
        <p className='text-2xl text-left'>
          Plan <span className='font-bold text-[#7C3AED]'>Together.</span> <br />
          Connect <span className='font-bold text-[#7C3AED]'>Better.</span>
        </p>

        <div className="flex items-center gap-2">
            <input
              className="h-10 border border-gray-300 rounded-md px-4 w-full text-sm"
              value={eventName || ""} 
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Search..."
            />
            <div className="flex">
              <div className="relative w-full max-w-md">
                <input
                  className="h-10 border border-gray-300 rounded-l-md px-4 w-full text-sm"
                  placeholder="Search city"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                {autocomplete.length > 0 && (
                  <ul className="absolute top-full left-0 right-0 bg-white border mt-1 rounded-md shadow z-10">
                    {autocomplete.map((place, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onMouseDown={() => {
                          setQuery(`${place.properties.city}, ${place.properties.state}` || place.properties.name || "");
                          setAutocomplete([]);
                        }}
                      >
                        {place.properties.city || place.properties.name},{" "}
                        {place.properties.state}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

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

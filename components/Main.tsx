"use client";
import { useState, useEffect } from "react";
import { CitySuggestions } from "@/types";
import { fetchCitySuggestions } from "@/utils/api";
import { SearchOutline } from "react-ionicons";

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
      if (query) getSuggestions();
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <section className="w-full px-6 md:px-16 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Plan <span className="text-[#7C3AED]">Together.</span><br />
            Connect <span className="text-[#7C3AED]">Better.</span>
          </h1>

          <div className="flex flex-col gap-4">
            <input
              className="h-12 border border-gray-300 rounded-md px-4 text-base w-full"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Event name"
            />

            <div className="flex">
              <div className="relative w-full">
                <input
                  className="h-12 border border-gray-300 rounded-l-md px-4 w-full text-base"
                  placeholder="Search city"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onBlur={() => setTimeout(() => setAutocomplete([]), 100)}
                />
                {autocomplete.length > 0 && (
                  <ul className="absolute top-full left-0 right-0 bg-white border mt-1 rounded-md shadow z-10">
                    {autocomplete.map((place, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onMouseDown={() => {
                          setQuery(
                            `${place.properties.city}, ${place.properties.state}` ||
                              place.properties.name ||
                              ""
                          );
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
              <button className="bg-[#7C3AED] rounded-r-md h-12 w-12 flex items-center justify-center">
                <SearchOutline color="#FFFFFF" height="24px" width="24px" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/heroimage.jpg"
            alt="Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white opacity-80 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Main;

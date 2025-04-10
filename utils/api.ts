import { CitySuggestions } from "@/types";

export const fetchCitySuggestions = async (query: string): Promise<CitySuggestions[]> => {
    if(query.length < 2) return [];

    const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&type=city&limit=5&apiKey=${apiKey}`;
    
    const res = await fetch(url);
    const data = await res.json();

    return data.features;
}
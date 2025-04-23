import { CitySuggestions } from "@/types";
const backendUrl = "http://localhost:5091/api"

export const fetchCitySuggestions = async (query: string): Promise<CitySuggestions[]> => {
    if(query.length < 2) return [];

    const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&type=city&limit=5&apiKey=${apiKey}`;
    
    const res = await fetch(url);
    const data = await res.json();

    return data.features;
}

export const signUp = async (name: string, email: string, password: string) => {
    const res = await fetch(`${backendUrl}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
    });

    if(!res.ok) throw new Error("Signup failed");
    
    return res.json();
}
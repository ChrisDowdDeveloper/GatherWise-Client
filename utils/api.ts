import { CitySuggestions, CreateEventData } from "@/types";
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

export const signIn = async ( email: string, password: string) => {
    const res = await fetch(`${backendUrl}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if(!res.ok) throw new Error("Signin failed");

    return res.json();
}

export const forgotPassword = async(email: string) => {
    const res = await fetch(`${backendUrl}/auth/forgotPassword`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    if(!res.ok) throw new Error("Forgot Password request failed");

    return res.json();
}

export const createEvent = async (eventData: CreateEventData) => {
    const formData = new FormData();
    formData.append("Name", eventData.name);
    formData.append("Location", eventData.location);
    formData.append("Details", eventData.description);
    formData.append("IsPublic", eventData.isPublic.toString());
    formData.append("CreatedAt", eventData.createdAt);
    formData.append("File", eventData.file);
  
    const res = await fetch(`${backendUrl}/events`, {
      method: "POST",
      body: formData,
    });
  
    if (!res.ok) {
      throw new Error("Failed to create event");
    }
  
    const data = await res.json();
    return data;
  };
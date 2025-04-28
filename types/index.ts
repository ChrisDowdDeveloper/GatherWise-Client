export interface CitySuggestions {
    properties: {
        name?: string;
        city?: string;
        state?: string;
        country?: string;
    };
}

export interface Attendee {
    id: number;
    name: string;
    email: string;
}

export interface Event {
    id: number;
    name: string;
    location: string;
    date: string;
    time: string;
    attendees: Attendee[];
    picture: string;
}

export type CreateEventData = {
    name: string;
    location: string;
    description: string;
    isPublic: boolean;
    createdAt: string;
    file: File;
};
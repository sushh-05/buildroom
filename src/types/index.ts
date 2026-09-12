export interface Mission {
    id: string;
    code: string;
    title: string;
    tagline: string;
    problem: string;
    build: string;
    outcome: string;
    skills: string[];
    accent: string;
}

export interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

export type InvoiceStatus = "Pending" | "Overdue" | "Paid";

export interface Invoice {
    id: string;
    client: string;
    amount: number;
    dueDate: string;
    status: InvoiceStatus;
}

export interface Itinerary {
    id: string;
    route: string;
    departure: string;
    price: number;
    connections: number;
    rank: number;
}

export interface DisruptedBooking {
    id: string;
    traveler: string;
    originalRoute: string;
    reason: string;
    alternatives: Itinerary[];
    resolved: boolean;
}
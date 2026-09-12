import type { Mission } from "../types";

export const missions: Mission[] = [
    {
        id: "recover",
        code: "M-01",
        title: "Recover",
        tagline: "Payment recovery assistant for small businesses",
        problem:
            "Small manufacturers lose weeks chasing overdue invoices through scattered calls and messages.",
        build:
            "A dashboard that tracks outstanding invoices, drafts polite follow-ups, and escalates overdue accounts automatically.",
        outcome:
            "A deployed tool with a working invoice list, status pipeline, and automated reminder logic.",
        skills: ["React state management", "Data tables", "Workflow logic"],
        accent: "#d9522b",
    },
    {
        id: "navigate",
        code: "M-02",
        title: "Navigate",
        tagline: "Disruption copilot for travel operators",
        problem:
            "When flights or routes get disrupted, agents scramble to manually rebuild itineraries for every affected traveler.",
        build:
            "A copilot that flags disrupted bookings and suggests ranked alternative itineraries in one view.",
        outcome:
            "A working itinerary comparison interface with mocked disruption alerts and ranked suggestions.",
        skills: ["Component composition", "Conditional rendering", "API mocking"],
        accent: "#2b6bd9",
    },
    {
        id: "forecast",
        code: "M-03",
        title: "Forecast",
        tagline: "Demand monitor for retail inventory",
        problem:
            "Store managers restock by instinct, leading to overstock on slow items and shortages on fast movers.",
        build:
            "A monitor that visualizes demand trends per product and flags items approaching stockout.",
        outcome:
            "A deployed dashboard with sortable inventory data and visual demand indicators.",
        skills: ["Data visualization", "Sorting & filtering", "Responsive tables"],
        accent: "#3d9a5c",
    },
];

export interface SprintWeek {
    week: string;
    title: string;
    deliverable: string;
}

export const sprintWeeks: SprintWeek[] = [
    {
        week: "Week 1",
        title: "Scope the problem",
        deliverable: "A written product brief and a working project scaffold, deployed once, even if empty.",
    },
    {
        week: "Week 2",
        title: "Build the core flow",
        deliverable: "The primary user journey works end-to-end, using mocked data where needed.",
    },
    {
        week: "Week 3",
        title: "Refine and review",
        deliverable: "Mentor code review, UI polish pass, and fixes to rough edges found during testing.",
    },
    {
        week: "Week 4",
        title: "Ship and present",
        deliverable: "Final deployment, README write-up, and a recorded walkthrough of your decisions.",
    },
];

export interface Mentor {
    name: string;
    role: string;
    focus: string;
    quote: string;
}

export const mentors: Mentor[] = [
    {
        name: "Ananya Rao",
        role: "Backend engineer, fintech",
        focus: "Reviews API design and data modeling decisions.",
        quote:
            "I care less about whether it works and more about whether you can explain why you built it that way.",
    },
    {
        name: "Devika Menon",
        role: "Frontend engineer, product studio",
        focus: "Reviews component structure, accessibility, and UI polish.",
        quote:
            "The gap between a good project and a great one is almost always in the details nobody asked for.",
    },
    {
        name: "Rohit Iyer",
        role: "Full-stack engineer, early-stage startups",
        focus: "Reviews deployment, performance, and scoping decisions.",
        quote:
            "Shipping something small and working beats a huge plan that never leaves your laptop.",
    },
];

import type { Invoice } from "../types";

export const seedInvoices: Invoice[] = [
    { id: "inv-1", client: "Kavya Textiles", amount: 42000, dueDate: "2026-08-20", status: "Pending" },
    { id: "inv-2", client: "Orbit Hardware", amount: 118500, dueDate: "2026-08-05", status: "Pending" },
    { id: "inv-3", client: "Northwind Foods", amount: 27500, dueDate: "2026-09-01", status: "Pending" },
    { id: "inv-4", client: "Vertex Auto Parts", amount: 63200, dueDate: "2026-07-28", status: "Paid" },
];

import type { DisruptedBooking } from "../types";

export const disruptedBookings: DisruptedBooking[] = [
    {
        id: "bk-1",
        traveler: "Meera Nair",
        originalRoute: "BOM → DXB, 14:20",
        reason: "Flight cancelled",
        resolved: false,
        alternatives: [
            { id: "alt-1", route: "BOM → DXB via AUH", departure: "16:45", price: 18200, connections: 1, rank: 0 },
            { id: "alt-2", route: "BOM → DXB direct", departure: "21:10", price: 24500, connections: 0, rank: 0 },
            { id: "alt-3", route: "BOM → DXB via DOH", departure: "23:30", price: 15800, connections: 1, rank: 0 },
        ],
    },
    {
        id: "bk-2",
        traveler: "Arjun Kapoor",
        originalRoute: "DEL → SIN, 09:00",
        reason: "Aircraft swap - schedule shifted 6 hours",
        resolved: false,
        alternatives: [
            { id: "alt-4", route: "DEL → SIN direct", departure: "11:30", price: 21200, connections: 0, rank: 0 },
            { id: "alt-5", route: "DEL → SIN via KUL", departure: "13:00", price: 16900, connections: 1, rank: 0 },
        ],
    },
];

import type { Product } from "../types";

export const products: Product[] = [
    { id: "p-1", name: "Wireless Earbuds Pro", stock: 42, reorderThreshold: 20, weeklySales: [18, 22, 25, 30, 28, 34] },
    { id: "p-2", name: "Ceramic Travel Mug", stock: 96, reorderThreshold: 30, weeklySales: [10, 9, 11, 8, 10, 9] },
    { id: "p-3", name: "Desk Lamp Mini", stock: 15, reorderThreshold: 25, weeklySales: [12, 14, 16, 15, 18, 20] },
    { id: "p-4", name: "Canvas Tote Bag", stock: 60, reorderThreshold: 20, weeklySales: [14, 13, 15, 12, 14, 13] },
];
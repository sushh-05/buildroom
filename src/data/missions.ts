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
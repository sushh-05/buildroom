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
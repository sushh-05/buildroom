import type { FaqItem } from "../types";

export const faqItems: FaqItem[] = [
    {
        id: "prereq",
        question: "Do I need prior AI experience to join a sprint?",
        answer:
            "No. You need working knowledge of one programming language. Every mission includes a guided brief that introduces the specific tools you'll use.",
    },
    {
        id: "duration",
        question: "How long is one build sprint?",
        answer:
            "Four weeks, with weekly checkpoints. Each week has a specific deliverable, so progress stays visible instead of piling up at the end.",
    },
    {
        id: "output",
        question: "What do I actually walk away with?",
        answer:
            "A deployed project, a public GitHub repository, and a short recorded walkthrough you can share directly with recruiters or in interviews.",
    },
    {
        id: "support",
        question: "What happens if I get stuck mid-sprint?",
        answer:
            "Weekly office hours and async code reviews from a mentor who has shipped production software, not just taught theory.",
    },
    {
        id: "format",
        question: "Is this live or self-paced?",
        answer:
            "Cohort-based with fixed weekly check-ins, so you build alongside others instead of learning in isolation.",
    },
];
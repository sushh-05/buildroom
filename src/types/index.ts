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
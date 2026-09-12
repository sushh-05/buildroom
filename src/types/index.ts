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
import { useMemo, useState, type FormEvent } from "react";
import { seedInvoices } from "../../data/missions";
import type { Invoice, InvoiceStatus } from "../../types";

type SortKey = "dueDate" | "amount";

function getEffectiveStatus(invoice: Invoice): InvoiceStatus {
    if (invoice.status === "Paid") return "Paid";
    const isPastDue = new Date(invoice.dueDate) < new Date();
    return isPastDue ? "Overdue" : "Pending";
}

function daysOverdue(dueDate: string): number {
    const diff = Date.now() - new Date(dueDate).getTime();
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

function draftReminder(invoice: Invoice): string {
    const overdueDays = daysOverdue(invoice.dueDate);
    return `Hi ${invoice.client} team, this is a friendly follow-up on invoice for ₹${invoice.amount.toLocaleString(
        "en-IN"
    )}, which is now ${overdueDays} day${overdueDays === 1 ? "" : "s"} overdue. Could you share an updated payment timeline? Happy to help resolve any blockers.`;
}

const statusStyles: Record<InvoiceStatus, string> = {
    Pending: "bg-[var(--color-text)]/8 text-[var(--color-text)]/70",
    Overdue: "bg-[var(--color-accent)]/12 text-[var(--color-accent)]",
    Paid: "bg-[var(--color-accent-forecast)]/12 text-[var(--color-accent-forecast)]",
};

export function LiveDemo() {
    const [invoices, setInvoices] = useState<Invoice[]>(seedInvoices);
    const [sortKey, setSortKey] = useState<SortKey>("dueDate");
    const [openReminderId, setOpenReminderId] = useState<string | null>(null);
    const [client, setClient] = useState("");
    const [amount, setAmount] = useState("");
    const [dueDate, setDueDate] = useState("");

    const sorted = useMemo(() => {
        const copy = [...invoices];
        if (sortKey === "amount") {
            return copy.sort((a, b) => b.amount - a.amount);
        }
        return copy.sort(
            (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        );
    }, [invoices, sortKey]);

    const summary = useMemo(() => {
        const outstanding = invoices
            .filter((inv) => inv.status !== "Paid")
            .reduce((sum, inv) => sum + inv.amount, 0);
        const overdueCount = invoices.filter(
            (inv) => getEffectiveStatus(inv) === "Overdue"
        ).length;
        const recovered = invoices
            .filter((inv) => inv.status === "Paid")
            .reduce((sum, inv) => sum + inv.amount, 0);
        return { outstanding, overdueCount, recovered };
    }, [invoices]);

    const togglePaid = (id: string) => {
        setInvoices((current) =>
            current.map((inv) =>
                inv.id === id
                    ? { ...inv, status: inv.status === "Paid" ? "Pending" : "Paid" }
                    : inv
            )
        );
    };

    const handleAddInvoice = (event: FormEvent) => {
        event.preventDefault();
        if (!client || !amount || !dueDate) return;

        const newInvoice: Invoice = {
            id: `inv-${Date.now()}`,
            client,
            amount: Number(amount),
            dueDate,
            status: "Pending",
        };

        setInvoices((current) => [...current, newInvoice]);
        setClient("");
        setAmount("");
        setDueDate("");
    };

    return (
        <div className="mt-14 border-t border-[var(--color-border)] pt-14">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Live preview
            </p>
            <h3 className="text-xl font-bold tracking-[-0.01em]">
                A working slice of the Recover mission
            </h3>
            <p className="mt-2 max-w-lg leading-6 text-[var(--color-text-muted)]">
                This is real, functioning code — add an invoice, mark one paid, or
                draft a follow-up on an overdue account.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="border border-[var(--color-border)] bg-[var(--color-surface-card)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text)]/50">
                        Outstanding
                    </p>
                    <p className="mt-1 text-2xl font-bold tabular-nums">
                        ₹{summary.outstanding.toLocaleString("en-IN")}
                    </p>
                </div>
                <div className="border border-[var(--color-border)] bg-[var(--color-surface-card)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text)]/50">
                        Overdue accounts
                    </p>
                    <p className="mt-1 text-2xl font-bold tabular-nums">
                        {summary.overdueCount}
                    </p>
                </div>
                <div className="border border-[var(--color-border)] bg-[var(--color-surface-card)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text)]/50">
                        Recovered
                    </p>
                    <p className="mt-1 text-2xl font-bold tabular-nums">
                        ₹{summary.recovered.toLocaleString("en-IN")}
                    </p>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text)]/50">
                    Sort by
                </span>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => setSortKey("dueDate")}
                        className={`min-h-9 px-3 text-xs font-semibold ${sortKey === "dueDate"
                            ? "bg-[var(--color-inverse-bg)] text-[var(--color-inverse-text)]"
                            : "border border-[var(--color-border)] text-[var(--color-text)]/70"
                            }`}
                    >
                        Due date
                    </button>
                    <button
                        type="button"
                        onClick={() => setSortKey("amount")}
                        className={`min-h-9 px-3 text-xs font-semibold ${sortKey === "amount"
                            ? "bg-[var(--color-inverse-bg)] text-[var(--color-inverse-text)]"
                            : "border border-[var(--color-border)] text-[var(--color-text)]/70"
                            }`}
                    >
                        Amount
                    </button>
                </div>
            </div>

            <div className="mt-4 overflow-x-auto border border-[var(--color-border)]">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead>
                        <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                            <th className="px-4 py-3 font-semibold">Client</th>
                            <th className="px-4 py-3 font-semibold">Amount</th>
                            <th className="px-4 py-3 font-semibold">Due date</th>
                            <th className="px-4 py-3 font-semibold">Status</th>
                            <th className="px-4 py-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sorted.map((invoice) => {
                            const status = getEffectiveStatus(invoice);
                            return (
                                <>
                                    <tr
                                        key={invoice.id}
                                        className="border-b border-[var(--color-border)] last:border-b-0"
                                    >
                                        <td className="px-4 py-3 font-medium">{invoice.client}</td>
                                        <td className="px-4 py-3 tabular-nums">
                                            ₹{invoice.amount.toLocaleString("en-IN")}
                                        </td>
                                        <td className="px-4 py-3 text-[var(--color-text-muted)]">
                                            {invoice.dueDate}
                                        </td>
                                        <td className="px-4 py-3">
                                            <button
                                                type="button"
                                                onClick={() => togglePaid(invoice.id)}
                                                className={`min-h-8 px-2.5 text-xs font-semibold ${statusStyles[status]}`}
                                            >
                                                {status}
                                            </button>
                                        </td>
                                        <td className="px-4 py-3">
                                            {status === "Overdue" && (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpenReminderId((current) =>
                                                            current === invoice.id ? null : invoice.id
                                                        )
                                                    }
                                                    className="text-xs font-semibold text-[var(--color-accent)] underline underline-offset-4"
                                                >
                                                    Draft follow-up
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                    {openReminderId === invoice.id && (
                                        <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                                            <td colSpan={5} className="px-4 py-4">
                                                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text)]/50">
                                                    Generated follow-up message
                                                </p>
                                                <p className="mt-2 max-w-lg leading-6 text-[var(--color-text)]">
                                                    {draftReminder(invoice)}
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <form
                onSubmit={handleAddInvoice}
                className="mt-6 grid gap-3 sm:grid-cols-[1.4fr_1fr_1fr_auto]"
            >
                <div>
                    <label htmlFor="demo-client" className="sr-only">
                        Client name
                    </label>
                    <input
                        id="demo-client"
                        type="text"
                        required
                        placeholder="Client name"
                        value={client}
                        onChange={(event) => setClient(event.target.value)}
                        className="min-h-11 w-full border border-[var(--color-border)] bg-[var(--color-surface-card)] px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                    />
                </div>
                <div>
                    <label htmlFor="demo-amount" className="sr-only">
                        Amount
                    </label>
                    <input
                        id="demo-amount"
                        type="number"
                        required
                        min="0"
                        placeholder="Amount (₹)"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        className="min-h-11 w-full border border-[var(--color-border)] bg-[var(--color-surface-card)] px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                    />
                </div>
                <div>
                    <label htmlFor="demo-due" className="sr-only">
                        Due date
                    </label>
                    <input
                        id="demo-due"
                        type="date"
                        required
                        value={dueDate}
                        onChange={(event) => setDueDate(event.target.value)}
                        className="min-h-11 w-full border border-[var(--color-border)] bg-[var(--color-surface-card)] px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                    />
                </div>
                <button
                    type="submit"
                    className="min-h-11 bg-[var(--color-inverse-bg)] px-4 text-sm font-semibold text-[var(--color-inverse-text)]"
                >
                    Add invoice
                </button>
            </form>
        </div>
    );
}
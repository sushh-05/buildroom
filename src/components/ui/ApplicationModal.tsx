import { useState, type FormEvent } from "react";
import { Button } from "./Button";
import { motion } from "motion/react";

interface ApplicationModalProps {
    onClose: () => void;
}

export function ApplicationModal({ onClose }: ApplicationModalProps) {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mission, setMission] = useState("recover");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-[var(--color-inverse-bg)]/50 p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-modal-title"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="w-full max-w-md bg-[var(--color-bg)] p-8"
                onClick={(event) => event.stopPropagation()}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
                {submitted ? (
                    <div>
                        <h2
                            id="application-modal-title"
                            className="text-2xl font-bold tracking-[-0.01em]"
                        >
                            You&apos;re on the list.
                        </h2>
                        <p className="mt-3 leading-6 text-[var(--color-text-muted)]">
                            This is a mocked submission for the assessment — no data is
                            sent anywhere. In a real product, you&apos;d receive a
                            confirmation email next.
                        </p>
                        <button
                            type="button"
                            onClick={onClose}
                            className="mt-6 text-sm font-semibold underline underline-offset-4"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2
                            id="application-modal-title"
                            className="text-2xl font-bold tracking-[-0.01em]"
                        >
                            Find your first mission
                        </h2>
                        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                            Applications are mocked for this assessment build.
                        </p>

                        <div className="mt-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium">
                                    Full name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    className="mt-1.5 min-h-11 w-full border border-[var(--color-border)] bg-[var(--color-surface-card)] px-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="mt-1.5 min-h-11 w-full border border-[var(--color-border)] bg-[var(--color-surface-card)] px-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                                />
                            </div>

                            <div>
                                <label htmlFor="mission" className="text-sm font-medium">
                                    Preferred mission
                                </label>
                                <select
                                    id="mission"
                                    value={mission}
                                    onChange={(event) => setMission(event.target.value)}
                                    className="mt-1.5 min-h-11 w-full border border-[var(--color-border)] bg-[var(--color-surface-card)] px-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                                >
                                    <option value="recover">M-01 · Recover</option>
                                    <option value="navigate">M-02 · Navigate</option>
                                    <option value="forecast">M-03 · Forecast</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-7 flex items-center gap-4">
                            <Button type="submit" variant="primary">
                                Submit application
                            </Button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="text-sm font-semibold text-[var(--color-text)]/60 hover:text-[var(--color-text)]"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </motion.div>
        </motion.div>
    );
}
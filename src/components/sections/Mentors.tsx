import { mentors } from "../../data/missions";
import { Reveal } from "../ui/Reveal";

export function Mentors() {
    return (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20">
            <Reveal className="mx-auto max-w-6xl px-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    Who reviews your work
                </p>
                <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
                    Engineers who ship, not just teach.
                </h2>

                <div className="mt-14 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
                    {mentors.map((mentor, index) => (
                        <div
                            key={mentor.name}
                            className="grid gap-6 py-10 sm:grid-cols-[40px_220px_1fr]"
                        >
                            <span className="hidden font-mono text-sm font-semibold text-[var(--color-text)]/25 sm:block">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div>
                                <p className="text-lg font-bold tracking-[-0.01em]">
                                    {mentor.name}
                                </p>
                                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{mentor.role}</p>
                                <p className="mt-3 text-sm text-[var(--color-text)]/60">
                                    {mentor.focus}
                                </p>
                            </div>

                            <blockquote className="border-l-2 border-[var(--color-accent)]/40 pl-6 text-xl leading-8 tracking-[-0.01em] text-[var(--color-text)] sm:text-2xl">
                                “{mentor.quote}”
                            </blockquote>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
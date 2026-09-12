import { sprintWeeks } from "../../data/missions";
import { Reveal } from "../ui/Reveal";

export function SprintTimeline() {
    return (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20">
            <Reveal className="mx-auto max-w-6xl px-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    Inside a sprint
                </p>
                <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
                    Four weeks. Nothing vague about what happens each week.
                </h2>

                <div className="mt-14">
                    {sprintWeeks.map((item, index) => (
                        <div
                            key={item.week}
                            className="grid grid-cols-1 gap-x-6 border-t border-[var(--color-border)] py-6 first:border-t-0 sm:grid-cols-[140px_1fr_1.4fr] sm:gap-x-10"
                        >
                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text)]/40">
                                {item.week}
                            </span>
                            <h3 className="text-lg font-bold tracking-[-0.01em]">
                                {item.title}
                            </h3>
                            <p className="mt-1 leading-6 text-[var(--color-text-muted)] sm:mt-0">
                                {item.deliverable}
                            </p>
                            <span className="sr-only">{`Step ${index + 1} of ${sprintWeeks.length}`}</span>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
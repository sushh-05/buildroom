import { Reveal } from "../ui/Reveal";

const steps = [
    {
        number: "01",
        title: "Brief",
        description:
            "You receive a real business problem, not a vague topic , the same way a client would hand it to you.",
    },
    {
        number: "02",
        title: "Build",
        description:
            "You build the working product across the sprint, with weekly checkpoints so progress stays visible.",
    },
    {
        number: "03",
        title: "Review",
        description:
            "A mentor reviews your code and product decisions directly, the same way a senior engineer would.",
    },
    {
        number: "04",
        title: "Deploy",
        description:
            "You ship it publicly and record a short walkthrough you can send straight to recruiters.",
    },
];

export function Process() {
    return (
        <section id="process" className="py-20">
            <Reveal className="mx-auto max-w-6xl px-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    How it works
                </p>
                <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
                    One mission, four stages, four weeks.
                </h2>

                <ol className="mt-14 flex list-none flex-col gap-10 p-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <li key={step.number} className="relative">
                            <span className="block font-mono text-sm font-semibold text-[var(--color-text-muted)]/60">
                                {step.number}
                            </span>
                            <h3 className="mt-3 text-xl font-bold tracking-[-0.01em]">
                                {step.title}
                            </h3>
                            <p className="mt-2 max-w-[32ch] leading-6 text-[var(--color-text-muted)] sm:max-w-[26ch]">
                                {step.description}
                            </p>
                            {index < steps.length - 1 && (
                                <span
                                    aria-hidden="true"
                                    className="absolute right-[-1rem] top-1 hidden text-[var(--color-text-muted)]/40 lg:block"
                                >
                                    →
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </Reveal>
        </section>
    );
}
import { mentors } from "../../data/missions";

export function Mentors() {
    return (
        <section className="border-t border-[#171713]/8 bg-[#faf8f3] py-20">
            <div className="mx-auto max-w-6xl px-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d9522b]">
                    Who reviews your work
                </p>
                <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
                    Engineers who ship, not just teach.
                </h2>

                <div className="mt-14 divide-y divide-[#171713]/10 border-t border-[#171713]/10">
                    {mentors.map((mentor, index) => (
                        <div
                            key={mentor.name}
                            className="grid gap-6 py-10 sm:grid-cols-[40px_220px_1fr]"
                        >
                            <span className="hidden font-mono text-sm font-semibold text-[#171713]/25 sm:block">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div>
                                <p className="text-lg font-bold tracking-[-0.01em]">
                                    {mentor.name}
                                </p>
                                <p className="mt-1 text-sm text-[#5c5a50]">{mentor.role}</p>
                                <p className="mt-3 text-sm text-[#171713]/60">
                                    {mentor.focus}
                                </p>
                            </div>

                            <blockquote className="border-l-2 border-[#d9522b]/40 pl-6 text-xl leading-8 tracking-[-0.01em] text-[#171713] sm:text-2xl">
                                “{mentor.quote}”
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
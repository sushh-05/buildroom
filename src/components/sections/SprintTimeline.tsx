import { sprintWeeks } from "../../data/missions";

export function SprintTimeline() {
    return (
        <section className="border-t border-[#171713]/8 bg-[#faf8f3] py-20">
            <div className="mx-auto max-w-6xl px-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d9522b]">
                    Inside a sprint
                </p>
                <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
                    Four weeks. Nothing vague about what happens each week.
                </h2>

                <div className="mt-14">
                    {sprintWeeks.map((item, index) => (
                        <div
                            key={item.week}
                            className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-[#171713]/10 py-6 first:border-t-0 sm:grid-cols-[140px_1fr_1.4fr] sm:gap-x-10"
                        >
                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#171713]/40">
                                {item.week}
                            </span>
                            <h3 className="text-lg font-bold tracking-[-0.01em]">
                                {item.title}
                            </h3>
                            <p className="mt-1 leading-6 text-[#5c5a50] sm:mt-0">
                                {item.deliverable}
                            </p>
                            <span className="sr-only">{`Step ${index + 1} of ${sprintWeeks.length}`}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
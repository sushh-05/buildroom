const artifacts = [
    {
        label: "Public GitHub repository",
        detail: "Full commit history showing how the project actually evolved, not just a final dump.",
    },
    {
        label: "Live deployed product",
        detail: "A real, working URL you can open on any device — not a screenshot or a local demo.",
    },
    {
        label: "Architecture note",
        detail: "A short written record of key decisions: what you built, what you skipped, and why.",
    },
    {
        label: "Recorded walkthrough",
        detail: "A few minutes explaining your product and code, ready to attach to any application.",
    },
];

export function Proof() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d9522b]">
                            Proof, not certificates
                        </p>
                        <h2 className="max-w-md text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
                            You leave with things people can actually check.
                        </h2>
                        <p className="mt-5 max-w-sm leading-7 text-[#5c5a50]">
                            No completion badge. No participation certificate. Just a
                            working product with your name on the commits.
                        </p>
                    </div>

                    <ul className="divide-y divide-[#171713]/10 border-y border-[#171713]/10">
                        {artifacts.map((item) => (
                            <li key={item.label} className="grid gap-1 py-6 sm:grid-cols-[1fr_1.6fr] sm:gap-8">
                                <span className="text-base font-bold tracking-[-0.01em]">
                                    {item.label}
                                </span>
                                <span className="leading-6 text-[#5c5a50]">{item.detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
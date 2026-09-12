import { Button } from "../ui/Button";

interface HeroProps {
    onApplyClick: () => void;
}

export function Hero({ onApplyClick }: HeroProps) {
    return (
        <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d9522b]">
                Buildroom / Mission 00
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.03em] text-[#171713] sm:text-7xl">
                Don&apos;t just learn AI. Build something useful.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#5c5a50]">
                A four-week build sprint where you solve one realistic business
                mission, ship a deployed project, and leave with proof — not another
                certificate.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button variant="primary" onClick={onApplyClick}>
                    Find your first mission
                </Button>
                <a
                    href="#missions"
                    className="text-sm font-semibold text-[#171713] underline underline-offset-4 hover:text-[#d9522b]"
                >
                    See the missions
                </a>
            </div>
        </section>
    );
}
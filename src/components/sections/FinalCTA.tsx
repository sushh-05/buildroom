import { Button } from "../ui/Button";

interface FinalCTAProps {
    onApplyClick: () => void;
}

export function FinalCTA({ onApplyClick }: FinalCTAProps) {
    return (
        <section className="border-t border-[#171713]/8 bg-[#171713] py-20 text-[#f3f0e8]">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d9522b]">
                    Mission 00
                </p>
                <h2 className="mx-auto max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                    Your next project shouldn&apos;t sit in a folder.
                </h2>
                <p className="mx-auto mt-5 max-w-md leading-7 text-[#f3f0e8]/70">
                    Apply for the next cohort and start building something you can
                    actually show.
                </p>
                <div className="mt-9 flex justify-center">
                    <Button variant="inverse" onClick={onApplyClick}>
                        Find your first mission
                    </Button>
                </div>
            </div>
        </section>
    );
}
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

interface FinalCTAProps {
    onApplyClick: () => void;
}

export function FinalCTA({ onApplyClick }: FinalCTAProps) {
    return (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-inverse-bg)] py-20 text-[var(--color-inverse-text)]">
            <Reveal className="mx-auto max-w-6xl px-6 text-center">
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    Mission 00
                </p>
                <h2 className="mx-auto max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                    Your next project shouldn&apos;t sit in a folder.
                </h2>
                <p className="mx-auto mt-5 max-w-md leading-7 text-[var(--color-inverse-text)]/70">
                    Apply for the next cohort and start building something you can
                    actually show.
                </p>
                <div className="mt-9 flex justify-center">
                    <Button variant="inverse" onClick={onApplyClick}>
                        Find your first mission
                    </Button>
                </div>
            </Reveal>
        </section>
    );
}
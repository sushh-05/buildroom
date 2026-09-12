import { motion } from "motion/react";
import { Button } from "../ui/Button";

interface HeroProps {
    onApplyClick: () => void;
}

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero({ onApplyClick }: HeroProps) {
    return (
        <motion.section
            id="top"
            className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.p
                variants={item}
                className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]"
            >
                Buildroom / Mission 00
            </motion.p>

            <motion.h1
                variants={item}
                className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.03em] sm:text-7xl"
            >
                Don&apos;t just learn AI. Build something useful.
            </motion.h1>

            <motion.p
                variants={item}
                className="mt-7 max-w-lg text-lg leading-8 text-[var(--color-text-muted)]"
            >
                A four-week build sprint where you solve one realistic business
                mission, ship a deployed project, and leave with proof — not another
                certificate.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
                <Button variant="primary" onClick={onApplyClick}>
                    Find your first mission
                </Button>
                <a
                    href="#missions"
                    className="text-sm font-semibold text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--color-accent)]"
                >
                    See the missions
                </a>
            </motion.div>
        </motion.section>
    );
}
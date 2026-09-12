import { useState } from "react";
import { faqItems } from "../../data/faq";
import { Reveal } from "../ui/Reveal";
import { motion, AnimatePresence } from "motion/react";

export function FAQ() {
    const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

    const toggle = (id: string) => {
        setOpenId((current) => (current === id ? null : id));
    };

    return (
        <section id="faq" className="py-20">
            <Reveal className="mx-auto max-w-3xl px-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    Questions
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
                    Before you apply.
                </h2>

                <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                    {faqItems.map((item) => {
                        const isOpen = openId === item.id;
                        const panelId = `faq-panel-${item.id}`;
                        const buttonId = `faq-button-${item.id}`;

                        return (
                            <div key={item.id}>
                                <h3>
                                    <button
                                        id={buttonId}
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => toggle(item.id)}
                                        className="flex min-h-11 w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-[var(--color-text)]"
                                    >
                                        {item.question}
                                        <span
                                            aria-hidden="true"
                                            className={`flex-shrink-0 text-xl font-normal text-[var(--color-text)]/40 transition-transform ${isOpen ? "rotate-45" : ""
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>
                                </h3>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="max-w-xl pb-5 leading-7 text-[var(--color-text-muted)]">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </Reveal>
        </section>
    );
}
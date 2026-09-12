import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "inverse";
    children: ReactNode;
}

export function Button({
    variant = "primary",
    className = "",
    children,
    ...rest
}: ButtonProps) {
    const base =
        "inline-flex min-h-11 items-center justify-center px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";

    const variants = {
        primary: "bg-[var(--color-inverse-bg)] text-[var(--color-inverse-text)]",
        secondary:
            "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:bg-[var(--color-text)]/5",
        inverse: "bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-[var(--color-surface-card)]",
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
            {children}
        </button>
    );
}
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
        "inline-flex min-h-11 items-center justify-center px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9522b]";

    const variants = {
        primary: "bg-[#171713] text-white",
        secondary:
            "border border-[#171713]/15 bg-transparent text-[#171713] hover:bg-[#171713]/5",
        inverse: "bg-[#f3f0e8] text-[#171713] hover:bg-white",
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
            {children}
        </button>
    );
}
interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <svg
            viewBox="0 0 32 32"
            className={className}
            fill="none"
            aria-label="Buildroom logo"
            role="img"
        >
            <rect x="2" y="18" width="7" height="12" fill="currentColor" />
            <rect x="12.5" y="10" width="7" height="20" fill="currentColor" />
            <rect x="23" y="2" width="7" height="28" fill="var(--color-accent)" />
        </svg>
    );
}
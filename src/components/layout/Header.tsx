import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

interface HeaderProps {
    onApplyClick: () => void;
    theme: "light" | "dark";
    onToggleTheme: () => void;
}

export function Header({ onApplyClick, theme, onToggleTheme }: HeaderProps) {
    return (
        <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#top" className="flex items-center gap-2.5 text-[var(--color-text)]">
                    <Logo className="h-6 w-6" />
                    <span className="text-sm font-bold uppercase tracking-[0.08em]">
                        Buildroom
                    </span>
                </a>

                <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
                    <a href="#missions" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                        Missions
                    </a>
                    <a href="#process" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                        How it works
                    </a>
                    <a href="#faq" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                        FAQ
                    </a>
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                    <Button variant="primary" onClick={onApplyClick} className="text-xs sm:text-sm">
                        Find your mission
                    </Button>
                </div>
            </div>
        </header>
    );
}
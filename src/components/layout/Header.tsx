import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";

interface HeaderProps {
    onApplyClick: () => void;
}

export function Header({ onApplyClick }: HeaderProps) {
    return (
        <header className="sticky top-0 z-40 border-b border-[#171713]/8 bg-[#f3f0e8]/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#top" className="flex items-center gap-2.5 text-[#171713]">
                    <Logo className="h-6 w-6" />
                    <span className="text-sm font-bold uppercase tracking-[0.08em]">
                        Buildroom
                    </span>
                </a>

                <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
                    <a
                        href="#missions"
                        className="text-sm font-medium text-[#171713]/70 hover:text-[#171713]"
                    >
                        Missions
                    </a>
                    <a
                        href="#process"
                        className="text-sm font-medium text-[#171713]/70 hover:text-[#171713]"
                    >
                        How it works
                    </a>
                    <a
                        href="#faq"
                        className="text-sm font-medium text-[#171713]/70 hover:text-[#171713]"
                    >
                        FAQ
                    </a>
                </nav>

                <Button variant="primary" onClick={onApplyClick} className="text-xs sm:text-sm">
                    Find your mission
                </Button>
            </div>
        </header>
    );
}
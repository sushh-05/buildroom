import { Logo } from "../ui/Logo";

export function Footer() {
    return (
        <footer className="bg-[#171713] py-10 text-[#f3f0e8]/60">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
                <a href="#top" className="flex items-center gap-2 text-[#f3f0e8]">
                    <Logo className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-[0.08em]">
                        Buildroom
                    </span>
                </a>
                <p className="text-xs">
                    A fictional EdTech concept built for a design and engineering
                    assessment.
                </p>
            </div>
        </footer>
    );
}
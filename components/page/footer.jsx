import { StarsIcon } from "lucide-react";
import Logo from "../ui/logo";

export default function Footer() {
    return (
        <footer className="py-10 px-6 md:px-20 grid gap-4 lg:px-32 sm:text-center sm:place-items-center">
            <div className="grid sm:text-center sm:place-items-center">
                <Logo />
                <h1 className="text-sm font-light text-foreground/80">Proudly open-source, built by <a href="https://github.com/Auxilus08" className="after:h-[2px] after:-mb-[1px] after:w-0 after:hover:w-full after:transition-all after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-primary relative">Auxilus08</a>.</h1>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-center">
                <a className="text-sm after:h-[2px] after:-mb-[1px] after:w-0 after:hover:w-full after:transition-all after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-primary relative text-foreground/80" href="https://github.com/sponsors/Auxilus08">Sponsor Project</a>
                <a className="text-sm after:h-[2px] after:-mb-[1px] after:w-0 after:hover:w-full after:transition-all after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-primary relative text-foreground/80" href="https://github.com/Auxilus08/SnipShare">Github Repository</a>
                <a className="text-sm after:h-[2px] after:-mb-[1px] after:w-0 after:hover:w-full after:transition-all after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-primary relative text-foreground/80" href="https://github.com/Auxilus08/SnipShare/issues">Found A Bug?</a>
            </div>
        </footer>
    );
};
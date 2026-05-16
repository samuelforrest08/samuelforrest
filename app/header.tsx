import { Logo } from "./logo";
import Link from "next/link";
import { SocialLinks } from "./social-links";

export function Header() {
  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Logo />

      <nav className="text-xs grow justify-end items-center flex gap-1">
        <Link href="/blog" className="group p-2">
          <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex">
            Blog
          </span>
        </Link>
        <Link href="/projects" className="group p-2">
          <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex">
            Projects
          </span>
        </Link>
        <SocialLinks />
      </nav>
    </header>
  );
}

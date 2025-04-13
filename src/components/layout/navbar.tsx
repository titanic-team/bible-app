import Link from "next/link";
import { Logo } from "./logo";
import { Search } from "./search";

export function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between py-6">
      <Logo />
      <div className="flex items-center gap-8">
        <Search />
        <Link
          className="font-headings hover:underline hover:underline-offset-2"
          href="/blog"
        >
          Acesse o Blog
        </Link>
      </div>
    </nav>
  );
}

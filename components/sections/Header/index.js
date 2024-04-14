import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 border-b">
      <div className="container mx-auto">
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

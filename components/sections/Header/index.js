import Link from 'next/link';

export function Header() {
    return (
        <header>
            <div>
                <nav>
                    <Link href='/'>Home</Link>
                </nav>
            </div>
        </header>
    )
};

export default Header;
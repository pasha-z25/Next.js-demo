import Link from 'next/link';

export function Header() {
    return (
        <header className='py-rem'>
            <div className='container'>
                <nav>
                    <Link href='/'>Home</Link>
                    <span>&nbsp;</span>
                    <Link href='/users'>Users</Link>
                    <span>&nbsp;</span>
                    <Link href='/albums'>Albums</Link>
                    <span>&nbsp;</span>
                    <Link href='/posts'>Posts</Link>
                </nav>
            </div>
        </header>
    )
};

export default Header;
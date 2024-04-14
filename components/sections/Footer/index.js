export function Footer() {
    return (
        <footer className='py-rem'>
            <div className='container'>
                <p>
                    Copyright &copy; {(new Date).getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer;
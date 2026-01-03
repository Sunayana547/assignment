function Footer() {
    const handlePlaceholderClick = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer-nav">
                    <a href="/" onClick={handlePlaceholderClick}>Help</a>
                    <a href="/" onClick={handlePlaceholderClick}>Status</a>
                    <a href="/" onClick={handlePlaceholderClick}>About</a>
                    <a href="/" onClick={handlePlaceholderClick}>Careers</a>
                    <a href="/" onClick={handlePlaceholderClick}>Press</a>
                    <a href="/" onClick={handlePlaceholderClick}>Blog</a>
                    <a href="/" onClick={handlePlaceholderClick}>Privacy</a>
                    <a href="/" onClick={handlePlaceholderClick}>Rules</a>
                    <a href="/" onClick={handlePlaceholderClick}>Terms</a>
                    <a href="/" onClick={handlePlaceholderClick}>Text to speech</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;

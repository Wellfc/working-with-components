
function Header() {
    return (
        <header>
            <div className="container flex">
                <div className="header-title">
                    <picture>
                        <img
                            src="https://cdn.icon-icons.com/icons2/1537/PNG/512/1562687-code-computer-creative-html-process-technology-web-development_107058.png"
                            alt="Tech Solutions Logo"
                            className="header-icon"
                        />
                    </picture>
                    <h2>Tech Solutions</h2>
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li><a href="#"><p>Home</p></a></li>
                        <li><a href="#"><p>Services</p></a></li>
                        <li><a href="#"><p>About</p></a></li>
                        <li><a href="#"><p>Contact</p></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

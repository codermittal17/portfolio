function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-signature">Raghvendra Mittal</div>
            <ul className="navigation-buttons-container">
                <a href="#hero"><li>HOME</li></a>
                <a href="#about"><li>ABOUT</li></a>
                <a href="#projects"><li>PROJECTS</li></a>
                <a href="#contact"><li>CONTACT</li></a>
            </ul>
        </nav>
    )
}

export default NavBar

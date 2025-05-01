function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Raghvendra Mittal. All rights reserved.</p>
            <p>
                <a href="https://github.com/codermittal17" target="_blank" rel="noopener noreferrer">GitHub</a> | 
                <a href="https://www.linkedin.com/in/raghvendramittal/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
            </p>
        </footer>
    );
}

export default Footer;

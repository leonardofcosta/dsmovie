import { ReactComponent as GithubIcon } from 'assets/img/github1.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <div className="dsmove-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">github.com</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
import './header.css';

export function Header(){

    return (<header className='header-container'>
        <h2 className="brand-name">FluxFilms</h2>
        <nav className="header-nav">
            <ul className='header-nav-wrapper'>
                <li className='nav-list-element'><a href="#" className="nav-link">Films</a></li>
                <li className='nav-list-element'><a href="#" className="nav-link">Séries</a></li>
            </ul>
        </nav>
    </header>)
}
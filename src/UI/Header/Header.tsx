import './header.css';

export function Header(){

    return (<header className='header-container'>
        <h2 className="brand-name">FluxFilms</h2>
        <nav className="header-nav">
            <ul className='header-nav-wrapper'>
                <li className='nav-list-element'><a href="#" className="nav-link">Lien 1</a></li>
                <li className='nav-list-element'><a href="#" className="nav-link">Lien 3</a></li>
                <li className='nav-list-element'><a href="#" className="nav-link">Lien 2</a></li>
            </ul>
        </nav>
    </header>)
}
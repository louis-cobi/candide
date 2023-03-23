import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo candide.svg';

const Header = () => {

    return (
        <header className='header'>
            <Link to="/"><img src={logo} /></Link>
            <Link to="/view" className='viewToggle'>Exemple 1</Link>
            <Link to="/view2" className='viewToggle'>Exemple 2</Link>
            <Link to="/view3" className='viewToggle'>Exemple 3</Link>
        </header>
    )
}

export default Header

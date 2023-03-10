import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo candide.svg';

const Header = () => {
    return (
        <header style={styles.header}>
            <Link to="/"><img src={logo} /></Link>
        </header>
    )
}

const styles = {
    header: {
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 10,
        padding: '30px'
    }
}

export default Header

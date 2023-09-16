import { Link } from 'react-router-dom'
import * as C from './styles' 
import { useState } from 'react'

export const Header = () =>{
    const [openMenu, setOpenMenu] = useState(false)


    const handleOpenMenu = () =>{
        setOpenMenu(!openMenu)
    }

    const handleCloseMenu = () =>{
        setOpenMenu(!openMenu)
    }


    return(
        <C.HeaderContainer>
                <nav className="navigation">
                    <Link to='/' className="logo">Tank</Link>
                    <ul className={openMenu ? 'nav_menu active': 'nav_menu'} onClick={handleCloseMenu}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/vehicles'>Vehicles</Link></li>
                    </ul>
                    <div className={openMenu ? 'menu active': 'menu'} onClick={handleOpenMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
        </C.HeaderContainer>
    )
}
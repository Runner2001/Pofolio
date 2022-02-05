import React, { useState } from 'react'
import logo from '../icons/R.svg';
import Humbugar from '../icons/menu.svg';
import Close from '../icons/x.svg';

function Header() {
    const [navitem, setNavitem] = useState([
        { id: 'Home', text: 'Home', active: true },
        { id: 'Project', text: 'Project', active: false },
        { id: 'Service', text: 'Service', active: false },
        { id: 'Aboutme', text: 'About me', active: false },
        { text: 'Contact', button: true, active: true }
    ])
    const [menu, setMenu] = useState(false)
    const [click, setClick] = useState(false);
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="logo"
                />
                <img src={`${!click ? Humbugar : Close}`}
                    className={`${click ? 'menu-bar bargar' : 'menu-bar'}`}
                    alt="menu"
                    onClick={() => {
                        setMenu(!menu)
                        setClick(!click)
                    }}

                />
            </div>
            <nav className={`${menu ? 'navbar nav-active' : 'navbar'}`}>
                <ul className='nav'>
                    {navitem.map(item => (
                        <li
                            className={`${item.button ? 'nav-item nav-btn' : item.active ? 'nav-item active' : 'nav-item'} `}
                            key={item.text}
                            id={item.id}
                        >{item.text}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header

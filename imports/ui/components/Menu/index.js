import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import './menu.css';

const menuItems = [
    {
        title: 'Home',
        link: '/',
        permissions: ['public']
    },
    {
        title: 'About',
        link: '/about',
        permissions: ['public']
    },
    {
        title: 'Service',
        link: '/service',
        permissions: ['public']
    },
    {
        title: 'Porfolio',
        link: '/porfolio',
        permissions: ['public']
    },
    {
        title: 'Contact',
        link: '/contact',
        permissions: ['public']
    },
];

class Menu extends React.PureComponent {
    render() {
        return (
            <nav className="menu">
                <div className="menu-inner">
                    {menuItems.map(({ title, link, permissions }, index) => (
                        <div className="menu-link" key={index.toString()}>
                            <Link to={link} >
                                {title}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>

        );
    }
}

export default Menu;
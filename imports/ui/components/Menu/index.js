import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//Styles
import './menu.css';

const menuItems = [
    {
        title: 'Home',
        link: '/',
        permissions: ['public']
    },
    {
        title: 'My Story',
        link: '/my-story',
        permissions: ['public']
    },
    {
        title: 'Portfolio',
        link: '/portfolio',
        permissions: ['public']
    },
    {
        title: 'Resume',
        link: '/resume',
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
        const { history } = this.props;
        const activeUrl = history.location.pathname;
        return (
            <nav className="menu">
                <div className="menu-inner">
                    {menuItems.map(({ title, link, permissions }, index) => (
                        <div className={`menu-link ${activeUrl === link && 'active-link'}`} key={index.toString()}>
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

export default withRouter(Menu);
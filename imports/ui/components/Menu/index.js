import React from 'react';

//Styles
import './menu.css';


class Menu extends React.PureComponent {
    render() {
        return (
            <div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="/">
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                <p>About</p>
                            </a>
                        </li>
                        <li>
                            <a href="/service">
                                <p>Service</p>
                            </a>
                        </li>
                        <li>
                            <a href="/portfolio">
                                <p>Porfolio</p>
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                <p>Contact Us</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;
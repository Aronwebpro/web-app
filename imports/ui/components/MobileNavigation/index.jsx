import React from 'react';
import { Link } from 'react-router-dom';

//HOC
import withMobile from '../../hoc/withMobile';

//Antd
import Icon from 'antd/lib/icon';

//Styles
import './mobile-navigation.css';


//Menu Items
const iconStyles = {
    fontSize: '25px',
    color: '#fff',
    marginTop: '15px',
};

const navigationItems = [
    {
        title: 'Home',
        icon: 'home',
        labelComponent:
            (
                <div className='mobile-navigation-item-button'>
                    <Icon type="home" style={iconStyles}/>
                    <p>Home</p>
                </div>
            ),
        link: '/'
    },
    {
        title: 'My Story',
        icon: 'coffee',
        labelComponent:
            (
                <div className='mobile-navigation-item-button'>
                    <Icon type="coffee" style={iconStyles}/>
                    <p>My Story</p>
                </div>
            ),
        link: '/my-story',
    },
    {
        title: 'Resume',
        icon: 'file-done',
        labelComponent:
            (
                <div className='mobile-navigation-item-button'>
                    <Icon type="file-done" style={iconStyles}/>
                    <p>Resume</p>
                </div>
            ),
        link: '/resume',
    },
    {
        title: 'Portfolio',
        icon: 'laptop',
        labelComponent:
            (
                <div className='mobile-navigation-item-button'>
                    <Icon type="laptop" style={iconStyles}/>
                    <p>Portfolio</p>
                </div>
            ),
        link: '/portfolio',
    },
];

class MobileNavigation extends React.PureComponent {
    state = {
        activeLink: '/',
    };

    render() {
        const { isMobile } = this.props;
        const { activeLink } = this.state;
        return (
            <div className='mobile-navigation-container shadow' style={{ bottom: isMobile ? 0 : -110 }}>
                <div className='mobile-navigation-wrapper'>
                    {navigationItems.map(({ title, icon, link }, index) => {
                        const hasBorder = index !== navigationItems.length - 1 ? 'has-border' : '';
                        const active = activeLink === link ? 'active' : '';
                        const iconStyles = {
                            fontSize: '25px',
                            color: active ? '#5f5f5f' : 'lightgray',
                            marginTop: '15px',
                        };
                        return (
                            <div
                                key={link}
                                className={`mobile-navigation-item ${hasBorder} ${active}`}
                            >
                                <Link
                                    to={link}
                                    onClick={this.handleClick.bind(this, link)}>
                                    <div className='mobile-navigation-item-button'>
                                        <Icon type={icon} style={iconStyles}/>
                                        <p>{title}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="mobile-navigation-footer"/>
            </div>
        );
    }

    handleClick = (activeLink) => this.setState({ activeLink });
}


export default withMobile({})(MobileNavigation);
import React from 'react';
import { Link } from 'react-router-dom';

//HOC
import withMobile from "../../hoc/withMobile";

//Antd
import Icon from 'antd/lib/icon';

//Styles
import './mobile-navigation.css';


//Menu Items
const iconStyles = {
    fontSize: '25px',
    color: '#fff'
};

const navigationItems = [
    {
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

class MobileNavigation extends React.Component {
    render() {
        const { isMobile } = this.props;

        return (
            <div className='mobile-navigation-container shadow' style={{ bottom: isMobile ? 0 : -110 }}>
                <div className='mobile-navigation-wrapper'>
                    {navigationItems.map(({ labelComponent, link }, index) => {
                        const hasBorder = index !== navigationItems.length - 1 ? 'has-border' : '';
                        const active = window.location.pathname === link ? 'active' : '';
                        return (
                            <div
                                key={link}
                                className={`mobile-navigation-item ${hasBorder} ${active}`}
                            >
                                <Link to={link}>
                                    {labelComponent}
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="mobile-navigation-footer"/>
            </div>
        );
    }
}


export default withMobile({})(MobileNavigation);
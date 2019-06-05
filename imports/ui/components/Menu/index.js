import React from 'react';

// Router
import { withRouter } from 'react-router-dom';

// Redux
import { compose } from 'redux';

// HOC
import withMobile from '../../hoc/withMobile';

// Antd
import Icon from 'antd/lib/icon';

//Styles
import './menu.css';
import withUser from '../../hoc/withUser';
import Modal from '../Modal';
import { logOut } from '../../../api/logout';


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
        title: 'Resume',
        link: '/resume',
        permissions: ['public']
    },
    {
        title: 'Portfolio',
        link: '/portfolio',
        permissions: ['public']
    },
    {
        title: 'Contact',
        link: '/contact',
        permissions: ['public']
    },
];

class Menu extends React.PureComponent {

    state = {
        showLogout: false
    };

    render() {
        const {
            history,
            isMobile,
            handleMobileLoginClick,
            user,
        } = this.props;

        const { showLogout } = this.state;

        const activeUrl = history.location.pathname;

        return !isMobile ? (
            <nav className="menu">
                <div className="menu-inner">
                    {menuItems.map(({ title, link, permissions }, index) => (
                        <div className={`menu-link ${activeUrl === link && 'active-link'}`} key={index.toString()}>
                            <a onClick={this.handleClick.bind(this, link)} >
                                {title}
                            </a>
                        </div>
                    ))}
                </div>
            </nav>
        ) : (
            <div className='login-container mobile'>
                {user ? (
                    <div className='login-wrapper-user'>
                        <div
                            className='login-name-wrapper'
                            onClick={this.handleAvatarClick}
                        >
                            <div className='user-name-container'>
                                {`${user.firstName} ${user.lastName}`}
                            </div>
                            <div className='user-avatar-container'>
                                {user.profilePictures[0] && (
                                    <img
                                        src={user.profilePictures[0]}
                                        alt={`${user.firstName} ${user.lastName}`}
                                    />
                                )}
                            </div>
                        </div>
                        {/*<div*/}
                            {/*className={`logout-button-container ${showLogout ? 'active' : 'passive'}`}*/}
                            {/*onClick={this.logout}*/}
                        {/*>*/}
                            {/*<div className='logout-button '>*/}
                                {/*Logout*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                ) : (
                    <Icon
                        type="login"
                        onClick={handleMobileLoginClick}
                        style={{ fontSize: 35, color: '#fff', display: 'flex' }}
                    />
                )}
            </div>
        );
    }

    handleClick = (link) => {
        const { openModal } = this.props;
        if (link === '/contact') {
            openModal();
        } else {
            this.props.history.push(link);
            this.forceUpdate();
        }
    };

    handleAvatarClick = () => {
        const currentState = this.state.showLogout;
        this.setState({ showLogout: !currentState });
    };

    logout = () => {
        logOut();
        this.setState({ showLogout: false });
    }
}

export default compose(
    withRouter,
    withUser({}),
    withMobile({}),
)(Menu);
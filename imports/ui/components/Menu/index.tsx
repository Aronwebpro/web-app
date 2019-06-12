import * as React from 'react';

// Router
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Redux
import { compose } from 'redux';

// HOC
import withMobile from 'imports/ui/hoc/withMobile';
import withUser from '../../hoc/withUser.js';

// Antd
import Icon from 'antd/lib/icon';

// Api
import { logOut } from 'imports/api/logout';

//Styles
import './menu.css';

// @types
interface ReduxProps {
    isMobile: boolean
    user: User
}

interface Props {
    handleMobileLoginClick: () => void
    handleAvatarClick: () => void
    openModal?: () => void
}

interface MenuItem {
    title: string
    link: string
    permissions: string[]
}

// Local variables
const menuItems: MenuItem[] = [
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

class Menu extends React.PureComponent<Props & ReduxProps & RouteComponentProps, {}> {
    render() {
        const {
            history,
            isMobile,
            handleMobileLoginClick,
            user,
            handleAvatarClick,
        } = this.props;

        const activeUrl = history.location.pathname;

        return !isMobile ? (
            <nav className="menu">
                <div className="menu-inner">
                    {menuItems.map<JSX.Element>(({ title, link, permissions }, index) => (
                        <div className={`menu-link ${activeUrl === link && 'active-link'}`} key={index.toString()}>
                            <a onClick={this.handleMenuClick.bind(this, link)} >
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
                            onClick={handleAvatarClick}
                        >
                            <div className='user-name-container'>
                                <p>{`${user.firstName}`}</p>
                                <p>{`${user.lastName}`}</p>
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

    // Handle Menu Link click
    handleMenuClick = (link: string): void => {
        const { openModal } = this.props;
        if (link === '/contact') {
            openModal();
        } else {
            this.props.history.push(link);
            this.forceUpdate();
        }
    };
}

export default compose<React.ComponentType<Props>>(
    withRouter,
    withUser({}),
    withMobile({}),
)(Menu);
import React from 'react';
import PropTypes from 'prop-types';


// Api
import { logOut } from '/imports/api/logout';

// Styles
import './login.css';

export default class DesktopLoginView extends React.PureComponent {
    static propTypes = {
        handleLinkedInLogin: PropTypes.func.isRequired,
        loginWithEmail: PropTypes.func.isRequired,
    };

    state = {
        showLogout: false
    };

    render() {
        const {
            user,
            handleLinkedInLogin,
            loginWithEmail
        } = this.props;

        const {
            showLogout,
        } = this.state;

        return user === undefined ? (
            <div className="login-wrapper">

            </div>
        ) : (
            <>
                {user === null ? (
                    <div className="login-wrapper">
                        <form onSubmit={loginWithEmail}>
                            <label htmlFor="username">Email:</label>
                            <input
                                name="username"
                                type="text"
                            />
                            <label htmlFor="">Password:</label>
                            <input name="password" type="password"/>
                            <div className="top-row-login-button">
                                <input className="top-row_login" type="submit" value="Login"/>
                            </div>
                        </form>
                        <div className="linkedIn-button">
                            <img
                                src="/img/logos/linkedInButton.png"
                                alt="Login LinkedIn"
                                onClick={handleLinkedInLogin}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="login-wrapper-user">
                        <div className='login-name-wrapper' onClick={this.handleAvatarClick}>
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
                        <div
                            className={`logout-button-container ${showLogout ? 'active' : 'passive'}`}
                            onClick={this.logout}
                        >
                            <div className='logout-button '>
                                Logout
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    handleAvatarClick = () => {
        const currentState = this.state.showLogout;
        this.setState({ showLogout: !currentState });
    };

    logout = () => {
        logOut();
        this.setState({ showLogout: false });
    }
}
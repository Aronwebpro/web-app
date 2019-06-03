import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './login.css';

export default class DesktopLoginView extends React.PureComponent {
    static propTypes = {
        handleLinkedInLogin: PropTypes.func.isRequired,
        loginWithEmail: PropTypes.func.isRequired,
    };

    render() {
        const { handleLinkedInLogin, loginWithEmail } = this.props;
        return (
            <div className="login-wrapper">
                <form onSubmit={loginWithEmail}>
                    <label htmlFor="username">Email:</label>
                    <input
                        name="username"
                        type="text"
                        ref={input => this.userInput = input}
                    />
                    <label htmlFor="">Password:</label>
                    <input name="password" type="password" ref={input => this.passInput = input}/>
                    <div className="top-row-login-button">
                        <input className="top-row_login" type="submit"  value="Login"/>
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
        );
    }
}
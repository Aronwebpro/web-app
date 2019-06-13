import * as React from 'react';
import PropTypes = require('prop-types');

// Router
import { Link } from 'react-router-dom';

// Components
import Modal from 'imports/ui/components/Modal';

// Styles
import './mobile-login-modal.css';

//@types
import { FormEvent } from 'react';

interface Props {
    visible: boolean
    onClose: () => void
    loginLinkedIn: () => void
    loginWithEmail: (e: FormEvent<HTMLFormElement>) => void

}
export default class MobileLoginModal extends React.PureComponent<Props, {}> {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        loginWithEmail: PropTypes.func.isRequired,
        loginLinkedIn: PropTypes.func.isRequired,
    };

    render() {
        const {
            visible,
            onClose,
            loginWithEmail,
            loginLinkedIn,
        } = this.props;
        return (
            <Modal
                {...{
                    visible,
                    onClose,
                    title: 'Login',
                    footer: null
                }}
            >
                <div>
                    <div className="mobile-login-wrapper">
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
                    </div>
                    <div className='mobile-login-or'>
                        <h3>
                            <span>OR</span>
                        </h3>
                    </div>
                    <div>
                        <section className='contact-container'>
                            <div className='login-with-linkedin-modal'>
                                <p>Login with LinkedIn by clicking button bellow.</p>
                                <div className='link'>
                                    <img
                                        id="linkedin-img"
                                        src="/img/linkedin2.png"
                                        alt="LinkedIn"
                                        onClick={loginLinkedIn}
                                    />
                                </div>
                                <div className='mobile-login-modal-disclosure'>
                                    <div>By clicking this button you accept
                                        <br/>
                                        {` {`}
                                        <span style={{ color: '#ffdb4d' }}>{` I'm `}</span>
                                        <span style={{ color: '#aae3f3' }}>{` Apps`}</span>
                                        <span style={{ color: '#ec2720' }}>{` Brewer `}</span>
                                        {`} `}
                                    </div>
                                    <div>
                                        <div>
                                            <Link
                                                to="/terms-of-services"
                                                className='theme-color'
                                                onClick={close}
                                            >
                                                Terms of Service
                                            </Link>
                                            {` & `}
                                            <Link
                                                to="/privacy-policy"
                                                className='theme-color'
                                                onClick={close}
                                            >
                                                Privacy Policy
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Modal>
        );
    }
}
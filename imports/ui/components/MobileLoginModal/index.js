import React from 'react';
import PropTypes from 'prop-types';

// Router
import { Link } from 'react-router-dom';

// Components
import Modal from '/imports/ui/components/Modal';

// Styles
import './mobile-login-modal.css';

export default class MobileLoginModal extends React.PureComponent {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
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
                                <p>To Create or Login with LinkedIn click the button bellow.</p>
                                <div className='link'>
                                    <img
                                        id="linkedin-img"
                                        src="/img/linkedin2.png"
                                        alt="LinkedIn"
                                        onClick={loginLinkedIn}
                                    />
                                </div>
                                <div>
                                    <p>By clicking this button you accept
                                        <br/>
                                        {` {`}
                                        <span style={{ color: '#ffdb4d' }}>{` I'm `}</span>
                                        <span style={{ color: '#aae3f3' }}>{` Apps`}</span>
                                        <span style={{ color: '#ec2720' }}>{` Brewer `}</span>
                                        {`} `}
                                        <br/>
                                        website
                                    </p>
                                    <p>
                                        <span className='theme-color'><Link to="/terms-of-services" onClick={close}>Terms of Service</Link></span>
                                        {` & `}
                                        <span className='theme-color'><Link to="/privacy-policy"
                                                                            onClick={close}>Privacy Policy</Link></span>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Modal>
        );
    }
}
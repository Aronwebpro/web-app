import * as React from 'react';
import PropTypes = require('prop-types');

// Router
import { Link } from 'react-router-dom';

// Components
import Modal from 'imports/ui/components/Modal';

// Styles
import './linkedin-login-modal.css';

//@types
interface Props {
    visible: string
    close: () => void
    login: () => void
}

export default class LinkedInLoginModal extends React.PureComponent<Props, {}> {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
    };

    render() {
        const {
            visible,
            close,
            login,
        } = this.props;
        return (
            <Modal
                visible={visible}
                onClose={close}
            >
                <section className='contact-container'>
                    <div className='login-with-linkedin-modal'>
                        <p>To Create or Login with LinkedIn click the button bellow.</p>
                        <div className='link'>
                            <img
                                id="linkedin-img"
                                src="/img/linkedin2.png"
                                alt="LinkedIn"
                                onClick={login}
                            />
                        </div>
                        <div>
                            <p>By clicking this button you accept
                                {` {`}
                                <span style={{ color: '#ffdb4d' }}>{` I'm `}</span>
                                <span style={{ color: '#aae3f3' }}>{` Apps`}</span>
                                <span style={{ color: '#ec2720' }}>{` Brewer `}</span>
                                {`} `}
                                website
                            </p>
                            <p>
                                <span className='theme-color'><Link to="/terms-of-services" onClick={close}>Terms of Service</Link></span>
                                {` & `}
                                <span className='theme-color'><Link to="/privacy-policy" onClick={close}>Privacy Policy</Link></span>
                            </p>
                        </div>
                    </div>
                </section>
            </Modal>
        );
    }
}
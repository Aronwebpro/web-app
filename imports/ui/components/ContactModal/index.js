import React from 'react';
import PropTypes from 'prop-types';

//Components
import Modal from '/imports/ui/components/Modal';

//Styles
import './contact-modal.css';

export default class ContactModal extends React.PureComponent {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    render() {
        const { visible, onClose } = this.props;
        return (
            <Modal
                {...{
                    title: 'Contact',
                    maxWidth: '800px',
                    visible,
                    onClose,
                }}
            >
                <section className='contact-container'>
                    <div className='greeting'>
                        <blockquote>
                            <p>Hey! Thanks for stopping by, if you want to contact me, please do that through
                                Linkedin.</p>
                        </blockquote>
                        <div className='link'>
                            <p>Just click the link below, visit my profile and send me a message!</p>
                            <a href="http://www.linkedin.com/in/aaron-app-brewer" target="_blank">
                                <img id="linkedin-img" src="/img/linkedin2.png" alt="LinkedIn"/>
                            </a>
                        </div>
                    </div>
                </section>
            </Modal>
        );
    }

}
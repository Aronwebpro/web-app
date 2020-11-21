import * as React from 'react';
import * as PropTypes from 'prop-types';

// Components
import Modal from 'imports/ui/components/Modal';

// Styles
import './contact-modal.css';

interface Props {
    visible: boolean;
    onClose: () => void;
}

export default class ContactModal extends React.PureComponent<Props, {}> {
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
                    <div className='greeting contact-content'>
                        <p>Hey! Thanks for stopping by, if you want to contact me, shoot me a message on LinkedIn.</p>
                        <div className='link'>
                            <p>Just click the link below to my profile!</p>
                            <a href="http://www.linkedin.com/" target="_blank">
                                <img id="linkedin-img" src="/img/linkedin2.png" alt="LinkedIn"/>
                            </a>
                        </div>
                    </div>
                </section>
            </Modal>
        );
    }
}
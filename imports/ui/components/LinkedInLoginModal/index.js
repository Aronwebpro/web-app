import React from 'react';
import Modal from "../Modal";

export default class LinkedInLoginModal extends React.PureComponent {
    render() {
        const {
            visible,
        } = this.props;
        return (
            <Modal
                visible={visible}
                onClose={() => {}}
            >
                <div>
                    Byrka
                </div>
            </Modal>
        )
    }
}
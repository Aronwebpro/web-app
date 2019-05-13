import React from 'react';
import PropTypes from 'prop-types';

//Styles
import './modal.css';


export default class Modal extends React.PureComponent {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        title: PropTypes.string,
        footer: PropTypes.object,
        header: PropTypes.object,
        onClose: PropTypes.func.isRequired,
        closeText: PropTypes.string,
        okText: PropTypes.string,
    };

    state = {
        top: '-100%',
    };

    render() {
        const {
            visible,
            header,
            footer,
            title,
            onClose,
            okText
        } = this.props;
        const { top } = this.state;
        return visible ? (
            <div className="modal-block">
                <div className="modal-inner" style={{ top }}>
                    <div className="modal-inner-content">
                        <div className="modal-header">
                            <div className="modal-header-content">
                                {header ? header : (
                                    <h3 className="modal-title">
                                        {title}
                                    </h3>
                                )}
                            </div>
                            <div className="modal-header-button">
                                <button
                                    type="button"
                                    className="close-button modal-close-button"
                                    data-target="parts-modal"
                                    aria-label="close"
                                    onClick={onClose}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {footer ? footer() : (
                                <>
                                    {footer && (
                                        <span>{footer}</span>
                                    )}
                                    {okText && (
                                        <button
                                            type="button"
                                            className="modal-footer-button modal-ok-button"
                                            data-target="parts-modal"
                                            aria-label="close"
                                            onClick={onClose}
                                        >
                                            <span aria-hidden="true">{okText}</span>
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        className="modal-footer-button modal-close-button"
                                        data-target="parts-modal"
                                        aria-label="close"
                                        onClick={onClose}
                                    >
                                        <span aria-hidden="true">Close</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ) : null;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.visible !== this.props.visible && this.props.visible) {
            setTimeout(this.animation, 10);
        } else if (prevProps.visible !== this.props.visible && !this.props.visible) {
            this.setState({ top: '-100%' });
        }
    }

    animation = () => this.setState({ top: '0' });
}
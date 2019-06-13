import * as React from 'react';
import PropTypes = require('prop-types');

//Styles
import './modal.css';

//@types
type Props = {
    visible: boolean
    onClose: () => void
    title?: string
    header?: JSX.Element
    footer?: JSX.Element
    okText?: string
    width?: string
    maxWidth?: string
}

type State = {
    top: string
}

export default class Modal extends React.PureComponent<Props, State> {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        title: PropTypes.string,
        footer: PropTypes.object,
        header: PropTypes.object,
        onClose: PropTypes.func.isRequired,
        closeText: PropTypes.string,
        okText: PropTypes.string,
        width: PropTypes.string,
        maxWidth: PropTypes.string,
    };

    static defaultProps = {
        width: '100%',
        maxWidth: '600px',
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
            okText,
            width,
            maxWidth,
        } = this.props;
        const { top } = this.state;
        return visible ? (
            <div className="modal-block">
                <div className="modal-inner" style={{ top, width, maxWidth }}>
                    <div className="modal-inner-content">
                        <div className="modal-header">
                            <div className="modal-header-content">
                                {header ? header : (
                                    <h2 className="modal-title">
                                        {title}
                                    </h2>
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
                            {footer ? <footer /> : (
                                <>
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
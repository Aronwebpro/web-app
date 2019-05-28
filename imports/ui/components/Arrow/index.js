import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './arrow.css';

export default class Arrow extends React.PureComponent {
    static propTypes = {
        state: PropTypes.string.isRequired,
        color: PropTypes.string,
    };
    static defaultProps = {
        color: '#000',
    };

    render() {
        const { state, color } = this.props;
        return (
            <div className={`arrows ${state}`}>
                <div className="arrow-left-side" style={{ borderRight: `2px solid ${color}` }}/>
                <div className="arrow-right-side" style={{ borderRight: `2px solid ${color}` }}/>
            </div>
        );
    }
}
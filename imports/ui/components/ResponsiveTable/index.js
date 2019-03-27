import React from 'react';
import PropTypes from 'prop-types';

//Components
import ResponsiveTableDesktop from './ResponsiveTableDesktop';
import ResponsiveTableMobile from './ResponsiveTableMobile';


export default class ResponsiveTable extends React.Component {
    static propTypes = {
        isMobile: PropTypes.bool,
    };

    static defaultProps = {
        isMobile: false,
    };

    render() {
        const { isMobile } = this.props;
        return isMobile ? (
            <ResponsiveTableMobile {...this.props} />
        ) : (
            <ResponsiveTableDesktop {...this.props} />
        );
    }
}
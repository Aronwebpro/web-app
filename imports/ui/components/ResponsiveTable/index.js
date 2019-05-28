import React from 'react';
import PropTypes from 'prop-types';

//Redux
import { compose } from 'redux';

//HOC
import withMobile  from '/imports/ui/hoc/withMobile';

//Components
import ResponsiveTableDesktop from './ResponsiveTableDesktop';
import ResponsiveTableMobile from './ResponsiveTableMobile';


class ResponsiveTable extends React.Component {
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

export default compose(
    withMobile({})
)(ResponsiveTable);
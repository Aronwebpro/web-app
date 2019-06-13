import * as React from 'react';
import PropTypes = require('prop-types');

// Redux
import { compose } from 'redux';

// HOC
import withMobile, { WithMobileProps } from 'imports/ui/hoc/withMobile';

// Components
import ResponsiveTableDesktop from './ResponsiveTableDesktop';
import ResponsiveTableMobile from './ResponsiveTableMobile';

// @types
type Props = ResponsiveTableDesktop['props'] &
    ResponsiveTableMobile['props'] & {}

class ResponsiveTable extends React.Component<Props & WithMobileProps, {}> {
    render() {
        const { isMobile } = this.props;
        return isMobile ? (
            <ResponsiveTableMobile {...this.props} />
        ) : (
            <ResponsiveTableDesktop {...this.props} />
        );
    }
}

export default compose<React.ComponentType<Props>>(
    withMobile({})
)(ResponsiveTable);
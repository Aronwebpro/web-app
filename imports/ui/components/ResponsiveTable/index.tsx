import * as React from 'react';
import PropTypes = require('prop-types');

// Redux
import { compose } from 'redux';

// HOC
import withMobile  from 'imports/ui/hoc/withMobile';

// Components
import ResponsiveTableDesktop from './ResponsiveTableDesktop';
import ResponsiveTableMobile from './ResponsiveTableMobile';

interface ReduxProps {
    isMobile: boolean
}
class ResponsiveTable extends React.Component<ReduxProps, {}> {
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
import * as React from 'react';
import PropTypes = require('prop-types');
import * as hoistNonReactStatics from 'hoist-non-react-statics';

// Utils
import { getDisplayName } from 'imports/ui/hoc/utils';

import { connect } from 'react-redux';

export interface WithMobileProps {
    isMobile: boolean
}

type WrapperFunction<T> = (WrappedComponent: React.ComponentType<T>) => React.ComponentType<T>

/**
 * Provides the following props from Redux:
 * isMobile
 * @param connectOptions - options object passed to react-redux connect()
 */
const withMobile = <T extends {}>({ connectOptions = {} } = {}): WrapperFunction<T> => WrappedComponent => {
    const connectOptionsWithDefaults = {
        pure: true,
        forwardRef: false,
        ...connectOptions
    };
    /*WrappedComponent.propTypes = {
        ...WrappedComponent.propTypes,
        isMobile: PropTypes.bool.isRequired,
    };*/

    const WrappedComponentConnected = connect<WithMobileProps, {}, T, {}, WithMobileProps>(
        (state, ownProps) => {
            // mapStateToProps
            return {
                // ref: ownProps.forwardedRef,
                // forwardedRef: ownProps.forwardedRef,
                isMobile: state.isMobile
            };
        },
        null,
        null,
        connectOptionsWithDefaults
        // @ts-ignore: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31363
    )(WrappedComponent);

    // explanation at https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
    hoistNonReactStatics(WrappedComponentConnected, WrappedComponent);

    WrappedComponentConnected.displayName = `withMobile(${getDisplayName(WrappedComponent)})`;
    //console.log({WrappedComponentConnected});

    return WrappedComponentConnected;
};

export default withMobile;
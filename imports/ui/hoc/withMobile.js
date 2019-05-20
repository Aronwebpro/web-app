import { getDisplayName } from '/imports/ui/hoc/utils';
import hoistNonReactStatics from 'hoist-non-react-statics';
import PropTypes from 'prop-types';
import * as React from 'react';
const { Component, PureComponent } = React;
import { connect } from 'react-redux';

/**
 * Provides the following props from Redux:
 * isMobile
 * @param connectOptions - options object passed to react-redux connect()
 */
const withMobile = ({ connectOptions = {} } = {}) => WrappedComponent => {
    const connectOptionsWithDefaults = {
        pure: true,
        forwardRef: false,
        ...connectOptions
    };
    WrappedComponent.propTypes = {
        ...WrappedComponent.propTypes,
        isMobile: PropTypes.bool.isRequired,
    };

    const WrappedComponentConnected = connect(
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
    )(WrappedComponent);

    // explanation at https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
    hoistNonReactStatics(WrappedComponentConnected, WrappedComponent);

    WrappedComponentConnected.displayName = `withMobile(${getDisplayName(WrappedComponent)})`;
    //console.log({WrappedComponentConnected});

    return WrappedComponentConnected;
};

export default withMobile;
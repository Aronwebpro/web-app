import * as React from 'react';
import { Meteor } from 'meteor/meteor';
const { Component, PureComponent } = React;
import * as PropTypes from 'prop-types';
import hoistNonReactStatics = require('hoist-non-react-statics');

// Redux
import { connect } from 'react-redux';

/**
 * Provides the following props from Redux:
 * User Global State
 * @param connectOptions - options object passed to react-redux connect()
 */

export interface WithUserProps {
    user: User,
}

type WrapperFunction<T> = (WrappedComponent: React.ComponentType<T>) => React.ComponentType<T>

const withUser = <T extends {}>({connectOptions = {}} = {}): WrapperFunction<T> => (WrappedComponent) => {
    const connectOptionsWithDefaults = {
        pure: true,
        forwardRef: false,
        ...connectOptions
    };

    const WrappedComponentConnected = connect<WithUserProps, {}, T, {}, { userState: { user?: User } }>(
        (state, ownProps) => {
            // mapStateToProps
            return {
                // ref: ownProps.forwardedRef,
                // forwardedRef: ownProps.forwardedRef,
                user: state.userState.user,
            };
        },
        null,
        null,
        connectOptionsWithDefaults
        // @ts-ignore: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31363
    )(WrappedComponent);

    // explanation at https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
    hoistNonReactStatics(WrappedComponentConnected, WrappedComponent);

    WrappedComponentConnected.displayName = `withUser(${WrappedComponent})`;

    return WrappedComponentConnected;
};

export default withUser;
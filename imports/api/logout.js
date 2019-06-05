import { Meteor } from 'meteor/meteor';

// Components
import Message from '/imports/ui/components/Message';

/**
 * Meteor Logout Handler
 * @returns React.Component -> Redirects to "/"
 */
const logOut = () => {
    Meteor.logout(() => {
        Message.success('successfully Logged out.');
    });
};

export {
    logOut
};
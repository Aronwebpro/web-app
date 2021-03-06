import { Meteor } from 'meteor/meteor';

// Components
import Message from '/imports/ui/components/Message';

/**
 * Meteor Login Handler
 * @param email
 * @param password
 * @param callback
 * @return Callback -> Function
 */
export const loginEmail = ({ email, password }, callback) => {
    Meteor.loginWithPassword({ email }, password, (e, r) => {
        if (e) {
            Message.error('Incorrect Password or Email');
        } else {
            Message.success('Successfully logged in!');
            if (callback) {
                return callback();
            }
        }
    });
};

/**
 * Meteor Login With LinkedIn
 */
export const loginLinkedIn = (callBack) => {
    Meteor.loginWithLinkedIn({
        requestPermissions: ['r_liteprofile', 'r_emailaddress']
    }, (e) => {
        if (e) {
            console.log('error with login is: ', e);
            Message.error(e.reason || 'Server Error');
        } else {
            const user = Meteor.user();
            if (user === null) {
                console.log("user object not here");
            } else {
                //TODO: 
            }
            callBack();
            Message.success('Logged in Successfully.');
        }
    });
};

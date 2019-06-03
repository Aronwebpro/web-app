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
const loginEmail = ({ email, password }, callback) => {
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
const loginLinkedIn = (callBack) => {
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
                console.log(user);
            }
            callBack();
            //TODO: Set Redux State for USER
            Message.success('Logged in Successfully.');
        }
    });
};

export {
    loginEmail,
    loginLinkedIn
};
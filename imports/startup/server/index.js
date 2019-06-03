import { Meteor } from 'meteor/meteor';
import '/imports/api/methods/admin';
import '/imports/api/methods/user';

Meteor.startup(() => {
    //LinkedIn
    //Set LoginWithLinkedIn Settings from settings.json file to meteor_accounts_loginServiceConfiguration collection
    const linkedIn =  Meteor.settings && Meteor.settings.linkedIn;
    if (
        linkedIn &&
        linkedIn.clientId &&
        linkedIn.secret
    ) {
        ServiceConfiguration.configurations.upsert(
            { service: 'linkedin' },
            {
                $set: {
                    service: 'linkedin',
                    clientId: Meteor.settings && Meteor.settings.linkedIn && Meteor.settings.linkedIn.clientId,
                    secret: Meteor.settings && Meteor.settings.linkedIn && Meteor.settings.linkedIn.secret,
                }
            }
        );
    }
    //Method is called when Login/Register with LinkedIn is proceed
    //Update User Profile Picture From services->linkedIn->pictureUrl To profile->pictureUrl fields
    Accounts.validateLoginAttempt(({ user }) => {
        if ( user && user.isBlocked) {
            return false;
        }

        if (user) {
            const userObj = Meteor.users.findOne({ _id: user._id });
            if (userObj.profile && userObj.profile.numConnections) {
                Meteor.users.update({ _id: user._id }, { $unset: { 'profile.numConnections': 1 } });
            }
            const pictureUrl = userObj && userObj.services && userObj.services.linkedin && userObj.services.linkedin.pictureUrl;
            if (pictureUrl) {
                Meteor.users.update({ _id: user._id }, { $set: { 'profile.pictureUrl': pictureUrl } });
                return true;
            }
            //Return truly value to proceed the login
            return true;
        }
    });
});
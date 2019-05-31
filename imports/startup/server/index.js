import { Meteor } from 'meteor/meteor';
import '/imports/api/methods/admin';

Meteor.startup(() => {
    //LinkedIn
    //Set LoginWithLinkedIn Settings from settings.json file to meteor_accounts_loginServiceConfiguration collection
    const linkedin =  Meteor.settings && Meteor.settings.linkedin;
    if (
        linkedin &&
        linkedin.clientId &&
        linkedin.secret
    ) {
        ServiceConfiguration.configurations.upsert(
            { service: 'linkedin' },
            {
                $set: {
                    service: 'linkedin',
                    clientId: Meteor.settings && Meteor.settings.linkedin && Meteor.settings.linkedin.clientId,
                    secret: Meteor.settings && Meteor.settings.linkedin && Meteor.settings.linkedin.secret,
                }
            }
        );
    }
    //Method is called when Login/Register with LinkedIn is proceed
    //Update User Profile Picture From services->linkedIn->pictureUrl To profile->pictureUrl fields
    Accounts.validateLoginAttempt(({ user }) => {
        if ( user && user.isDeactivated) {
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
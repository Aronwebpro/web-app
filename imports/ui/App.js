import React from 'react';

//Router
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

//Meteor
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

//Redux
import { Provider } from 'react-redux';
import store from '/imports/redux/store';
import { changeIsMobile, setUser } from '../redux/actions';

//Components
import AuthenticatedRoute from './AuthenticatedRoute';
import ContactModal from '/imports/ui/components/ContactModal';
import MobileNavigation from '/imports/ui/components/MobileNavigation';

//Template
import PageLayout from './template/PageLayout';
import Header from '../ui/template/Header';
import Footer from '../ui/template/Footer';

//Handlers
import { logOut } from '../api/logout';

//Theme Styles
import '/imports/assets/css/theme.css';


//Page Components
import Home from '../ui/pages/Home/Home';
import Story from '../ui/pages/Story/Story';
import Portfolio from '../ui/pages/Portfolio/Portfolio';
import Resume from '../ui/pages/Resume/Resume';
import PrivacyPolicy from '../ui/pages/Documents/PrivacyPolicy';
import ServicesTerms from '../ui/pages/Documents/ServicesTerms';

//Pages
const HomePage = PageLayout({
    PageComponent: Home,
    pageId: 'home',
    layout: 'default',
    SideBarComponent: null,
});

const MyStoryPage = PageLayout({
    PageComponent: Story,
    pageId: 'my-story',
    layout: 'default',
    SideBarComponent: null,
});

const PortfolioPage = PageLayout({
    PageComponent: Portfolio,
    pageId: 'portfolio',
    layout: 'default',
    SideBarComponent: null,
});

const ResumePage = PageLayout({
    PageComponent: Resume,
    pageId: 'resume',
    layout: 'default',
    SideBarComponent: null,
});

const PrivacyPolicyPage = PageLayout({
    PageComponent: PrivacyPolicy,
    pageId: 'privacy-policy',
    layout: 'default',
    SideBarComponent: null,
});
const ServicesTermsPage = PageLayout({
    PageComponent: ServicesTerms,
    pageId: 'services-terms',
    layout: 'default',
    SideBarComponent: null,
});


class App extends React.Component {
    constructor(props) {
        super(props);
        store.dispatch(changeIsMobile(window.innerWidth < 600));
        this.state = {
            contactsModalVisible: false,
        };
    }

    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div>
                        <Header {...{ openModal: this.handleModalOpen }} />
                        <Switch>
                            <Route path='/logout' render={logOut}/>
                            {/*<Route path='/enroll-account/:token' render={({ match }) => <ManagePassword token={match && match.params && match.params.token} firstPassword={true}/>}/>*/}
                            <AuthenticatedRoute path='/dashboard' render={() => <div>Hello Dashboard!</div>}/>
                            {/*Public Pages*/}
                            <Route path='/my-story' component={MyStoryPage}/>
                            <Route path='/portfolio' component={PortfolioPage}/>
                            <Route path='/resume' component={ResumePage}/>
                            <Route path='/terms-of-services' component={ServicesTermsPage}/>
                            <Route path='/privacy-policy' component={PrivacyPolicyPage}/>
                            <Route path='/' component={HomePage}/>
                        </Switch>
                        <Footer/>
                        <ContactModal
                            {...{
                                visible: this.state.contactsModalVisible,
                                onClose: this.handleModalClose,
                            }}
                        />
                        <MobileNavigation/>
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        const currIsMobile = window.innerWidth < 600;
        const prevIsMobile = store.getState().isMobile;
        if (prevIsMobile !== currIsMobile) {
            store.dispatch(changeIsMobile(currIsMobile));
        }
    };

    handleModalClose = () => this.setState({ contactsModalVisible: false });
    handleModalOpen = () => this.setState({ contactsModalVisible: true });
}

// UserMeteor Data
// Set Redux state
const getData = () => {
    const userObj = Meteor.user();
    const user = userObj && {
        email: userObj.profile.email,
        firstName: userObj.profile.firstName.localized.en_US,
        lastName: userObj.profile.lastName.localized.en_US,
        profilePictures: userObj.profile.profilePicture.identifiersUrl,
    };
    // Update Redux state
    store.dispatch(setUser({ user }));

    // Return Props
    return {
        user
    };
};

export default withTracker(getData)(App);
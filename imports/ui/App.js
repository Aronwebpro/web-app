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

//Components
import AuthenticatedRoute from './AuthenticatedRoute';

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
import Contact from '../ui/pages/Contact/Contact';

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

const ContactPage = PageLayout({
    PageComponent: Contact,
    pageId: 'contact',
    layout: 'default',
    SideBarComponent: null,
});


class App extends React.Component {
    state = {
        isMobile: window.innerWidth < 600,
    };

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/logout' render={logOut}/>
                        {/*<Route path='/enroll-account/:token' render={({ match }) => <ManagePassword token={match && match.params && match.params.token} firstPassword={true}/>}/>*/}
                        <AuthenticatedRoute path='/dashboard' render={() => <div>Hello Dashboard!</div>}/>
                        {/*Public Pages*/}
                        <Route path='/my-story' component={MyStoryPage}/>
                        <Route path='/portfolio' component={PortfolioPage}/>
                        <Route path='/resume' component={ResumePage}/>
                        <Route path='/contact' component={ContactPage}/>
                        <Route path='/' component={HomePage}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

const getData = () => {
    const user = Meteor.user();
    return {
        user
    };
};

export default withTracker(getData)(App);
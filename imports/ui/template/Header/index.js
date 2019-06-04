import React from 'react';

// Router
import { Link } from 'react-router-dom';

// Api
import { loginEmail, loginLinkedIn } from '/imports/api/login';

// Components
import Message from "../../components/Message";
import Menu from '/imports/ui/components/Menu';
import DesktopLoginView from '/imports/ui/components/DesktopLoginView';
import LinkedInLoginModal from '/imports/ui/components/LinkedInLoginModal';

// Styles
import './header.css';
import withUser from "../../hoc/withUser";

class Header extends React.Component {
    state = {
        top: '0px',
        headerMobile: '70px',
        headerMobileInner: 'scale(1)',
        headerMobileInnerMarginTop: '0px',
        flashMessage: '',
        status: '',
        shake: '',
        hideHeader: false,
        LinkedInLoginModalVisible: false,
    };

    render() {
        const {
            top,
            headerMobileInner,
            headerMobile,
            LinkedInLoginModalVisible
        } = this.state;
        const {
            user,
        } = this.props;
        return (
            <header style={{ top }}>
                <div ref={(input) => this.loginRow = input} className="login-section">
                    <DesktopLoginView
                        {...{ user }}
                        handleLinkedInLogin={this.openLinkedInLoginModal}
                        loginWithEmail={this.loginWithEmail}
                    />
                </div>
                <div className="header-body" style={{ height: headerMobile }}>
                    <div className="header-body-inner" style={{ transform: headerMobileInner }}>
                        <div className='logo-container'>
                            <h1>
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    {`{`}
                                    <span style={{ color: '#ffdb4d' }}>{` I'm`}</span>
                                    <span style={{ color: '#aae3f3' }}>{` Apps`}</span>
                                    <span style={{ color: '#ec2720' }}>{` Brewer `}</span>
                                    {`}`}
                                </Link>
                            </h1>
                        </div>
                        <div className="menu-wrapper">
                            <Menu {...this.props} />
                        </div>
                    </div>
                </div>
                <LinkedInLoginModal
                    visible={LinkedInLoginModalVisible}
                    close={this.closeLinkedInLoginModal}
                    login={this.handleMobileLoginClick}
                />
            </header>
        );
    }

    loginRow = React.createRef();

    componentDidMount() {
        window.addEventListener('scroll', this.stickHeader);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.stickHeader);
    }

    //Sticky Header Effect
    stickHeader = () => {
        if (window.scrollY > 100 === this.state.hideHeader) return;
        if (window.scrollY > 100) {
            if (window.innerWidth <= 600) {
                this.setState({
                    headerMobile: '45px',
                    headerMobileInner: 'scale(0.85)',
                    headerMobileInnerMarginTop: '-5px',
                    hideHeader: window.scrollY > 100,
                });
            } else {
                this.setState({
                    top: -(this.loginRow.clientHeight - 10) + 'px',
                    hideHeader: window.scrollY > 100,
                });
            }
        } else {
            this.setState({
                top: '0px',
                headerMobile: '70px',
                headerMobileInner: 'scale(1)',
                hideHeader: window.scrollY > 100,
            });
        }
    };

    // LinkedIn Modal handlers
    openLinkedInLoginModal = () => this.setState({ LinkedInLoginModalVisible: true });
    closeLinkedInLoginModal = () => this.setState({ LinkedInLoginModalVisible: false });

    // Login Handlers
    handleMobileLoginClick = () => {
        loginLinkedIn(this.closeLinkedInLoginModal);
    };

    loginWithEmail = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        // Client Side Validation
        switch (true) {
            case email === '' && password === '' :
                Message.error(`Email and Password can't be empty.`);
                return;
            case email === '' :
                Message.error(`Email can't be empty.`);
                return;
            case password === '' :
                Message.error(`Password can't be empty.`);
                return;
        }
        // Login
        loginEmail({ email, password }, () => {});
    };
}

export default withUser({})(Header);


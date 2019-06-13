import * as React from 'react';

// Router
import { Link } from 'react-router-dom';

// Redux
import { compose } from 'redux';

// Api
import { loginEmail, loginLinkedIn } from 'imports/api/login';
import { logOut } from 'imports/api/logout.js';

// Hoc
import withUser, { WithUserProps } from '../../hoc/withUser';
import withMobile, { WithMobileProps } from '../../hoc/withMobile';

// Components
import Message from 'imports/ui/components/Message';
import Menu from 'imports/ui/components/Menu';
import DesktopLoginView from 'imports/ui/components/DesktopLoginView';
import LinkedInLoginModal from 'imports/ui/components/LinkedInLoginModal';
import MobileLoginModal from 'imports/ui/components/MobileLoginModal';

// Styles
import './header.css';
import { FormEvent } from 'react';

type Props = {
    openModal: () => void
}

type State = {
    top: string
    headerMobile: string
    headerMobileInner: string
    headerMobileInnerMarginTop: string
    flashMessage: string
    status: string
    shake: string
    hideHeader: boolean
    linkedInLoginModalVisible: boolean
    mobileLoginModalVisible: boolean
    showLogout: boolean
}

class Header extends React.Component<Props & WithMobileProps & WithUserProps, State> {
    state = {
        top: '0px',
        headerMobile: '70px',
        headerMobileInner: 'scale(1)',
        headerMobileInnerMarginTop: '0px',
        flashMessage: '',
        status: '',
        shake: '',
        hideHeader: false,
        linkedInLoginModalVisible: false,
        mobileLoginModalVisible: false,
        showLogout: false,
    };

    render() {
        const {
            top,
            headerMobileInner,
            headerMobile,
            linkedInLoginModalVisible,
            mobileLoginModalVisible,
            showLogout,
        } = this.state;
        const {
            user,
            isMobile,
        } = this.props;

        return (
            <header style={{ top }}>
                <div
                    ref={this.loginRow}
                    className="login-section"
                >
                    <DesktopLoginView
                        {...{ user }}
                        handleLinkedInLogin={this.openLinkedInLoginModal}
                        loginWithEmail={this.loginWithEmail}
                    />
                </div>
                <div className="header-body" style={{ height: headerMobile, transition: 'all 600ms' }}>
                    <div className={`header-body-inner ${showLogout && 'logout'}`}>
                        <div className='logo-container' style={{ transform: headerMobileInner, transition: 'all 600ms' }}>
                            <h1>
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    {`{`}
                                    <span style={{ color: '#ffdb1d' }}>{` I'm`}</span>
                                    <span style={{ color: '#aae2f3' }}>{` Apps`}</span>
                                    {isMobile && (<br/>)}
                                    <span style={{ color: '#ec2920' }}>{` Brewer `}</span>
                                    {`}`}
                                </Link>
                            </h1>
                        </div>
                        <div className="menu-wrapper" style={{ transform: headerMobileInner }}>
                            <Menu
                                {...this.props}
                                handleMobileLoginClick={this.openMobileLoginModal}
                                handleAvatarClick={this.handleAvatarClick}
                            />
                        </div>
                    </div>
                    <div
                        className={`mobile-logout-button-container ${showLogout ? 'show' : 'hide' }`}
                        onClick={this.logout}
                    >
                        Logout
                    </div>
                </div>
                <LinkedInLoginModal
                    visible={linkedInLoginModalVisible}
                    close={this.closeLinkedInLoginModal}
                    login={this.loginLinkedIn}
                />
                <MobileLoginModal
                    visible={mobileLoginModalVisible}
                    onClose={this.closeMobileLoginModal}
                    loginWithEmail={this.loginWithEmail}
                    loginLinkedIn={this.loginLinkedInMobile}
                />
            </header>
        );
    }

    private loginRow: React.RefObject<HTMLDivElement> = React.createRef();

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
                    headerMobile: '50px',
                    headerMobileInner: 'scale(0.80)',
                    headerMobileInnerMarginTop: '0px',
                    hideHeader: window.scrollY > 100,
                });
            } else {
                this.setState({
                    top: -(this.loginRow.current.clientHeight - 10) + 'px',
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
    openLinkedInLoginModal = (): void => this.setState({ linkedInLoginModalVisible: true });
    closeLinkedInLoginModal = (): void => this.setState({ linkedInLoginModalVisible: false });

    // Login Handlers
    loginLinkedIn = () => {
        loginLinkedIn(this.closeLinkedInLoginModal);
    };

    loginLinkedInMobile = () => {
        loginLinkedIn(this.closeMobileLoginModal);
    };

    loginWithEmail = (e: FormEvent<HTMLElement>): void => {
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
        loginEmail({ email, password }, () => {
        });
    };

    logout = (): void => {
        logOut();
        this.setState({ showLogout: false });
    };

    // Mobile Login Modal handlers
    openMobileLoginModal = (): void => this.setState({ mobileLoginModalVisible: true });
    closeMobileLoginModal = (): void => this.setState({ mobileLoginModalVisible: false });

    // Handle Mobile Avatar click
    handleAvatarClick = (): void => this.setState({ showLogout: !this.state.showLogout });

}

export default compose<React.ComponentType<Props>>(
    withUser({}),
    withMobile({}),
)(Header);


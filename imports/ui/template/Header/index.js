import React from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Menu from '/imports/ui/components/Menu';
import Login from '/imports/ui/components/Login';
import LinkedInLoginModal from '/imports/ui/components/LinkedInLoginModal';

// Styles
import './header.css';


export default class Header extends React.Component {
    state = {
        top: '0px',
        headerMobile: '70px',
        headerMobileInner: 'scale(1)',
        headerMobileInnerMarginTop: '0px',
        flashMessage: '',
        status: '',
        shake: '',
        hideHeader: false,
        loginModalVisible: false,
    };

    render() {
        const { top, headerMobileInner, headerMobile, loginModalVisible } = this.state;
        return (
            <header style={{ top }}>
                <div ref={(input) => this.loginRow = input} className="login-section">
                    <Login
                        handleLinkedInLogin={this.handleLinkedInLogin}
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
                    visible={loginModalVisible}
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

    handleMobileLoginClick = () => {
        console.log('handleMobileLoginClick');
    };

    handleLinkedInLogin = () => {
        console.log('Logging In with Linkedin')
    };
}




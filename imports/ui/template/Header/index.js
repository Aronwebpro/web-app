import React from 'react';

// Router
import { Link } from 'react-router-dom';

// HOC
import withMobile from '../../hoc/withMobile';

// Antd
import Icon from 'antd/lib/icon';

//Components
import Menu from '../../components/Menu';
import Login from '../../components/Login';

//Styles
import './header.css';


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
    };

    render() {
        const { isMobile } = this.props;
        return (
            <header style={{ top: this.state.top }}>
                <div ref={(input) => this.loginRow = input} className="login-section">
                    <Login/>
                </div>
                <div className="header-body" style={{ height: this.state.headerMobile }}>
                    <div className="header-body-inner" style={{ transform: this.state.headerMobileInner }}>
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
                        {isMobile && (
                            <div className='login-container'>
                                <Icon
                                    type="login"
                                    onClick={this.handleMobileLoginClick}
                                    style={{ fontSize: 35, color: '#fff', display: 'flex' }}
                                />
                            </div>
                        )}
                        {!isMobile && (
                            <div className="menu-wrapper">
                                <Menu {...this.props} />
                            </div>
                        )}
                    </div>
                </div>
            </header>
        );
    }

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
    }
}export default withMobile({})(Header);



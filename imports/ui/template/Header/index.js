import React, { Component } from 'react';

//Components
import Menu from '../../components/Menu';
import Login from '../../components/Login';

export default class Header extends Component {
    state = {
        top: '0px',
        headerMobile: '70px',
        headerMobileInner: 'scale(1)',
        headerMobileInnerMarginTop: '0px',
        flashMessage: '',
        status: '',
        shake: ''
    };

    timeOut = '';


    render() {
        return (
            <header style={{ top: this.state.top }}>
                <div ref={(input) => this.loginRow = input} className="login-section">
                    <Login />
                </div>
                <div className="header-body" style={{ height: this.state.headerMobile }}>
                    <div className="header-body-inner" style={{ transform: this.state.headerMobileInner }}>
                        <div
                            className="title-wrapper"
                        >
                            <h1 style={{ display: 'inline-block' }}>
                               App<span style={{ color: 'red' }}> BREWER</span>
                            </h1>
                            <div className="title-wrapper-image-container">
                                <img src={'/img/zippy_whale.png'} alt="logo" id="site-logo"/>
                            </div>
                            <div className="mobile-login_button">
                                <a href="">Login</a>
                                <a href="">Register</a>
                            </div>
                        </div>
                        <div className="menu-wrapper">
                            <Menu />
                        </div>

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
    //Sticekr Header Effect
    stickHeader = () => {
        const top = window.scrollY;
        if (top > 100) {
            if (window.innerWidth <= 600) {
                this.setState({
                    headerMobile: '45px',
                    headerMobileInner: 'scale(0.85)',
                    headerMobileInnerMarginTop: '-5px'
                });
            } else {
                this.setState({
                    top: -(this.loginRow.clientHeight -10)  + 'px'
                });
            }
        } else {
            this.setState({
                top: '0px',
                headerMobile: '70px',
                headerMobileInner: 'scale(1)'
            });
        }
    }
}

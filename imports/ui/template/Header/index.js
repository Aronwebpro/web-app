import React, { Component } from 'react';

//Components
import Menu from '../../components/Menu';

//Styles
import './header.css';

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
        const isLoggedIn = false;
        return (
            <header style={{ top: this.state.top, position: 'fixed' }}>
                <div className="top-row">
                    <div ref={(input) => this.loginRow = input} className="login-wrapper right">
                        <form style={{ display: 'inline-block' }} onSubmit={this.login}>
                            <label htmlFor="username">Username:</label>
                            <input
                                name="username"
                                type="text"
                                onSubmit={this.getUserValue}
                                ref={input => this.userInput = input}
                            />
                            <label htmlFor="">Password:</label>
                            <input name="password" type="password" onSubmit={this.getPass} ref={input => this.passInput = input}/>
                            <input className="top-row_login" type="submit" onSubmit={this.login} value="Login"/>
                            <a className="register-btn" href="/register">Register</a>
                        </form>

                    </div>
                </div>
                <div className="header-body" style={{ height: this.state.headerMobile }}>
                    <div className="header-body-inner" style={{ transform: this.state.headerMobileInner }}>
                        <div
                            className="title-wrapper col-xxs-12 col-xs-5 col-sm-5"
                            style={{ marginTop: this.state.headerMobileInnerMarginTop }}
                        >
                            <h1 style={{ display: 'inline-block' }}>
                                I'M APP <span style={{ color: 'red' }}>BREWER</span>
                            </h1>
                            <img src={'/img/zippy_whale.png'} alt="logo" id="site-logo"/>
                            <div className="mobile-login_button">
                                <a href="">Login</a>
                                <a href="">Register</a>
                            </div>
                        </div>
                        <div className="menu-wrapper col-xxs-7 col-xs-7 col-sm-7 col-lg-6">
                            <Menu/>
                        </div>

                    </div>
                </div>
            </header>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.stickHeader);
    }

    login = (e) => {
        e.preventDefault();
        const name = this.userInput.value;
        const pass = this.passInput.value;

        //Validation
        switch (true) {
            case name === '' && pass === '' :
                clearTimeout(this.timeOut);
                this.setState({ flashMessage: 'Username and Password can\'t be empty!', status: 'error' });
                this.timeOut = setTimeout(() => {
                    this.setState({ status: '' })
                }, 4000);
                return
            case name === '' :
                clearTimeout(this.timeOut);
                this.setState({ flashMessage: 'Username can\'t be empty!', status: 'error' });
                this.timeOut = setTimeout(() => {
                    this.setState({ status: '' })
                }, 4000);
                this.passInput.value = '';
                return
            case pass === '' :
                clearTimeout(this.timeOut);
                this.setState({ flashMessage: 'Password can\'t be empty!', status: 'error' });
                this.timeOut = setTimeout(() => {
                    this.setState({ status: '' })
                }, 4000);
                return
        }

    }

    flash = (status, message) => {
        let flash;
        let height = '0px';
        let opacity = '0';
        if (status == 'success') {
            //flash = (<Flash text={message} status={status}/>);
            height = '80px';
            opacity = '1';
        } else if (status === 'error') {
            //flash = (<Flash text={message} status={status}/>);
            height = '80px';
            opacity = '1';
        } else if (status === '') {
            flash = undefined;
            height = '0px';
        } else if (status === null) {
            flash = undefined;
        }
        return (
            <div style={{ height: height, transition: 'height 0.6s, opacity 1.5s', opacity: opacity }}>
                {flash}
            </div>
        );
    };

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
                    top: -this.loginRow.clientHeight + 'px'
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

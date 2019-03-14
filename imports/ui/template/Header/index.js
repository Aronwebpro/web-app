import React, { Component } from 'react';
import Menu from '../../components/Menu';

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
                <div className="login-section">
                    <div ref={(input) => this.loginRow = input} className="login-wrapper right">
                        <form style={{ display: 'inline-block' }} onSubmit={this.login}>
                            <label htmlFor="username">Username:</label>
                            <input
                                name="username"
                                type="text"
                                onSubmit={this.handleLogin}
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

    handleLogin = () => {

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

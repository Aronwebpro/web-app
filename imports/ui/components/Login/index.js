import React from 'react';

//Styles
import './login.css';

class Login extends React.PureComponent {
    render() {
        return (
            <div className="login-wrapper">
                <form onSubmit={this.login}>
                    <label htmlFor="username">Username:</label>
                    <input
                        name="username"
                        type="text"
                        ref={input => this.userInput = input}
                    />
                    <label htmlFor="">Password:</label>
                    <input name="password" type="password" ref={input => this.passInput = input}/>
                    <div>
                        <input className="top-row_login" type="submit"  value="Login"/>
                    </div>
                    <div className="linkedIn-button">
                        LinkedIn
                    </div>
                </form>
            </div>
        );
    }

    login = (e) => {
        e.preventDefault();
        const name = this.userInput.value;
        const pass = this.passInput.value;
        alert('Labas');
        // //Validation
        // switch (true) {
        //     case name === '' && pass === '' :
        //         clearTimeout(this.timeOut);
        //         this.setState({ flashMessage: 'Username and Password can\'t be empty!', status: 'error' });
        //         this.timeOut = setTimeout(() => {
        //             this.setState({ status: '' })
        //         }, 4000);
        //         return
        //     case name === '' :
        //         clearTimeout(this.timeOut);
        //         this.setState({ flashMessage: 'Username can\'t be empty!', status: 'error' });
        //         this.timeOut = setTimeout(() => {
        //             this.setState({ status: '' })
        //         }, 4000);
        //         this.passInput.value = '';
        //         return
        //     case pass === '' :
        //         clearTimeout(this.timeOut);
        //         this.setState({ flashMessage: 'Password can\'t be empty!', status: 'error' });
        //         this.timeOut = setTimeout(() => {
        //             this.setState({ status: '' })
        //         }, 4000);
        //         return
        // }
    };
}

export default Login;
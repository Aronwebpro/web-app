import React, { Component } from 'react';
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

//Template Parts
import Header from './ui/template/Header/Header';
import Footer from './ui/template/Footer/Footer';

//Components


//Styles
import './assets/css/theme.css';
import './assets/css/helpers.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="body">
                    <Header isLoggedIn={ () => {} }/>
                    <Switch>
                        <Route path='/' render={() => <div></div>}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

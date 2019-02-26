import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

//Template Parts
import Header from './ui/template/Header/Header';
import Footer from './ui/template/Footer/Footer';

//Components
import Home from './ui/pages/Home/Home';

//Styles
import './assets/css/theme.css';
import './assets/css/helpers.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="body2">
                    <Header isLoggedIn={ () => {} }/>
                    <Switch>
                        <Route path='/' component={Home}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

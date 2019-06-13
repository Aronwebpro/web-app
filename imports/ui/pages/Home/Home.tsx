import * as React from 'react';

//Style
import './home.css';

//Components
import GetSocial from 'imports/ui/components/GetSocial';
import Prospective from 'imports/ui/components/Prospective';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-content page">
                <section className="content hello-world-section shadow">
                    <div className="inner-content">
                        <div className="section-title-container">
                            <h1>Hello World!</h1>
                        </div>
                        <div className="home-page-greeting">
                            <div className="greeting">
                                <blockquote>
                                    <p>Hello, my name is Developer. </p>
                                </blockquote>
                                <p>Vivamus porta, metus in tincidunt luctus, enim tellus auctor ligula, sed rutrum ipsum mi a nulla. Fusce non ligula
                                    feugiat lorem maximus convallis eget quis erat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit velit. Aliquam molestie libero varius
                                    ipsum dictum ultrices. Proin id efficitur est. Aliquam consectetur volutpat tortor, vitae faucibus elit suscipit
                                    varius. </p>
                                <p>
                                    Duis consequat massa et nibh accumsan ullamcorper. Nulla facilisi. Sed malesuada ligula id dolor ultrices tempor.
                                    Mauris pharetra nulla et pellentesque hendrerit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Prospective/>
                <GetSocial/>
            </div>
        );
    }

    isUnmounted: boolean = false;

    componentDidMount() {
        //Scroll Page to Top on Start
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    componentWillUnmount() {
        //Setup Flag to know is component Unmounted
        this.isUnmounted = true;
    }
}

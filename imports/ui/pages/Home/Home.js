import React from 'react';

//Style
import './home.css';

//Components
import GetSocial from "../../components/GetSocial";
import Prospective from "../../components/Prospective";

class Home extends React.Component {
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
                                    <p>Hello, my name is Aaron. </p>
                                </blockquote>
                                <p>I am an enthusiastic software developer and identify myself as an apps builder since I enjoy
                                    creating.</p>
                                <p>I'm an open minded person who’s always ready for new challenges. When it comes to building
                                    new app I like to dive deeper and master my skills until things are perfect. </p>
                                <p>I like improving myself every day; that's my way of happiness, which is why I think
                                    software development is perfect for me. In my opinion it doesn‘t have any limits and I can
                                    discover something new and improve my skills with every assignment I finish. </p>
                                <p>I’m open for a developer position and I think I could be a valuable part of your
                                    team. If you give me a chance I promise that I won’t disappoint you! </p>
                            </div>
                            <div className="portrait">
                                <div className="image-container" />
                            </div>
                        </div>
                    </div>
                </section>
                <Prospective/>
                <GetSocial />
            </div>
        );
    }

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

export default Home;
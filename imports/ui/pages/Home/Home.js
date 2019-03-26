import React from 'react';

//Style
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home-content">
                <section className="content hello-world-section">
                    <div className="inner-content">
                        <div className="hello-world-container">
                            <h2>Hello World!</h2>
                        </div>
                        <div className="home-page-greeting">
                            <div className="greeting">
                                <blockquote>
                                    <p>Hello, my name is Aaron. </p>
                                </blockquote>
                                <p>I am an enthusiastic web developer and identify myself as a web site builder since I enjoy
                                    creating.</p>
                                <p>I'm an open minded person who’s always ready for new challenges. When it comes to building
                                    websites I like to dive deeper and master my skills until things are perfect. </p>
                                <p>I like improving myself every day; that's my way of happiness, which is why I think
                                    software development is perfect for me. In my opinion it doesn‘t have any limits and I can
                                    discover something new and improve my skills with every assignment I finish. </p>
                                <p>I’m looking for a web developer position and I think I could be a valuable part of your
                                    company. If you give me a chance I promise that I won’t disappoint you. </p>
                            </div>
                            <div className="portrait">
                                <div className="image-container" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content technologies-section">
                    <div className="inner-content">
                        <div className="hello-world-container">
                            <h2>Hello World!</h2>
                        </div>
                        <div className="home-page-greeting">

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
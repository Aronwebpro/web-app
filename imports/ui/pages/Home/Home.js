import React from 'react';

import './home.css';

class Home extends React.Component {
    state = {
        articles: [],
    };

    render() {
        return (
            <div className="home-content">
                <div className='hero-image-container'>
                </div>
                <div className="content">
                    <section>
                        <a href="#main-menu">
                            <h3 id="home" className="acordion-header">Hello World <div className="plus-wrapper">
                                <div className="vertical vertical-open"/>
                                <div className="horizontal"/>
                            </div></h3>
                        </a>
                        <div className="accordion-inner" id="hello-content" data-status="open" style={{ height: '425px' }}>
                            <div className="row inner-content">
                                <div className="col-sm-12 col-lg-9">
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
                                <div id="portrait">
                                    <div id="image" className="img-responsive img-circle"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<section className="content-header">*/}
                    {/*<div className="container">*/}
                    {/*<div>*/}
                    {/*<h2>*/}
                    {/*Lets Get Started <span className="bold mobile-break">Your Project</span>*/}
                    {/*</h2>*/}
                    {/*</div>*/}
                    {/*<div className="col-xxs-6 col-get-quote">*/}
                    {/*<div className="quote-btn-wrapper">*/}
                    {/*<button className="quote-btn">Get Quote</button>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</section>*/}
                    {/*<section className="statements">*/}

                    {/*</section>*/}
                    {/*<section>*/}
                    {/*<div className="body-content">*/}
                    {/*<div className="fluid-container" style={{ paddingTop: '10px' }}>*/}
                    {/*<h2 style={{ color: '#000', display: 'block', borderBottom: '1px solid #000', minHeight: '30px' }}>*/}
                    {/*TECH NEWS*/}
                    {/*</h2>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</section>*/}
                </div>
            </div>
        );
    }
}

export default Home;
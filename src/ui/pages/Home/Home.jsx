import React from 'react';

class Home extends React.Component {
    state = {
        articles: [],
    };

    render() {
        return (
            <div className="home-content">
                <div className="content" style={{ minHeight: '90vh', paddingTop: '0px' }}>
                    <section className="content-header">
                        <div className="container">
                            <div className="col-xxs-6">
                                <h2>
                                    Lets Get Started <span className="bold mobile-break">Your Project</span>
                                </h2>
                            </div>
                            <div className="col-xxs-6 col-get-quote">
                                <div className="quote-btn-wrapper">
                                    <button className="quote-btn">Get Quote</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="statements">

                    </section>
                    <section>
                        <div className="body-content">
                            <div className="fluid-container" style={{ paddingTop: '10px' }}>
                                <h2 style={{ color: '#000', display: 'block', borderBottom: '1px solid #000', minHeight: '30px' }}>
                                    TECH NEWS
                                </h2>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;

import React from 'react';

//Styles
import './portfolio.css';

//Components
import PortfolioTimeLine from "../../components/PortfolioTimeLine";

class Portfolio extends React.Component {
    render() {
        return (
            <section className="content shadow">
                <div className="inner-content">
                    <div className="section-title-container">
                        <h2>Portfolio</h2>
                    </div>
                    <PortfolioTimeLine />
                </div>
            </section>
        );
    }

    componentDidMount() {
        //Scroll Page to Top on Start
        if (window) {
            window.scrollTo(0, 0);
        }
    }
}

export default Portfolio;
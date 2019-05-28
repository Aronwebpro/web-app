import React from 'react';

//Styles
import './portfolio.css';

//Constants
import { portfolioProjects } from '/imports/lib/constants/portfolioProjects';

//Components
import ScrollToSection from "/imports/ui/components/ScrollToSection";
import TimeLine from "/imports/ui/components/TimeLine";

class Portfolio extends React.Component {
    render() {
        return (
            <div className='page'>
                <section className="content shadow">
                    <div className="inner-content">
                        <div className="section-title-container">
                            <h1>Portfolio</h1>
                        </div>
                        {portfolioProjects.map(({ title, data }, index) => (
                            <ScrollToSection
                                {...{
                                    title,
                                    index,
                                    key: index.toString()
                                }}
                                {...data}
                            >
                                <TimeLine {...{ data }} />
                            </ScrollToSection>
                        ))}
                    </div>
                </section>
            </div>
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
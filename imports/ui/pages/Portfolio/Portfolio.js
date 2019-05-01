import React from 'react';

//Styles
import './portfolio.css';

//Components
import PortfolioTimeLine from "../../components/TimeLine";
import Accordion from "../../components/Accordion";
import TimeLine from "../../components/TimeLine";

class Portfolio extends React.Component {
    render() {
        const years = [
            {
                title: '2015 year',
                data: [
                    {
                        title: 'project1'
                    },
                    {
                        title: 'project2'
                    }
                ],
            },
            {
                title: '2016 year',
                data: [
                    {
                        title: 'project1'
                    },
                    {
                        title: 'project2'
                    }
                ],
            },

        ];
        return (
            <div className='page'>
                <section className="content shadow">
                    <div className="inner-content">
                        <div className="section-title-container">
                            <h2>Portfolio</h2>
                        </div>
                        {years.map(({ title, data }, index) => (
                            <Accordion
                                {...{
                                    title,
                                    index,
                                    key: index.toString()
                                }}
                            >
                                <TimeLine {...{ data }} />
                            </Accordion>
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
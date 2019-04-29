import React from 'react';

//Styles
import './portfolio-timeline.css';

//Components
import Accordion from '/imports/ui/components/Accordion';

export default class PortfolioTimeLine extends React.Component {
    render() {
        return (
            <div>
                <section className="timeline">

                </section>
                <Accordion
                    title={'2019 Year'}
                    index={0}
                />
                <Accordion
                    title={'2018 Year'}
                />
                <Accordion
                    title={'2017 Year'}
                />
                <Accordion
                    title={'2016 Year'}
                />
                <Accordion
                    title={'2015 Year'}
                />
            </div>
        );
    }
}
import React from 'react';

//Styles
import './portfolio-timeline.css';

//Components
import Accordion from '/imports/ui/components/Accordion';


class TimelineItem extends React.PureComponent {
    render() {
        const {
            title,
            text,
            img,
            date,
            projectId,
        } = this.props;
        return (
            <div className='timeline-item'>
                <div className='timeline-img' />
                <div className='timeline-card shadow'>
                    <div className='timeline-img-header'>
                        <h2>Card Title</h2>
                    </div>
                    <div className='timline-card-date'>
                        25 April 2019
                    </div>
                    <div className='timline-card-description'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis
                            alias
                            cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum
                            excepturi
                            amet in dolores. Alias, ullam.
                        </p>
                    </div>
                    <div className='timline-card-button-container'>
                        <button className='btn'>
                            More
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default class TimeLine extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <section className="timeline">
                <div className='timeline-container'>
                    {data.map((project, index) => (
                        <TimelineItem {...project} key={index.toString()}/>
                    ))}
                </div>
            </section>
        );
    }
}
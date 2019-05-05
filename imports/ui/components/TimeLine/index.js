import React from 'react';

//Styles
import './portfolio-timeline.css';

//Components
import Accordion from '/imports/ui/components/Accordion';


class TimelineItem extends React.PureComponent {
    render() {
        const {
            title,
            description,
            img,
            date,
            projectId,
            type,
        } = this.props;
        console.log(img)
        return (
            <div className='timeline-item'>
                <div className='timeline-img' />
                <div className='timeline-card shadow'>
                    <div
                        className='timeline-img-header'
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <h2>{ title }</h2>
                    </div>
                    <div className='timline-card-date'>
                        { date }
                    </div>
                    <div className='timline-card-description'>
                        <p>{ description }</p>
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
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
            appType,
            appTypeColor,
            render,
        } = this.props;
        return (
            <div className='timeline-item'>
                <div className='timeline-img'/>
                <div className='timeline-card shadow'>
                    <div>
                        <div
                            className='timeline-img-header'
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <h2>{title}</h2>
                        </div>
                        <div className='timline-card-date'>
                            <strong> {date}</strong>
                        </div>
                        <div className='project-type-container'>
                            <h3><strong>#{type} project</strong></h3>
                            <h3 style={appTypeColor || {}}>{appType}</h3>
                        </div>
                    </div>
                    <div className='timline-card-description'>
                        {render && render()}
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
import * as React from 'react';

//Styles
import './portfolio-timeline.css';

interface TimeLineItemProps {
    title: string
    img: string
    date: string
    type: string
    appType: string
    appTypeColor: {
        backgroundColor: string
    }
    render?: () => JSX.Element
}

interface TimeLineProps {
    data: any[]
}

class TimelineItem extends React.PureComponent<TimeLineItemProps, {}> {
    render() {
        const {
            title,
            img,
            date,
            type,
            appType,
            appTypeColor,
            render,
        } = this.props;
        return (
            <div className='timeline-item-container'>
                <div className='timeline-img'/>
                <div className='timeline-item'>
                    <div className='timeline-card shadow'>
                        <div
                            className='timeline-img-header'
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <h2>{title}</h2>
                        </div>
                        <div className='timeline-card-date'>
                            <strong> {date}</strong>
                        </div>
                        <div className='project-type-container'>
                            <h3><strong>#{type} project</strong></h3>
                            <h3 style={appTypeColor || {}}>{appType}</h3>
                        </div>

                        <div className='timeline-card-description'>
                            {render && render()}
                        </div>
                        {/*<div className='timeline-card-button-container'>*/}
                            {/*<button className='btn'>*/}
                                {/*More*/}
                            {/*</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default class TimeLine extends React.Component <TimeLineProps> {
    render() {
        const { data } = this.props;
        return (
            <section className="timeline">
                <div className='timeline-container'>
                    {data.map((project, index) => (
                        <TimelineItem {...project} key={`${index}`}/>
                    ))}
                </div>
            </section>
        );
    }
}
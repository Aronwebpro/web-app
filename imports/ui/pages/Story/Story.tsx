import * as React from 'react';

//Styles
import './story.css';

class Story extends React.Component {
    render() {
        return (
            <div id='story' className="page">
                <section className="content shadow">
                    <div className="inner-content">
                        <div className="section-title-container">
                            <h1>My Story</h1>
                        </div>
                        <div className="story-content">
                            <p>
                                Aenean id ante cursus, cursus neque non, scelerisque mauris. Fusce eu eros sed purus ultricies imperdiet ut ut metus.
                                Nulla nec venenatis orci. Sed malesuada orci a dolor vestibulum, eu imperdiet lectus iaculis. Donec pellentesque eros
                                et metus pretium rutrum. Fusce ut imperdiet nisi. Vivamus rutrum feugiat tortor, ut bibendum felis imperdiet eu.
                                Vestibulum et pharetra turpis, eu aliquet felis. Nam eu ex quis nulla faucibus cursus aliquet non tortor. Phasellus
                                dapibus congue sapien, id aliquet purus vehicula nec. Aenean consequat sem a augue tristique suscipit. Nunc eget
                                mauris eget lectus molestie cursus sed ac arcu.
                            </p>
                            <p>
                                Vivamus porta, metus in tincidunt luctus, enim tellus auctor ligula, sed rutrum ipsum mi a nulla. Fusce non ligula
                                feugiat lorem maximus convallis eget quis erat. Donec sed arcu blandit, congue orci nec, facilisis sapien. Ut
                                ultricies, sapien vitae facilisis commodo, ipsum eros hendrerit quam, eget blandit tellus arcu et nibh.
                            </p>
                            <p>
                                Phasellus accumsan auctor odio. Proin rutrum at odio eget euismod. Phasellus vestibulum felis aliquam tellus porttitor
                                vehicula. Ut convallis ex nec orci commodo, non porta lectus accumsan. Nunc venenatis at libero eget gravida. Nulla
                                elementum egestas ornare. Pellentesque sed justo quis dui vestibulum mattis.
                            </p>

                        </div>
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

export default Story;
import React from 'react';

//Constants
import {
    workingImages,
    studyingImages,
    goingImages,
} from '/imports/lib/constants/prospectiveComponent';

//Components
import AnimatedImagesCircle from '/imports/ui/components/AnimatedImagesCircle';

//Styles
import './prospective.css';

export default class Prospective extends React.PureComponent {
    render() {
        return (
            <section className="prospective-body-section shadow">
                <div className="section-title-container">
                    <h2>What I am..</h2>
                </div>
                <div className="prospective">
                    <div className="section-row">
                        <div className="section-column">
                            <div className="prospective-logos-container">
                                <AnimatedImagesCircle
                                    data={workingImages}
                                    //title={<><h2>What</h2><h2>I'm doing</h2></>}
                                    title={<h2>doing</h2>}
                                />
                            </div>
                        </div>
                        <div className="section-column">
                            <div className="prospective-logos-container">
                                <AnimatedImagesCircle
                                    data={studyingImages}
                                    //title={<><h2>What</h2><h2>I'm studying</h2></>}
                                    title={<h2>studying</h2>}
                                />
                            </div>
                        </div>
                        <div className="section-column">
                            <div className="prospective-logos-container">
                                <AnimatedImagesCircle
                                    data={goingImages}
                                    //title={<><h2>Where</h2><h2>I'm going</h2></>}
                                    title={<h2>dreaming</h2>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
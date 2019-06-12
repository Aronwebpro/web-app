import * as React from 'react';

// Constants
import {
    workingImages,
    studyingImages,
    goingImages,
} from 'imports/lib/constants/prospectiveComponent';

//Components
import AnimatedImagesCircle from 'imports/ui/components/AnimatedImagesCircle';

//Styles
import './prospective.css';

export default class Prospective extends React.PureComponent<{}, {}> {
    render() {
        return (
            <section className="prospective-body-section shadow">
                <div className="inner-content">
                    <div className="section-title-container">
                        <h2>What I am..</h2>
                    </div>
                    <div className="prospective">
                        <div className="section-row">
                            <div className="section-column">
                                <div className="prospective-logos-container">
                                    <AnimatedImagesCircle
                                        data={workingImages}
                                        title={'doing'}
                                    />
                                </div>
                            </div>
                            <div className="section-column">
                                <div className="prospective-logos-container">
                                    <AnimatedImagesCircle
                                        data={studyingImages}
                                        title={'studying'}
                                    />
                                </div>
                            </div>
                            <div className="section-column">
                                <div className="prospective-logos-container">
                                    <AnimatedImagesCircle
                                        data={goingImages}
                                        title={'seeking'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
import React from 'react';

import Circle from '/imports/ui/components/Circle';

//Styles
import './prospective.css';

export default class Prospective extends React.PureComponent {
    render() {

        const workingData = [
            {
                text: 'JavaScript',
                img: '/img/logos/javascript.png',
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            }
        ];
        return (
            <>
                <section className="content prospective-title-section shadow">
                    <div className="inner-content">
                        <div className="prospective">
                            <div className="section-row">
                                <div className="section-column">
                                    <h2>
                                        What I'm working with..
                                    </h2>
                                </div>
                                <div className="section-column">
                                    <h2>
                                        What I'm studying about..
                                    </h2>
                                </div>
                                <div className="section-column">
                                    <h2>
                                        Where I'm planning to go..
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content prospective-body-section shadow">
                    <div className="inner-content">
                        <div className="prospective">
                            <div className="section-row">
                                <div className="section-column">
                                    <div className="prospective-logos-container">
                                        <Circle />
                                    </div>
                                </div>
                                <div className="section-column">
                                    <div className="prospective-logos-container">

                                    </div>
                                </div>
                                <div className="section-column">
                                    <div className="prospective-logos-container">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
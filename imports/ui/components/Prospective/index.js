import React from 'react';

//Styles
import './prospective.css';

export default class Prospective extends React.PureComponent {
    render() {
        return (
            <div className="prospective">
                <div className="section-row">
                    <div className="section-column">
                        <h2>
                            What I'm working with..
                        </h2>
                        <div className="prospective-logos-container">

                        </div>
                    </div>
                    <div className="section-column">
                        <h2>
                            What I'm studying about..
                        </h2>
                        <div className="prospective-logos-container">

                        </div>
                    </div>
                    <div className="section-column">
                        <h2>
                            Where I'm planning to go..
                        </h2>
                        <div className="prospective-logos-container">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
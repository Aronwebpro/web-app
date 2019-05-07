import React from 'react';

import './get-social.css';

export default class GetSocial extends React.PureComponent {
    render() {
        return (
            <section className="content technologies-section shadow">
                <div className="inner-content">
                    <div className="get-social">
                        <div className="section-title">
                            <h2>Find Me and Let's Get Social</h2>
                        </div>
                        <div className="section-row get-social-row">
                            <div className="get-social-column section-column">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <img id="linkedin-img" src="/img/linkedin2.png" alt="LinkedIn"/>
                                </a>
                            </div>
                            <div className="get-social-column section-column">
                                <a href="https://www.codewars.com/users/Aronwebpro" target="_blank">
                                    <img
                                        id="codewars-img"
                                        src="https://www.codewars.com/users/Aronwebpro/badges/large"
                                        alt="Code Wars"
                                    />
                                    <h3>Code Wars</h3>
                                </a>
                            </div>
                            <div className="get-social-column section-column">
                                <a href="https://github.com/Aronwebpro/" target="_blank">
                                    <img id="git-hub-img" src="/img/github-logo.png" alt="GitHub"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
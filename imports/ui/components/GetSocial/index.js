import React from 'react';


export default class GetSocial extends React.PureComponent {
    render() {
        return (
            <section className="fluid-container get-social">
                <div className="section-title">
                    <h2>Get Social and Find Me</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <a href="https://www.linkedin.com/" target="_blank">
                                <img id="linkedin-img" src="/img/logos/linkedin2.png" alt="LinkedIn" />
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <a href="https://www.codewars.com/users/Aronwebpro" target="_blank">
                                <img id="codewars-img" src="https://www.codewars.com/users/Aronwebpro/badges/large" alt="Code Wars" />
                                <h3>Code Wars</h3>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <a href="https://github.com/Aronwebpro/" target="_blank">
                                <img id="git-hub-img" src="/img/logos/github.png" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
import React from 'react';

//Styles
import './resume-table.css';

export default class ResumeTable extends React.PureComponent {
    render() {
        return (
            <div id="resume-content">
                <div id="experience" className="table-wrapper">
                    <div className="resume-title">
                        <h2>Experience</h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Position</th>
                                    <th>Company</th>
                                    <th>Website</th>
                                    <th className="desktop">Responsibilities</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="center">
                                    <td>2016 November - <br />2018 March</td>
                                    <td><strong>Front End Web developer</strong></td>
                                    <td className="center">
                                        <img src="/img/resume-companies/DealerEProcess_logo.png"/><br/>
                                        Dealer eProcess
                                    </td>
                                    <td className="click-to-visit">
                                        <a href="http://www.dealereprocess.com/" target="_blank">
                                            Click to visit <br/> Company's website
                                        </a>
                                    </td>
                                    <td className="desktop">
                                        <ul className="left">
                                            <li>Create custom pages for clients</li>
                                            <li>Database Management</li>
                                            <li>Create JavaScript applications</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="center">
                                    <td>2015 July - <br />2016 November</td>
                                    <td><strong>Web developer / Student</strong></td>
                                    <td className="center">Freelance</td>
                                    <td></td>
                                    <td className="desktop">
                                        <ul className="left">
                                            <li>Web Developing</li>
                                            <li>CMS management</li>
                                            <li>Domain and server management with cPanel</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="center">
                                    <td>2012 March - <br />2015 July</td>
                                    <td><strong>Sales Manager</strong></td>
                                    <td className="center"><img src="/img/resume-companies/jml-logo.png"/><br/> JMLGroup</td>
                                    <td className="click-to-visit">
                                        <a href="https://jml-group.ltd/" target="_blank">
                                            Click to visit <br/> Company's website
                                        </a>
                                    </td>
                                    <td className="desktop">
                                        <ul className="left">
                                            <li>Making B2B sales of LED Induction lighting products.</li>
                                            <li>Gathering market and customer information.</li>
                                            <li>Listening to customer requirements and presenting appropriately to make a sale.</li>
                                            <li>Negotiating on price, costs, delivery and specifications with buyers to reach
                                                agreement.
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="center">
                                    <td>2007 August - <br /> 2012 March</td>
                                    <td><strong>Real Estate Agent</strong></td>
                                    <td className="center"><img src="/img/resume-companies/oh-logo.png"/><br/> OberHaus</td>
                                    <td className="click-to-visit">
                                        <a href="http://www.ober-haus.lt/en/" target="_blank">
                                            Click to visit <br/> Company's website
                                        </a>
                                    </td>
                                    <td className="desktop">
                                        <ul className="left">
                                            <li>Working with commercial real estate owners.</li>
                                            <li>Traveling and meeting with clients.</li>
                                            <li>Choosing the best promotion strategies for client‘s.</li>
                                            <li>Negotiating wiht potential buyers or sellers.</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/*Education Table*/}
                <div id="education" className="table-wrapper">
                    <div className="resume-title">
                        <h2>Education</h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Degree</th>
                                    <th>Institute</th>
                                    <th>Link</th>
                                    <th>Occupation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="center">
                                    <td>2004-2008 year</td>
                                    <td><strong>Bachelor</strong></td>
                                    <td><img src="/img/resume-companies/ism-logo.png" className="img-responsive"/></td>
                                    <td><a href="https://ism.lt/en" target="_blank">Website</a></td>
                                    <td className="desktop">Management and business administration studies</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
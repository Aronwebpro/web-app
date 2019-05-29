import React from 'react';

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
                                Since I was little I was always interested in computers and IT, but I never had an opportunity to
                                study it. I chose management studies instead because I thought they would be more valuable.
                                However,
                                after some time I realized that being a manager is not for me, especially when it comes to working
                                with sales management. I first encountered web developing when our company IT person left the
                                enterprise and I was tasked with administrative the web store. This is how I began using HTML,
                                CSS,
                                Opencart, Wordpress CMS, Google Adwords and Google Analytic. That’s when it caught my attention
                                and I
                                realized how much I enjoy this.
                            </p>
                            <p>
                                In the summer of 2015, due to conflict of internal shareholders, the enterprise I worked in was
                                restructured and divided. That's when I realized it was time to change my life and start a new
                                career, so I left the company and started looking for something more related to programming and
                                web developing. Ruby was the first programming language I chose to work with. I started taking
                                courses online, and learned more and more about programming.
                            </p>
                            <p>
                                When I figured out some of the specific web principles, I learned to work with HTML, CSS, Js and
                                started working on my own independent web projects. I started with first projects and seeing
                                results proved that I have strong potential in the web development field. If you’d like to check
                                them out, you can find them in the Portfolio page. I am now working with sophisticate web and
                                mobile projects, but I keep studying and improving my skills every day. I really enjoy programming
                                and creativity and always love to meet more IT enthusiasts to collaborate with.
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
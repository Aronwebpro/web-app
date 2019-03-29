import React from 'react';

//Styles
import './story.css';

class Story extends React.Component {
    render() {
        return (
            <section className="content shadow">
                <div className="inner-content">
                    <div className="section-title-container">
                        <h2>My Story</h2>
                    </div>
                    <div>
                        <p>
                            Since I was little I was always interested in computers and IT, but I never had an opportunity to
                            study. I chose management studies instead because I thought they would be more valuable. However,
                            after some time I realized that being a manager is not for me, especially when it comes to working
                            with sales management. I first encountered web developing when our company IT person left the
                            enterprise and I was tasked with administrative the web store. This is how I began using HTML, CSS,
                            Opencart, Wordpress CMS, Google Adwords and Google Analytic. That’s when it caught my attention and I
                            realized how much I enjoy this.
                        </p>
                        <p>
                            In the summer of 2015, due to conflict of internal shareholders, the enterprise I worked in was
                            restructured and divided. That's when I realized it was time to change my life and start a new career,
                            so I left the company and started looking for something more related to programming and web
                            developing. Ruby was the first programming language I chose to work with. I started taking courses
                            online, and learned more and more about programming.
                        </p>
                        <p>
                            When I figured out some of the specific web principles, I learned to work with HTML, CSS, Js and
                            started working on my own independent web projects. I started with two projects and seeing results
                            proved that I have strong potential in the web development field. If you’d like to check them out, you
                            can find them both in the Projects section. I am now improving my skills each day and would love to
                            meet more web enthusiasts to collaborate with. I like to study, improve my skills and I’m always up
                            for a challenge. I really enjoy programming and creativity. I think I could be a suitable partner for
                            you.
                        </p>

                    </div>
                </div>
            </section>
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
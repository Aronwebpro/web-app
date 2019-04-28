import React from 'react';

//Styles
import './contact.css';
import Prospective from '../../components/Prospective';

class Contact extends React.Component {
    render() {
        return (
            <>
                <section className="content">
                    <div className="inner-content">
                        <div className="section-title-container">
                            <h2>Contact</h2>
                        </div>
                    </div>
                </section>
                <Prospective/>
            </>
        );
    }
}

export default Contact;
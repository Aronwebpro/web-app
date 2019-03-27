import React from 'react';

//Components
import ResumeTable from '/imports/ui/components/ResumeTable';

//Styles
import './resume.css';

class Resume extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="inner-content">
                    <div className="hello-world-container">
                        <h1>Resume</h1>
                    </div>
                    <ResumeTable />
                </div>
            </section>
        );
    }
}

export default Resume;
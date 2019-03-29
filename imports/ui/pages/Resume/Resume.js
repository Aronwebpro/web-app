import React from 'react';

//Components
import ResponsiveTable from '/imports/ui/components/ResponsiveTable';

//Constants
import { resumeTableColumns, resumeTableData } from '/imports/lib/constants/experienceTable';
import { educationTableColumns, educationTableData } from '/imports/lib/constants/educationTable';

//Styles
import './resume.css';

class Resume extends React.Component {
    render() {
        return (
            <>
                <section className="content resume-experience-container">
                    <div className="inner-content">
                        <div className="hello-world-container">
                            <h1>Resume</h1>
                        </div>
                        <div id="resume-content">
                            <div id="experience" className="table-wrapper">
                                <div className="resume-title">
                                    <h2>Experience</h2>
                                </div>
                                <div className="table-responsive">
                                    <ResponsiveTable
                                        columns={resumeTableColumns}
                                        data={resumeTableData}
                                    />
                                </div>
                            </div>
                            <div id="education" className="table-wrapper">
                                <div className="resume-title">
                                    <h2>Education</h2>
                                </div>
                                <div className="table-responsive">
                                    <ResponsiveTable
                                        columns={educationTableColumns}
                                        data={educationTableData}
                                        bordered={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content resume-skills-container">
                    <div className="inner-content">
                        <div className="resume-title">
                            <h2>Skills</h2>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Resume;
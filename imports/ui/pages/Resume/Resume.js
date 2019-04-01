import React from 'react';

//Constants
import { resumeTableColumns, resumeTableData } from '/imports/lib/constants/experienceTable';
import { educationTableColumns, educationTableData } from '/imports/lib/constants/educationTable';

//Components
import ResponsiveTable from '/imports/ui/components/ResponsiveTable';
import SkillsDiagram from '/imports/ui/components/SkillsDiagram';

//Styles
import './resume.css';

class Resume extends React.Component {
    render() {
        return (
            <>
                <section className="content resume-experience-container shadow">
                    <div className="inner-content">
                        <div className="section-title-container">
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
                <section className="content resume-skills-container shadow">
                    <div className="inner-content">
                        <div className="resume-title">
                            <h2>Skills</h2>
                        </div>
                        <div>
                            <SkillsDiagram />
                        </div>
                    </div>
                </section>
            </>
        );
    }

    componentDidMount() {
        //Scroll Page to Top on Start
        if (window) {
            window.scrollTo(0, 0);
        }
    }
}

export default Resume;
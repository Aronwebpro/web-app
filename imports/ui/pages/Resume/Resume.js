import React from 'react';

//Constants
import { resumeTableColumns, resumeTableData } from '/imports/lib/constants/experienceTable';
import { educationTableColumns, educationTableData } from '/imports/lib/constants/educationTable';

//Components
import ResponsiveTable from '/imports/ui/components/ResponsiveTable';
import SkillsDiagram from '/imports/ui/components/SkillsDiagram';
import OtherSkillsDiagram from "../../components/OtherSkillsDiagram";

//Styles
import './resume.css';


class Resume extends React.Component {
    render() {
        return (
            <div className='page'>
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
                            <div id="skills" className="table-wrapper">
                                <div className="resume-title">
                                    <h2>Skills</h2>
                                </div>
                                <div className="skills-body">
                                    <h3>Main Developing Skills and Technologies</h3>
                                    <p className="skills-note">
                                        Each bubble represents years of experience combined with time I spend working with each technology every day.
                                    </p>
                                    <SkillsDiagram />
                                </div>
                                <div className="resume-title">
                                    <h2>Other skills</h2>
                                </div>
                                <div className="skills-body">
                                    <OtherSkillsDiagram />
                                </div>
                            </div>
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

export default Resume;
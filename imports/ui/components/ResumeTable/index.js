import React from 'react';

//Components
import ResponsiveTable from '/imports/ui/components/ResponsiveTable';

//Constants
import { resumeTableColumns, resumeTableData } from '/imports/lib/constants/experienceTable';
import { educationTableColumns, educationTableData } from '/imports/lib/constants/educationTable';

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
        );
    }
}
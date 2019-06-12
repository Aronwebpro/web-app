import * as React from 'react';
import { ResponsiveTableColumn } from 'imports/ui/components/ResponsiveTable/ResponsiveTableTypes';

const resumeTableColumns: ResponsiveTableColumn[] = [
    {
        title: 'Years',
        dataIndex: 'year',
        key: 'year',
        showAsMobileTableHeader: true,
        render: ({ start, end }) => (
            <div className='center' style={{ maxWidth: '145px' }}>
                {start} - <br/>{end}
            </div>
        ),
        renderOnMobile: ({ start, end }) => (
            <div>
                {start} -{end}
            </div>
        ),
    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
        render: (text) => (
            <p style={{ fontWeight: 'bold' }}>{text}</p>
        ),
        renderOnMobile: (text) => (
            <h2 style={{ fontWeight: 'bold', textAlign: 'left' }}>{text}</h2>
        )
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        render: ({ img, title }) => (
            <div className='center company-cell'>
                {img && (<p style={{ flex: 1.5 }}><img src={img}/></p>)}
                <p style={{ flex: 1, textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex' }}> {title}</p>
            </div>
        )
    },
    {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        render: ({ link, title }) => (
            <div style={{ minWidth: '80px' }}>
                <a href={link} target='_blank'>
                    {title}
                </a>
            </div>
        ),
        renderOnMobile: ({ link, title }) => (
            <div style={{ minWidth: '80px', textAlign: 'left' }}>
                <a href={link} target='_blank'>
                    Company's Website
                </a>
            </div>
        )
    },
    {
        title: 'Responsibilities',
        dataIndex: 'responsibilities',
        key: 'responsibilities',
        render: (responsibilities) => (
            <div className='desktop' style={{ width: '350px' }}>
                <ul className='left'>
                    {responsibilities.map((text) => (
                        <li key={text}>{text}</li>
                    ))}
                </ul>
            </div>
        ),
        renderOnMobile: (responsibilities) => (
            <div>
                <ul className='left' style={{ paddingLeft: '20px' }}>
                    {responsibilities.map((text) => (
                        <li key={text} style={{ fontSize: '0.9em' }}>{text}</li>
                    ))}
                </ul>
            </div>
        )
    },
];

const resumeTableData = [
    {
        year: { start: '2012 April', end: 'Present' },
        position: 'Software Developer',
        company: { title: 'Microsoft, Inc.', img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
        website: { title: 'Click to Visit', link: 'https://www.microsoft.com/en-us/' },
        responsibilities: ['Develop Mobile/Web Apps from A to Z', 'Design apps architecture', 'Agile team work environment', 'Daily morning stand-ups'],
        customClass: 'plaidypus'
    },
    {
        year: { start: '2008 April', end: 'Present' },
        position: 'Intern',
        company: { title: 'Apple, Inc.', img: 'https://www.arabianbusiness.com/sites/default/files/styles/full_img/public/images/2017/01/17/apple-logo-rainbow.jpg' },
        website: { title: 'Click to Visit', link: 'https://www.apple.com/' },
        responsibilities: ['Develop Mobile/Web Apps from A to Z'],
        customClass: 'plaidypus'
    },
];

export {
    resumeTableData,
    resumeTableColumns,
}
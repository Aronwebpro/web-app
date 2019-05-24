import React from 'react';

const resumeTableColumns = [
    {
        title: 'Years',
        dataIndex: 'year',
        key: 'year',
        render: ({ start, end }) => (
            <div className='center' style={{ maxWidth: '145px' }}>
                {start} - <br/>{end}
            </div>
        )
    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
        render: (text) => (
            <p style={{ fontWeight: 'bold' }}>{text}</p>
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
        )
    },
];

const resumeTableData = [
    {
        year: { start: '2018 April', end: 'Present' },
        position: 'JavaScript Engineer',
        company: { title: 'Plaidypus, Inc.', img: '/img/resume-companies/plaidypus-logo.png' },
        website: { title: 'Click to Visit', link: 'https://www.plaidypus.com/' },
        responsibilities: ['Create custom pages for clients', 'Database Management', 'Create JavaScript applications'],
        customClass: 'plaidypus'
    },
    {
        year: { start: '2016 November', end: '2018 April' },
        position: 'Front End Web developer',
        company: { title: 'Dealer eProcess', img: '/img/resume-companies/DealerEProcess_logo.png' },
        website: { title: 'Click to Visit', link: 'http://www.dealereprocess.com/' },
        responsibilities: ['Create custom pages for clients', 'Database Management', 'Create JavaScript applications'],
    },
    {
        year: { start: '2015 July', end: '2016 November' },
        position: 'Web developer / Student',
        company: { title: 'Independent Contractor', img: '' },
        website: { title: '', link: '' },
        responsibilities: ['Web Developing', 'CMS management', 'WordPress, Open Cart', 'Domain and server management with cPanel'],
    },
    {
        year: { start: '2014 March', end: '2015 July' },
        position: 'Sales Executive',
        company: { title: 'JML-Group LTD', img: '/img/resume-companies/jml-logo.png' },
        website: { title: 'Click to Visit', link: 'https://jml-group.ltd/' },
        responsibilities: [
            'Responsibility of lighting (LED) products sales.',
            'Manage company\'s websites, SEO analysis, eShop strategy preparation and eShop website maintenance.',
            'Making B2B sales of LED, Induction lighting products.',
            'Market Analysis'
        ],
        customClass: 'jml'
    },
    {
        year: { start: '2012 March', end: '2014 March' },
        position: 'Sales Manager',
        company: { title: 'JML-Group LTD', img: '/img/resume-companies/jml-logo.png' },
        website: { title: 'Click to Visit', link: 'https://jml-group.ltd/' },
        responsibilities: [
            'Listening to customer requirements and presenting appropriately to make a sale.',
            'Negotiating on price, costs, delivery and specifications with buyers to reach agreement.',
            'Gathering market and customer information.',
        ],
        customClass: 'jml'
    },
    {
        year: { start: '2008 August', end: '2010 September' },
        position: 'Real Estate Manager',
        company: { title: 'UAB "Egilis"', img: '/img/resume-companies/silas_logo.jpg' },
        website: { title: 'Click to Visit', link: 'http://www.silas.lt/' },
        responsibilities: ['Rent and Manage Real Estate properties for Super Market "Silas"'],
    },

    {
        year: { start: '2007 July', end: '2008 August' },
        position: 'Real Estate Broker',
        company: { title: 'Ober-Haus LTD', img: '/img/resume-companies/oh-logo.png' },
        website: { title: 'Click to Visit', link: 'http://www.ober-haus.lt/en/' },
        responsibilities: ['Create custom pages for clients', 'Database Management', 'Create JavaScript applications'],
    }
];

export {
    resumeTableData,
    resumeTableColumns,
}
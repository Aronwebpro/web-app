import React from 'react';

const educationTableColumns = [
    {
        title: 'Years',
        dataIndex: 'year',
        key: 'year',
        render: (text) => (
            <div className='center'>{text}</div>
        )
    },
    {
        title: 'Degree',
        dataIndex: 'degree',
        key: 'degree',
        render: (text) => (
            <p className='center'><strong>{text}</strong></p>
        )
    },
    {
        title: 'Institute',
        dataIndex: 'institute',
        key: 'institute',
        render: ({ img }) => (
            <div className='center'>
                <img src={img}/>
            </div>
        )
    },
    {
        title: 'Link',
        dataIndex: 'link',
        key: 'link',
        textAlign: 'center',
        render: ({ link, title }) => (
            <div style={{ minWidth: '80px' }}>
                <a href={link} target='_blank'>
                    {title}
                </a>
            </div>
        )
    },
    {
        title: 'Occupation',
        dataIndex: 'occupation',
        key: 'occupation',
        textAlign: 'center',
    },
];

const educationTableData = [
    {
        year: '2004-2008 year',
        degree: 'Bachelor',
        institute: { img: '/img/resume-companies/ism-logo.png' },
        link: { title: 'Website', link: 'https://ism.lt/en' },
        occupation: 'Management and business administration studies',
    },
];

export {
    educationTableColumns,
    educationTableData,
}
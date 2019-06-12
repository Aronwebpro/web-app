import * as React from 'react';

const educationTableColumns: ResponsiveTableColumn[] = [
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
                <img src={img} style={{width: '100%', maxWidth: '35px'}}/>
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
        year: '2000-2010 year',
        degree: 'Master',
        institute: { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Illinois_Fighting_Illini_logo.svg/1200px-Illinois_Fighting_Illini_logo.svg.png' },
        link: { title: 'Website', link: 'https://illinois.edu/' },
        occupation: 'Computer Sciences',
        customClass: 'plaidypus'
    },
];

export {
    educationTableColumns,
    educationTableData,
}
type BasicSkillsDiagram = {
    name: string,
    url: string,
    img: string,
}

type SkillsDiagramItem = BasicSkillsDiagram & {
    size: number
    text?: string
    color?: string
    textColor?: string
    strokeColor?: string
    tooltip?: string
}

type DataSet = {
    children: SkillsDiagramItem[],
}

const dataSet: DataSet = {
    children: [
        {
            name: 'JavaScript',
            text: 'JavaScript',
            size: 3100,
            color: '#fff',
            textColor: '#e4cb01c2',
            strokeColor: '#a99600',
            img: '/img/logos/javascript.png',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            tooltip: 'Javascript is my main developing language.',
        },
        {
            name: 'React Js',
            text: 'React Js',
            size: 2100,
            textColor: '#61dafba8',
            color: '#fff',
            strokeColor: '#4aa6bfa8',
            img: '/img/logos/react.png',
            url: 'https://reactjs.org/',
            tooltip: 'React Js is my favorite and most loved framework, I really love it and can\'t stop working with it.',
        },
        {
            name: 'React Native',
            text: 'React Native',
            size: 1600,
            textColor: '#05a5d1',
            color: '#fff',
            strokeColor: '#0585a9',
            img: '/img/logos/react2.png',
            url: 'https://facebook.github.io/react-native/',
            tooltip: 'With React Native I fall in love with Mobile app development.'
        },
        {
            name: 'CSS',
            size: 500,
            color: '#fff',
            //color: '#298dd47a',
            strokeColor: '#7fadd2',
            img: '/img/logos/css3.png',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            tooltip: 'Essential for web, but I prefer design systems more, like Boostrap, Ant Design and others.',
        },
        {
            name: 'HTML',
            size: 500,
            //color: '#e8783a',
            color: '#fff',
            strokeColor: '#bf6431',
            img: '/img/logos/html.png',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            tooltip: 'All my HTML code is in JSX now.'
        },
        {
            name: 'MongoDB',
            //text: 'MongoDB',
            size: 500,
            //color: '#73c054',
            color: '#fff',
            strokeColor: '#94785d',
            img: '/img/logos/mongodb.png',
            url: 'https://www.mongodb.com/',
            tooltip: 'MongoDB is our main database, writing queries is my main part of my job.'
        },
        {
            name: 'MeteorJs',
            text: 'MeteorJs',
            size: 1300,
            //color: '#de4f4f',
            textColor: '#de4f4f',
            color: '#fff',
            strokeColor: '#ab3130',
            img: '/img/logos/meteor.png',
            url: 'https://www.meteor.com/',
            tooltip: 'Meteor is main full stack Js framework, 70% of our apps is built on this framework.'
        },
        {
            name: 'NodeJs',
            text: 'NodeJs',
            size: 900,
            textColor: '#026e00',
            color: '#fff',
            strokeColor: '#015000',
            img: '/img/logos/nodejs.png',
            url: 'https://nodejs.org/en/',
            tooltip: 'JavaScrip runtime, but I\'m using more and more plain NodeJs.'
        },
        {
            name: 'Firebase',
            text: 'Firebase',
            size: 900,
            textColor: '#ffcb2c',
            color: '#fff',
            strokeColor: '#ffcb2c',
            img: '/img/logos/firebase.png',
            url: 'https://firebase.google.com/',
            tooltip: 'Client side database solution, we using it a lot in our projects.'
        },
        {
            name: 'Jira Software',
            text: 'Jira',
            size: 900,
            textColor: '#0052CC',
            color: '#fff',
            strokeColor: '#0052CC',
            img: '/img/logos/jira.png',
            url: 'https://www.atlassian.com/software/jira',
            tooltip: 'That\'s our main project management system.'
        },
        {
            name: 'Git',
            //text: 'Git+Github',
            size: 600,
            textColor: '#F05033',
            color: '#fff',
            strokeColor: '#F05033',
            img: '/img/logos/git.png',
            url: 'https://github.com/',
            tooltip: 'All my days starts with coffee and git pull.'
        },
        {
            name: 'Redux',
            size: 500,
            color: '#fff',
            //color: '#298dd47a',
            strokeColor: '#764abc',
            img: '/img/logos/redux.png',
            url: 'https://redux.js.org/',
            tooltip: 'Marvelous of software engineering.',
        },
        {
            name: 'TypeScript',
            size: 500,
            color: '#fff',
            //color: '#298dd47a',
            strokeColor: '#007acc',
            img: '/img/logos/type-script.png',
            url: 'https://www.typescriptlang.org/',
            tooltip: 'We started to implement TypeScript to all of our projects',
        },
    ]
};


const otherSkillsRow1: BasicSkillsDiagram[] = [
    {
        name: 'MySql',
        img: '/img/logos/mysql.png',
        url: 'https://www.mysql.com/',
    },
    {
        name: 'Express Js',
        img: '/img/logos/expressJs.png',
        url: 'https://expressjs.com',
    },
    {
        name: 'jQuery',
        img: '/img/logos/jquery.png',
        url: 'https://jquery.com/',
    },
    {
        name: 'Zoho API',
        img: '/img/logos/zoho.png',
        url: 'https://www.zoho.com/',
    },
    {
        name: 'Postman',
        img: '/img/logos/postman.png',
        url: 'https://www.getpostman.com/',
    },
];

const otherSkillsRow2: BasicSkillsDiagram[] = [
    {
        name: 'Robo 3t',
        img: '/img/logos/robo.png',
        url: 'https://robomongo.org/',
    },
    {
        name: 'WebPack',
        img: '/img/logos/webpack.png',
        url: 'https://webpack.js.org',
    },
    {
        name: 'Photoshop',
        img: '/img/logos/photoshop.png',
        url: 'https://www.adobe.com/products/photoshop.html'
    },
    {
        name: 'MS Office',
        img: '/img/logos/office.png',
        url: 'https://www.office.com',
    },
];

export {
    dataSet,
    otherSkillsRow1,
    otherSkillsRow2
}
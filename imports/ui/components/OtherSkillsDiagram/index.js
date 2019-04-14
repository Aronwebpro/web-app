import React from 'react';
import PropTypes from 'prop-types';


export default class OtherSkillsDiagram extends React.PureComponent {
    static propTypes = {};

    render() {
        const skills = [
            {
                name: 'Photoshop',
                img: '/img/logos/photoshop.png',
                url: 'https://www.adobe.com/products/photoshop.html'
            },
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
                name: 'WebPack',
                img: '/img/logos/webpack.png',
                url: 'https://webpack.js.org',
            },
            {
                name: 'Zoho API',
                img: '/img/logos/zoho.png',
                url: 'https://www.zoho.com/',
            },
            {
                name: 'MS Office',
                img: '/img/logos/office.png',
                url: 'https://www.office.com',
            },
            {
                name: 'Robo 3t',
                img: '/img/logos/robo.png',
                url: 'https://robomongo.org/',
            },

        ];

        return (
            <div className='other-skills-container'>
                {skills.map(({ name, img, url }) => (
                    <div className='other-skill' key={name}>
                        <div>
                            <h4>{name}</h4>
                        </div>
                        <div>
                            <a href={url} target='_blank'>
                                <img src={img} alt={name} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
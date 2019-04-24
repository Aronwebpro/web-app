import React from 'react';

import './circle.css';

const data = [
    {
        text: 'JavaScript',
        img: '/img/logos/javascript.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        text: 'JavaScript',
        img: '/img/logos/javascript.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        text: 'JavaScript',
        img: '/img/logos/javascript.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        text: 'JavaScript',
        img: '/img/logos/javascript.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        text: 'JavaScript',
        img: '/img/logos/javascript.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        text: 'JavaScript',
        img: '/img/logos/javascript.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
];

export default class Circle extends React.Component {
    state = {
        elStyles: [],
    };
    render() {
        const {
            data
        } = this.props;
        const {
            elStyles,
        } = this.state;


        const centerEl = {
            text: 'My Stack',
        };


        return (
            <div className="circle-container">
                <ul>
                    <li>
                        {centerEl.text}
                    </li>
                    {data.map(({ text, img }, index) => {
                        return (
                            <li
                                style={elStyles[index]}
                                key={index.toString()}
                            >
                                <div className="circle-img-container">
                                    <img src={img} alt=""/>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    componentDidMount() {

    }

    scatterItems = () => {
        const { data } = this.props;
        const elStyles = data.map((i, index) => {
            const slice = 360 / (data.length);
            return {
                transform: `rotate(${(slice * index ) + -90 }deg) translate(6em) rotate(${-((slice * index) + -90) }deg)`
            };
        });
        this.setState({ elStyles });
    }
}
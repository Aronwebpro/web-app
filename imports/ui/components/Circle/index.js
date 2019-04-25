import React from 'react';
import PropTypes from 'prop-types';

//Styles
import './circle.css';


export default class Circle extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            img: PropTypes.string,
            text: PropTypes.string,
        }))
    };
    state = {
        elStyles: [],
        centerElStyles: { opacity: 0 },
        loaded: false,
    };

    render() {
        const { data } = this.props;
        const { elStyles, centerElStyles} = this.state;

        const centerEl = {
            text: 'My Stack',
        };


        return (
            <div className="circle-container">
                <ul>
                    <li style={centerElStyles}>
                        <h2>
                            I'm working with
                        </h2>
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
                                <h3 style={centerElStyles}>
                                    {text}
                                </h3>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scatterItems);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scatterItems);
    }

    scatterItems = () => {
        if (this.state.loaded) {
            window.removeEventListener('scroll', this.scatterItems);
        }
        if (window.scrollY > 100) {
            const { data } = this.props;
            const elStyles = data.map((i, index) => {
                const slice = 360 / (data.length);
                return {
                    transform: `rotate(${(slice * index) + -90 }deg) translate(6em) rotate(${-((slice * index) + -90) }deg)`
                };
            });
            this.setState({ elStyles, centerElStyles: { opacity: 1}, loaded: true, });
        }

    }
}
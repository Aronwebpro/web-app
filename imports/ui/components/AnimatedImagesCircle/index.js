import React from 'react';
import PropTypes from 'prop-types';

//Styles
import './animated-images-circle.css';

export default class AnimatedImagesCircle extends React.Component {
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
        const { data, title } = this.props;
        const { elStyles, centerElStyles } = this.state;

        return (
            <div className="circle-container">
                <ul>
                    <li style={centerElStyles}>
                        {title}
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
            const elStyles = data.map(({ translatePosition }, index) => {
                const slice = 360 / (data.length);
                const r = data.length > 3 ? '8' : '6';
                return {
                    transform: `rotate(${(slice * index) + -90 }deg) translate(${translatePosition ? translatePosition : r}em) rotate(${-((slice * index) + -90) }deg)`
                };
            });
            this.setState({ elStyles, centerElStyles: { opacity: 1 }, loaded: true, });
        }

    }
}
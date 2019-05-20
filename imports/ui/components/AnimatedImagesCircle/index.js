import React from 'react';
import PropTypes from 'prop-types';

//Redux
import { compose } from 'redux';

//HOC
import withMobile from '../../hoc/withMobile';

//Styles
import './animated-images-circle.css';


class AnimatedImagesCircle extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            img: PropTypes.string,
            text: PropTypes.string,
        })),
        title: PropTypes.string.isRequired,
    };
    state = {
        elStyles: [],
        centerElStyles: { opacity: 0 },
        textStyles: { opacity: 0 },
        loaded: false,
    };

    render() {
        const { data, title, isMobile } = this.props;
        const { elStyles, centerElStyles, textStyles } = this.state;
        return (
            <div className="circle-container">
                <ul>
                    <li
                        style={centerElStyles}
                        className='center-title'
                    >
                        <h2 style={textStyles} >{title}</h2>
                    </li>
                    {data.map(({ text, img }, index) => {
                        return (
                            <li
                                style={elStyles[index]}
                                key={index.toString()}
                            >
                                <div className="circle-img-container" style={isMobile ? { width: '50px' } : {}}>
                                    <img src={img} alt="" />
                                </div>
                                <h3 style={textStyles}>{text}</h3>
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

    componentDidUpdate(prevProps) {
        if (prevProps.isMobile !== this.props.isMobile) {
            this.scatterItems();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scatterItems);
    }

    scatterItems = () => {
        const { isMobile } = this.props;
        if (this.state.loaded) {
            window.removeEventListener('scroll', this.scatterItems);
        }
        if (window.scrollY > 100) {
            const { data } = this.props;
            const elStyles = data.map(({ translatePosition }, index) => {
                const slice = 360 / (data.length);
                let r = 9;
                if (isMobile) {
                    r = r * 0.66;
                    translatePosition = parseFloat(translatePosition) * 0.66;
                }
                return {
                    transform: `rotate(${(slice * index) + -90 }deg) translate(${translatePosition ? translatePosition : r}em) rotate(${-((slice * index) + -90) }deg)`
                };
            });
            const centerElStyles = { opacity: 1 };
            const textStyles = { opacity: 1 };
            if (isMobile) {
                centerElStyles.height = '70px';
                centerElStyles.width = '70px';
                //centerElStyles.transform = 'translateY(-50%)';
                textStyles.fontSize = '0.8em';
            }

            this.setState({ elStyles, centerElStyles, textStyles, loaded: true, });
        }

    }
}

export default compose(
    withMobile({}),
)(AnimatedImagesCircle);
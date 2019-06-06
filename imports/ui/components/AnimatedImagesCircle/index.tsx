import * as React from 'react';
import PropTypes = require('prop-types');

// Redux
import { compose } from 'redux';

// HOC
import withMobile from 'imports/ui/hoc/withMobile';

// Styles
import './animated-images-circle.css';

// @types
interface Item {
    img: string
    text: string
    length?: number
    translatePosition?: string
}

interface CenterElStyles {
    opacity: number
    height?: string
    width?: string
}

interface TextStyles {
    fontSize?: string
    opacity?: number
}

interface ReduxProps {
    isMobile: boolean

}

interface Props {
    data: Item[]
    title: string

}

interface State {
    liStyles: { transform: string }[]
    centerElStyles: CenterElStyles
    textStyles: TextStyles
    loaded: boolean

}

class AnimatedImagesCircle extends React.Component<Props & ReduxProps, State> {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            img: PropTypes.string,
            text: PropTypes.string,
        })),
        title: PropTypes.string.isRequired,
    };

    state = {
        liStyles: [],
        centerElStyles: { opacity: 0 },
        textStyles: { opacity: 0 },
        loaded: false,
    };

    render() {
        const { data, title, isMobile } = this.props;
        const { liStyles, centerElStyles, textStyles } = this.state;
        return (
            <div className="circle-container">
                <ul>
                    <li
                        style={centerElStyles}
                        className='center-title'
                    >
                        <h2 style={textStyles}>{title}</h2>
                    </li>
                    {data.map<JSX.Element>(({ text, img }, index) => {
                        return (
                            <li
                                style={liStyles[index]}
                                key={`${index}`}
                            >
                                <div className="circle-img-container" style={isMobile ? { width: '50px' } : {}}>
                                    <img src={img} alt=""/>
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

    // Circle animation handler
    scatterItems = (): void => {
        const { isMobile } = this.props;
        if (this.state.loaded) {
            window.removeEventListener('scroll', this.scatterItems);
        }
        const initHeight: number = isMobile ? 200 : 100;
        if (window.scrollY > initHeight) {
            const { data } = this.props;
            const liStyles: { transform: string }[] = data.map(({ translatePosition }, index) => {
                const slice = 360 / (data.length);
                let r: number = 9;
                let translateValue: number;
                if (isMobile) {
                    r = r * 0.66;
                    translateValue = parseFloat(translatePosition) * 0.66;
                } else {
                    translateValue = parseFloat(translatePosition);
                }
                return {
                    transform: `rotate(${(slice * index) + -90 }deg) translate(${translatePosition ? translateValue : r}em) rotate(${-((slice * index) + -90) }deg)`
                };
            });
            const centerElStyles: CenterElStyles = { opacity: 1 };
            const textStyles: TextStyles = { opacity: 1 };
            if (isMobile) {
                centerElStyles.height = '70px';
                centerElStyles.width = '70px';
                //centerElStyles.transform = 'translateY(-50%)';
                textStyles.fontSize = '0.8em';
            }
            this.setState({ liStyles, centerElStyles, textStyles, loaded: true, });
        }

    }
}

export default compose(
    withMobile({}),
)(AnimatedImagesCircle);
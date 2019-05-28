import React from 'react';

//Redux
import { compose } from 'redux';

//HOC
import withMobile from '/imports/ui/hoc/withMobile';

//Styles
import './hero-image.css';

const initYPosition = 220;

class HeroImage extends React.PureComponent {
    state = {
        backgroundPositionY: this.props.isMobile ? 0 : -(initYPosition),
    };

    render() {
        let { backgroundPositionY } = this.state;
        return (
            <div
                className='hero-image-container'
                style={{ backgroundPositionY }}
            />
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.imageMove);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.imageMove);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isMobile !== this.props.isMobile) {
            const { backgroundPositionY } = this.state;
            this.setState({ backgroundPositionY: this.props.isMobile ? backgroundPositionY : backgroundPositionY / 2 });
        }
    }

    imageMove = () => {
        const { isMobile } = this.props;
        if (window.scrollY < 440) {
            if (isMobile) {
                this.setState({ backgroundPositionY: ((window.scrollY * -1.2)) });
            } else {
                this.setState({ backgroundPositionY: ((window.scrollY * -1.6) - initYPosition) });
            }

        }
    };
}

export default compose(
    withMobile({}),
)(HeroImage);
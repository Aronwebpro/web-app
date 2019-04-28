import React from 'react';

export default class HeroImage extends React.PureComponent {
    state = {
        backgroundPositionY: -187,
    };

    render() {
        return (
            <div
                className='hero-image-container'
                style={{ backgroundPositionY: this.state.backgroundPositionY }}
            />
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.imageMove);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.imageMove);
    }

    imageMove = () => {
        if (window.scrollY < 440) {
            this.setState({ backgroundPositionY: ((window.scrollY * -1.6) -187) });
        }
    }
}
import React from 'react';
import PropTypes from 'prop-types';

import './accordion.css';

export default class Accordion extends React.Component {
    static propTypes = {
        title: PropTypes.object.isRequired,
        headerStyles: PropTypes.object,
        expandOnRender: PropTypes.bool,
    };
    static defaultProps = {
        headerStyles: {
            backgroundColor: 'red',
            color: 'white',
        },
        expandOnRender: false,
    };
    state = {
        height: 0,
    };

    render() {
        const {
            title,
            headerStyles,
        } = this.props;
        const { height } = this.state;
        return (
            <>
                <section className='accordion-wrapper'>
                    <div
                        style={headerStyles}
                        className='accordion-header'
                        onClick={this.expand}
                        ref={this.titleHeader}
                    >
                        {title}
                    </div>
                    <div
                        className='accordion-inner'
                        style={{ height }}
                    >
                        <div
                            className='inner-content'
                            ref={this.innerContent}
                        >
                            {this.props.children}
                        </div>
                    </div>
                </section>
            </>
        );
    }

    titleHeader = React.createRef();
    innerContent = React.createRef();

    componentDidMount() {
        const { expandOnRender } = this.props;
        if (expandOnRender) {
            setTimeout(this.expand, 100);
        }
    }

    //Expand Widget Header on Click
    expand = () => {
        const currentHeight = this.state.height;
        if (currentHeight === 0) {
            this.setState({ height: this.innerContent.current.clientHeight });
        } else {
            this.setState({ height: 0 });
        }
    };

    changeBtn = (position) => {
        if (position === 'down') {
            this.arrow.style.transform = 'rotateZ(-90deg) translate(7%, 40%)';
        } else {
            this.arrow.style.transform = 'rotateZ(0deg) translate(20%, 0%)';
        }
    };
}
import React from 'react';
import PropTypes from 'prop-types';

//Styles
import './accordion.css';

export default class Accordion extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };
    static defaultProps = {
        title: 'Header Title'
    };
    state = {
        isOpen: true,
        height: '0px',
        sticky: false,
    };

    render() {
        const { title, index } = this.props;
        const { sticky } = this.state;
        return (
            <>
                <section className={`accordion-wrapper ${sticky && 'accordion-sticky-header'}`}>
                    <div
                        className='accordion-header'
                        onClick={this.scrollTo}
                        ref={this.titleHeader}
                        style={{ top: `${80 + (index * 53)}px` }}
                    >
                        <h3><span>{title}</span></h3>
                    </div>
                    <div
                        className='accordion-inner'
                        //style={{ height: this.state.height }}
                    >
                        <div className='inner-content' ref={this.innerContent}>
                            <div>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    titleHeader = React.createRef();

    innerContent = React.createRef();

    componentDidMount() {
        //this.setState({ height: `${this.innerContent.current.clientHeight + 20}px`, isOpen: true });
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const { index } = this.props;

        if ((this.innerContent.current.getBoundingClientRect().top + window.scrollY - 158 - (index * 50)) < (window.scrollY) ) {
            this.setState({ sticky: true });
        } else {
            if (this.state.sticky) {
                this.setState({ sticky: false });
            }
        }
    };

    scrollTo = () => {
        const { index } = this.props;
        window.scrollTo({
            top: window.scrollY + this.innerContent.current.getBoundingClientRect().top - (150 + (index * 50)),
            behavior: 'smooth'
        });
    }
}
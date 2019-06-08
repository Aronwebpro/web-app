import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { compose } from 'redux';

// HOC
import withMobile from '../../hoc/withMobile';

//Styles
import './scroll-to-section.css';

class ScrollToSection extends React.Component {
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
        const { title, index, isMobile } = this.props;
        const { sticky } = this.state;
        return (
            <>
                <section className={`scroll-to-wrapper ${sticky && !isMobile && 'scroll-to-sticky-header'}`}>
                    <div
                        className='scroll-to-header'
                        onClick={this.scrollTo}
                        ref={this.titleHeader}
                        style={{ top: `${80 + (index * 53)}px` }}
                    >
                        <h3><span>{title}</span></h3>
                    </div>
                    <div className='scroll-to-inner'>
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
        //window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        //window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const { index, isMobile } = this.props;
        if (!isMobile) {
            if ((this.innerContent.current.getBoundingClientRect().top + window.scrollY - 158 - (index * 50)) < (window.scrollY)) {
                this.setState({ sticky: true });
            } else {
                if (this.state.sticky) {
                    this.setState({ sticky: false });
                }
            }
        }
    };

    scrollTo = () => {
        const { index } = this.props;
        window.scrollTo({
            top: window.scrollY + this.innerContent.current.getBoundingClientRect().top - (150 + (index * 50)),
            behavior: 'smooth'
        });
    };
}

export default compose(
    withMobile({})
)(ScrollToSection);
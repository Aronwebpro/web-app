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
                        style={{ top: `${80 + (index * 75)}px` }}
                    >
                        <h3>{title}</h3>
                    </div>
                    <div className='accordion-inner' style={{ height: this.state.height }}>
                        <div className='inner-content' ref={this.innerContent}>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor, est non vulputate finibus,
                                    diam purus fermentum enim, quis pharetra urna magna sollicitudin est. Fusce aliquet magna quis
                                    massa lobortis maximus. Integer ut nibh eget turpis egestas dictum vel vitae est. Donec
                                    imperdiet, nisl et sollicitudin sollicitudin, eros nunc semper risus, sit amet iaculis tortor
                                    urna nec neque. Nulla sit amet commodo ipsum, in vehicula orci. In quis condimentum augue.
                                    Praesent vel velit ex. Quisque quis quam non elit molestie tincidunt eget eu eros. Nam luctus
                                    nisi et urna blandit, sit amet convallis dolor rhoncus. Nam lobortis urna eget malesuada
                                    dignissim.</p>
                                <p> Donec eu tempor enim. Nunc accumsan sem a mollis fermentum. Integer nec sodales justo. Nulla
                                    feugiat ut enim sollicitudin viverra. Donec quis volutpat diam. Praesent dapibus scelerisque
                                    dignissim. Praesent scelerisque elit ut posuere auctor. Donec scelerisque leo in nisl sodales
                                    ultrices. Aenean diam ipsum, malesuada sed elementum suscipit, lacinia ac quam.</p>
                                <p>In vel elementum elit, nec lacinia neque. Proin suscipit, ex commodo pulvinar pharetra, lectus
                                    magna accumsan risus, eget porta est ex a neque. Nam ut elit blandit ex malesuada congue.
                                    Mauris sit amet ligula eget orci consectetur iaculis. Cras lacinia bibendum enim, nec maximus
                                    velit dapibus a. Duis gravida lectus ultrices, mattis sapien non, congue neque. Proin
                                    porttitor augue at nisi condimentum imperdiet. Morbi elementum et lacus eu vulputate. Maecenas
                                    sed elit nec tellus commodo dictum. Donec ac sodales orci.</p>
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
        this.setState({ height: `${this.innerContent.current.clientHeight + 20}px`, isOpen: true });
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const { index } = this.props;

        if ((this.innerContent.current.getBoundingClientRect().top + window.scrollY - 170 - (index * 80)) < (window.scrollY) ) {
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
            top: window.scrollY + this.innerContent.current.getBoundingClientRect().top - (150 + (index * 80)),
            behavior: 'smooth'
        });
    }
}
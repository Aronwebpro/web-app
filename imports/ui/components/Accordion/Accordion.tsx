import * as React from 'react';
import * as PropTypes from 'prop-types';

// Components
import Arrow from 'imports/ui/components/Arrow';

// Styles
import './accordion.css';

// @types
interface Props {
    title: string | JSX.Element,
    headerStyles?: {
        [key: string]: string
    }
    expandOnRender: boolean
}

interface State {
    height: number
}

export default class Accordion extends React.Component<Props, State> {
    static propTypes = {
        title: PropTypes.object.isRequired,
        headerStyles: PropTypes.object,
        expandOnRender: PropTypes.bool,
    };

    static defaultProps = {
        headerStyles: {
            backgroundColor: 'transparent',
            color: '#1f2229',
            border: '1px solid #ededed'
        },
        expandOnRender: false,
    };

    state: Readonly<State> = {
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
                        className="accordion-header"
                        onClick={this.expand}
                        ref={this.titleHeader}
                    >
                        <Arrow
                            state={height ? 'up' : 'down'}
                            color={'#4c4c4c'}
                        />
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

    // Refs
    titleHeader: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    innerContent: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

    componentDidMount() {
        const { expandOnRender } = this.props;
        if (expandOnRender) {
            setTimeout(this.expand, 100);
        }
    }

    // Show or Hide Content on Click
    expand = (): void => {
        const currentHeight = this.state.height;
        if (currentHeight === 0) {
            this.setState({ height: this.innerContent.current.clientHeight + 10 });
        } else {
            this.setState({ height: 0 });
        }
    };
}
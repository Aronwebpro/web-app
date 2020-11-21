import * as React from 'react';

// Router
import { Link, withRouter,  RouteComponentProps } from 'react-router-dom';

// Redux
import { compose } from 'redux';

// HOC
import withMobile from '../../hoc/withMobile';

// AntD
import Icon from 'antd/lib/icon';

//Styles
import './mobile-navigation.css';

interface MenuItem {
    title: string;
    icon: string;
    labelComponent: JSX.Element;
    link: string;
}

interface ReduxProps {
    isMobile: boolean

}

interface State {
    activeLink: string
}

// Local variables
const iconStyles: {[key:string]: string} = {
    fontSize: '25px',
    color: '#fff',
};

// Menu Items
const navigationItems: MenuItem[] = [
    {
        title: 'Home',
        icon: 'home',
        labelComponent:
            (
                <div className='mobile-navigation-item-button'>
                    <Icon type="home" style={iconStyles}/>
                    <p>Home</p>
                </div>
            ),
        link: '/'
    },
    {
        title: 'My Story',
        icon: 'coffee',
        labelComponent:
            (
                <div className='mobile-navigation-item-button'>
                    <Icon type="coffee" style={iconStyles}/>
                    <p>My Story</p>
                </div>
            ),
        link: '/my-story',
    },
    {
        title: 'Resume',
        icon: 'file-done',
        labelComponent:
            (
                <div className='mobile-navigation-item-button'>
                    <Icon type="file-done" style={iconStyles}/>
                    <p>Resume</p>
                </div>
            ),
        link: '/resume',
    },
    {
        title: 'Portfolio',
        icon: 'laptop',
        labelComponent:
            (
                <div className='mobile-navigation-item-button'>
                    <Icon type="laptop" style={iconStyles}/>
                    <p>Portfolio</p>
                </div>
            ),
        link: '/portfolio',
    },
];

class MobileNavigation extends React.PureComponent<ReduxProps & RouteComponentProps, State> {
    state = {
        activeLink: '/',
    };

    render() {
        const { isMobile } = this.props;
        const { activeLink } = this.state;
        return (
            <div className='mobile-navigation-container shadow' style={{ bottom: isMobile ? 0 : -110 }}>
                <div className='mobile-navigation-wrapper'>
                    {navigationItems.map<JSX.Element>(({ title, icon, link }, index) => {
                        const hasBorder = index !== navigationItems.length - 1 ? 'has-border' : '';
                        const active = activeLink === link ? 'active' : '';
                        const iconStyles: {[key:string]: string} = {
                            fontSize: '25px',
                            color: active ? '#5f5f5f' : 'lightgray',
                            marginTop: '15px',
                        };
                        return (
                            <div
                                key={link}
                                className={`mobile-navigation-item ${hasBorder} ${active}`}
                            >
                                <Link
                                    to={link}
                                    onClick={this.handleClick.bind(this, link)}>
                                    <div className='mobile-navigation-item-button'>
                                        <Icon type={icon} style={iconStyles}/>
                                        <p>{title}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="mobile-navigation-footer"/>
            </div>
        );
    }

    componentDidMount() {
        const { history } = this.props;
        this.setState({ activeLink: history.location.pathname });
    }

    handleClick = (activeLink: string): void => this.setState({ activeLink });
}


export default compose<React.ComponentType<ReduxProps & RouteComponentProps>>(
    withMobile({}),
    withRouter,
)(MobileNavigation);
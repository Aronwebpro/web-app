import * as React  from 'react';

//Components
import HeroImage from 'imports/ui/components/HeroImage';

type Props = {
    PageComponent: React.ComponentType
    SideBarComponent: React.ComponentType<{page: string}>
    pageId: string
    layout: string
}

const PageLayout = ({ PageComponent, SideBarComponent, pageId, layout }: Props) => {
    switch (layout) {
        case 'withSidebar' :
            return class extends React.Component<Props, {}> {
                render() {
                    return (
                        <div id={pageId ? `${pageId}` : 'page'} className="page-container">
                            <div className="leftSide">
                                <SideBarComponent page={pageId} {...this.props}/>
                            </div>
                            <div className="rightSide">
                                <PageComponent {...this.props}/>
                            </div>
                        </div>
                    );
                }
            };
        default :
            return class extends React.Component {
                render() {
                    return (
                        <div id={pageId ? `${pageId}` : 'page'} >
                            <HeroImage />
                            <PageComponent {...this.props}/>
                        </div>
                    );
                }
            };
    }
};

export default PageLayout;
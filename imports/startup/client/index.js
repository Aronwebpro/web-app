import React from 'react';
import { render } from 'react-dom';
//Antd Styles
import '/imports/ui/theme.less';

//Styles
import '/assets/css/theme.css';

//Components
import App from '../../ui/App';

Meteor.startup(() => {
    render(<App />, document.getElementById('root'));
});
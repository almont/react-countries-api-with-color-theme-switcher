import React, { Fragment } from 'react';
import Menu from '../menu';
import Flags from '../flags';
import './style.scss';

const App = () => {
    return (
        <Fragment>
            <Menu />
            <Flags />
        </Fragment>
    );
};

export default App;

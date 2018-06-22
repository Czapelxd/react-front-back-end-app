import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

const App = (props) => {
    return (
        <h2 className={"text-center"}>
            {props.headerMassage}
        </h2>
    );
};

App.propTypes = {
    headerMassage: PropTypes.string
};

App.defaultProps = {
    headerMassage: 'Hello!'
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
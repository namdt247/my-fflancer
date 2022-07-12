import React from 'react';
import PropTypes from 'prop-types';

function Demo(props) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h1>{props.textContent}</h1>
    </div>
  );
}

Demo.propTypes = {
  textContent: PropTypes.string,
  // children: PropTypes.element.isRequired,
};

Demo.defaultProps = {
  textContent: 'Hello Demo Page',
}

export default Demo;


import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { dataTestid, type, name, description } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { description }
          <input id={ name } type={ type } name={ name } data-testid={ dataTestid } />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Inputs;

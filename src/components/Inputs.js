import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { dataTestid, type, description } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestid }>
          { description }
          <input type={ type } data-testid={ dataTestid } />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Inputs;

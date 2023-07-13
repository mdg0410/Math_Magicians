/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import PropTypes from 'prop-types';

const buttons = {
  textAlign: 'center',
  height: '60px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #d8c9bc',
  boxSizing: 'border-box',
  cursor: 'pointer',
};

export default class Button extends Component {
  render() {
    const { handleClick, buttonName, btnClass } = this.props;
    return (
      <li
        aria-hidden
        onClick={() => handleClick(buttonName)}
        className={btnClass}
        style={buttons}
      >
        {buttonName}
      </li>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
};

Button.defaultProps = {
  btnClass: '',
};

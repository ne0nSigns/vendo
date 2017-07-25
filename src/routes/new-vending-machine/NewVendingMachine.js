/* eslint no-console: 0*/

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewVendingMachine.css';

// TODO: form validation

class NewVendingMachine extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleLongitudeChange: PropTypes.func.isRequired,
    handleLatitudeChange: PropTypes.func.isRequired,
  };

  defaultProps = {
    onSubmit(){},
    handleLongitudeChange(){},
    handleLatitudeChange(){},
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Add Vending Machine</h1>
          <form onSubmit={this.props.onSubmit} method="post">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="longitude">Longitude:</label>
              <input
                className={s.input}
                type="text"
                id="longitude"
                name="longitude"
                onChange={this.props.handleLongitudeChange}
                placeholder="-180 to 180" />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="latitude">Longitude:</label>
              <input
                className={s.input}
                type="text"
                id="latitude"
                name="latitude"
                onChange={this.props.handleLatitudeChange}
                placeholder="-90 to 90" />
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NewVendingMachine);

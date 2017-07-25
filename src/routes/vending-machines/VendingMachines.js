/* eslint no-console: 0*/

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './VendingMachines.css';

class VendingMachines extends React.Component {
  static propTypes = {
    vendingMachines: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        attributes: PropTypes.shape({
          longitude: PropTypes.string.isRequired,
          latitude: PropTypes.string.isRequired
        }),
      }),
    ).isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  defaultProps = {
    handleClick(){},
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Vending Machines</h1>
          <table className={s.vendoTable}>
            <thead>
              <tr className={s.vendoRows}>
                <th>ID</th>
                <th>Type</th>
                <th>Longitude</th>
                <th>Latitude</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.vendingMachines.map(unit =>
                <tr key={unit.id} className={s.vendoRows}>
                  <td>
                    {unit.id}
                  </td>
                  <td>
                    {unit.type}
                  </td>
                  <td>
                    {unit.attributes.longitude}
                  </td>
                  <td>
                    {unit.attributes.latitude}
                  </td>
                  <td>
                    <button
                      className={s.button}
                      onClick={() => this.props.handleClick(unit.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(VendingMachines);

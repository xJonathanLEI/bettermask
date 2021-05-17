import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Subviews
import AddressImportView from './address';

export default class AccountWatchSubview extends Component {
  static contextTypes = {
    t: PropTypes.func,
  };

  state = {};

  render() {
    return (
      <div className="new-account-import-form">
        <div className="new-account-import-disclaimer">
          <span>Add a Watch-Only Account</span>
        </div>
        <AddressImportView />
      </div>
    );
  }
}

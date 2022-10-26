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
      <>
        <div className="page-container__header">
          <div className="page-container__title">Watch Account</div>
          <div className="page-container__subtitle">
            Add a Watch-Only Account
          </div>
        </div>
        <div className="new-account-import-form">
          <AddressImportView />
        </div>
      </>
    );
  }
}

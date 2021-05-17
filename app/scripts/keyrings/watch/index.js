const { EventEmitter } = require('events');
const type = 'Watch Pair';

class WatchKeyring extends EventEmitter {
  constructor(opts) {
    super();
    this.type = type;
    this.address = '';
    this.deserialize(opts);
  }

  serialize() {
    return Promise.resolve(this.address ? this.address : '');
  }

  deserialize(opts) {
    this.address = opts ? opts : '';
    return Promise.resolve();
  }

  addAccounts() {
    return Promise.reject(
      new Error('Not supported on this keyring: addAccounts'),
    );
  }

  removeAccount() {
    this.address = '';
    return Promise.resolve();
  }

  getAccounts() {
    return Promise.resolve(this.address ? [this.address] : []);
  }

  signTransaction(address, tx, opts) {
    console.log('Attempting to sign transaction on read-only account:');
    console.log('address:', address);
    console.log('tx:', tx);
    console.log('opts:', opts);

    return Promise.reject(
      new Error('Not supported on this keyring: signTransaction'),
    );
  }

  signMessage(address, data, opts) {
    console.log('Attempting to sign message on read-only account:');
    console.log('address:', address);
    console.log('data:', data);
    console.log('opts:', opts);

    return Promise.reject(
      new Error('Not supported on this keyring: signMessage'),
    );
  }

  exportAccount() {
    return Promise.reject(
      new Error('Not supported on this keyring: exportAccount'),
    );
  }
}

WatchKeyring.type = type;
module.exports = WatchKeyring;

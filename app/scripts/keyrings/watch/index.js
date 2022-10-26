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

  signPersonalMessage(address, data, opts) {
    console.log('Attempting to sign personal message on read-only account:');
    console.log('address:', address);
    console.log('data:', data);
    console.log('opts:', opts);

    return Promise.reject(
      new Error('Not supported on this keyring: signPersonalMessage'),
    );
  }

  signTypedData(address, data, opts) {
    console.log('Attempting to sign personal typed data on read-only account:');
    console.log('address:', address);
    console.log('data:', data);
    console.log('opts:', opts);

    return Promise.reject(
      new Error('Not supported on this keyring: signTypedData'),
    );
  }

  exportAccount() {
    return Promise.reject(
      new Error('Not supported on this keyring: exportAccount'),
    );
  }

  decryptMessage() {
    return Promise.reject(
      new Error('Not supported on this keyring: decryptMessage'),
    );
  }

  forgetDevice() {
    return Promise.reject(
      new Error('Not supported on this keyring: forgetDevice'),
    );
  }

  getAppKeyAddress() {
    return Promise.reject(
      new Error('Not supported on this keyring: getAppKeyAddress'),
    );
  }

  getEncryptionPublicKey() {
    return Promise.reject(
      new Error('Not supported on this keyring: getEncryptionPublicKey'),
    );
  }
}

WatchKeyring.type = type;
module.exports = WatchKeyring;

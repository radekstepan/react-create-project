import React from 'react';

import store from './stores/AppStore.js';

import Articles from './components/Articles.jsx';

export default React.createClass({

  displayName: 'App.jsx',

  _getData() {
    return store.get();
  },

  _onChange() {
    this.setState(this._getData());
  },

  getInitialState() {
    return this._getData();
  },

  componentDidMount() {
    store.onAny(this._onChange);
  },

  componentWillUnmount() {
    store.offAny(this._onChange);
  },

  render() {
    return (
      <Articles store={this.state} />
    );
  }

});

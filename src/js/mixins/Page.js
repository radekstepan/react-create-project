import store from '../stores/appStore.js';

export default {

  // Get the pojo of the store.
  _getData() {
    return store.get();
  },

  _onChange() {
    this.setState(this._getData());
  },

  getInitialState() {
    return this._getData();
  },

  // Listen to all events (data changes).
  componentDidMount() {
    store.onAny(this._onChange);
  },

  componentWillUnmount() {
    store.offAny(this._onChange);
  },

};

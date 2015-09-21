import store from '../stores/AppStore.js';

export default {

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

};

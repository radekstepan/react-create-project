import opa from 'object-path';
import { diff } from 'deep-diff';

export default class Store {

  constructor(data) {
    this.data = data || {};
  }

  emit(path) {
    console.log('->', path);
  }

  on(path, cb) {

  }

  onAny(cb) {

  }

  off(path, cb) {

  }

  offAny(cb) {

  }

  set() {
    var changes = [];
    
    // Object assign.
    if (arguments.length == 1) {
      diff(this.data, arguments[0]).forEach(change => {
        changes.push(change.path.join('.'));
      });
      Object.assign(this.data, arguments[0]);
    // When path is provided.
    } else {
      changes.push(arguments[0]);
      opa.set(this.data, changes[0], arguments[1]);
    }

    // Shall we emit change events?
    if (arguments.length == 3 && arguments[2]) return;

    // Emit all changes.
    changes.forEach(this.emit);
  }

  get(path) {
    return path ? opa.get(this.data, path) : this.data;
  }

}

/** @jsx React.DOM */
var React = require('react');

var Collection = require('../models/TasksCollection.js');

var Tasks = React.createClass({

  'displayName': 'Tasks.jsx',

  // A place to serialize our collections and models and build a pojo.
  //  For every Backbone model, collection or any other object, we need to serialize
  //  the data into one neat package.
  _getData: function() {
    return this.props.collection.get();
  },

  // What shall we do on Backbone model change? Update our internal state. This can be
  //  called multiple times in succession and because of the efficient diffing algo,
  //  all will still be fast.
  _onChange: function() {
    this.setState(this._getData());
  },

  // Invoked once before the component is mounted. The return value will be used as
  //  the initial value of `this.state`.
  getInitialState: function() {
    return this._getData();
  },

  // Invoked once, only on the client (not on the server), immediately after the
  //  initial rendering occurs.
  componentDidMount: function() {
    //  Listen to model changes to update our internal state. So for all Backbone
    //  models, collections or any other objects, we need to register their changes
    //  to our own change handler (which sets the new state).
    this.props.collection.onAny(this._onChange);
  },

  // Invoked immediately before a component is unmounted from the DOM.
  componentWillUnmount: function() {
    //  Remove listener. So for all Backbone models, collections or any other objects,
    //  we need to stop listening to their changes in the context of our change handler
    //  so that we no longer have zombies lingering around.
    this.props.collection.offAny(this._onChange);
  },

  // Pure function, it does not modify component state, it returns the same result each
  //  time it's invoked, and it does not read from or write to the DOM or otherwise
  //  interact with the browser (e.g., by using setTimeout).
  render: function() {
    var tasks = '';

    return (
      <div className="tasks">
        {this.state.list.map(function(task) {
          return <Task {...task}>;
        })}
      </div>
    );
  }

});

// Just a way to privately set a Model per Component. A sort of constructor...
module.exports = React.createClass({

  render: function() {
    var props = {};
    assign(props, this.props, { 'collection': new Collection() });
    return <Tasks {...props} />;
  }

});
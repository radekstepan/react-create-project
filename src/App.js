import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import history from './history';
import routes from './routes';

import Topbar from './components/Topbar';

function App(props) {
  const {route} = props;

  useEffect(() => {
    // Watch route changes (allows back-button etc.).
    history.listen(location => route(location));
  }, [route]);

  return (
    <div>
      <Topbar />
      {props.render(props.state)}
    </div>
  );
}

const mapState = state => ({
  state,
  render: routes[state.router.route].render
});

const mapDispatch = dispatch => ({
  route: dispatch.router.route
});

export default connect(mapState, mapDispatch)(App);

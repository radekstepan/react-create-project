import React from 'react';
import { Model } from 'falcor';
import HttpDataSource from 'falcor-http-datasource'

import App from './App.jsx';

React.render(<App />, document.body);

let model = new Model({ source: new HttpDataSource('/model.json') });
model.get("greeting").then((res) => console.log(res.json.greeting));
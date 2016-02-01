import falcor from 'falcor-express';
import express from 'express';

import Router from './router.js';

let app = express();

// Data model router.
app.use('/model.json', falcor.dataSourceRoute((req, res) => { return new Router(req) }));
// Serve static resources.
app.use(express.static(__dirname + '/public/'));
// Start Express on port.
app.listen(8080, (err) => console.log(err ? err : 'Server started on port 8080'));
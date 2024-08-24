const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;

import express from 'express';
import routes from 'routes';

const PORT =  3000;
const HOST = '0.0.0.0';

const app = express();

app.use('/', routes);

app.listen(PORT, function() {
  console.log('Running on port ' + PORT);
});
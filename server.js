const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen(port, () => {
  console.log(`Shearwater MessageSpecification API server started on: ${port}`);
});

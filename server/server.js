const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
app.use(parser.json());
app.use(cors());

const createRouter = require('./helpers/create_router.js');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('endangered');
    const continentsCollection = db.collection('continents');
    const continentsRouter = createRouter(continentsCollection);
    app.use('/api/continents', continentsRouter)
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

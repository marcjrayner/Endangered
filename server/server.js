const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
app.use(parser.json());
app.use(cors())

const createRouter = require('./helpers/create_router.js')
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('endangered')

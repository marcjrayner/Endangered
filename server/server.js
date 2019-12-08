const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
app.use(parser.json());
app.use(cors())

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')

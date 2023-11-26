const { Router } = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const routes = Router();

// MongoDB 연결 정보
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'DatabaseName';

async function registerTickets(req, res){
  try {
    const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('CollectionName');

    const newDocument = req.body;

    const result = await collection.insertOne(newDocument);

    client.close();

    res.json(result.ops);
  } catch (err) {
    console.error(err);
  }
}

routes.post('/', registerTickets);

module.exports = routes;
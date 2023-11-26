const { Router } = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const routes = Router();

// MongoDB 연결 정보
const mongoURI = 'mongodb://dk_123:dk_db@13.125.75.242:27017/dkdb';
const dbName = 'dkdb';

async function registerTickets(req, res){
  const { request_id, flightData, email } = req.body;

  try {
    const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('monitorings');

    const newDocument = {
      request_id: request_id,
      flightData: flightData,
      email: email
    };

    const result = await collection.insertOne(newDocument);

    client.close();
    
  } catch (err) {
    console.error(err);
  }
}

routes.post('/', registerTickets);

module.exports = routes;
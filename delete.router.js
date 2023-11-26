const { Router } = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const routes = Router();

// MongoDB 연결 정보
const mongoURI = 'mongodb://dk_123:dk_db@13.125.75.242:27017/dkdb';
const dbName = 'dkdb';

async function deleteTicket(req, res){
  const request_id = req.params.request_id;

  try {
    const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('monitorings'); // 컬렉션 이름

    await collection.deleteOne({ request_id: request_id });

    client.close();
    
  } catch (err) {
    console.error(err);
  }
}

routes.delete('/', deleteTicket);

module.exports = routes;
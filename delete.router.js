const { Router } = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const routes = Router();

// MongoDB 연결 정보
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'DatabaseName';

async function deleteTicket(req, res){
  try {
    const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('CollectionName'); // 컬렉션 이름

    const documentID = createObjectID(req.params.id); // ObjectID 생성

    const result = await collection.deleteOne({ _id: documentID });

    client.close();

    res.json({ message: '모니터링 티켓 삭제 완료' });
  } catch (err) {
    console.error(err);
  }
}

routes.delete('/', deleteTicket);

module.exports = routes;
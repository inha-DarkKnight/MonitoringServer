const { MongoClient, ObjectID } = require('mongodb');

// MongoDB 연결 정보
const mongoURI = 'mongodb://dk_123:dk_db@13.125.75.242:27017/dkdb';
const dbName = 'dkdb';

try {
  const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
  await client.connect();

  const db = client.db(dbName);
  const collection = db.collection('monitorings'); // 컬렉션 이름 변경

  const documents = await collection.find({}).toArray();

  client.close();

} catch (err) {
  console.error(err);
}
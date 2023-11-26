const { MongoClient, ObjectID } = require('mongodb');

try {
  const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
  await client.connect();

  const db = client.db(dbName);
  const collection = db.collection('CollectionName'); // 컬렉션 이름 변경

  const documents = await collection.find({}).toArray();

  client.close();

  res.json(documents);
} catch (err) {
  console.error(err);
}
const mongo = require('mongodb').MongoClient

const DATABASE = process.env.MONGODB_DATABASE;
const MONGODB_URI = process.env.MONGODB_URI;

export const COLLECTION_ACCOUNTS = 'accounts';

export const getDatabase = () => {
  const dbOptions = {
    useNewUrlParser: true,
  };
  const promiseCallback = (resolve, reject) => {
    mongo.connect(MONGODB_URI, dbOptions, (err, client) => {
      if (err) return reject(err);

      const db = client.db(DATABASE);
      resolve(db);
    });
  }
  return new Promise(promiseCallback);
};

export const getCollection = (collectionName) => {
  return getDatabase().then(db => db.collection(collectionName))
}
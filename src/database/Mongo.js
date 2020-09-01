import { MongoClient as mongo } from 'mongodb';

const DATABASE = 'application';
const MONGODB_URI = 'mongodb://db:27017';

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
import { getDatabase  } from '../database/Mongo';

export default {
  list: async (req, res) => {
    try {
      const db = await getDatabase();
      const collection = db.collection('accounts');
      const data = await collection.find({}).toArray();
      res.json({message: 'Accounts found', data });
    }catch(e){
      console.error(e);
      res.json({message: `Something's wrong`, error: e});
    }
  },
  create: async (req, res) => {
    try {
      const db = await getDatabase();
      const collection = db.collection('accounts');
      const result = await collection.insertOne({ name: 'Alan Gonçalves' });
      const data = result.ops[0];
      res.json({message: 'Account Created', data });
    }catch(e){
      console.error(e);
      res.json({message: `Something's wrong`, error: e});
    }
  },
};
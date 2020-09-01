import express from 'express';
import { getDatabase } from './src/database/Mongo';

const PORT =  3000;
const HOST = '0.0.0.0';

const app = express();

app.use('/', async (req, res) => {
  try {
    const db = await getDatabase();
    const collection = db.collection('accounts');
    const result = await collection.insertOne({ name: 'Alan Gonçalves' });
    const data = result.ops[0];
    res.json({message: 'Account Created', data });
  }catch(e){
    res.json({message: `Something's wrong`, error: e});
  }
});

app.listen(PORT, function() {
  console.log('Running on port ' + PORT);
});
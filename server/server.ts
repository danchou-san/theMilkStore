import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();

const uri = 'mongodb://localhost:27017';

app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    
    await client.connect();

    const db = client.db('milkDb');
    const collection = db.collection('products');

    const products = await collection.find().toArray();

    client.close();

    res.json(products);
  } catch (err) {
    console.error('Error retrieving products: ', err);
    res.status(500).json({ error: 'Error retrieving products'});
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
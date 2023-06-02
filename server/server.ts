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

    const products = await collection.findOne();

    const results = products?.results || [];

    client.close();

    res.json(results);
  } catch (err) {
    console.error('Error retrieving products: ', err);
    res.status(500).json({ error: 'Error retrieving products'});
  }
})

app.get('/api/products/:productId', async (req, res) => {
  try {
    const { productId } = req.params;

    const client = new MongoClient(uri);

    await client.connect();

    const db = client.db('milkDb');
    const collection = db.collection('products');

    const products = await collection.findOne();

    const product = products?.results.find((item: { id: string; }) => item.id === productId);

    client.close();

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    console.error('Error retrieving product: ', err);
    res.status(500).json({ error: 'Error retrieving product' });
  }
});




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
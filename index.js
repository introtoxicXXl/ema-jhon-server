const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()



//middleware
app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@emajhon.0cpbp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
  try {
    await client.connect();
    const productsCollection = client.db('emaJhon').collection('product');
    //get all products
    app.get('/products', async (req, res) => {
      const query = {};
      const cursor = productsCollection.find(query);
      const products = await cursor.toArray()
      res.send(products)
    });

  }
  finally {

  }
}
run().catch(console.dir);

app.get('/home', (req, res) => {
  res.send('ema is running');
})
app.listen(port, () => {
  console.log('success', port);
})



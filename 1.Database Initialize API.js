// Import required modules
const express = require('express');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.PORT || 3000;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mydatabase';
const collectionName = 'products';

// Initialize the database with seed data
const initializeDatabase = async () => {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true });
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const products = response.data;
        await collection.insertMany(products);
        console.log('Database initialized with seed data');
        client.close();
    } catch (error) {
        console.log(error);
    }
};

initializeDatabase();

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
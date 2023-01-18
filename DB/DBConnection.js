import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'EAD2_DB';

export const ConnectDB = async () => {
    await client.connect();
    console.log('Connected successfully to server');
}
export const db = client.db(dbName);

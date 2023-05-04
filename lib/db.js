import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://primaryclient:ppclient@cluster0.lhbqrpk.mongodb.net/auth?retryWrites=true&w=majority'
  );

  return client;
}

import { MongoClient } from "mongodb";

const URL = "mongodb://localhost:27017";

let client: any;
async function connectToMongo() {
    try {
        if (!client) {
            client = await MongoClient.connect(URL);
        }
        return client;
    } catch (err) {
        console.log(err);
    }
}

export async function getMongoCollection(
    dbName: string,
    collectionName: string,
) {
    const client = await connectToMongo();
    return client.db(dbName).collection(collectionName);
}

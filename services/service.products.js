import { readFile, writeFile } from "node:fs/promises";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://lucasgarcia:lucasgarcia@sailorexpresscoffee.xve7vik.mongodb.net");

const db = client.db("AH20232CP1");

async function getProducts() {
  return db.collection("products").find({deleted: {$ne: true}}).toArray();
}

async function getProductsById(id) {
  return db.collection("products").findOne({ _id: new ObjectId(id) })
}

export { getProducts, getProductsById };

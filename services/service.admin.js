import { readFile, writeFile } from "node:fs/promises";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://lucasgarcia:lucasgarcia@sailorexpresscoffee.xve7vik.mongodb.net");

const db = client.db("AH20232CP1");

async function getUsers() {
  return db.collection("users").find().toArray();
}

async function getProductsById(id) {
  return db.collection("users").findOne({ _id: new ObjectId(id) })
}

async function getProductsByType(type) {
  return db.collection("users").find({type: type}).toArray()
}

export { getUsers, getProductsById, getProductsByType };

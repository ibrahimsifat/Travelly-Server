const express=require('express')
const app=express()
const port=process.env.PORT || 5000;
require('dotenv').config()
const cors=require('cors')
const ObjectId=require('mongodb').ObjectId

// middleware

app.use(cors())
app.use(express.json())

const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1clhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);
async function run(){
    await client.connect();
    const database = client.db("Genius-Car");
    const serviceCollection = database.collection("services");

// GET API
app.get('/services',async(req,res)=>{
    const cursor=serviceCollection.find({})
    const services=await cursor.toArray()
    res.send(services)
})



}
run().catch(console.dir)

app.get('/',(req,res)=>{
    res.send('running d sdfsdg ')
})











app.listen(port,(req,res)=>{
    console.log('running prot',port);
})
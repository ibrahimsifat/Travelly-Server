const express=require('express')
const app=express()
const port= process.env.PORT || 5000
require('dotenv').config()
const { MongoClient } = require('mongodb');

//connect mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1clhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



async function run() {
    try {
      await client.connect();
      const database = client.db("tourism");
      const serviceCollection = database.collection("serviceCollection");
      // create a document to insert
      const service = {
        title: "our service",
        content: "this is our tourism services ",
      }
    //   const result = await serviceCollection.insertOne(service);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);









    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);













// 
app.get('/',(req,res)=>{
    res.send('server is my server is running')
})
app.get('/services',(req,res)=>{
    res.send('this si hidden')
})
app.listen(port,()=>{
    console.log('listening port is ' ,port);
})
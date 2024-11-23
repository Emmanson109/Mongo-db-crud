const express = require('express');
const app = express();
const mongoose = require('mongoose');
const product = require('./models/product.model.js');  // model imported
const productRoutes = require ('./routes/product.route.js');

 

app.listen(7200, () => { console.log('app running on port 7200')

});
// middleware
 app.use(express.json()); // to enable nodejs send and receive json files
 app.use(express.urlencoded({extended: false}));

  //routes
  app.use('/api/products', productRoutes);
 
 // home page route
app.get( '/', (req,res) =>{
  res.send('Hello world from node crud api , it gonna be great');// practically not in use
}) 

mongoose.connect('mongodb+srv://emmanson109:m8Jael9XRz283GOX@cluster0.5bdkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then( () =>{
  console.log('Database connection successful');
}).catch( () =>{
  console.log('Database connection not successful');
});
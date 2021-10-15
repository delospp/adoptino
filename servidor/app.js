const express=require('express');
const morgan=require('morgan');
const cors=require ('cors');
const path=require('path');
const mongoose = require('mongoose');
const app=express();
//conexión BD

const uri = 'mongodb+srv://eve:DLRX3P0JYFuswtEs@cluster0.bmzrt.mongodb.net/myapp?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology:true};


mongoose.connect(uri, options).then(
   
    () => { console.log('Conectado a DB') },
    err =>{console.log(err)}
    );






//middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/login'));
//
app.use(express.urlencoded({ extended: true}))


//ruta
app.get('/', function(req, res){

    res.send('hola pepa');
});
//middlewares para Vuejs
const history= require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//puerto escuchando
app.set('puerto', process.env.PORT || 4000)
app.listen(app.get('puerto'), function(){
    console.log('Corriendo el servidor en puerto' +app.get('puerto'));
});
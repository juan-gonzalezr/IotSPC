const express=require('express');
const app=express();
const cors =require('cors');



//Settings para configurar el servidor
app.set('port', process.env.PORT || 4000);


//middlewares funciones que se ejecutan antes de que lleguen a las rutas
app.use(cors())
app.use(express.json());
//routes
app.use('/api/users',require('./routes/users'))
app.use('/api/info' ,require('./routes/info'))


//
if(process.env.NODE_ENV==='production'){
    app.use(express.static('backend/build'))
}
module.exports=app;

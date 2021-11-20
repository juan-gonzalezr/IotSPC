const {Schema, model}= require('mongoose')

const infoSchema = new Schema({
    Titulo:String,
    Descripcion:String,
    Autor:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }


},
{
    timestamps:true
})

module.exports=model('Info',infoSchema);
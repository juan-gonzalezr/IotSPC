const {Schema, model}= require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const userSchema = new Schema({
    Nombres:String,
    Apellidos:String,
    Correo:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    Password:String,       
    
    Username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    Sesion:Boolean,


},
{
    timestamps:true
});

userSchema.methods.encryptPassword=(Password)=>{
    return bcrypt.hashSync(Password,bcrypt.genSaltSync(10))

}

userSchema.methods.comparePassword= function(Password){
    return bcrypt.compareSync(Password,this.Password);
}

module.exports=model('User',userSchema);
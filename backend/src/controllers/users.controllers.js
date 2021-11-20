const userCtrl ={};
const User = require('../models/Users')

userCtrl.getUsers=async(req, res)=> {
    const users= await User.find();
    res.json(users)}
userCtrl.createUsers=async(req, res)=> {
    const {Nombres,Apellidos,Correo,Username,Password,Sesion}=req.body;
    console.log(Nombres,Apellidos,Correo,Username,Password,Sesion)
    const newUser= new User({Nombres,Apellidos,Correo,Username,Password,Sesion})
    await newUser.save();
    
    res.json({message:"Usuario creado"})};
userCtrl.getUser=async(req, res)=> {
    const UserUnic=await User.findById(req.params.id)
        
    res.send(UserUnic)
    res.json({  message:"Usuario Numero #"   })}
userCtrl.updateUsers=async(req, res)=> {
    console.log(req.params.id,req.body)
    
    const{Nombres,Apellidos,Correo,Username,Password,Sesion}=req.body
    await User.findByIdAndUpdate(req.params.id,{
        Nombres,Apellidos,Correo,Username,Password,Sesion
    })
    
    res.json({ message:"Usuario Actualizado"  })}
userCtrl.deleteUsers=async(req, res)=> {
    await User.findByIdAndDelete(req.params.id)

    
    res.json({ message:"Usuario eliminado"  })}

module.exports=userCtrl;
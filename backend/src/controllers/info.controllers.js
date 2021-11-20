const infoCtrl={};
const Info =require('../models/info');


infoCtrl.getInfos=async(req, res)=> {
    const infos=await Info.find();
    res.send(infos)}

infoCtrl.createInfo=async(req, res)=> {
    const {Titulo,Descripcion,Autor}=req.body;
    const newInfo= new Info({
        Titulo,Descripcion,Autor
    })
    console.log(newInfo)
    await newInfo.save();
    res.send('Info Guardada')}

infoCtrl.getInfo=async(req, res)=> {
        
        const InfoUnic=await Info.findById(req.params.id)
        //const info=await Info.find();
        res.send(InfoUnic)}

infoCtrl.updateInfo=async(req, res)=> {
    
    console.log(req.params.id,req.body)
    const{Titulo,Descripcion,Autor}=req.body
    await Info.findByIdAndUpdate(req.params.id,{
        Titulo,
        Descripcion,
        Autor
    })
    res.send('Info actualizada')}

infoCtrl.deleteInfo=  async(req, res)=> {
          
     await Info.findByIdAndDelete({_id:req.params.id})
     res.send('Info Borrada')}

module.exports = infoCtrl;
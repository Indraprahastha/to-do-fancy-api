let user = require('../models/user')
var mongoose = require('mongoose');
//-------------------------------------------------------- getdata
const getUser = (req,res) => {
  user.find().then((user)=>{
    res.send(user)
  }).catch((err)=>{
    res.send(err)
  })
}
//---------------------------------------------------- create data
const addUser = (req,res) => {
  user.create({
    username:req.body.username,
    password:req.body.password,
    email:req.body.email
  }).then((user)=>{
    res.send(user)
  }).catch((err)=>{
    res.send(err)
  })
}
//----------------------------------------------------- fine data
const findUser = (req,res) => {
  user.findById({
    _id:req.params.id
  }).then((user)=>{
    res.send(user)
  }).catch((err)=>{
    res.send(err)
  })
}
//----------------------------------------------------- edit data
const editUser = (req,res) => {
  user.update({
    _id:req.params.id
  },{
    username:req.body.username,
    password:req.body.password,
    email:req.body.email
  }).then((user)=>{
    res.send(user)
  }).catch((err)=>{
    res.send(err)
  })
}
//----------------------------------------------------- delete data
const deleteUser = (req,res) => {
  user.remove({
    _id:req.params.id
  }).then((user)=>{
    res.send(user)
  }).catch((err)=>{
    res.send(err)
  })
}


module.exports = {
  getUser,
  addUser,
  findUser,
  editUser,
  deleteUser
}

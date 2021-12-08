const express=require('express');
const router=express.Router();
const {postUser,getAllUsers,deleteUser,updateUser,getOneUser}=require('../controllers/UserController')
router.post('/user',postUser)
router.get('/user',getAllUsers);
router.delete('/user/:id',deleteUser);
router.put('/user/:id',updateUser);
router.get('/user/:id',getOneUser);
module.exports=router
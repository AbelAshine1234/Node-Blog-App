//  Update and deletethe user
const router = require('express').Router();
const User = require('../models/User')


// UPDATE
router.put("/update",async (req,res)=>{
    if(req.body.id){
        try {
            const user = await User.findByIdAndUpdate(req.body.id,{$set:{
                username:req.body.username
            }},{new:true})

            res.send(user)
            
        } catch (error) {
            res.status(404).json("Data not found")
            
        }
    res.send(user)}
    else{
        res.status(301).json("Wrong credentials")
    }
})
// DELETE
router.delete("/delete",async (req,res)=>{
    if(req.body.id){
        try {
            const user = await User.findByIdAndDelete(req.body.id)
            res.send(user)
            
        } catch (error) {
            res.status(404).json("Data not found")
            
        }
    res.send(user)}
    else{
        res.status(301).json("Wrong credentials")
    }
})

module.exports = router
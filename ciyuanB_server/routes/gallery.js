const express=require('express');
const pool=require('../pool.js');
router=express.Router();

// 图集
router.get("/gimg",(req,res)=>{
    pool.query('SELECT * FROM cyb_gallery',(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    });
});



module.exports=router;
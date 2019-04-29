const express=require('express');
const pool=require('../pool.js');
router=express.Router();

// ACG资讯
router.get("/new",(req,res)=>{
    pool.query('SELECT * FROM cyb_news',(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    });
});



module.exports=router;
const express=require('express');
const pool=require('../pool.js');
router=express.Router();

// 轮播图
router.get("/carousel",(req,res)=>{
    pool.query('SELECT * FROM cyb_index_carousel',(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    });
});
//图集推荐
router.get("/gimgs",(req,res)=>{
    pool.query('SELECT * FROM cyb_ind_gallery',(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    });
});



module.exports=router;
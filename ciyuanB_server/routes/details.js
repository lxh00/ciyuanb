/*商品详情页路由*/ 

const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建空路由器
router=express.Router();


// // 1.查询规格列表Ci_specs
//http://127.0.0.1:3000/Specsdetails  浏览器查询数据
// server.get("/SpecsDetails",(req,res)=>{
//     var sql="SELECT * FROM ci_specs";
//     pool.query(sql,(err,result)=>{
//         if(err) throw err;
//         res.send(result)
//         console.log({code:1,data:result});
//     })
// })
// // 2.查询详情图库表（大、中、小图片）Ci_standard_pic
// // http://127.0.0.1:3000/PicDetails  浏览器查询数据
// router.get("/PicDetails",(req,res)=>{
//     var sql="SELECT * FROM Ci_standard_pic";
//     pool.query(sql,(err,result)=>{
//         if(err) throw err;
//         res.send(result);
//         //console.log({code:1,data:result});
//     })
// })
// // 3.查询商品介绍表Ci_param_item
// // http://127.0.0.1:3000/ParamDetails  浏览器查询数据
// router.get("/ParamDetails",(req,res)=>{
//     var sql="SELECT *FROM Ci_param_item";
//     pool.query(sql,(err,result)=>{
//         if(err) throw err;
//         res.send(result);
//         //console.log({code:1,data:result});
//     })
// })


//导出路由器
module.exports=router;
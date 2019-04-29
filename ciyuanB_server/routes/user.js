const express=require('express');
const pool=require('../pool.js');
router=express.Router();

//添加路由


//登录
router.post("/login",(req,res)=>{
    //接收参数（用户名和密码）
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    pool.query('SELECT uname,upwd FROM cyb_user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"登录成功"});
        }else{
            res.send({code:-1,msg:"登录失败,用户名或密码错误"});
        }
        
    });
});


// 注册--用户名是否存在
router.get('/mreg',(req,res)=>{
    var $uname=req.query.uname;
    pool.query('SELECT uname FROM cyb_user WHERE uname=?',[$uname],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名可以使用"});
           
        }else{
             res.send({code:1,msg:"用户名已存在！"});
        }
    });
});

//注册提交
router.post('/mregyz',(req,res)=>{
    var obj=req.body;
    pool.query('INSERT INTO cyb_user SET ?',[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功！"});
        }
    })
})

//查询列表
// router.get("/userlist",(req,res)=>{
//     pool.query('SELECT * FROM cyb_user',(err,result)=>{
//         if(err) throw err;
//         res.send(result);
//     });
// });


//查询数量
router.get("/usercount",(req,res)=>{
    pool.query('SELECT count(*) AS cct FROM cyb_user',(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//分页
router.get("/userlist",(req,res)=>{
    var $start=Number(req.query.statt);
    var $count=Number(req.query.count);
    pool.query('SELECT uname,email,phone,gender,birth,uid FROM cyb_user LIMIT ?,?',[$start,$count],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});


//删除
router.get('/udelete',(req,res)=>{
    var $uid=req.query.uid;
    if(!$uid){
        res.send("uid不存在");
        return;
    }
    pool.query('DELETE FROM cyb_user WHERE uid=?',[$uid],(err,result)=>{
        if(err) throw err;
        res.send("1");
    });
});

router.get('/getinfo',(req,res)=>{
    var $uid=req.query.uid;
    if(!$uid){
        res.send("编号不能为空");
        return;
    }
    pool.query('SELECT * FROM cyb_user WHERE uid=?',[$uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result[0]);
        }else{
            res.send("1");
        }
    });
});



//修改信息
router.post('/updInfo',(req,res)=>{
    var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $birth=req.body.birth;
	var $gender=req.body.gender;
	if(!$uid){
		res.send("编码不能为空");
		return;
	}
	if(!$uname){
		res.send("用户名不能为空");
		return;
	}
	if(!$upwd){
		res.send("密码不能为空");
		return;
	}
	if(!$email){
		res.send("邮箱不能为空");
		return;
	}
	if(!$phone){
		res.send("电话不能为空");
		return;
	}
	if(!$gender){
		res.send("性别不能为空");
		return;
	}
	if(!$birth){
		res.send("生日不能为空");
		return;
	}
    pool.query('UPDATE cyb_user SET uname=?,upwd=?,email=?,phone=?,birth=?,gender=? WHERE uid=?',[$uname,$upwd,$email,$phone,$birth,$gender,$uid],(err,result)=>{
        if(err) throw err;
        res.send("修改成功！");
    });
});





module.exports=router;
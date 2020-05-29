const express =require('express');
const bodyParser=require('body-parser');
const dishRouter=express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('will send all dishes to you')
})
.post((req,res,next)=>{
	res.end('will add the dish'+req.body.name+'with details'+req.body.description)
})
.put((req,res,next)=>{
	statusCode=403;
	res.end('put operation not supported')
})
.delete((req,res,next)=>{
	res.end('delete all dish')
})
module.exports=dishRouter;
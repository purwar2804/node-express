const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const dishRouter=require('./routes/dishRouter')
const hostname='localhost';
const port=8000;
const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);

app.get('/dishes/:dishId',(req,res,next) =>{
	res.end('will send all the dish:'+req.params.dishId+'to you');
})
app.post('/dishes/:dishId',(req,res,next) =>{
	res.statusCode=403;
	res.end('post operation not supported /dishes/'+req.params.dishId)
})
app.put('/dishes/:dishId',(req,res,next) =>{
	res.write('updating the dish'+req.params.dishId)
	res.end('will update the dish'+req.body.name+'with details'+req.body.description);
})
app.delete('/dishes/:dishId',(req,res,next) =>{
	res.end('deleting dish'+req.params.dishId);
})





app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
	console.log(req.headers);
	res.statusCode=200;
	res.setHeader=('Content-Type','text/html');
	res.end('<html><body><h1>This is express server</h1></body></html>')
});
const server=http.createServer(app);
server.listen(port,hostname,() =>{
	console.log(`server running at http://${hostname}:${port}`);
});
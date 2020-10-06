const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;


const bodyParser = require('body-parser');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req,res,next)=>{ /******Specifying the API endpoint*/ 
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next(); /*Looks for additional specification matching the dishes endpoint*/
    /* i.e app.get() */
}); 

app.get('/dishes',(req,res,next)=>{
    res.end('Will send all the dishes to you !');
});

app.post('/dishes',(req,res,next)=>{
    /* Will carry some info in the body */
    res.end('Will add the dish'+ req.body.name + 'with details' + req.body.description);
}); /*  */


app.put('/dishes',(req,res,next)=>{
    /* Will carry some info in the body */
    res.statusCode = 403; 
    res.end('Put operation not supported on dishes');
});

app.delete('/dishes',(req,res,next)=>{ //! Dangerous op
    res.end('Deleting all the dishes you !');
});



app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will send details of the dish with the id ' + req.params.dishId + ' to you !');
});

app.post('/dishes/:dishId',(req,res,next)=>{
    /* Will carry some info in the body */
    res.statusCode = 403; 
    res.end('POST operation not supported on dishes/:dishId' + req.params.dishId);
}); /*  */


app.put('/dishes/:dishId',(req,res,next)=>{
    /* Will carry some info in the body */
    res.write('Updating the dish :' + req.params.dishId);
    res.end('Will update the dish : ' + req.body.name +
    '\n with details ' + req.body.description);
});


app.delete('/dishes/:dishId',(req,res,next)=>{ //! Dangerous op
    res.end('Deleting dish ' + req.params.dishId);
});







app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=> {
    // console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><h1>This is an express server</h1></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
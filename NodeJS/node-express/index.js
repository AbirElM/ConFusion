const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;


const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');


const app = express();

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);


app.use(morgan('dev'));
app.use(bodyParser.json());

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

app.delete('/dishes/:dishId',(req,res,next)=>{ //! Dangerous op !//
    res.end('Deleting dish ' + req.params.dishId);
});


                    /*!-------PROMO--------- */ 

app.get('/promotions/:promoId',(req,res,next)=>{  //? Get Operation //
    res.end('Will send details of the promo with the id ' + req.params.promoId + ' to you !');
});

app.post('/promotions/:promoId',(req,res,next)=>{ //? POST Operation//
    /* Will carry some info in the body */
    res.statusCode = 403; 
    res.end('POST operation not supported on promotions/:promoId' + req.params.promoId);
}); /*  */


app.put('/promotions/:promoId',(req,res,next)=>{  //? PUT Operation // 
    /* Will carry some info in the body */
    res.write('Updating the promo :' + req.params.promoId + '\n');
    res.end('Will update the promo : ' + req.body.name +
    '\n with details ' + req.body.description);
});

app.delete('/promotions/:promoId',(req,res,next)=>{ //? DELETE op !//
    res.end('Deleting promotion ' + req.params.promoId);
});




            /*!--------------------------LEADERS----------------------------- */ 

  app.get('/leaders/:leaderId',(req,res,next)=>{  //? Get Operation //
    res.end('Will send details of the leader with the id ' + req.params.leaderId + ' to you !');
});

app.post('/leaders/:leaderId',(req,res,next)=>{ //? POST Operation//
    /* Will carry some info in the body */
    res.statusCode = 403; 
    res.end('POST operation not supported on leaders/:leaderId' + req.params.leaderId);
}); /*  */


app.put('/leaders/:leaderId',(req,res,next)=>{  //? PUT Operation // 
    /* Will carry some info in the body */
    res.write('Updating the leader :' + req.params.leaderId + '\n');
    res.end('Will update the leader  : ' + req.body.name +
    '\n with details ' + req.body.description);
});

app.delete('/leaders/:leaderId',(req,res,next)=>{ //? DELETE op !//
    res.end('Deleting leader ' + req.params.leaderId);
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
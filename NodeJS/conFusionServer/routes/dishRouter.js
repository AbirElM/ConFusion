const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router(); 

/* Handle the dishRouter ops */

dishRouter.use(bodyParser.json());

dishRouter.route('/').all((req,res,next)=>{ /******Specifying the API endpoint*/ 
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next(); /*Looks for additional specification matching the dishes endpoint*/
    /* i.e app.get() */
}).get((req,res,next)=>{
    res.end('Will send all the dishes to you !');
}).post((req,res,next)=>{
    /* Will carry some info in the body */
    res.end('Will add the dish'+ req.body.name + 'with details' + req.body.description);
}).put((req,res,next)=>{
    /* Will carry some info in the body */
    res.statusCode = 403; 
    res.end('Put operation not supported on dishes');
}).delete((req,res,next)=>{ //! Dangerous op
    res.end('Deleting all the dishes for you !');
});

dishRouter.route('/:dishId').all((req,res,next)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next(); /*Looks for additional specification matching the dishes endpoint*/
    /* i.e app.get() */
}).get((req,res,next)=>{
    res.end('Will send details of the dish with the id ' + req.params.dishId + ' to you !');
}).post((req,res,next)=>{
    res.statusCode = 403; 
    res.end('POST operation not supported on dishes/:dishId' + req.params.dishId);
}).put((req,res,next)=>{ /* Will carry some info in the body */
    res.write('Updating the dish :' + req.params.dishId);
    res.end('Will update the dish : ' + req.body.name +
    '\n with details ' + req.body.description);
}).delete((req,res,next)=>{
    //! Dangerous op !//
    res.end('Deleting dish ' + req.params.dishId);
});

module.exports = dishRouter;
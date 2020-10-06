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
    res.end('Deleting all the dishes you !');
});

module.exports = dishRouter;
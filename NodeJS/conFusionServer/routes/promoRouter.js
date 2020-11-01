const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router(); 


promoRouter.use(bodyParser.json());

promoRouter.route('/').all((req,res,next)=>{ /******Specifying the API endpoint*/ 
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next(); /*Looks for additional specification matching the dishes endpoint*/
    /* i.e app.get() */
}).get((req,res,next)=>{
    res.end('Will send all the promotions to you !');
}).post((req,res,next)=>{
    /* Will carry some info in the body */
    res.end('Will add the promotion'+ req.body.name + 'with details' + req.body.description);
}).put((req,res,next)=>{
    /* Will carry some info in the body */
    res.statusCode = 403; 
    res.end('Put operation not supported on operations');
}).delete((req,res,next)=>{ //! Dangerous op
    res.end('Deleting all the promotions for you !');
});

promoRouter.route('/:promoId').all((req,res,next)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next(); /*Looks for additional specification matching the leaders endpoint*/
    /* i.e app.get() */
}).get((req,res,next)=>{
    res.end('Will send details of the promotion with the id ' + req.params.promoId + ' to you !');
}).post((req,res,next)=>{
    res.statusCode = 403; 
    res.end('POST operation not supported on promotions/:promoId' + req.params.promoId);
}).put((req,res,next)=>{ /* Will carry some info in the body */
    res.write('Updating the promotion :' + req.params.promoId);
    res.end('Will update the promotion : ' + req.body.name +
    '\n with details ' + req.body.description);
}).delete((req,res,next)=>{
    //! Dangerous op !//
    res.end('Deleting promotion ' + req.params.promoId);
});
module.exports = promoRouter;
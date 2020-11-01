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


module.exports = promoRouter;
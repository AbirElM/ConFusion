
const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router(); 


leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req,res,next)=>{ /******Specifying the API endpoint*/ 
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next(); /*Looks for additional specification matching the dishes endpoint*/
    /* i.e app.get() */
}).get((req,res,next)=>{
    res.end('Will send all the leaders to you !');
}).post((req,res,next)=>{
    /* Will carry some info in the body */
    res.end('Will add the leader'+ req.body.name + 'with details' + req.body.description);
}).put((req,res,next)=>{
    /* Will carry some info in the body */
    res.statusCode = 403; 
    res.end('Put operation not supported on operations');
}).delete((req,res,next)=>{ //! Dangerous op
    res.end('Deleting all the leaders for you !');
});


module.exports = leaderRouter;

const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router(); 


leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req,res,next)=>{ /******Specifying the API endpoint*/ 
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next(); /*Looks for additional specification matching the leaders endpoint*/
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


leaderRouter.route('/:leaderId').all((req,res,next)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next(); /*Looks for additional specification matching the leaders endpoint*/
    /* i.e app.get() */
}).get((req,res,next)=>{
    res.end('Will send details of the leader with the id ' + req.params.leaderId + ' to you !');
}).post((req,res,next)=>{
    res.statusCode = 403; 
    res.end('POST operation not supported on leaders/:leaderId' + req.params.leaderId);
}).put((req,res,next)=>{ /* Will carry some info in the body */
    res.write('Updating the leader :' + req.params.leaderId);
    res.end('Will update the leader : ' + req.body.name +
    '\n with details ' + req.body.description);
}).delete((req,res,next)=>{
    //! Dangerous op !//
    res.end('Deleting leader ' + req.params.leaderId);
});

module.exports = leaderRouter;
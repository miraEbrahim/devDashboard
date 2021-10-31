const express = require('express');
const  router = express.Router();

//Get users listing
router.get('/',function(req,res,ext){
    res.send('respond with a resource');
});

module.exports = router;
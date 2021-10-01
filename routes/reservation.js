const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/reservation',(req,res)=>{
    res.sendFile(path.join(__dirname, '..','views','reservation.html'))
});

module.exports = router;
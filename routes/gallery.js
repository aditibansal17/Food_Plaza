const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/gallery',(req,res)=>{
    res.sendFile(path.join(__dirname, '..','views','gallery.html'))
});

module.exports = router;
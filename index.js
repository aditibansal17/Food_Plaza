// Importing packages
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
//Importing routes
const home = require('./routes/home');
const contact = require('./routes/contact');
const gallery = require('./routes/gallery');
const reservation = require('./routes/reservation');
const menu = require('./routes/menu');
const login = require('./routes/login');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(home);
app.use(contact);
app.use(gallery);
app.use(reservation);
app.use(menu);
app.use(login);

var reservation1 = {
    name:[],
    contact:[],
    email:[],
    date:[],
    time:[],
    special:[],
    persons:[]
}

app.post('/successfull',(req,res)=>{
   // console.log(req.body);
    reservation1.name.push(req.body.name);
    reservation1.contact.push(req.body.contact);
    reservation1.email.push(req.body.email);
    reservation1.date.push(req.body.date);
    reservation1.time.push(req.body.time);
    reservation1.special.push(req.body.special);
    reservation1.persons.push(req.body.pnumber);
    
    res.sendFile(path.join(__dirname, 'views','successfull.html'));
})


var username = ['admin'];
var password = ['password'];

app.post('/login_successfull',(req,res)=>{
    if(req.body.username == username[0] && req.body.password == password[0]){
        console.log('ok login');
        res.render(path.join(__dirname, 'views', 'dashboard.ejs'),{res:reservation1});
        

    }
    else{
        res.sendFile(path.join(__dirname, 'views', 'login_failed.html'));
    }
})



app.use((req,res,next)=>{
    // res.render(path.join(__dirname, 'views','404.ejs'));
    res.sendFile(path.join(__dirname, 'views','404.html'));
});



app.listen(3000);
const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.set('view engine','ejs');

const dbURI = 'mongodb+srv://amerdev:mypassword@cluster0.egcboi3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log('connectedf')
}).catch((err) => console.log(err));

app.listen(3000,() => {
    console.log('app listening on 3000');
});

app.get('/',(req,res) => {
    res.render('index',{ title : 'home' });
});
app.get('/about',(req,res) => {
    res.render('about',{ title : 'about' });
});
app.get('/about-us',(req,res) => {
    res.redirect('/about');
});
app.get('/create',(req,res) => {
    res.render('create',{ title : 'Create' });
})
app.use((req,res) => {
    res.status(404).render('404'),{ title : 'error' };
});


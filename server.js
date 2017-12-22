const express = require('express');
const app = express();
const path = require("path");
const react_view = require('express-react-views');


const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'js');
app.engine('js', react_view.createEngine());


app.get('/', (req, res) => {
  res.render('index', { name: 'John' });
});


app.get('/dashboard', (req, res) => {
  res.render('dashboard', { name: 'Dashboard' });
});


app.listen(port, () => {
    console.log('App is start at port ', port);
});
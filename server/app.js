let express = require('express');
let bodyParser = require('body-parser');
var morgan = require('morgan')
//--------------------------------------------------------
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))
//--------------------------------------------------------
let user = require('./routers/user.js')
//--------------------------------------------------------
app.use('/user', user)

app.listen(3000, function(){
  console.log('Run Todo');
})

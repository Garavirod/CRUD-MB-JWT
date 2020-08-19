const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({ extended: true })
);

app.use(express.static(path.join(__dirname, 'public'))); //path/public

// Root
app.get('/', (req, res) => {
    res.send('Hello World from root!');
});


// API path
const users = require('./routes/userRoutes');
app.use("/users", users);

app.set('puerto', process.env.PORT || 5000);
app.listen(app.get('puerto'), () => {
    console.log('Example app listening on port ' + app.get('puerto'));
});

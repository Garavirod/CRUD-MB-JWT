const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
require('dotenv').config({ path: 'variables.env' });

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definir un domino para cibir peticiones
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: (origin, callback) => {
        // Revisar si el domino está en el whitelist
        console.log(origin);
        const exist = whiteList.some(dominio => dominio === origin);
        if (exist) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
}

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public'))); //path/public


// API path
const users = require('./routes/userRoutes');
app.use("/users", users);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

app.listen(port, host, () => {
    console.log("Server works!!");
});

// app.set('puerto', process.env.PORT || 5000);
// app.listen(app.get('puerto'), () => {
//     console.log('Example app listening on port ' + app.get('puerto'));
// });
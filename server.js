import express from 'express';
import bodyPrser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import errorHandler from './src/_middleware/error-handler.js';
import config from './src/configs/config.js';



const app = express();
app.use(cors());
app.use(bodyPrser.json());
app.use(express.static('./assets'));
app.use(passport.initialize());

import routes from './src/routes/routes.js';
app.use('/', routes);


app.get('/', (req, res) => res.send('Hello my World'));
let port = config.server.portServer || 4000;
//create a server
var server = app.listen(port, function() {
    var host = config.server.portServer;
    var port = config.server.host;
    console.log(`App listening at http:// ${port} : ${host} `);
});
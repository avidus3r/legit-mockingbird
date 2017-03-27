'use strict';

const Joi 			= require('joi');
const express		= require('express');
const app			= express();
const validate		= require('./lib/validate');

const url = 'https://api.instagram.com/v1/users/self?client_id=c913962bdd2c4da4a4a0608f1f91dd3a&access_token=28906928.c913962.c7cbe52f27e646b69a6215f260b42816';

app.set('port', process.env.PORT || 3000);

app.use(validate);

app.get('/', (req, res, next) => {
	res.status(200).send('OK');
	next();
});

app.get('/users', (req, res, next) => {
    console.log(res.isValid);
    res.status(200).send('OK');
    next();
});

app.get('/fruits', (req, res, next) => {
	res.send('hey');
	next();
});

app.get('/colors', (req, res, next) => {
	res.send(JSON.stringify({colors:['yellow', 'red', 'green', 'orange']}));
	next();
});

const server = app.listen(app.get('port'), 'localhost', () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`Server running at http://${host}:${port}/`);
});
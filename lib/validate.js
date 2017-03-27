'use strict';

const Joi 			= require('joi');
const request		= require('request');
const userSchema 	= require('../schemas/user.js');

module.exports = (req, res, next) => {	
	let path = req.path.replace('/','');
	switch(path) {
		case 'users':
			const schema = userSchema;
			const requiredSchema = schema.requiredKeys(
				'data',
					'data.full_name',
					'data.profile_picture',
					'data.website',
					'data.id',
					'data.username',
					'data.bio',
					'data.counts',
						'data.counts.followed_by',
						'data.counts.follows',
						'data.counts.media',
				'meta',
					'meta.code',
				'dogs'
			);
			let _validation = new Promise((reject, fulfill) =>{
				request(url, (error, response, body) =>{
					Joi.validate(body, schema, (err, value) => {
						if(err) reject(err);
						console.log(value);
						fulfill(value);
					});
			    });
			});
			_validation
				.then(result => {
					console.log(result);
					res.send('valid');
					next();
				})
				.catch(reason => {
					res.status(400).send(reason);
				});
		break;
	}
};

/*
	
const _validate = () => {
	return new Promise((reject, fulfill) =>{
		request(url, (error, res, body) =>{
			
		});
	});	
};

_validate()
	.then(result => {
		console.log(typeof result);
	})
	.catch(reason => {
		console.error(resson);
	});
*/
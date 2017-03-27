'use strict';

const Joi = require('joi');

module.exports = Joi.object().keys({
	data: Joi.object().keys({
		full_name: Joi.string(),
		profile_picture: Joi.string().uri({
			scheme:[
				'http',
				'https'
			]
		}),
		website: Joi.string().allow(''),
		id: Joi.string().required(),
		username: Joi.string().required(),
		bio: Joi.string().allow(''),
		counts: Joi.object().keys({
			followed_by: Joi.number(),
			follows: Joi.number(),
			media: Joi.number()
		})
	}),
	meta: Joi.object().keys({
		code: Joi.number().min(200).max(200).required()
	}),
	additional: Joi.string()
});
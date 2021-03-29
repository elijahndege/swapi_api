import * as Joi from 'joiful';

export class EnvVariables {
    @(Joi.string().valid(['development', 'production']).default('development'))
    NODE_ENV: string;

    @(Joi.string().required())
    APP_URL: string;

    @(Joi.string().required())
    SWAPI_URL: string;

    @(Joi.string().required())
    APP_NAME: string;

    @(Joi.string().required())
    CLIENT_URL: string;

    @(Joi.number().default(3000))
    APP_PORT: number;

}
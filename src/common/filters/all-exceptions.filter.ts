import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
    HttpException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { STATUS_CODES } from 'http';
import * as _ from 'lodash';


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(public reflector: Reflector) { }

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus()



        response.status(status).json({
            timestamp: new Date().toISOString(),
            statusCode: status,
            error: STATUS_CODES[status],
            message: exception.message,
            path: request.url
        });
    }


}
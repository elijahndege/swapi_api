import { Injectable, Inject } from "@nestjs/common";
import { BaseConfigService } from './base-config.service';
import { RedisOptions } from 'ioredis';

@Injectable()
export class ConfigService {
    env: any;
    constructor(
        @Inject('CONFIG_OPTIONS') configs,
        private readonly baseConfig: BaseConfigService
    ) {
        this.env = this.baseConfig.validateInput(configs)
        console.info('[this.env]-----', this.env)
    }
    get appName(): string {
        return String(this.env.APP_NAME)
    }
    get swapiUrl(): string {
        return String(this.env.SWAPI_URL)
    }
    get appUrl(): string {
        return String(this.env.APP_URL)
    }
    get clientUrl(): string {
        return String(this.env.CLIENT_URL)
    }
    get nodeEnv(): string {
        return String(this.env.NODE_ENV);
    }
    get port(): number {
        return Number(this.env.APP_PORT);
    }

    get redisHost(): string {
        return String(this.env.REDIS_HOST);
    }

    get redisPort(): number {
        return Number(this.env.REDIS_PORT);
    }

    getRedisOptions(
        enableOffline = true,
        db = 0,
    ): RedisOptions {
        return {
            host: this.redisHost,
            port: this.redisPort || 6379,
            db: db,
            enableOfflineQueue: enableOffline,
            enableReadyCheck: true,
        };
    }

    get baseFolder(): string {
        const regex = /shared+(\/|\\)+services/gi;
        return __dirname.replace(regex, '');
    }
}
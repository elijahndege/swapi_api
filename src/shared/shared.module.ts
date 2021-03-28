import { Module, Global } from '@nestjs/common';
import { ConfigService } from './services/config.service';
import { BaseConfigService } from './services/base-config.service';
import { RedisService } from './services/redis.service';




@Global()
@Module({
    providers: [
        BaseConfigService,
        ConfigService,
        RedisService,
        {
            provide: 'CONFIG_OPTIONS',
            useFactory: (baseConfigService: BaseConfigService) =>
                baseConfigService.getEnvs(),
            inject: [BaseConfigService],
        },
    ],
    exports: [ConfigService, RedisService]
})
export class SharedModule { }

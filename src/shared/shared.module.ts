import { Module, Global } from '@nestjs/common';
import { ConfigService } from './services/config.service';
import { BaseConfigService } from './services/base-config.service';




@Global()
@Module({
    providers: [
        BaseConfigService,
        ConfigService,
        {
            provide: 'CONFIG_OPTIONS',
            useFactory: (baseConfigService: BaseConfigService) =>
                baseConfigService.getEnvs(),
            inject: [BaseConfigService],
        },
    ],
    exports: [ConfigService]
})
export class SharedModule { }

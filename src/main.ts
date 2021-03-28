import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as rateLimit from 'express-rate-limit';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from './shared/services/config.service';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);
  const _configs = app.select(SharedModule).get(ConfigService);

  app
    // .use(
    //   rateLimit({
    //     windowMs: 15 * 60 * 1000, // 15 minutes
    //     max: 100, // limit each IP to 100 requests per windowMs
    //   }),
    // )
    .enableCors();

  app.useGlobalPipes();
  app.useGlobalFilters(new AllExceptionsFilter(reflector));

  await app.listen(_configs.port, () => {
    Logger.log(`Application has started on port: ${_configs.port}`);
  });
}
bootstrap();

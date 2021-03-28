import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql';
import { PeopleModule } from './modules/people/people.module';
import { SharedModule } from './shared/shared.module';


@Module({
  imports: [
    GraphQLModule.forRoot(
      {
        debug: true,
        playground: true,
        autoSchemaFile: true,
      },
    ),
    SharedModule,
    PeopleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

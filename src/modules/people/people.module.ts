import { HttpModule, Module } from '@nestjs/common';
import { PeopleResolver } from './resolvers/people.resolver';
import { PeopleService } from './services/people.service';

@Module({
    imports: [HttpModule],
    providers: [PeopleResolver, PeopleService]
})
export class PeopleModule { }

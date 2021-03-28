import { HttpService } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { People } from "../models/people.models";
import { PeopleService } from "../services/people.service";


@Resolver(of => People)
export class PeopleResolver {
    constructor(
        private readonly peopleService: PeopleService,
        private readonly httpService: HttpService
    ) { }

    @Query(returns => [People])
    async people(
        @Args('pageNumber') pageNumber: number,
    ): Promise<People[]> {
        return await this.peopleService.people(pageNumber);
    }

    @Query(returns => [People], { name: 'person', nullable: true })
    async searchPeople(
        @Args('name') name: string,
    ): Promise<People[]> {
        return await this.peopleService.searchPeople(name);
    }


}
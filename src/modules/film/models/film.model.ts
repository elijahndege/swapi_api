import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Species } from "../../../modules/species/species.model";

@ObjectType()
export class Film {
    @Field()
    title: string;

    @Field(type => Int)
    episode_id: number;

    @Field()
    opening_crawl: string;

    @Field()
    director: string;

    @Field()
    producer: string;

    @Field()
    release_date: string;

    @Field()
    created: string;

    @Field()
    edited: string;

    @Field()
    url: string;

    @Field((type) => Species, { nullable: true })
    films: Species[];

    // @Field()
    // vehicles: [string];

    // @Field()
    // starships: [string];

    // @Field()
    // planets: [string];

    // @Field()
    // characters: [string];

}
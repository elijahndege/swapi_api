import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Planet } from "../../../modules/planet/models/planet.model";

@ObjectType()
export class People {
    @Field(type => ID)
    id: string;

    @Field({ nullable: true })
    name: string;

    @Field()
    height: string;

    @Field()
    mass: string;

    @Field()
    hair_color: string;

    @Field()
    skin_color: string;

    @Field()
    eye_color: string;

    @Field()
    birth_year: string;

    @Field()
    gender: string;

    @Field((type) => Planet, { nullable: true })
    homeworld: Planet;

    @Field()
    created: string;

    @Field()
    edited: string;

    @Field()
    url: string;

    starships: [string]
    vehicles: [string]
    species: [string]
    films: [string]
}
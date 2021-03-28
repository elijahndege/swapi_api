import { Field, ObjectType } from "@nestjs/graphql"
import { Film } from "../../../modules/film/models/film.model";

@ObjectType()
export class Planet {
    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    rotation_period: string;

    @Field({ nullable: true })
    orbital_period: string;

    @Field({ nullable: true })
    diameter: string;

    @Field({ nullable: true })
    climate: string;

    @Field({ nullable: true })
    gravity: string;

    @Field({ nullable: true })
    terrain: string;

    @Field({ nullable: true })
    surface_water: string;

    @Field({ nullable: true })
    population: string;

    @Field({ nullable: true })
    created: string;

    @Field({ nullable: true })
    edited: string;

    @Field({ nullable: true })
    url: string;

    @Field((type) => Film, { nullable: true })
    films: Film[];

    // @Field({ nullable: true })
    // residents: [string]
}
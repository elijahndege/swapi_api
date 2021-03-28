import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class StarShip {
    name: string;
    @Field()
    model: string;
    @Field()
    manufacturer: string;
    @Field()
    cost_in_credits: string;
    @Field()
    length: string;
    @Field()
    max_atmosphering_speed: string;
    @Field()
    crew: string;
    @Field()
    passengers: string;
    @Field()
    cargo_capacity: string;
    @Field()
    consumables: string;
    @Field()
    hyperdrive_rating: string;
    @Field()
    MGLT: string;
    @Field()
    starship_class: string;
    @Field()
    created: string;
    @Field()
    edited: string;
    @Field()
    url: string;
    @Field()
    films: [string]
    @Field()
    pilots: [string]
}
import { People } from "../models/people.models";

export interface PeopleRes {
    count: number;
    next?: string;
    previous?: string;
    results: People[];
}

import { People } from '../../modules/people/models/people.models';

export interface ResponseData {
    count: number;
    next?: string;
    previous?: string;
    results: People[];
}

import { HttpService, Injectable } from "@nestjs/common";
import { Planet } from "../../../modules/planet/models/planet.model";
import { ConfigService } from "../../../shared/services/config.service";
import { People } from "../models/people.models";
import { PeopleRes } from "../interfaces/people.interface";

@Injectable()
export class PeopleService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configs: ConfigService,
    ) { }

    async getAllPeople(pageNumber: number, name?: string,): Promise<PeopleRes> {
        try {
            let url = `${this.configs.swapiUrl}/people/?page=${pageNumber}`;
            if (name) {
                url = `${this.configs.swapiUrl}/people/?search=${name}`
            }
            const response = await this.httpService.get(url).toPromise();
            return response.data;
        } catch (error) {
            return null
        }
    }
    async getPlanet(url: any): Promise<Planet> {
        const response = await this.httpService.get(url).toPromise();
        return response.data ? response.data : null;
    }

    async people(pageNumber: number): Promise<People[]> {
        try {
            const peopleObj = await this.getAllPeople(pageNumber);

            if (peopleObj && peopleObj.results.length) {
                const peopleWithPlanets = await Promise.all(
                    peopleObj.results.map(async (p) => {
                        if (p.homeworld) {
                            const planetObj = await this.getPlanet(p.homeworld);
                            p.homeworld = planetObj;
                            return p;
                        }
                    }),
                );

                return peopleWithPlanets;

            }
            return []
        } catch (error) {
            return null;
        }
    }
    async searchPeople(name: string): Promise<People[]> {
        try {
            const peopleObj = await this.getAllPeople(0, name);
            if (peopleObj && peopleObj.results.length) {
                const peopleWithPlanets = await Promise.all(
                    peopleObj.results.map(async (p) => {
                        if (p.homeworld) {
                            const planetObj = await this.getPlanet(p.homeworld);
                            p.homeworld = planetObj;
                            return p;
                        }
                    }),
                );

                return peopleWithPlanets;
            }

            return [];
        } catch (error) {
            return null;
        }
    }
}

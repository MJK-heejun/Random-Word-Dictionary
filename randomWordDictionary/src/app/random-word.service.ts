import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RandomWordService {

    constructor(private http:Http) { }

    getRandomWordTest() {
        return this.http.get('http://date.jsontest.com')
            .map((res:Response) => res.json()); //convert observable into json format
    }

}

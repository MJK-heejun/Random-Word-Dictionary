import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordService {

    baseUrl: string = `api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;

    constructor(private http: Http) {
        this.baseUrl = window.location.protocol == 'https:' ? `https://${this.baseUrl}` : `http://${this.baseUrl}`;
    }

    public GetRandomWord(wordType: string) {
        let url = wordType ? this.baseUrl + `&includePartOfSpeech=${wordType}` : this.baseUrl;
        console.log(`http call to: ${url}`);
        return this.http.get(url)
            .map((res: Response) => res.json()); //convert observable into json format
    }

}

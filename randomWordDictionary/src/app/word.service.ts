import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordService {

    baseUrl: string = `api.wordnik.com/v4/`;    

    constructor(private http: Http) {
        this.baseUrl = window.location.protocol == 'https:' ? `https://${this.baseUrl}` : `http://${this.baseUrl}`;
    }

    public GetRandomWord(wordType: string) {
        let randomApi = `${this.baseUrl}words.json/randomWord?hasDictionaryDef=true&hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
        let url = wordType ? `${randomApi}&includePartOfSpeech=${wordType}` : randomApi;
        return this.http.get(url)
            .map((res: Response) => res.json()); //convert observable into json format
    }

    public GetDefinition(word: string) {        
        let url = `${this.baseUrl}word.json/${word}/definitions?limit=1&includeRelated=true&sourceDictionaries=all&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
        return this.http.get(url)
            .map((res: Response) => res.json()); //convert observable into json format
    }

    public GetAudioUrl(word: string) {
        let url = `${this.baseUrl}word.json/${word}/audio?useCanonical=true&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
        return this.http.get(url)
            .map((res: Response) => res.json()); //convert observable into json format
    }

    public GetList() {
        let key = "randomWordDictionaryArray";
        return localStorage[key] ? JSON.parse(localStorage[key]) : [];
    }


    public AddToList(word: string) {
        if (word) {
            let key = "randomWordDictionaryArray";
            if (!localStorage[key])
                localStorage.setItem(key, JSON.stringify([]));
            let currentArr = JSON.parse(localStorage[key]);
            if (!currentArr.includes(word)) {
                currentArr.push(word);
                localStorage.setItem(key, JSON.stringify(currentArr));
            }
            console.log("storage list");
            console.log(localStorage[key]);
        }
    }

    public ClearList() {
        localStorage.clear();
    }

    public RemoveFromList(word:string) {
        let key = "randomWordDictionaryArray";
        let currentArr = JSON.parse(localStorage[key]);
        let index = currentArr.indexOf(word);
        if (index !== -1) 
            currentArr.splice(index, 1);      
        localStorage.setItem(key, JSON.stringify(currentArr));  
        console.log("storage list");
        console.log(localStorage[key]);
    }
}

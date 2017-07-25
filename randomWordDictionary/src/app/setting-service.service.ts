import { Injectable } from '@angular/core';

@Injectable()
export class SettingServiceService {

    private wordType: string;
    private isAutoDefLoad: boolean = true;

    constructor() {
        this.wordType = "noun";
    }

  public GetCurrentWordType(): string {
      return this.wordType;
  }

  public SetWordType(wordType: string) {
      this.wordType = wordType;
  }



}

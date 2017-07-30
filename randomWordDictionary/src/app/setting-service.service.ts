import { Injectable } from '@angular/core';

@Injectable()
export class SettingServiceService {

    private wordType: string;
    private isAutoAudioLoad: boolean = true;

    constructor() {
        this.wordType = "any";
    }

  public GetCurrentWordType(): string {
      return this.wordType;
  }

  public SetWordType(wordType: string) {
      this.wordType = wordType;
  }


  public IsAutoAudioLoading(): boolean {
      return this.isAutoAudioLoad;
  }

  public SetAutoAudio(autoAudio: boolean) {
      this.isAutoAudioLoad = autoAudio;
  }

}

import { Component, OnInit } from '@angular/core';
import { SettingServiceService } from '../setting-service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

    wordType: string = 'noun';
    isAutoAudioLoad: boolean = true;

    constructor(private settingService: SettingServiceService) { }

    ngOnInit() {
        this.wordType = this.settingService.GetCurrentWordType();
    }
    onChange() {
        console.log("changed");
        this.settingService.SetWordType(this.wordType);
    }


    onChangeAudio() {
        this.settingService.SetAutoAudio(this.isAutoAudioLoad);
    }
}

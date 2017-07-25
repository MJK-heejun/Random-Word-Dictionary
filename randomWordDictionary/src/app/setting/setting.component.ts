import { Component, OnInit } from '@angular/core';
import { SettingServiceService } from '../setting-service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

    wordType: string = 'noun';
    isAutoDefLoad: boolean = true;

    constructor(private settingService: SettingServiceService) { }


  //isAutoDefLoad(): boolean {
  //    return false;
  //}


    ngOnInit() {
        this.wordType = this.settingService.GetCurrentWordType();
    }
    onChange() {
        console.log("changed");
        this.settingService.SetWordType(this.wordType);
    }
}

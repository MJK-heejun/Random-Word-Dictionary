import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

    wordType: string = 'noun';
    isAutoDefLoad: boolean = true;

  constructor() { }

  getCurrentWordType(): string {
      return this.wordType;
  }

  //isAutoDefLoad(): boolean {
  //    return false;
  //}


  ngOnInit() {
  }

}

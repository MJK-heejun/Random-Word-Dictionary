import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service';
import { SettingServiceService } from '../setting-service.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: [WordService]
})
export class RandomComponent implements OnInit {

    myData: string;

    constructor(private wordService: WordService, private settingService: SettingServiceService) { }

    ngOnInit() {
        //let wordType = this.settingComponent.getCurrentWordType() == "any" ? null : this.settingComponent.getCurrentWordType();
        //console.log(`currnet word type is '${wordType}'`);
        //this.wordService.getRandomWord(wordType).subscribe( //subscribe to the observable return method
        //    data => this.myData = JSON.stringify(data),
        //    error => alert(error),
        //    () => console.log("finished")
        //);
        
    }

    onRandomClick() {
        let wordType = this.settingService.GetCurrentWordType() == "any" ? null : this.settingService.GetCurrentWordType();
        
        this.wordService.GetRandomWord(wordType).subscribe( //subscribe to the observable return method
            data => this.myData = JSON.stringify(data),
            error => alert(error),
            () => console.log("finished")
        );        
    }

}

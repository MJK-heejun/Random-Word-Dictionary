import { Component, OnInit } from '@angular/core';
import { RandomWordService } from '../random-word.service';
import { SettingServiceService } from '../setting-service.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: [RandomWordService]
})
export class RandomComponent implements OnInit {

    myData: string;

    constructor(private randomWordService: RandomWordService, private settingService: SettingServiceService) { }

    ngOnInit() {
        //let wordType = this.settingComponent.getCurrentWordType() == "any" ? null : this.settingComponent.getCurrentWordType();
        //console.log(`currnet word type is '${wordType}'`);
        //this.randomWordService.getRandomWord(wordType).subscribe( //subscribe to the observable return method
        //    data => this.myData = JSON.stringify(data),
        //    error => alert(error),
        //    () => console.log("finished")
        //);
        
    }

    onRandomClick() {
        let wordType = this.settingService.GetCurrentWordType() == "any" ? null : this.settingService.GetCurrentWordType();
        
        this.randomWordService.GetRandomWord(wordType).subscribe( //subscribe to the observable return method
            data => this.myData = JSON.stringify(data),
            error => alert(error),
            () => console.log("finished")
        );        
    }

}

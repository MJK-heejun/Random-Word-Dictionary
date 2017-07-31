import { Component, OnInit, Input } from '@angular/core';
import { WordService } from '../word.service';
import { SettingServiceService } from '../setting-service.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: []
})
export class RandomComponent implements OnInit {
    @Input() newWord: string; //word from saved list
    myWord: string;

    constructor(private wordService: WordService, private settingService: SettingServiceService) { }

    ngOnInit() {
   
    }

    onRandomClick() {
        let wordType = this.settingService.GetCurrentWordType() == "any" ? null : this.settingService.GetCurrentWordType();
        
        this.wordService.GetRandomWord(wordType).subscribe( //subscribe to the observable return method
            data => this.myWord = data.word,
            error => alert(error),
            () => console.log("finished")
        );        
    }

    onSaveClick() {
        this.wordService.AddToList(this.myWord);
        alert("saved");
    }

    //word from saved list
    ngOnChanges() {
        this.myWord = this.newWord;
    }

}

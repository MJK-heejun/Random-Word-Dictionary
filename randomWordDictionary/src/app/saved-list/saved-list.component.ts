import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.css']
})
export class SavedListComponent implements OnInit {
    @Input() selectedIndex: number; //word from saved list
    @Output() selectedWord = new EventEmitter();

    wordList;
    constructor(private wordService: WordService) { }

    ngOnInit() {
        this.wordList = this.wordService.GetList();    
    }

    onListItemClick(word:string) {
        console.log(`${word} clicked`);
        this.selectedWord.emit(word);
    }

    onClear() {
        this.wordService.ClearList();    
        this.wordList = this.wordService.GetList();    
    }

    ngOnChanges() {
        //refresh the list
        if (this.selectedIndex == 1)
            this.wordList = this.wordService.GetList();
    }

}

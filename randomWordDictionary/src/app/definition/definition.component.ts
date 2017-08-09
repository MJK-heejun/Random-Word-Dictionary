import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WordService } from '../word.service';


@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {

    @Input() word: string;
    @Output() newWord = new EventEmitter();

    definition: string;
    
    constructor(private wordService: WordService) { }

    ngOnInit() {
    }
    
    ngOnChanges() {
        if (this.word) {
            this.wordService.GetDefinition(this.word).subscribe( //subscribe to the observable return method
                data => {
                    this.definition = data[0] ? data[0].text : "definition not found.";
                    if (this.definition.substring(0, 15) == "Plural form of ") { //if plural form found.....
                        let newSearchWord = this.definition.substring(15, this.definition.length - 1);
                        this.wordService.GetDefinition(newSearchWord).subscribe(
                            data => {
                                let additionalDef = data[0] ? data[0].text : "definition not found";
                                this.definition = `${this.definition} (${additionalDef})`;
                            }
                        );
                    }
                },
                error => alert(error)
            );    
        }
    }

    getSplitWord() {
        return this.definition ? this.definition.slice(0, -1).split(" ") : [];
    }

    onSpanClick(newWord: string) {
        this.newWord.emit(newWord);
    }

}

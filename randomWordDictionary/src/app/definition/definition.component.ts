import { Component, OnInit, Input } from '@angular/core';
import { WordService } from '../word.service';


@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {

    @Input() word: string;

    definition: string;
    
    constructor(private wordService: WordService) { }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this.word) {
            this.wordService.GetDefinition(this.word).subscribe( //subscribe to the observable return method
                data => this.definition = data[0] ? data[0].text : "definition not found",
                error => alert(error),
                () => console.log("finished")
            );    
        }


    }
}

import { Component, OnInit, Input } from '@angular/core';
import { WordService } from '../word.service';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
    @Input() word: string;
    audioSrc: string;
    constructor(private wordService: WordService) { }

  ngOnInit() {
  }
  ngOnChanges() {

      if (this.word) {
          this.wordService.GetAudioUrl(this.word).subscribe( //subscribe to the observable return method
              data => this.audioSrc = data[0] ? data[0].fileUrl : "invliadAudioSrc",
              error => alert(error),
              () => console.log("finished")
          );
      }


  }
}

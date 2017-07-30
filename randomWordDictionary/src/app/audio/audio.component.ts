import { Component, OnInit, Input } from '@angular/core';
import { WordService } from '../word.service';
import { SettingServiceService } from '../setting-service.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
    @Input() word: string;
    audioSrc: string;
    constructor(private wordService: WordService, private settingService: SettingServiceService) { }

  ngOnInit() {
  }
  ngOnChanges() {
      if (this.word) {
          this.wordService.GetAudioUrl(this.word).subscribe( //subscribe to the observable return method              
              data => {
                  this.audioSrc = "invliadAudioSrc";
                  if (data[0]) {
                      this.audioSrc = data[0].fileUrl;
                      if (this.settingService.IsAutoAudioLoading()) {
                          var audio = new Audio(this.audioSrc);
                          audio.play();
                      }

                  }
              },
              error => alert(error),
              () => console.log("finished")
          );
      }


  }
}

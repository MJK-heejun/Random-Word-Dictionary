import { Component, OnInit } from '@angular/core';
import { RandomWordService } from '../random-word.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: [RandomWordService]
})
export class RandomComponent implements OnInit {

    myData: string;

    constructor(private randomWordService: RandomWordService) { }

    ngOnInit() {
        this.randomWordService.getRandomWordTest().subscribe( //subscribe to the observable return method
            data => this.myData = JSON.stringify(data),
            error => alert(error),
            () => console.log("finished")
        );
    }

}

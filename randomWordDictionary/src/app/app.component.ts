import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    selectedIndex: number = 0;
    newWord: string;

    selectedIndexChange(val: number) {
        this.selectedIndex = val;
    }

    wordFromList(ev) {
        this.selectedIndex = 0;
        this.newWord = ev;
    }
}

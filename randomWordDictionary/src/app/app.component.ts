import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    selectedIndex = 0;

    setIndex(index){
        this.selectedIndex = index;
        console.log(`new index ${this.selectedIndex}`);
    };
}

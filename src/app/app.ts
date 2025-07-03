import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  name = 'Pikachou';
  life = 21;

  incrementLife() {
    this.life=this.life+1;
     console.log('+1 point de vie');
}
  decrementLife() {
    this.life = this.life-1;
    console.log('-1 point de vie');
  }



}

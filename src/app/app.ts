import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  name = 'Pikachou';
  counter = signal(0);
  //doubleCounter = computed(()=> this.counter()*2);

  constructor(){
    effect(() => {
      console.log('Le compteur a été mis à jour :', this.counter());
    })
  }
  
  increment() {
    this.counter.update(n=> n +1);
}
  reset() {
    this.counter.set(0);
  }



}

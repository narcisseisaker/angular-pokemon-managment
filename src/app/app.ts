import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  name = signal('Pikachou');
  life = signal(21);
    imageSrc = signal('.//public/images/025.png');
  size = computed(() => {
    if (this.life() <= 15) {
      return 'Petit';
    }

    if (this.life() >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  });

  constructor(){
    effect(() => {
      console.log('Le compteur a été mis à jour :', this.life());
    })
  }
  
  increment() {
    this.life.update(n=> n + 1);
}
decrement() {
    this.life.update(n=> n - 1);
}
namePikachou(){
  this.name.update(name => this.name());
}

  reset() {
    this.life.set(0);
  }



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = document.getElementById("myAudio") as HTMLAudioElement;
  }

  ionViewDidEnter() {
    this.audio.play(); // Autoplay the audio when the page is entered.
  }
}

import { Injectable } from '@angular/core';
import { Howl, Howler } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class BackgroundMusicService implements IBackgroundMusic {
  private _audio: Howl;
  constructor() { }

  Play(): void {
    this._audio = new Howl({
      src: ['assets/mus/stalker.mp3']
    });
    // Play the sound.
    this._audio.play();

    // Change global volume.
    Howler.volume(0.3);
  }
}

export interface IBackgroundMusic {
  Play(): void;
}
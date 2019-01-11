import { Component, OnInit } from '@angular/core';
import { BackgroundMusicService } from './services/background-music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './Styles/panel.scss',
    './Styles/Font.scss',
    './Styles/buttons.scss'
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private readonly bgMusic: BackgroundMusicService) {
  }

  ngOnInit(): void {
    //this.bgMusic.Play();
  }
}
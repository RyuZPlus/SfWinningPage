import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../core/services/game.service';


@Component({
  selector: 'app-home-news',
  imports: [],
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.css'
})
export class HomeNewsComponent implements OnInit {
  noticias: any[] = [];

  constructor(private gameService: GameService){}

  ngOnInit(): void {
    this.noticias
  }
}

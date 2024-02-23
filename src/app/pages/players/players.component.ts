import { Component } from '@angular/core';
import { MaterialModule } from '../../material.modules';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-players',
  standalone: true,
  imports: [MaterialModule,CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent {}

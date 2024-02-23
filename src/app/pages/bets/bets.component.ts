import { Component } from '@angular/core';
import { MaterialModule } from '../../material.modules';

@Component({
  selector: 'app-bets',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './bets.component.html',
  styleUrl: './bets.component.css',
})
export class BetsComponent {}

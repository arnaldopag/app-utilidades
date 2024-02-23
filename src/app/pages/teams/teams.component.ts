import { Component } from '@angular/core';
import { MaterialModule } from '../../material.modules';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.modules';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BetsComponent } from './pages/bets/bets.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PlayersComponent } from './pages/players/players.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MaterialModule,
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    SideBarComponent,
    BetsComponent,
    DashboardComponent,
    LeaguesComponent,
    TeamsComponent,
    PlayersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-utilidades';
}

import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MaterialModule } from '../../material.modules';
import { CommonModule } from '@angular/common';
import { League } from '../../models/leagues/league';
import { LeagueRequestDTO } from '../../models/leagues/league-request-dto';
import { LeagueService } from './league.service';

@Component({
  selector: 'app-leagues',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.css',
})
export class LeaguesComponent {
  league: League[] = [];
  leagueRequest!: LeagueRequestDTO;
  leagueData: League[] = [];
  displayedColumns: string[] = ['logo', 'abbreviation', 'name', 'country'];

  @ViewChild(MatTable) table: MatTable<League> | undefined;
  constructor(private leagueService: LeagueService) {}

  ngOnInit(): void {
    this.getAllLeagues();
  }

  getAllLeagues() {
    this.leagueService.getAllLeagues().subscribe((league) => {
      this.leagueData = league;
    });
  }
}

import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MaterialModule } from '../../material.modules';
import { CommonModule } from '@angular/common';
import { League } from '../../models/leagues/league';
import { LeagueRequestDTO } from '../../models/leagues/league-request-dto';
import { LeagueService } from './league.service';
import { LeaguesDialogComponent } from '../dialogs/leagues-dialog/leagues-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  constructor(private leagueService: LeagueService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllLeagues();
  }

  getAllLeagues() {
    this.leagueService.getAllLeagues().subscribe((league) => {
      this.leagueData = league;
    });
  }
  addLeague(): void {
    const dialogRef = this.dialog.open(LeaguesDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}

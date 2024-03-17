import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.modules';
import { BetService } from '../../pages/bets/bet.service';
import { Bet } from '../../models/bet/bet';
import { BetRequestDTO } from '../../models/bet/bet-request-dto';
import { CommonModule } from '@angular/common';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-bets',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './bets.component.html',
  styleUrl: './bets.component.css',
})
export class BetsComponent implements OnInit {
  bets: Bet[] = [];
  betRequest!: BetRequestDTO;
  dataSource = [this.bets];

  displayedColumns: string[] = [
    'League',
    'Team',
    'Player',
    'Odd',
    'Status',
    'Amount',
  ];
  @ViewChild(MatTable) table: MatTable<Bet> | undefined;

  constructor(private betService: BetService) {}

  ngOnInit(): void {
    this.getAllBets();
  }

  createBet() {}

  getAllBets() {
    this.betService.getAllBets().subscribe((bets) => {
      this.bets = bets;
    });
  }

  saveBet(data: BetRequestDTO) {
    this.betService.saveBet(data).subscribe((savedBet) => {
      // Lógica para lidar com a aposta salva
      console.log('Aposta salva:', savedBet);
      // Recarrega as apostas após salvar uma nova
      this.getAllBets();
    });
  }

  changeBetStatus(updatedBet: Bet) {
    this.betService.changeBetStatus(updatedBet).subscribe((changedBet) => {
      console.log('Status da aposta alterado:', changedBet);
      this.getAllBets();
    });
  }
}

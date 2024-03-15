import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bet } from '../../models/bet/bet';
import { BetRequestDTO } from '../../models/bet/bet-request-dto';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  private baseUrl = 'http://localhost:8081/bet';

  constructor(private http: HttpClient) {}

  saveBet(data: BetRequestDTO): Observable<Bet> {
    return this.http.post<Bet>(`${this.baseUrl}/save`, data);
  }

  getAllBets(): Observable<Bet[]> {
    return this.http.get<Bet[]>(`${this.baseUrl}/getAll`);
  }

  changeBetStatus(updatedBet: Bet): Observable<Bet> {
    return this.http.put<Bet>(`${this.baseUrl}/status`, updatedBet);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League } from '../../models/leagues/league';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private baseUrl = 'http://localhost:8081/league';

  constructor(private http: HttpClient) {}

  getAllLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${this.baseUrl}/getAll`);
  }
}

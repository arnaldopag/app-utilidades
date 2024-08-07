import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League } from '../../models/leagues/league';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private baseUrl = 'http://localhost:8081/league';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  public getAllLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${this.baseUrl}/getAll`);
  }

  public postLeague(league: any): Observable<League> {
    return this.http.post<any>(
      `${this.baseUrl}/save`,
      league,
      this.httpOptions
    );
  }
}

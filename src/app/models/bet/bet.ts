export class Bet {
  id!: number;
  odd!: number;
  betAmount!: number;
  status!: string;
  betDateTimeCreation!: Date;
  betDeadLine!: Date;
  betClassification!: string;
  betElement!: string;
  sports!: string;
  leagueId: number;
  teamId: number;
  playerId: number;

  constructor(data: any) {
    this.id = data.id;
    this.odd = data.odd;
    this.betAmount = data.betAmount;
    this.status = data.status;
    this.betDateTimeCreation = data.betDateTimeCreation;
    this.betDeadLine = data.betDeadLine;
    this.betClassification = data.betClassification;
    this.betElement = data.betElement;
    this.sports = data.sports;
    this.leagueId = data.leagueId;
    this.teamId = data.teamId;
    this.playerId = data.playerId;
  }
}

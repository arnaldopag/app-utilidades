export class LeagueRequestDTO {
    logo: string;
    name: string;
    country: string;
    abbreviation: string;
  
    constructor(data: any) {
        this.logo = data.logo;
        this.name = data.name;
        this.country = data.country;
        this.abbreviation = data.abbreviation;
    }
  }
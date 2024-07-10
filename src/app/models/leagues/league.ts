export class League {
  id!: number;
  logo: string;
  name!: string;
  country: string;
  abbreviation: string;

    constructor(data: any) {
        this.id = data.id;
        this.logo = data.logo;
        this.name = data.name;
        this.country = data.country;
        this.abbreviation = data.abbreviation;
    }


}
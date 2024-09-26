export interface Wand {
  wood: string;
  core: string;
  length: number;
}

export interface WizardCharacter {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export enum FilterOptions {
  ALL = "ALL",
  STUDENT = "students",
  STAFF = "staff",
  GRYFFINDOR = "gryffindor",
  HUFFLEPUFF = "hufflepuff",
  RAVENCLAW = "ravenclaw",
  SLYTHERIN = "slytherin",
}

export enum HouseOptions {
  GRYFFINDOR = "Gryffindor",
  HUFFLEPUFF = "Hufflepuff",
  RAVENCLAW = "Ravenclaw",
  SLYTHERIN = "Slytherin",
}

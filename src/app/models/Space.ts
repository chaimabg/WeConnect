export class Space {
  _id!: string;
  name!: string;
  latitudeMap!: number;
  longitudeMap!: number;
  location!: string;
  description!:string;
  hourOpen!:Date;
  hourClose!:Date;
  pictures!: string[];
  joined!:Date;
  capacity!:number;
  rating!: number;
  sumRating!: number;
  sumClient!: number ;
}

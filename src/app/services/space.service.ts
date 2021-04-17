import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor() { }
  getSpaces(){
    return [
      {
        id: 1,
        name: 'space one',
        location: 'location 1',
        description: 'blablabla'
      },
      {
        id: 2,
        name: 'space 2',
        location: 'location 2',
        description: 'blablabla'
      },
      {
        id: 3,
        name: 'space 3',
        location: 'location 3',
        description: 'blablabla'
      },
      {
        id: 4,
        name: 'space 4',
        location: 'location 4',
        description: 'blablabla'
      },
    ];
  }
}

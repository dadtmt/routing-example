import { Injectable } from '@angular/core';

@Injectable()
export class ListUserService {
  users = [
    {
      name: 'Toto',
      pic: '/assets/panda.jpg'
    },
    {
      name: 'Toto1',
      pic: '/assets/panda.jpg'
    },
    {
      name: 'Toto2',
      pic: '/assets/panda.jpg'
    }
  ];
  constructor() { }

}

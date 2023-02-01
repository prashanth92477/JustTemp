import { Injectable } from '@angular/core';
import { User } from '../model/User';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DataService {
users: User[]=[]

  constructor() {

    // setTimeout(() => {
        this.users = [{
      firstName: 'John',
      lastName: 'Doe',
      email:"abc@gmail.com",
      // balance:100,
      registered:new Date('01/01/2018 08:30:00'),
      isActive:true,
      hide:true,

      },

      // image:'https://www.freepik.com/free-vector/light-bulb-gears-cogs_10603271.htm#query=innovation&position=4&from_view=keyword',
      // image:"assets/42609.jpg",

    {
      firstName: 'Steve',
      lastName: 'Job',
      email:"def@gmail.com",
      // image:'https://www.freepik.com/free-vector/light-bulb-gears-cogs_10603271.htm#query=innovation&position=4&from_view=keyword'
      // image:"assets/buldjpg.jpg",
      isActive:false,
      // balance:200,
      registered:new Date('01/02/2018 08:32:00'),
       hide:true
    },
    {
      firstName: 'Mark',
      lastName: 'Bouncer',
      email:"ghi@gmail.com",
      // image:"assets/42744.jpg",
      isActive:true,
      // balance:200,
      registered:new Date('01/02/2018 08:32:00'),
       hide:true
    },
  ];

  // this.showExtended=true;
  // this.addUser({
  //     firstName: 'Neil',
  //     lastName: 'Armstrong',
  //     },);

    // }, 2000);
  }
  getUser():User[] {
    console.log('Hello service');
    return this.users;
}
addUser(user:User){
  this.users.unshift(user);
}
}

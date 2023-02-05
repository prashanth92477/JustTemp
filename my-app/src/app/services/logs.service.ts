import { Injectable, OnInit } from '@angular/core';
import { Log } from '../model/log';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LogsService {
log:Log[]=[];
  constructor() {
     this.log =[
        {id:1,text:'Generated Components',date:new Date('09/26/2023 09:54:23')},
        {id:2,text:'Added Bootstrap',date:new Date('10/27/2023 10:54:23')},
        {id:3,text:'Added Boostrap Logs',date:new Date('11/28/2023 11:54:23')},
        {id:4,text:'Learning Logs',date:new Date('12/29/2023 12:54:23')}
      ]
  }

  getLogs(){
    console.log('log',this.log);
    return this.log;
  }

}

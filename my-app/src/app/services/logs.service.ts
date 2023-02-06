import { Injectable, OnInit } from '@angular/core';
import { Log } from '../model/Log';
import { BehaviorSubject,Observable,of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LogsService {
log:Log[]=[];
//  const subject = new BehaviorSubject<one>({id:'',text:'',date:Date()});
private logSource = new BehaviorSubject<Log>({id:'',text:'',date:new Date()});
selectedLog = this.logSource.asObservable();

private stateSource = new BehaviorSubject<boolean>(true);
stateClear = this.stateSource.asObservable();


  constructor() {
  console.log('logSource',this.logSource);

    //  this.log =[
    //     {id:'1',text:'Generated Components',date:new Date('09/26/2023 09:54:23')},
    //     {id:'2',text:'Added Bootstrap',date:new Date('10/27/2023 10:54:23')},
    //     {id:'3',text:'Added Boostrap Logs',date:new Date('11/28/2023 11:54:23')},
    //     {id:'4',text:'Learning Logs',date:new Date('12/29/2023 12:54:23')}
    //   ]
    this.log=[];
  }

  getLogs():Observable<Log[]>{
    console.log('log',this.log);
    // if(localStorage.getItem('log') === null){
    //   this.log = [];
    // }else{
    //   this.log = JSON.parse(localStorage.getItem('log'));
    // }
    return of(this.log)
  }
  setFormLogs(log:Log){
    console.log('setFormlogs',log)
    this.logSource.next(log)
  }
  addLog(log:Log){
    this.log.unshift(log);
    // localStorage.setItem('logs', JSON.stringify(log))
  }
  updateLog(log:Log){
    this.log.forEach((curr,index)=>{
      if(curr.id === log.id){
          this.log.splice(index, 1);
      }
    })
    this.log.unshift(log);
    // localStorage.setItem('logs', JSON.stringify(log))
  }
  deletLog(log:Log){
    this.log.forEach((curr,index)=>{
      if(curr.id === log.id){
        this.log.splice(index,1);
      }
    })
    // localStorage.setItem('logs', JSON.stringify(log))
  }
  clearState(){
    this.stateSource.next(true);
  }

}

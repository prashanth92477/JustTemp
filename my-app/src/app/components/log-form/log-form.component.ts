import { Component,OnInit } from '@angular/core';
import { Log } from '../../model/Log';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit{
id!:string
text!:string;
date!:any
isNew:boolean=true

constructor(private logService:LogsService){}
ngOnInit(): void {
    this.logService.selectedLog.subscribe(log =>{
      // console.log('log-form',log);
      if(log.id!==''){
        this.isNew = false;
        this.id=log.id;
        this.text=log.text;
        this.date= log.date
      }
    })
}
onSubmit(){
  console.log("Hello test");
  if(this.isNew){
    const newLog={
      id:this.generateUUID(),
      text:this.text,
      date: new Date()
    }
    this.logService.addLog(newLog);

  }else{
    const upLog={
      id:this.id,
      text:this.text,
      date: new Date()
    }
    this.logService.updateLog(upLog);

  }
  this.clearForm()
}
generateUUID():string{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
clearForm(){
  console.log('Hello');
    this.id='',
    this.text='',
    this.date=''
  }
}

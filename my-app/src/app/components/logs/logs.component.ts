import { Component, OnInit } from '@angular/core';
import { Log } from '../../model/Log';
import { LogsService } from 'src/app/services/logs.service';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
logs:Log[]=[];
selectedLog!:Log;
loaded:boolean=false
  constructor( private logService:LogsService){}
  ngOnInit(): void {
    this.logService.stateClear.subscribe(log =>{
      if(log){
        this.selectedLog={
          id:'',
          text:'',
          date:''
        }
      }
    })

    //  console.log(this.logService.getLogs());
    this.logService.getLogs().subscribe(logs =>{
       this.logs=logs;
       this.loaded=true;
      });
  }
  onSelect(log:Log){
      this.logService.setFormLogs(log)
      // this.loaded=true;
      this.selectedLog=log
  }
  onDelete(log:Log){
    console.log('deelet',log);
    if(confirm("Are you sure?")){
      this.logService.deletLog(log)
    }
  }
}

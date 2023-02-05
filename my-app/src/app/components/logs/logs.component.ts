import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/model/log';
import { LogsService } from 'src/app/services/logs.service';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
logs:Log[]=[];
  constructor( private logService:LogsService){}
  ngOnInit(): void {
    //  console.log(this.logService.getLogs());
    this.logs =  this.logService.getLogs()
  }

}

import { Component, OnInit,Injector } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommonService } from 'src/app/commonService/common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  observableList = [
    {label:'From event',id:'btn-1',state:'from-event',method:'its take 2 arguments. 1. targetName(example-> id,reference), 2. event (example-> click,change,on,etc)'},
    {label:'Interval',id:'btn-2',state:'interval'}
  ]
  constructor(private injector: Injector) { }

  ngOnInit(): void {
  }
 
 

}

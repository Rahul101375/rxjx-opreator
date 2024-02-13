import { Component, OnInit,Injector } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommonService } from 'src/app/commonService/common.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
  observableList = [
    {label:'From event',id:'btn-1',method:'its take 2 arguments. 1. targetName(example-> id,reference), 2. event (example-> click,change,on,etc)'},
  ]
  constructor(private injector: Injector) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    let count:number = 0;
    let id = document.getElementById('btn-1');
    fromEvent(id,'click').subscribe((res:any)=>{
      console.log("res",res);
       this.getCommonServiceWithoutConstructor(++count);
    })
  }
  getCommonServiceWithoutConstructor(count:number){
    const methodNameWhichIsRegisterInCommonService = this.injector?.get(CommonService);
    methodNameWhichIsRegisterInCommonService.addUnorderList(count)
  }
}

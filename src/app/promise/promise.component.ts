import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.promiseMethod()
  }
  promiseMethod(){
    let buyLaptop = new Promise((resolve,reject)=>{
      resolve("promise resolve")
    })
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  addUnorderList(count:number,id:string='fromEventId'){
    let el = document.createElement('li');
    el.innerText = 'List - ' + count;
    document.getElementById(id).appendChild(el)
    
  }
}

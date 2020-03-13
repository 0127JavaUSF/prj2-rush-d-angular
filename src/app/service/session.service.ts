import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionActive = false;
  constructor() { }

  setActive(isActive: boolean){
    this.sessionActive = isActive;
    

  }

  getActive(): boolean {
 
    return this.sessionActive;
  }
}

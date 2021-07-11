import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeVerificationServiceService {

  constructor() { }

  /**
   * Creates a cookie
   * @param name name of the cookie to be created
   * @param value value to be assigned to the new cookie
   * @param days the number of days the cookie will be active (optional)
   */
  createCookie(name:string, value: string, days?: number): void {
    let expires = "";
    if (days){
      let date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = date.toUTCString();
    }
    document.cookie = name+"="+value+"; expires="+expires+"; path=/";
  }
  /**
   * Gets cookie value stored in a users browser
   * @param name name ofthe cookie to be read
   * @returns value assigned to cookie being read, null if doesnt exist
   */
  readCookie(name:string): string {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++){
      let c = ca[i];
      while (c.charAt(0)==' '){
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0){
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }

  /**
   * erases a cookie
   * @param name cookie name to be erased
   */
  eraseCookie(name: string): void{
    this.createCookie(name, "", -1);
  }
}

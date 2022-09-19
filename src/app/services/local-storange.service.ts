import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorangeService {

  constructor() { }

  get(chave: string) {
    return JSON.parse(localStorage.getItem(chave) || '');
  }

  delete(chave: string) {
    let _localStorage = this.get(chave);
    if (_localStorage != '') {
      localStorage.removeItem(_localStorage);
    }
  }

  Set(chave: string, valor: string) {
    localStorage.setItem(chave, JSON.stringify(valor));
  }
}


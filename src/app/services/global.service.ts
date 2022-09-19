import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  totalPagina: number = 10;
  keyUserLog: string = "userLog";
  constructor() { }
}

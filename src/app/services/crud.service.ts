import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LocalStorangeService } from './local-storange.service';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  httpOptions: any;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorangeService,
    private globalService: GlobalService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.localStorage.get(this.globalService.keyUserLog).token.token}`
      }),
    };
  }

  post(endpoit: string, obj: any): Observable<any> {
    return this.http
      .post<any>(
        endpoit,
        JSON.stringify(obj),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  get(endpoit: string): Observable<any> {
    return this.http
      .get<any>(endpoit)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteEmployee(endpoit: string) {
    return this.http
      .delete<any>(endpoit, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private  apiUrl : string = 'https://localhost:7025';

  constructor(private http: HttpClient) { }
}

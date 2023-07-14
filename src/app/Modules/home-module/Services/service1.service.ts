import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }


  GetProducts():Observable<any>{
    return this.http.get<any>("https://fakestoreapi.com/products/")
  }

  searchProducts(search:string):Observable<any>{
    return this.http.get<any>(` http://localhost:3000/searchapi?q=${search}`)
  }
}

// https://fakestoreapi.com/
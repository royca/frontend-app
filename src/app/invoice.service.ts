import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from './invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl = 'http://localhost:8080/rest/api/v1/invoices';

  constructor(private http: HttpClient) { }

  getInvoice(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createInvoice(invoice: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, invoice);
  }

  updateInvoice(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteInvoice(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}` , {responseType: 'text' });
  }

  getInvoicesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
}

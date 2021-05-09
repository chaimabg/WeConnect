import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentInfo } from '../models/paymentInfo';

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {

  constructor(private http: HttpClient) { }
  updatePaymentInfos(sold:Number, paymentInfo: any): Observable<any>{
    return this.http.put(`http://localhost:5000/paymentInfo/${sold}`, paymentInfo);
  }

  get(cardNumber:any): Observable<any>{
    return this.http.get(`http://localhost:5000/paymentInfo/${cardNumber}`);
  }
}

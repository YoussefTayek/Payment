import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  list: PaymentDetail[];
  constructor(private http: HttpClient) { }

  private readonly baseURL = 'https://localhost:5001/api/paymentdetail'
  formData: PaymentDetail = new PaymentDetail();
  
  /**
   * Function which insert object in database
   * @returns 
   */
  postPaymentDetail() {
   return this.http.post(this.baseURL, this.formData);
  }

  /**
   * Function which update the object
   * @returns 
   */
  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
   }

  /**
   * Function which retrieve the whole list from database
   * @returns All the list
   */ 
  refreshList() {
     this.http.get(this.baseURL)
     .toPromise()
     .then(res => this.list = res as PaymentDetail[]);
  }

  deletePaymentDetail(id:number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}

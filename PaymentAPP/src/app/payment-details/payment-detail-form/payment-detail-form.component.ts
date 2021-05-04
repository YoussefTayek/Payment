import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, Input, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  
  constructor(public service:PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.paymentDetailId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);  
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(res => {
      this.resetForm();
      this.service.refreshList();
      this.toastr.success('Submitted succefully', 'Payment Detail Register');
    }, err => { this.toastr.error(err)});
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(res => {
      this.resetForm();
      this.service.refreshList();
      this.toastr.info('Updated succefully', 'Payment Detail Register');
    }, err => { this.toastr.error(err)});
  }
  resetForm() {
    this.service.formData = new PaymentDetail();
  }

}



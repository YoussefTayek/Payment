import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  
  constructor(public service:PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
   this.service.refreshList();
  }

  onDelete(id:number) {
    if (confirm('Are you sure to delete this record?')) 
    {
      this.service.deletePaymentDetail(id)
      .subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error('Deleted succefully', 'Payment Detail Register');
      }, 
      err => { this.toastr.error(err)});
    }
      
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
}

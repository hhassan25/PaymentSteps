import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populatedForm(selectedRecord:PaymentDetail){
    this.service.formData = Object.assign({},selectedRecord);
    
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    {
    this.service.deletePaymentDetail(id)
    .subscribe(
      res=>{
        this.service.refreshList();
      },
      err => {console.log(err)}
    )
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BillService } from '../shared/bill.service';
import { Bill } from '../shared/bill';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent implements OnInit {

  bill: Bill = new Bill();

  constructor(private billSvc: BillService) { }

  ngOnInit() {
  }

  createBill(){
    this.billSvc.createBill(this.bill);
    this.bill = new Bill();
  }

}


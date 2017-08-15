import { Component, OnInit } from '@angular/core';

import { BillService } from '../shared/bill.service';
import { Bill } from '../shared/bill';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.css'],
  providers: [BillService],

})
export class BillsListComponent implements OnInit {

  public bills: FirebaseListObservable<Bill[]>;

  constructor(
    private billSvc: BillService,
  ) { }

  ngOnInit() {
    this.bills = this.billSvc.getBillsList({});
  }

  deleteAll() {
    this.billSvc.deleteAll();
  }

}

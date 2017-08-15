import { Component, OnInit, Input } from '@angular/core';

import { BillService } from '../shared/bill.service';
import { Bill } from '../shared/bill';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  @Input() bill: Bill;

  constructor() { }

  ngOnInit() {
  }

}

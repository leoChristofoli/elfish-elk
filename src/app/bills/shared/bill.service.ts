import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Bill } from './bill';

@Injectable()
export class BillService {

  private basePath = '/bills';

  bills: FirebaseListObservable<Bill[]> = null;
  bill: FirebaseObjectObservable<Bill> = null;

  constructor(private db: AngularFireDatabase) { }

  getBillsList(query = {}) {
    this.bills = this.db.list(this.basePath, { query: query });
    return this.bills;
  }

  createBill(bill: Bill): void  {
    console.log(bill);
    let date = new Date();
    bill.when_created = date;
    console.error(bill);
    this.bills.push(bill)
      .catch(error => this.handleError(error));
  }

  updateItem(key: string, value: any): void {
    this.bills.update(key, value)
      .catch(error => this.handleError(error));
  }

   // Deletes a single item
  deleteItem(key: string): void {
    this.bills.remove(key)
      .catch(error => this.handleError(error));
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.bills.remove()
      .catch(error => this.handleError(error));
    }

  // Default error handling for all actions
  private handleError(error) {
    console.log('++++++++++++++++++++++++++++');
    console.log(error);
  }
}

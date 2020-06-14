import { Component, OnInit } from '@angular/core';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';
import { Observable } from 'rxjs';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: Observable<Invoice[]>;
  constructor(private invoiceService: InvoiceService, private router: Router, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    console.log('spinnerService.show()');
    console.log('calling reloadData');
    this.reloadData();
    this.spinnerService.hide();
  }

  reloadData() {
    this.invoices = this.invoiceService.getInvoicesList();
    console.log(this.invoices);
  }

  deleteInvoice(id: number) {
    this.invoiceService.deleteInvoice(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  invoiceDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateInvoice(id: number) {
    this.router.navigate(['update', id]);
  }
}

import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {

  invoice: Invoice = new Invoice();
  submitted = false;

  constructor(private invoiceService: InvoiceService, private router: Router, private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  newInvoice(): void {
    this.submitted = false;
    this.invoice = new Invoice();
  }

  save() {
    this.spinnerService.show();
    this.invoiceService.createInvoice(this.invoice)
      .subscribe( data => console.log(data), error => console.log(error));
    this.spinnerService.hide();
    this.invoice = new Invoice();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/invoices']);
  }

}

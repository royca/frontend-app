import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { ActivatedRoute , Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.scss']
})
export class UpdateInvoiceComponent implements OnInit {

  id: number;
  invoice: Invoice;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private invoiceService: InvoiceService, 
              private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.invoice = new Invoice();
    this.id = this.route.snapshot.params['id'];
    this.invoiceService.getInvoice(this.id)
      .subscribe(data => {
        console.log(data);
        this.invoice = data;
        this.spinnerService.hide();
      }, (error: any) => console.log(error));
  }

  updateInvoice() {
    this.invoiceService.updateInvoice(this.id, this.invoice)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
    this.invoice = new Invoice();
    this.gotoList();
  }

  onSubmit() {
    this.spinnerService.show();
    this.updateInvoice();
    this.spinnerService.hide();
  }

  gotoList() {
    this.router.navigate(['/invoices']);
  }

}

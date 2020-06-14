import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  id: number;
  invoice: Invoice;
  constructor(private route: ActivatedRoute, private router: Router, private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoice = new Invoice();
    this.id = this.route.snapshot.params['id'];
    this.invoiceService.getInvoice(this.id)
      .subscribe( data => {
        console.log(data);
        this.invoice = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['invoices']);
  }

}

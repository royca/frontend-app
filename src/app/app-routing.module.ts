import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';


const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  { path: 'invoices', component: InvoiceListComponent },
  { path: 'add', component: CreateInvoiceComponent },
  { path: 'update/:id', component: UpdateInvoiceComponent },
  { path: 'details/:id', component: InvoiceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

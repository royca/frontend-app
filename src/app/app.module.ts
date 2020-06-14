import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CreateInvoiceComponent,
    InvoiceDetailsComponent,
    InvoiceListComponent,
    UpdateInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

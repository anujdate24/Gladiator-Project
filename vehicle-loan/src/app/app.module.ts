import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerRegisterComponent } from './Components/customer/customer-register/customer-register.component';
import { CustomerLoginComponent } from './Components/customer/customer-login/customer-login.component';
import { HomeComponent } from './Components/home/home/home.component';
import { AboutUsComponent } from './Components/about/about-us/about-us.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { ApplyLoanComponent } from './Components/loan/apply-loan/apply-loan.component';
import { FooterComponent } from './Components/home/footer/footer.component';
import { CustomerDashboardComponent } from './Components/customer/customer-dashboard/customer-dashboard.component';
import { LoanOfferComponent } from './Components/loan/loan-offer/loan-offer.component';
import { ApplicationFormComponent } from './Components/loan/application-form/application-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    HomeComponent,
    AboutUsComponent,
    AdminDashboardComponent,
    ApplyLoanComponent,
    FooterComponent,
    CustomerDashboardComponent,
    LoanOfferComponent,
    ApplicationFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

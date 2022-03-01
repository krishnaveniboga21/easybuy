import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomekitchenComponent } from './homekitchen/homekitchen.component';
import { ComputersComponent } from './computers/computers.component';
import { ToysgamesComponent } from './toysgames/toysgames.component';
import { ShopbydeptComponent } from './all/shopbydept/shopbydept.component';
import { TvComponent } from './all/tv/tv.component';
import { AppliancesComponent } from './all/appliances/appliances.component';
import { WomensfashionComponent } from './all/womensfashion/womensfashion.component';
import { MensfashionComponent } from './all/mensfashion/mensfashion.component';
import { HelpsettingsComponent } from './all/helpsettings/helpsettings.component';
import { YouraccountComponent } from './all/youraccount/youraccount.component';
import { CustomerserviceComponent } from './all/customerservice/customerservice.component';
import { SigninComponent } from './all/signin/signin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    MobilesComponent,
    ElectronicsComponent,
    FashionComponent,
    HomekitchenComponent,
    ComputersComponent,
    ToysgamesComponent,
    ShopbydeptComponent,
    TvComponent,
    AppliancesComponent,
    WomensfashionComponent,
    MensfashionComponent,
    HelpsettingsComponent,
    YouraccountComponent,
    CustomerserviceComponent,
    SigninComponent,
    PagenotfoundComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AppliancesComponent } from './all/appliances/appliances.component';
import { CustomerserviceComponent } from './all/customerservice/customerservice.component';
import { HelpsettingsComponent } from './all/helpsettings/helpsettings.component';
import { MensfashionComponent } from './all/mensfashion/mensfashion.component';
import { ShopbydeptComponent } from './all/shopbydept/shopbydept.component';
import { SigninComponent } from './all/signin/signin.component';
import { TvComponent } from './all/tv/tv.component';
import { WomensfashionComponent } from './all/womensfashion/womensfashion.component';
import { YouraccountComponent } from './all/youraccount/youraccount.component';
import { ComputersComponent } from './computers/computers.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomekitchenComponent } from './homekitchen/homekitchen.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { ToysgamesComponent } from './toysgames/toysgames.component';

const routes: Routes = [
  {path:'all',component:AllComponent,children:[
    {path:'shopbydept',component:ShopbydeptComponent},
    {path:'mobiles',component:MobilesComponent},
    {path:'computers',component:ComputersComponent},
    {path:'tv',component:TvComponent},
    {path:'appliances',component:AppliancesComponent},
    {path:'electronics',component:ElectronicsComponent},
    {path:'womensfashion',component:WomensfashionComponent},
    {path:'mensfashion',component:MensfashionComponent},
    {path:'helpsettings',component:HelpsettingsComponent},
    {path:'youraccount',component:YouraccountComponent},
    {path:'customerservice',component:CustomerserviceComponent},
    {path:'signin',component:SigninComponent}
  ]},

 
  {path:'mobiles',component:MobilesComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'fashion',component:FashionComponent},
  {path:'homekitchen',component:HomekitchenComponent},
  {path:'computers',component:ComputersComponent},
  {path:'toysgames',component:ToysgamesComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},

  {path:'',redirectTo:'all',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

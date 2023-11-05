import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestComponent } from './invest/invest.component';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'invest', component:InvestComponent},
  {path:'social', component:SocialImpactComponent},
  {path:'', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = [InvestComponent, SocialImpactComponent, AboutComponent]

import { ProductComponent } from './layouts/product/product.component';
import { ContentComponent } from './layouts/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'wokkie', pathMatch: 'full'},
  { path: 'wokkie', component: ContentComponent},
  { path: 'wokkie/product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path : 'products' , component: ProductsComponent},
  { path : 'orders' , component: MyOrdersComponent},
  { path : 'admin/orders' , component: AdminOrdersComponent},
  { path : 'admin/products' , component: AdminProductsComponent},
  { path : 'shopping-cart' , component: ShopingCartComponent},
  { path : 'login' , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

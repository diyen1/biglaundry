import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {SearchComponent} from './search/search.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: 'shop', component: ShopComponent},
  // {path: 'add-service', component: AddServiceComponent},
  // {path: 'edit-service/:id', component: EditServiceComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'search', component: SearchComponent},
  // {path: 'search', component: SearchNavComponent},
  // {path: 'chat', component: ChatComponent},
  // {path: 'chat/:userId', component: ChatComponent},
  // {path: 'profile', component: ProfileComponent},
  // {path: 'edit-profile', component: EditProfileComponent},
  // {path: 'seller-profile/:id', component: SellerProfileComponent},
];

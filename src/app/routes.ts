import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {SearchComponent} from './search/search.component';
import {AccountComponent} from './account/account.component';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: 'shop', component: ShopComponent},
  // {path: 'add-service', component: AddServiceComponent},
  // {path: 'edit-service/:id', component: EditServiceComponent},
  {path: 'products/:id', component: ProductsComponent},
  // {path: 'checkout', component: OrderWrapperComponent},
  {path: 'account', component: AccountComponent},
  {path: 'search', component: SearchComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule',
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule',
  },
  // {path: 'search', component: SearchNavComponent},
  // {path: 'chat', component: ChatComponent},
  // {path: 'chat/:userId', component: ChatComponent},
  // {path: 'profile', component: ProfileComponent},
  // {path: 'edit-profile', component: EditProfileComponent},
  // {path: 'seller-profile/:id', component: SellerProfileComponent},
];

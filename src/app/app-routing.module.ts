import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';

const routes: Routes = [
  { path: 'crypto', component: CryptoDataComponent },
  { path: 'coin/:id', component: CoinDetailsComponent },
  { path: '', redirectTo: '/crypto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

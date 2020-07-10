import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'crypto', component: CryptoDataComponent },
  { path: 'coins', component: TableComponent },
  { path: 'coin/:id', component: CoinDetailsComponent },
  { path: '', redirectTo: '/crypto', pathMatch: 'full' },
  { path: '**', redirectTo: '/crypto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  selectCollectionSize,
  selectTickers,
} from '../+state/crypto.selectors';
import { ApiService } from '../api.service';
import { loadTickers } from '../+state/crypto.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  page = Number(this.route.snapshot.paramMap.get('page'));
  pageSize = 20;
  collectionSize$ = this.store.pipe(select(selectCollectionSize));
  allCoinsData$ = this.store.pipe(select(selectTickers));

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.updateTickersData();
  }

  pageChange(page: number) {
    this.page = page;
    this.router.navigate(['coins/', page]);
    this.updateTickersData();
  }

  updateTickersData() {
    this.store.dispatch(
      loadTickers({ start: (this.page - 1) * this.pageSize })
    );
  }
}

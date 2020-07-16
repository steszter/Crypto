import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoFacade } from '../facade';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  page = Number(this.route.snapshot.paramMap.get('page'));
  pageSize = 20;
  collectionSize$ = this.facade.CollectionSize$;
  allCoinsData$ = this.facade.allCoinsData$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private facade: CryptoFacade
  ) {}

  ngOnInit() {
    this.facade.updateTickersData(this.page, this.pageSize);
  }

  pageChange(page: number) {
    this.page = page;
    this.router.navigate(['coins/', page]);
    this.facade.updateTickersData(this.page, this.pageSize);
  }
}

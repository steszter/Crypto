import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoFacade } from '../+state/facade';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  page: number;
  pageSize = 20;
  collectionSize$ = this.facade.collectionSize$;
  allCoinsData$ = this.facade.allCoinsData$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private facade: CryptoFacade
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { page } = params;
      this.page = Number(page);
      this.facade.updateTickersData(this.page, this.pageSize);
    });
  }

  pageChange(page: number) {
    this.router.navigate(['coins/', page]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  page = Number(this.route.snapshot.paramMap.get('page'));
  pageSize = 20;
  collectionSize = 200;
  allCoinsData$ = this.route.params.pipe(
    switchMap((params) =>
      this.apiService
        .sendGetRequestTickers((params.page - 1) * this.pageSize)
        .pipe(
          tap((response) => (this.collectionSize = response.info.coins_num)),
          map((response) => response.data),
          catchError((err) => err)
        )
    )
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  pageChange(page: number) {
    this.page = page;
    this.router.navigate(['coins/', page]);
  }
}

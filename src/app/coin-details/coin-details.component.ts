import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent {
  coinDetails$ = this.route.params.pipe(
    switchMap((params) =>
      this.apiService
        .sendGetRequestId(params.id)
        .pipe(map((response) => response[0]))
    )
  );

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
}

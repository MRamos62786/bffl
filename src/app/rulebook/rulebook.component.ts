import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-rulebook',
  templateUrl: './rulebook.component.html',
  styleUrls: ['./rulebook.component.css']
})
export class RulebookComponent implements OnInit {

  current_year: string;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) => params.getAll('year'))
      .subscribe(year => this.current_year = year);
  }
}

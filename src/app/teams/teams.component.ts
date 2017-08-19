import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TeamsService, Stats } from '../shared/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  current_year: string;

  constructor(public teamSvc: TeamsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.getAll('year'))
      .subscribe(year => this.current_year = year);
  }

  getTeamByYear() {
    const year = this.current_year;
    return this.teamSvc.getTeamsForYear(parseInt(year, 10)).sort((t1, t2) => {

      const t1stats: Stats = t1.stats[year];
      const t2stats: Stats = t2.stats[year];
      const result = t2stats.wins - t1stats.wins;
      return result === 0 ? t1stats.losses - t2stats.losses : result;
    });
  }
}

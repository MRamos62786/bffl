import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TeamsService, Team, Stats } from '../shared/services/teams.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  current_year: string;
  hideGrid = false;

  constructor(public teamSvc: TeamsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.getAll('year'))
      .subscribe(year => {
        this.current_year = year;
        this.hideGrid = true;
        setTimeout(() => this.hideGrid = false, 0);
      });
  }

  getTeams() {

    const year = this.current_year;
    if (year === 'all-time') {
      return this.teamSvc.getTeams().sort((t1, t2) => {

        const t1stats: Stats = t1.allTimeStats;
        const t2stats: Stats = t2.allTimeStats;
        const result = t2stats.wins - t1stats.wins;
        return result === 0 ? t1stats.losses - t2stats.losses : result;
      });
    }
    return this.teamSvc.getTeamsForYear(parseInt(year, 10)).sort((t1, t2) => {

      const t1stats: Stats = t1.stats[year];
      const t2stats: Stats = t2.stats[year];
      const result = t2stats.wins - t1stats.wins;
      return result === 0 ? t1stats.losses - t2stats.losses : result;
    });
  }

  getField(field: string) {
    const year = this.current_year;
    if (year === 'all-time') {
      return 'allTimeStats.' + field;
    }
    return 'stats.' + year + '.' + field;
  }

  getValue(team: Team, field: string) {
    const year = this.current_year;
    let value;
    if (year === 'all-time') {
      value = team.allTimeStats[field];
    } else {
      value = team.stats[year][field];
    }
    return isNaN(value) ? 0 : value;
  }

}

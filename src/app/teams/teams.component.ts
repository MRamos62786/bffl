import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../shared/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(public teamSvc: TeamsService) { }

  ngOnInit() {
  }

}

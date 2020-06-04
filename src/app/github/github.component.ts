import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  followers;
  constructor(private service: GithubService, private http: HttpClient) {}

  ngOnInit() {
    this.service.getAll().subscribe((followers) => {
      this.followers = followers;
    });
  }
}

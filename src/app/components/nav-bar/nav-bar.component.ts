import { Component, Inject, OnInit } from '@angular/core';
import { faUser, faPowerOff, faCog } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  faUser = faUser;
  faPowerOff = faPowerOff;
  faCog = faCog;

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {}

  loginWithRedirect() {
  }

  logout() {
  }
}

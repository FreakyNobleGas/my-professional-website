import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
import { Languages } from '../languages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

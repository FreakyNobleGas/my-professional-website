import { Component } from '@angular/core';
import { HomepageService } from './homepage.service';
import { Languages } from './languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Professional Website';

  languages : Languages[];

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  constructor(private HomepageService : HomepageService) {}

  ngOnInit() {
    this.HomepageService.getLanguages().then(languages => {
      this.languages = languages;
    })
  }
}



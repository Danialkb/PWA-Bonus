import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SuperheroService} from "./superhero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonus1';
  hero: any;
  inputId: number | null = null;

  constructor(private heroService: SuperheroService) {}

  getSuperheroById(): void {
    if (this.inputId) {
      this.heroService.getSuperheroById(this.inputId)
        .subscribe(data => {
          this.hero = data;
          console.log(this.hero);
        }, error => {
          console.error('Error fetching superhero:', error);
          this.hero = null;
        });
    }
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evening',
  imports: [],
  templateUrl: './evening.html',
  styleUrl: './evening.css',
})
export class Evening {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-morning',
  imports: [],
  templateUrl: './morning.html',
  styleUrl: './morning.css',
})
export class Morning {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-night',
  imports: [],
  templateUrl: './night.html',
  styleUrl: './night.css',
})
export class Night {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}

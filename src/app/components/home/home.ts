import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    private router: Router,
    private reviewService: ReviewService
  ) {}

  navigateTo(timeOfDay: string): void {
    this.router.navigate([`/${timeOfDay}`]);
  }

  async openReview(): Promise<void> {
    await this.reviewService.openStoreForReview();
  }
}

import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private readonly APP_STORE_ID = 'YOUR_APP_STORE_ID'; // Replace with actual App Store ID when published
  private readonly APP_BUNDLE_ID = 'com.hayyangov.azkaar';
  private readonly PLAY_STORE_ID = 'com.azkaar.app';
  private readonly REVIEW_PROMPTED_KEY = 'review_prompted';

  async openStoreForReview(): Promise<void> {
    const platform = Capacitor.getPlatform();

    // Only open store for Android for now (until iOS is approved)
    if (platform === 'android') {
      await this.openPlayStore();
      // Mark that we've prompted the user
      await this.markAsPrompted();
    } else {
      // iOS and Web - do nothing for now
      console.log('Store review only available on Android currently');
    }
  }

  async hasBeenPrompted(): Promise<boolean> {
    const { value } = await Preferences.get({ key: this.REVIEW_PROMPTED_KEY });
    return value === 'true';
  }

  private async markAsPrompted(): Promise<void> {
    await Preferences.set({ key: this.REVIEW_PROMPTED_KEY, value: 'true' });
  }

  private async openAppStore(): Promise<void> {
    const appStoreUrl = `https://apps.apple.com/app/id${this.APP_STORE_ID}?action=write-review`;
    await Browser.open({ url: appStoreUrl });
  }

  private async openPlayStore(): Promise<void> {
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${this.PLAY_STORE_ID}&showAllReviews=true`;
    await Browser.open({ url: playStoreUrl });
  }
}

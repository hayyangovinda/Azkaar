import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Dhikr {
  arabic: string;
  translation: string;
  sources: string[];
  repetitions: number;
}

@Component({
  selector: 'app-morning',
  imports: [CommonModule],
  templateUrl: './morning.html',
  styleUrl: './morning.css',
})
export class Morning {
  adhkar: Dhikr[] = [
    {
      arabic: `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
      translation: `Allah, there is no god but He, the Ever Living, the One Who sustains and protects all that exists. Neither drowsiness overtakes Him nor sleep. To Him Alone belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except with His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great. (2:255)`,
      sources: [
        'Sahih al-Bukhari',
        'Sahih Muslim',
        'Sunan Abu Dawud',
        'Sunan an-Nasa\'i'
      ],
      repetitions: 1
    }
  ];

  translationExpanded: { [key: number]: boolean } = {};
  sourcesExpanded: { [key: number]: boolean } = {};

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }

  toggleTranslation(index: number): void {
    this.translationExpanded[index] = !this.translationExpanded[index];
  }

  toggleSources(index: number): void {
    this.sourcesExpanded[index] = !this.sourcesExpanded[index];
  }
}

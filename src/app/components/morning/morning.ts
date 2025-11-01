import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';

interface Dhikr {
  arabic: string;
  translation: string;
  sources: string[];
  repetitions: number;
}

@Component({
  selector: 'app-morning',
  imports: [CommonModule, HammerModule],
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
    },
    {
      arabic: `قُلْ هُوَ اللَّهُ أَحَدٌ ، اللَّهُ الصَّمَدُ ، لَمْ يَلِدْ وَلَمْ يُولَدْ ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
      translation: `Say, He is Allah, the One, the Self-Sufficient Master, Who has not given birth and was not born, and to Whom no one is equal. (112)`,
      sources: [
        'Sahih al-Bukhari',
        'Sahih Muslim',
        'Sunan Abu Dawud',
        'Sunan at-Tirmidhi'
      ],
      repetitions: 3
    },
    {
      arabic: `قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ، مِن شَرِّ مَا خَلَقَ ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      translation: `Say, I seek protection of the Lord of the daybreak, from the evil of what He has created, and from the evil of the darkening night when it settles, and from the evil of the blowers in knots, and from the evil of the envier when he envies. (113)`,
      sources: [
        'Sahih al-Bukhari',
        'Sahih Muslim',
        'Sunan Abu Dawud',
        'Sunan at-Tirmidhi'
      ],
      repetitions: 3
    },
    {
      arabic: `قُلْ أَعُوذُ بِرَبِّ النَّاسِ ، مَلِكِ النَّاسِ ، إِلَٰهِ النَّاسِ ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ، مِنَ الْجِنَّةِ وَالنَّاسِ`,
      translation: `Say, I seek protection of the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the hearts of mankind, from among the jinn and mankind. (114)`,
      sources: [
        'Sahih al-Bukhari',
        'Sahih Muslim',
        'Sunan Abu Dawud',
        'Sunan at-Tirmidhi'
      ],
      repetitions: 3
    },
    {
      arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا ، وَرِزْقًا طَيِّبًا ، وَعَمَلًا مُتَقَبَّلًا`,
      translation: `O Allah, I ask You for beneficial knowledge, goodly provision, and acceptable deeds.`,
      sources: [
        'Sunan Ibn Majah',
        'Musnad Ahmad',
        'Authenticated by Al-Albani'
      ],
      repetitions: 1
    },
    {
      arabic: `اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ`,
      translation: `O Allah, You are my Lord. There is no god except You. You have created me, and I am Your slave, and I am under Your covenant and pledge (to fulfil it) to the best of my ability. I seek Your protection from the evil that I have done. I acknowledge the favours that You have bestowed upon me, and I admit my sins. Forgive me, for none forgives sins but You.`,
      sources: [
        'Sahih al-Bukhari',
        'Known as Sayyid al-Istighfar (The Master of Seeking Forgiveness)'
      ],
      repetitions: 1
    }
  ];

  currentIndex = 0;
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

  onSwipeLeft(): void {
    if (this.currentIndex < this.adhkar.length - 1) {
      this.currentIndex++;
    }
  }

  onSwipeRight(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

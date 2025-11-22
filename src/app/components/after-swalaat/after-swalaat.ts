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
  selector: 'app-after-swalaat',
  imports: [CommonModule, HammerModule],
  templateUrl: './after-swalaat.html',
  styleUrl: './after-swalaat.css',
})
export class AfterSwalaat {
  adhkar: Dhikr[] = [
    {
      arabic: `أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ

اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ`,
      translation: `I seek the forgiveness of Allah (3 times)

O Allah You are the Flawless One, and from You comes peace and security. Blessed are You, Possessor of Majesty and Honour`,
      sources: ['Sahih Muslim 591'],
      repetitions: 1,
    },
    {
      arabic: `لَا إلَهَ إِلاَّ اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ`,
      translation: `None has the right to be worshiped but Allah alone, He has no partner, His is the dominion and His is the praise, and He is Able to do all things. O Allah, there is none who can withhold what You give, and none may give what You have withheld; and the might of the mighty person cannot benefit him against You.`,
      sources: ['Sahih al-Bukhari 844', 'Sahih Muslim 593'],
      repetitions: 1,
    },
    {
      arabic: `لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ، لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللهِ، لاَ إِلَهَ إِلاَّ اللهُ وَلاَ نَعْبُدُ إِلاَّ إِيَّاهُ لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لاَ إِلَهَ إِلاَّ اللهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ`,
      translation: `None has the right to be worshiped but Allah alone, He has no partner, His is the dominion and His is the praise and He is Able to do all things. There is no power and no might except by Allah. None has the right to be worshiped but Allah, and we do not worship any other besides Him. His is grace, and His is bounty and to Him belongs the most excellent praise. None has the right to be worshiped but Allah. (We are) sincere in making our religious devotion to Him, even though the disbelievers may dislike it.`,
      sources: ['Sahih Muslim 594', 'Abu Dawud 1506', 'an-Nasai 1339 & 1340'],
      repetitions: 1,
    },
    {
      arabic: `سُبْحَانَ اللهِ (×33) ، اَلْحَمْدُ لِلهِ (×33) ، اَللهُ أَكْبَرُ (×33)
:Then to complete 100
لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ`,
      translation: `Glory be to Allah (×33). Praise be to Allah (×33). Allah is the Most Great (×33).

Then to complete 100:
There is none worthy of worship except Allah, having no partner with Him, to Him belongs sovereignty and to Him is praise due, and He has power over everything.`,
      sources: [
        'Muslim 597',
        'Benefit: Whoever does so after every Prayer then his sins will be forgiven even if they are like the foam of the sea.',
      ],
      repetitions: 100,
    },
    {
      arabic: `رَبِّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ  عِبَادَكَ`,
      translation: `O my Lord! Protect me from Your Torment on the Day when You will resurrect Your servants.`,
      sources: ['Muslim 709', 'Sahih Ibn Khuzaymah 1564-1565'],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ وَمَا أَسْرَفْتُ وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ لاَ إِلَهَ إِلاَّ أَنْتَ`,
      translation: `O Allah! Forgive me that which I have advanced (i.e. sins previously committed), that which I have delayed (i.e. sins which I have not yet committed), that which I have done secretly and that which I have done openly, that which I have done in excess (exceeding all limits), and that which You Know about it better than me. You are al-Muqaddim (the One Who Gives Precedence) and You are al-Mu'akhkhir (the One Who Delays) [based upon Your Perfect Divine Wisdom], There is nothing which deserves to be worshiped besides You.`,
      sources: ['Muslim 771'],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ وَتَرْكَ الْمُنْكَرَاتِ وَحُبَّ الْمَسَاكِينِ وَإِذَا أَرَدْتَ بِعِبَادِكَ فِتْنَةً فَاقْبِضْنِي إِلَيْكَ غَيْرَ مَفْتُونٍ`,
      translation: `O Allah, I ask You (to enable me) to do good deeds and avoid evil deeds and to love the poor. And If You will that some trial should befall Your slaves, then take me to You [i.e., cause me to die] without having subjected to that trial.`,
      sources: ['at-Tirmidhi 3233', 'Sahih li ghayrihi - al-Albani'],
      repetitions: 1,
    },
    {
      arabic: `اللهُ أَكْبَرُ كَبِيرًا , عَدَدَ الشَّفْعِ وَالْوِتْرِ , وَكَلِمَاتِ اللهِ التَّامَّاتِ, الطَّيِّبَاتِ الْمُبَارَكَاتِ

لا إلَهَ إِلاَّ اللهُ، عَدَدَ الشَّفْعِ وَالْوِتْرِ , وَكَلِمَاتِ اللهِ التَّامَّاتِ, الطَّيِّبَاتِ الْمُبَارَكَاتِ`,
      translation: `Allah is Most Great the number of the even and the odd, and the blessed, pure, perfect words of Allah

There is no god but Allah the number of the even and the odd, and the blessed, pure, perfect words of Allah`,
      sources: [
        'Ibn Abee Shaybah - Musannaf 10/229',
        'Graded Hasan by al-Hindi',
        'Benefit: They will be light in the grave, light on the jisr (bridge), and light on the siraat until entering Paradise',
      ],
      repetitions: 3,
    },
    {
      arabic: `اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ`,
      translation: `O Allah! Help me to remember You, and to be thankful to You, and to worship You in the best manner.`,
      sources: ['Abu Dawud 1522', "an-Nasa'i 1303", 'Ahmad 36/429'],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
      translation: `Allah, there is no god but He, the Ever Living, the One Who sustains and protects all that exists. Neither drowsiness overtakes Him nor sleep. To Him Alone belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except with His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great. (Ayat ul-Kursi 2:255)`,
      sources: [
        "an-Nasa'i in al-Kubra 9928",
        'Graded Sahih by al-Albani',
        'Benefit: Whoever recites Ayat ul-Kursi after each Prescribed Salah, nothing will be standing between him and Paradise except death.',
      ],
      repetitions: 1,
    },
    {
      arabic: `قُلْ هُوَ اللَّهُ أَحَدٌ ، اللَّهُ الصَّمَدُ ، لَمْ يَلِدْ وَلَمْ يُولَدْ ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
      translation: `Say, He is Allah, the One, the Self-Sufficient Master, Who has not given birth and was not born, and to Whom no one is equal. (Surah al-Ikhlas 112)`,
      sources: [
        'at-Tirmidhi 2903',
        "an-Nasa'i 1336",
        'Recite once after Dhuhr, Asr and Isha. Three times after Maghrib and Fajr.',
      ],
      repetitions: 1,
    },
    {
      arabic: `قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ، مِن شَرِّ مَا خَلَقَ ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      translation: `Say, I seek protection of the Lord of the daybreak, from the evil of what He has created, and from the evil of the darkening night when it settles, and from the evil of the blowers in knots, and from the evil of the envier when he envies. (Surah al-Falaq 113)`,
      sources: [
        'at-Tirmidhi 2903',
        "an-Nasa'i 1336",
        'Recite once after Dhuhr, Asr and Isha. Three times after Maghrib and Fajr.',
      ],
      repetitions: 1,
    },
    {
      arabic: `قُلْ أَعُوذُ بِرَبِّ النَّاسِ ، مَلِكِ النَّاسِ ، إِلَٰهِ النَّاسِ ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ، مِنَ الْجِنَّةِ وَالنَّاسِ`,
      translation: `Say, I seek protection of the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the hearts of mankind, whether they be Jinn or people. (Surah an-Naas 114)`,
      sources: [
        'at-Tirmidhi 2903',
        "an-Nasa'i 1336",
        'Recite once after Dhuhr, Asr and Isha. Three times after Maghrib and Fajr.',
      ],
      repetitions: 1,
    },
    {
      arabic: `سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ`,
      translation: `Glory and praise be to You, O Allah, I seek Your forgiveness and I repent to You.`,
      sources: [
        "Sunan an-Nasa'i 1344",
        'Ahmad 6/88',
        'Graded Sahih by al-Albani',
        'This supplication may be recited at the end of any meeting or gathering, or after Salaah',
      ],
      repetitions: 1,
    },
    {
      arabic: `Say 10 times after Maghrib and Fajr Prayer while sitting in the position of tashahhud 
      لَا إِلَهَ إِلَّا اللهُ وَحَدْهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ`,
      translation: `None has the right to be worshiped but Allah alone, Who has no partner. His is the dominion and His is the praise. He brings life and He causes death, and He is Able to do all things.`,
      sources: [
        'at-Tirmidhi 3474',
        "an-Nasa'i in 'Amal al-Yawm wal-Laylah 128",
        'Ahmad 17990',
        'Say 10 times after Maghrib and Fajr Prayer while sitting in the position of tashahhud',
      ],
      repetitions: 10,
    },
  ];

  currentIndex = 0;
  translationExpanded: { [key: number]: boolean } = {};
  sourcesExpanded: { [key: number]: boolean } = {};
  remainingCounts: { [key: number]: number } = {};
  showCheckmark: { [key: number]: boolean } = {};

  constructor(private router: Router) {
    // Initialize remaining counts for each dhikr
    this.adhkar.forEach((dhikr, index) => {
      this.remainingCounts[index] = dhikr.repetitions;
    });
  }

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

  onRepetitionClick(index: number): void {
    if (this.remainingCounts[index] > 0) {
      this.remainingCounts[index]--;

      // When count reaches 0, show checkmark animation
      if (this.remainingCounts[index] === 0) {
        this.showCheckmark[index] = true;

        // After animation, move to next dhikr (if available)
        setTimeout(() => {
          if (this.currentIndex < this.adhkar.length - 1) {
            this.currentIndex++;
          }
        }, 630); // Wait for animation to complete
      }
    }
  }

  getCompletedCount(index: number): number {
    return this.adhkar[index].repetitions - this.remainingCounts[index];
  }

  getProgressPercentage(index: number): number {
    const total = this.adhkar[index].repetitions;
    const completed = this.getCompletedCount(index);
    return (completed / total) * 100;
  }
}

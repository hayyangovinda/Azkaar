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
  selector: 'app-evening',
  imports: [CommonModule, HammerModule],
  templateUrl: './evening.html',
  styleUrl: './evening.css',
})
export class Evening {
  adhkar: Dhikr[] = [
    {
      arabic: `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
      translation: `Allah, there is no god but He, the Ever Living, the One Who sustains and protects all that exists. Neither drowsiness overtakes Him nor sleep. To Him Alone belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except with His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great. (2:255)`,
      sources: ["Ṭabarānī in Mu'jam al-Kabir 1/201"],
      repetitions: 1,
    },
    {
      arabic: `قُلْ هُوَ اللَّهُ أَحَدٌ ، اللَّهُ الصَّمَدُ ، لَمْ يَلِدْ وَلَمْ يُولَدْ ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
      translation: `Say, He is Allah, the One, the Self-Sufficient Master, Who has not given birth and was not born, and to Whom no one is equal. (112)`,
      sources: ['Tirmidhī 3575'],
      repetitions: 3,
    },
    {
      arabic: `قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ، مِن شَرِّ مَا خَلَقَ ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      translation: `Say, I seek protection of the Lord of the daybreak, from the evil of what He has created, and from the evil of the darkening night when it settles, and from the evil of the blowers in knots, and from the evil of the envier when he envies. (113)`,
      sources: ['Tirmidhī 3575'],
      repetitions: 3,
    },
    {
      arabic: `قُلْ أَعُوذُ بِرَبِّ النَّاسِ ، مَلِكِ النَّاسِ ، إِلَٰهِ النَّاسِ ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ، مِنَ الْجِنَّةِ وَالنَّاسِ`,
      translation: `Say, I seek protection of the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the hearts of mankind, whether they be Jinn or people. (114)`,
      sources: ['Tirmidhī 3575'],
      repetitions: 3,
    },
    {
      arabic: `اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي ، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ`,
      translation: `O Allah, You are my Lord. There is no god except You. You have created me, and I am Your slave, and I am under Your covenant and pledge (to fulfil it) to the best of my ability. I seek Your protection from the evil that I have done. I acknowledge the favors that You have bestowed upon me, and I admit my sins. Forgive me, for none forgives sins but You.`,
      sources: ['Bukhārī 6306'],
      repetitions: 1,
    },

    {
      arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي ، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي ، اللَّهُمَّ احْفَظْنِي مِنْ بَـيْنِ يَدَيَّ ، وَمِنْ خَلْفِي ، وَعَنْ يَّمِينِي ، وَعَنْ شِمَالِي ، وَمِنْ فَوْقِي ، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي`,
      translation: `O Allah, I ask You for well-being in this world and the next. O Allah, I ask You for forgiveness and well-being in my religion, in my worldly affairs, in my family and in my wealth. O Allah, conceal my faults and assuage my fears. O Allah, guard me from in front of me and behind me, from my right, and from my left, and from above me. I seek protection in Your Greatness from being unexpectedly destroyed from beneath me.`,
      sources: [
        'Abū Dāwūd 5074',
        "'Abdullāh ibn 'Umar (raḍiy Allāhu 'anhumā) narrated: \"The Messenger of Allah ﷺ never failed to say these words in the morning and in the evening.\"",
      ],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ ، وَأَنْ أَقْتَرِفَ عَلَىٰ نَفْسِي سُوءًا ، أَوْ أَجُرَّهُ إِلَىٰ مُسْلِمٍ`,
      translation: `O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, the Lord and Sovereign of everything; I bear witness that there is no god but You. I seek Your protection from the evil of my own self, from the evil of Shaytān and from the evil of polytheism to which he calls, and from inflicting evil on myself, or bringing it upon a Muslim.`,
      sources: ['Tirmidhī 3529'],
      repetitions: 1,
    },
    {
      arabic: `يَا حَيُّ يَا قَيُّومُ ، بِرَحْمَتِكَ أَسْتَغِيثُ ، أَصْلِحْ لِي شَأْنِي كُلَّهُ ، وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْن`,
      translation: `O The Ever Living, The One Who sustains and protects all that exists; I seek assistance through Your mercy. Rectify all of my affairs and do not entrust me to myself for the blink of an eye.`,
      sources: ["Nasā'ī 10405"],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ`,
      translation: `O Allah, all the favours that I or anyone from Your creation has received in the evening, are from You Alone. You have no partner. To You Alone belong all praise and all thanks.`,
      sources: ['Abū Dāwūd 5073'],
      repetitions: 1,
    },
    {
      arabic: `أَمْسَيْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ`,
      translation: `We have entered the evening upon the natural religion of Islam, the word of pure faith (i.e. Shahādah), the religion of our Prophet Muhammad ﷺ and upon the way of our father Ibrāhīm, who turned away from all that is false, having surrendered to Allah, and he was not of the polytheists.`,
      sources: ['Ahmad 15360'],
      repetitions: 1,
    },

    {
      arabic: `أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلهِ وَالْحَمْدُ لِلهِ ، لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ`,
      translation: `We have entered the evening and at this very time the whole kingdom belongs to Allah. All praise is due to Allah. There is no god but Allah, the One; He has no partner with Him. The entire kingdom belongs solely to Him, to Him is all praise due, and He is All-Powerful over everything. My Lord, I ask You for the good that is in this night and the good that follows it, and I seek Your protection from the evil that is in this night and from the evil that follows it. My Lord, I seek Your protection from laziness and the misery of old age. My Lord, I seek Your protection from the torment of the Hell-fire and the punishment of the grave.`,
      sources: ['Muslim 2723'],
      repetitions: 1,
    },
    {
      arabic: `أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمِينَ ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هـٰذِهِ اللَّيْلَةِ ، فَتْحَهَا وَنَصْرَهَا وَنُورَهـَا وَبَرَكَتَهَا وَهُدَاهـَا وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا`,
      translation: `We have entered the evening and at this very time the whole kingdom belongs to Allah, Lord of the Worlds. O Allah, I ask You for the goodness of this night: its victory, its help, its light, and its blessings and guidance. I seek Your protection from the evil that is in it and from the evil that follows it.`,
      sources: ['Abū Dāwūd 5084'],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ ، وَمَلَائِكَتَكَ ، وَجَمِيعَ خَلْقِكَ ، أَنَّكَ أَنْتَ اللهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ ، لَا شَرِيكَ لَكَ ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُك`,
      translation: `O Allah, I have entered the evening and call upon You, the bearers of Your Throne, Your angels and all creation, to bear witness that surely You are Allah. There is no god but You Alone. You have no partners, and that Muhammad ﷺ is Your slave and Your Messenger.`,
      sources: ['Abū Dāwūd 5069', 'Abū Dāwūd 5078'],
      repetitions: 4,
    },
    {
      arabic: `اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ`,
      translation: `O Allah, by You we have entered the evening and by You we enter upon the morning. By You, we live and we die, and to You is the resurrection/return.`,
      sources: ['Tirmidhī 3391'],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ عَافِنِي فِي بَدَنِي ، اللَّهُمَّ عَافِنِي فِي سَمْعِي ، اللَّهُمَّ عَافِنِي فِي بَصَرِي ، لَا إِلَٰهَ إِلَّا أَنْتَ ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْت`,
      translation: `O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight. There is no god but You. O Allah, I seek Your protection from disbelief and poverty and I seek Your protection from the punishment of the grave. There is no god but You.`,
      sources: ['Abū Dāwūd 5090', 'Aḥmad 20430'],
      repetitions: 3,
    },
    {
      arabic: `حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ، عَلَيْهِ تَوَكَّلْتُ ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ`,
      translation: `Allah is sufficient for me. There is no god but Him. I have placed my trust in Him only and He is the Lord of the Magnificent Throne.`,
      sources: ['Ibn al-Sunnī 71'],
      repetitions: 7,
    },
    {
      arabic: `رَضِيتُ بِاللَّهِ رَبًّا ، وَبِالْإِسْلَامِ دِينًا ، وَبِمُحَمَّدٍ ﷺ نَبِيًّا`,
      translation: `I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad ﷺ as my Prophet.`,
      sources: ['Ahmad 18927', "Tabarānī in Mu'jam al-Kabīr 838"],
      repetitions: 3,
    },
    {
      arabic: `بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ ، وَهُوَ السَّمِيعُ الْعَلِيمُ`,
      translation: `In the Name of Allah, with whose Name nothing can harm in the earth nor in the sky. He is the All-Hearing and All-Knowing.`,
      sources: ['Tirmidhī 3388'],
      repetitions: 3,
    },
    {
      arabic: `سُبْحَانَ اللَّهِ وَبِحَمْدِهِ`,
      translation: `Allah is free from imperfection, and all praise is due to Him.`,
      sources: ['Muslim 2692', 'Bukhārī 6405'],
      repetitions: 100,
    },
    {
      arabic: `لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ`,
      translation: `There is no god but Allah. He is Alone and He has no partner whatsoever. To Him Alone belong all sovereignty and all praise. He is over all things All-Powerful.`,
      sources: ['Bukhārī 3293', "Nasā'ī in Sunan al-Kubrā 10410"],
      repetitions: 100,
    },
    {
      arabic: `سُبْحَانَ اللَّهِ`,
      translation: `Allah is free from imperfection (Glory be to Allah).`,
      sources: ["Nasā'ī in Sunan al-Kubrā 10657"],
      repetitions: 100,
    },
    {
      arabic: `الْحَمْدُ لِلَّهِ`,
      translation: `All praise is due to Allah.`,
      sources: ["Nasā'ī in Sunan al-Kubrā 10657"],
      repetitions: 100,
    },
    {
      arabic: `اللَّهُ أَكْبَرُ`,
      translation: `Allah is the Greatest.`,
      sources: ["Nasā'ī in Sunan al-Kubrā 10657"],
      repetitions: 100,
    },
    {
      arabic: `اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ ، وَعَلَىٰ آلِ مُحَمَّدٍ ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ ، وَعَلَىٰ آلِ إِبْرَاهِيمَ ، إِنَّكَ حَمِيدٌ مَجِيدٌ . اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ ، وَعَلَىٰ آلِ مُحَمَّدٍ ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ ، وَعَلَىٰ آلِ إِبْرَاهِيمَ ، إِنَّكَ حَمِيدٌ مَجِيدٌ`,
      translation: `O Allah, bestow Your blessings upon Muhammad and upon the family of Muhammad, as You bestowed blessings upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Glorious. O Allah, bless Muhammad and the family of Muhammad, as you have blessed Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy, Glorious.`,
      sources: ["Tabarānī in Mu'jam al-Kabīr 6357"],
      repetitions: 10,
    },
    {
      arabic: `أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ`,
      translation: `I seek protection in Allah's perfect words from the evil of whatever He has created.`,
      sources: ['Tirmidhī 3604'],
      repetitions: 3,
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

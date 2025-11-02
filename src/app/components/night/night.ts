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
  selector: 'app-night',
  imports: [CommonModule, HammerModule],
  templateUrl: './night.html',
  styleUrl: './night.css',
})
export class Night {
  adhkar: Dhikr[] = [
    {
      arabic: `ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ`,
      translation: `Allah, there is no god but He, the Ever Living, the One Who sustains and protects all that exists. Neither drowsiness overtakes Him nor sleep. To Him Alone belongs whatever is in the heavens and whatever is on the earth.  Who is it that can intercede with Him except with His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great. (2:255)`,
      sources: [
        'Ubayy ibn Ka\'b (raḍiy Allāhu \'anhu) reported that he had a vessel in which he kept dates. He found that its quantity was decreasing. So he kept guard on it one night and saw a creature that resembled an adolescent boy. Ubayy greeted him and he returned his greeting. Ubayy then asked him: "What are you, a jinnī or a human?" He replied: "A jinnī." So he said to him: "Show me your hand." So he showed him his hand, and it looked like a dog\'s paw with dog\'s fur. He said: "This is how the jinn are created. The jinn know that there is no one amongst them who is stronger than me." Ubayy asked him: "What made you come here?" He replied: "We heard that you are a man who loves charity, and we came to take our share from your food.\'" Ubayy asked him: "What will protect us from you?" He replied: "Reading Āyah al-Kursī from Sūrah al-Baqarah [i.e. the verse above]. If you read it in the morning, you will be protected from us till the evening. And if you read it in the evening, you will be protected from us till the morning." Ubayy said: "The following morning, Ubayy went to the Messenger of Allah ﷺ and told him about what had happened. The Messenger of Allah g said: "The evil one spoke the truth."',
        'Ṭabarānī in Mu\'jam al-Kabir 1/201'
      ],
      repetitions: 1,
    },
    {
      arabic: `آمَنَ الرَّسُوْلُ بِمَا أُنْزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُوْنَ ، كُلٌّ آمَنَ بِاللهِ وَمَلآئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ ، لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ، وَقَالُوْا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيْرُ. لَا يُكَلِّفُ اللهُ نَفْسًا إِلَّا وُسْعَهَا ، لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ، رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِيْنَا أَوْ أَخْطَأْنَا ، رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا ، رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ، وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ، أَنْتَ مَوْلَانَا ، فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِيْنَ`,
      translation: `The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah, His angels, His books and His messengers, [saying], "We make no distinction between any of His Messengers." And they say, "We hear and we obey. We seek Your forgiveness, our Lord, and to You is the final destination." Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."  (2:285-6)`,
      sources: [
        'The Messenger of Allah ﷺ said: "Whoever recites the last two verses of Sūrah al-Baqarah at night, they will suffice him."',
        'Bukhārī 4008, 807'
      ],
      repetitions: 1,
    },
    {
      arabic: `قُلْ يَا أَيُّهَا الْكَافِرُوْنَ ، لَا أَعْبُدُ مَا تَعْبُدُوْنَ ، وَلَا أَنْتُمْ عَابِدُوْنَ مَا أَعْبُدُ ، وَلَا أَنَا عَابِدٌ مَّا عَبَدْتُّمْ ، وَلَا أَنْتُمْ عَابِدُوْنَ مَا أَعْبُدُ ، لَكُمْ دِينُكُمْ وَلِيَ دِيْنِ`,
      translation: `Say: O disbelievers, I worship not that which you worship. And nor do you worship that which I worship. And I shall not worship that which you worship. Nor will you worship that which I worship. To you be your religion, and to me my religion. (109)`,
      sources: [
        'The Messenger of Allah ﷺ said: "Recite [the above] then go to sleep at the end of it, for it is a disavowal of polytheism."',
        'Tirmidhī 3403'
      ],
      repetitions: 1,
    },
    {
      arabic: `قُلْ هُوَ اللهُ أَحَدٌ ، اَللهُ الصَّمَدُ ، لَمْ يَلِدْ وَلَمْ يُوْلَدْ ، وَلَمْ يَكُنْ لَّهُ كُفُوًا أَحَدٌ`,
      translation: `Say, He is Allah, the One, the Self-Sufficient Master, Who has not given birth and was not born, and to Whom no one is equal. (112)`,
      sources: [
        'Mu\'adh bin Abdullah bin Khubaib, narrated from his father (raḍiy Allāhu \'anhu), who said: "We went out on a rainy and extremely dark night, looking for the Messenger of Allah ﷺ, so that he could lead us in Salat." He said: "So I met him and he ﷺ said: \'Speak\' but I did not say anything. Then he ﷺ said: \'Speak.\' But I did not say anything. He ﷺ said: \'Speak.\' So I said: \'What should I say?\' He ﷺ said: "Recite Sūrah al-Ikhlās and al-Mu\'awwidhatayn (Sūrah al-Falaq and Sūrah al-Nās) three times in the morning and the evening. It will suffice you in all respects."',
        'Tirmidhī 3575',
        'Anas (radiy Allāhū \'anhu) reported: "There was a man from the Ansar who led them (in Salah) at Masjid Quba. Every time he was to recite a Surah for them during Salah, he would begin by reciting Sūrah al-Ikhlās until he finished, then he would recite another Surah with it. He did that in each Rak\'ah. His companions talked to him and said: \'You recite this Surah. You should either recite it or leave it and recite another Surah.\'" He said: "I shall not leave it, if you would like me to lead you with it then I shall do so, and if you do not like it then I shall leave you." And they considered him the best among them, and they did not like the idea of someone else leading them. So when the Prophet ﷺ came to them they informed him about what had happened and he ﷺ said: "O so-and-so! What prevents you from doing what your companions told you to do, why do recite this Surah in every Rak\'ah" He said: \'O Messenger of Allah, I love Sūrah al-Ikhlās.\' He ﷺ said: \'Your love for it will admit you into Paradise.\'"',
        'Tirmidhī 2901',
        '\'These Sūrahs are extremely effective in repelling magic, evil eye, and the rest of the evils…The need for a slave to seek Allah\'s protection with these Sūrahs is greater than his need for eating, drinking and clothes.\' (Ibn al-Qayyim raḥimahullāh)'
      ],
      repetitions: 3,
    },
    {
      arabic: `قُلْ أَعُوْذُ بِرَبِّ الْفَلَقِ ، مِنْ شَرِّ مَا خَلَقَ ، وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      translation: `Say, I seek protection of the Lord of the daybreak, from the evil of what He has created, and from the evil of the darkening night when it settles, and from the evil of the blowers in knots, and from the evil of the envier when he envies. (113)`,
      sources: [
        'Mu\'adh bin Abdullah bin Khubaib narrates: "Recite Sūrah al-Ikhlās and al-Mu\'awwidhatayn (Sūrah al-Falaq and Sūrah al-Nās) three times in the morning and the evening. It will suffice you in all respects."',
        'Tirmidhī 3575'
      ],
      repetitions: 3,
    },
    {
      arabic: `قُلْ أَعُوْذُ بِرَبِّ النَّاسِ ، مَلِكِ النَّاسِ ، إِلٰهِ النَّاسِ ، مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ، اَلَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِ ،مِنَ الْجِنَّةِ وَالنَّاسِ`,
      translation: `Say, I seek protection of the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the hearts of mankind, whether they be Jinn or people. (114)`,
      sources: [
        'Mu\'adh bin Abdullah bin Khubaib narrates: "Recite Sūrah al-Ikhlās and al-Mu\'awwidhatayn (Sūrah al-Falaq and Sūrah al-Nās) three times in the morning and the evening. It will suffice you in all respects."',
        'Tirmidhī 3575'
      ],
      repetitions: 3,
    },
    {
      arabic: `سُبْحَانَ اللهِ (×33) ، اَلْحَمْدُ للهِ (×33) ، اَللهُ أَكْبَرُ (×34)`,
      translation: `Allah is free from imperfection (×33). All praise be to Allah (×33). Allah is the Greatest (×34).`,
      sources: [
        'Fātimah (raḍiy Allāhu \'anhā) came to the Messenger of Allah ﷺ and asked him for a servant. He ﷺ said: "Shall I not tell you of something that is better for you than that? When you go to sleep, say: \'Subhānallah 33 times, Alhamdulillah 33 times, and Allahu Akbar 34 times.\'"',
        'Bukhārī 3705'
      ],
      repetitions: 100,
    },
    {
      arabic: `بِاسْمِكَ رَبِّيْ وَضَعْتُ جَنْبِيْ ، وَبِكَ أَرْفَعُهُ ، فَإِنْ أَمْسَكْتَ نَفْسِيْ فَارْحَمْهَا ، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِيْنَ`,
      translation: `In Your Name my Lord, I lie down, and in Your Name, I rise. If You take my soul away then have mercy upon it, and if You return my soul then protect it with what you protect Your righteous servants with.`,
      sources: [
        'Abu Huraira (raḍiy Allāhu \'anhu) narrates that the Prophet ﷺ said: "When anyone of you go to bed, he should shake out his bed with the inside of his waist sheet, for he does not know what has come on to it after him, and then he should say: [the above]."',
        'Bukhārī 6320'
      ],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ قِنِيْ عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ`,
      translation: `O Allah, protect me from Your punishment on the day You resurrect Your servants.`,
      sources: [
        'Hafsah (raḍiy Allāhu \'anhā), the wife of the Messenger of Allah ﷺ narrates that when the Messenger of Allah ﷺ wanted to go to sleep, he put his right hand under his cheek and would then say [the above] three times.',
        'Abū Dāwūd 5045'
      ],
      repetitions: 3,
    },
    {
      arabic: `اَلْحَمْدُ للهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا ، وَكَفَانَا ، وَآوَانَا ، فَكَمْ مِّمَّنْ لَا كَافِيَ لَهُ وَلَا مُؤْوِيَ`,
      translation: `All praise is for Allah, Who provided us food and drink and Who sufficed us and has sheltered us; for how many have none to suffice them or shelter them.`,
      sources: [
        'Anas (raḍiy Allāhu \'anhu) narrates that when the Messenger of Allah ﷺ would retire to bed, he would say [the above].',
        'Muslim 2715'
      ],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ ، فَاطِرَ السَّمٰوَاتِ وَالْأَرْضِ رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ ، أَشْهَدُ أَنْ لَّا إِلٰهَ إِلَّا أَنْتَ ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ ، وَأَنْ أَقْتَرِفَ عَلَىٰ نَفْسِيْ سُوْءًا ، أَوْ أَجُرَّهُ إِلَىٰ مُسْلِمٍ`,
      translation: `O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of everything; I bear witness that there is no god but You. I seek Your protection from the evil of my own self, from the evil of Shaytān and from the evil of polytheism to which he calls, and from inflicting evil on myself, or bringing it upon a Muslim.`,
      sources: [
        'Abu Hurayrah (raḍiy Allāhu \'anhu) narrates: "Abu Bakr (raḍiy Allāhu \'anhu) said: \'O Messenger of Allah, command me with something that I may say in the morning and evening.\' He ﷺ said: \'Say: [the above].\'"',
        'Tirmidhī 3392'
      ],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ رَبَّ السَّمٰوَاتِ وَرَبَّ الْعَرْشِ الْعَظِيْمِ ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ ، فَالِقَ الْحَبِّ وَالنَّوَىٰ ، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيْلِ وَالْفُرْقَانِ ، أَعُوْذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ ، اَللّٰهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُوْنَكَ شَيْءٌ ، اِقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ`,
      translation: `O Allah, Lord of the heavens, Lord of the Magnificent Throne, our Lord and Lord of all things, Splitter of the seed and the date stone, Revealer of the Torah, the Bible and the Criterion (Qur'ān); I seek Your protection from the evil of every thing You hold by the forehead. You are the First and there is nothing before You. You are the Last and there is nothing after You. You are the Most High and there is nothing above You. You are the Most Near and nothing is closer than You; settle our debts for us and spare us from poverty.`,
      sources: [
        'Suhail reported that Abu Salih used to command us: "When any one of you intends to go to sleep, he should lie on the bed on his right side and then say [the above]. Abu Sālih used to narrate it from Abu Hurayra (raḍiy Allāhu \'anhu) who narrated it from Messenger of Allah ﷺ.',
        'Muslim 2713'
      ],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِوَجْهِكَ الْكَرِيْمِ ، وَكَلِمَاتِكَ التَّامَّةِ مِنْ شَرِّ مَا أَنْتَ آخِذٌ بِنَاصِيَتِهِ ، اَللّٰهُمَّ أَنْتَ تَكْشِفُ الْمَغْرَمَ وَالْمَأْثَمَ ، اَللّٰهُمَّ لَا يُهْزَمُ جُنْدُكَ ، وَلَا يُخْلَفُ وَعْدُكَ ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ ، سُبْحَانَكَ وَبِحَمْدِكَ`,
      translation: `O Allah, I seek protection by Your Noble Countenance and by Your perfect words from the evil of all that You hold by the forehead. O Allah, it is You who removes debt and sin. O Allah, Your army is never defeated and Your promise is never broken. The wealth of the wealthy does not avail them against You. You are free from imperfection, and to You belongs all praise.`,
      sources: [
        'Ali ibn Abi Talib (raḍiy Allāhu \'anhu) narrates that the Messenger of Allah used to say [the above] when he retired to bed.',
        'Abū Dāwūd 5052'
      ],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ إِنَّكَ خَلَقْتَ نَفْسِيْ وَأَنْتَ تَوَفَّاهَا ، لَكَ مَمَاتُهَا وَمَحْيَاهَا ، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا ، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ الْعَافِيَة`,
      translation: `O Allah, verily You have created my soul and You shall take its life. To You Alone belongs its life and death. If You keep my soul alive then protect it, and if You take it away, then forgive it. O Allah, I ask You to grant me well-being.`,
      sources: [
        'Abdullah b. Umar (radiy Allāhū \'anhumā) narrates that he instructed a man to say [the above] when going to sleep. The man asked him: \'Did you hear this from Umar?\' He replied: \'Someone better than Umar; from the Messenger of Allah ﷺ.\'',
        'Aḥmad 5502'
      ],
      repetitions: 1,
    },
    {
      arabic: `بِسْمِ اللهِ وَضَعْتُ جَنْبِيْ ، اَللّٰهُمَّ اغْفِرْ لِيْ ذَنْبِيْ ، وَأَخْسِئْ شَيْطَانِيْ ، وَفُكَّ رِهَانِيْ ، وَاجْعَلْنِيْ فِي النَّدِيِّ الْأَعْلَىٰ`,
      translation: `In the Name of Allah, I lie down. O Allah, forgive my sins, ward off from me my shaytān, free me from my obligations (to others) and enter me into the loftiest assembly (of angels).`,
      sources: [
        'Abu al-Azhar al-Anmari (raḍiy Allāhu \'anhu) narrates that when the Messenger of Allah ﷺ retired to bed at night, he would say [the above].',
        'Abū Dāwūd 5054'
      ],
      repetitions: 1,
    },
    {
      arabic: `اَلْحَمْدُ للهِ الَّذِيْ كَفَانِيْ وَآوَانِيْ ، اَلْحَمْدُ للهِ الَّذِيْ أَطْعَمَنِيْ وَسَقَانِيْ ، اَلْحَمْدُ للهِ الَّذِيْ مَنَّ عَلَيَّ فَأَفْضَلَ ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ بِعِزَّتِكَ أَنْ تُنَجِّيَنِيْ مِنَ النَّارِ`,
      translation: `All praise is for Allah Who has sufficed me and given me refuge. All praise is for Allah Who has fed me and given me drink. All praise is for Allah Who has been gracious to me and showered favours on me. O Allah, I ask You by Your Glory, save me from the Hell-Fire.`,
      sources: [
        'The Messenger of Allah ﷺ said: "Whoever says [the above] when retiring to bed has praised Allah with all the praises of His entire creation."',
        'Hākim 2001'
      ],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ بِاسْمِكَ أَمُوْتُ وَأَحْيَا`,
      translation: `O Allah, solely in Your Name I die and I live.`,
      sources: [
        'Abu Dhar (raḍiy Allāhu \'anhu) narrates that whenever the Prophet ﷺ lay on his bed, he used to say: [the above], and when he woke up he would say: \'All praise is for Allah Who gave us life after having taken it from us and unto Him is the resurrection.\'',
        'Bukhārī 6325'
      ],
      repetitions: 1,
    },
    {
      arabic: `لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ ، سُبْحَانَ اللهِ وَالْحَمْدُ للهِ وَلَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ`,
      translation: `There is no god but Allah. He is Alone and He has no partner whatsoever. To Him Alone belong all sovereignty and all praise. He is over all things All-Powerful. There is no power (in averting evil) or strength (in attaining good) except through Allah. Allah is free from imperfection, and all praise is for Allah. There is no god but Allah and Allah is the Greatest.`,
      sources: [
        'The Messenger of Allah ﷺ said: "Whoever says [the above] when retiring to bed, all of his sins will be forgiven, even if they are as abundant as the foam of the sea."',
        'Nasā\'ī'
      ],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ أَسْلَمْتُ نَفْسِيْ إِلَيْكَ ، وَفَوَّضْتُ أَمْرِيْ إِلَيْكَ ، وَوَجَّهْتُ وَجْهِيْ إِلَيْكَ ، وَأَلْجَاْتُ ظَهْرِيْ إِلَيْكَ ، رَغْبَةً وَرَهْبَةً إِلَيْكَ ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ ، آمَنْتُ بِكِتَابِكَ الَّذِيْ أَنْزَلْتَ وَبِنَبِيِّكَ الَّذِيْ أَرْسَلْتَ`,
      translation: `O Allah, I submit my soul unto You, and I entrust my affair unto You, and I turn my face towards You, and I totally rely on You, in hope and fear of You. Verily there is no refuge or safe haven from You except with You. I believe in Your Book which You have revealed and in Your Prophet whom You have sent.`,
      sources: [
        'The Messenger of Allah ﷺ said: "Before you go to bed, perform wudhū as you would for prayer, then lie down on your right side and say [the above]. Whoever says this and dies in his sleep, will die upon the \'fitrah\' (natural monotheism)."',
        'Bukhārī 6313',
        'In another narration the Messenger of Allah ﷺ said: "Let the aforesaid words be your last utterance (before sleep)."',
        'Bukhārī 247'
      ],
      repetitions: 1,
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

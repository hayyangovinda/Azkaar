import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { ReviewService } from '../../services/review.service';

interface Dhikr {
  arabic: string;
  transliteration: string;
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
      transliteration: `Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm, lā ta'khudhuhū sinatun wa lā nawm, lahū mā fī as-samāwāti wa mā fī al-arḍ, man dhā alladhī yashfa'u 'indahū illā bi-idhnih, ya'lamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shay'in min 'ilmihī illā bi-mā shā', wasi'a kursiyyuhū as-samāwāti wa al-arḍ, wa lā ya'ūduhū ḥifẓuhumā, wa huwa al-'aliyyu al-'aẓīm.`,
      translation: `Allah, there is no god but He, the Ever Living, the One Who sustains and protects all that exists. Neither drowsiness overtakes Him nor sleep. To Him Alone belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except with His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great. (2:255)`,
      sources: ['Sahih al-Bukhari', 'Sahih Muslim', 'Sunan Abu Dawud', "Sunan an-Nasa'i"],
      repetitions: 1,
    },
    {
      arabic: `قُلْ هُوَ اللَّهُ أَحَدٌ ، اللَّهُ الصَّمَدُ ، لَمْ يَلِدْ وَلَمْ يُولَدْ ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
      transliteration: `Qul huwa Allāhu aḥad, Allāhu aṣ-ṣamad, lam yalid wa lam yūlad, wa lam yakun lahū kufuwan aḥad.`,
      translation: `Say, He is Allah, the One, the Self-Sufficient Master, Who has not given birth and was not born, and to Whom no one is equal. (112)`,
      sources: ['Sahih al-Bukhari', 'Sahih Muslim', 'Sunan Abu Dawud', 'Sunan at-Tirmidhi'],
      repetitions: 3,
    },
    {
      arabic: `قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ، مِن شَرِّ مَا خَلَقَ ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      transliteration: `Qul a'ūdhu bi-rabbi al-falaq, min sharri mā khalaq, wa min sharri ghāsiqin idhā waqab, wa min sharri an-naffāthāti fī al-'uqad, wa min sharri ḥāsidin idhā ḥasad.`,
      translation: `Say, I seek protection of the Lord of the daybreak, from the evil of what He has created, and from the evil of the darkening night when it settles, and from the evil of the blowers in knots, and from the evil of the envier when he envies. (113)`,
      sources: ['Sahih al-Bukhari', 'Sahih Muslim', 'Sunan Abu Dawud', 'Sunan at-Tirmidhi'],
      repetitions: 3,
    },
    {
      arabic: `قُلْ أَعُوذُ بِرَبِّ النَّاسِ ، مَلِكِ النَّاسِ ، إِلَٰهِ النَّاسِ ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ، مِنَ الْجِنَّةِ وَالنَّاسِ`,
      transliteration: `Qul a'ūdhu bi-rabbi an-nās, maliki an-nās, ilāhi an-nās, min sharri al-waswāsi al-khannās, alladhī yuwaswisu fī ṣudūri an-nās, mina al-jinnati wa an-nās.`,
      translation: `Say, I seek protection of the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the hearts of mankind, from among the jinn and mankind. (114)`,
      sources: ['Sahih al-Bukhari', 'Sahih Muslim', 'Sunan Abu Dawud', 'Sunan at-Tirmidhi'],
      repetitions: 3,
    },
    {
      arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا ، وَرِزْقًا طَيِّبًا ، وَعَمَلًا مُتَقَبَّلًا`,
      transliteration: `Allāhumma innī as'aluka 'ilman nāfi'an, wa rizqan ṭayyiban, wa 'amalan mutaqabbalan.`,
      translation: `O Allah, I ask You for beneficial knowledge, goodly provision, and acceptable deeds.`,
      sources: ['Sunan Ibn Majah', 'Musnad Ahmad', 'Authenticated by Al-Albani'],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ`,
      transliteration: `Allāhumma anta rabbī lā ilāha illā ant, khalaqtanī wa anā 'abduk, wa anā 'alā 'ahdika wa wa'dika mā istaṭa'tu, a'ūdhu bika min sharri mā ṣana'tu, abū'u laka bi-ni'matika 'alayy, wa abū'u bi-dhanbī fa-ghfir lī, fa-innahū lā yaghfiru adh-dhunūba illā ant.`,
      translation: `O Allah, You are my Lord. There is no god except You. You have created me, and I am Your slave, and I am under Your covenant and pledge (to fulfil it) to the best of my ability. I seek Your protection from the evil that I have done. I acknowledge the favours that You have bestowed upon me, and I admit my sins. Forgive me, for none forgives sins but You.`,
      sources: [
        'Sahih al-Bukhari',
        'Known as Sayyid al-Istighfar (The Master of Seeking Forgiveness)',
      ],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي ، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي ، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ ، وَمِنْ خَلْفِي ، وَعَنْ يَمِينِي ، وَعَنْ شِمَالِي ، وَمِنْ فَوْقِي ، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي`,
      transliteration: `Allāhumma innī as'aluka al-'āfiyata fī ad-dunyā wa al-ākhirah, Allāhumma innī as'aluka al-'afwa wa al-'āfiyata fī dīnī wa dunyāya wa ahlī wa mālī, Allāhumma ustur 'awrātī wa āmin raw'ātī, Allāhumma iḥfaẓnī min bayni yadayy, wa min khalfī, wa 'an yamīnī, wa 'an shimālī, wa min fawqī, wa a'ūdhu bi-'aẓamatika an ughtāla min taḥtī.`,
      translation: `O Allah, I ask You for well-being in this world and in the Hereafter. O Allah, I ask You for forgiveness and well-being in my religion, my worldly affairs, my family and my wealth. O Allah, conceal my faults and calm my fears. O Allah, guard me from in front of me and behind me, from my right and my left, and from above me. I seek refuge in Your Greatness from being unexpectedly destroyed from beneath me.`,
      sources: ['Sunan Abu Dawud', 'Sunan Ibn Majah', 'Authenticated by Al-Albani'],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ ، وَأَنْ أَقْتَرِفَ عَلَىٰ نَفْسِي سُوءًا ، أَوْ أَجُرَّهُ إِلَىٰ مُسْلِمٍ`,
      transliteration: `Allāhumma 'ālima al-ghaybi wa ash-shahādah, fāṭira as-samāwāti wa al-arḍ, rabba kulli shay'in wa malīkah, ashhadu an lā ilāha illā ant, a'ūdhu bika min sharri nafsī, wa min sharri ash-shayṭāni wa shirkih, wa an aqtarifa 'alā nafsī sū'an, aw ajurrahū ilā muslim.`,
      translation: `O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that there is no god except You. I seek refuge in You from the evil of my soul, from the evil of Satan and his encouragement to commit shirk, and from committing evil against my soul or bringing such evil upon any Muslim.`,
      sources: ['Sunan Abu Dawud', 'Sunan at-Tirmidhi', 'Authenticated by Al-Albani'],
      repetitions: 1,
    },
    // {
    //   arabic: `اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ`,
    //   transliteration: `Allāhumma mā aṣbaḥa bī min ni'matin aw bi-aḥadin min khalqik, fa-minka waḥdaka lā sharīka lak, fa-laka al-ḥamdu wa laka ash-shukr.`,
    //   translation: `O Allah, whatever blessing has been received by me or anyone of Your creation in this morning, is from You Alone, You have no partner. To You Alone belongs all praise and all thanks.`,
    //   sources: ['Sunan Abu Dawud', "Sunan an-Nasa'i", 'Authenticated by Al-Albani'],
    //   repetitions: 1,
    // },
    {
      arabic: `أَصْبَحْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ`,
      transliteration: `Aṣbaḥnā 'alā fiṭrati al-islām, wa 'alā kalimati al-ikhlāṣ, wa 'alā dīni nabiyyinā Muḥammad, wa 'alā millati abīnā Ibrāhīma ḥanīfan musliman wa mā kāna mina al-mushrikīn.`,
      translation: `We have entered a new day upon the natural religion of Islam, the word of sincere devotion, the religion of our Prophet Muhammad, and the faith of our father Ibrahim, who was upright and devoted to Allah, and was not of those who associate others with Allah.`,
      sources: ['Musnad Ahmad', 'Authenticated by Al-Albani'],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ`,
      transliteration: `Allāhumma bika aṣbaḥnā wa bika amsaynā wa bika naḥyā wa bika namūtu wa ilayka an-nushūr.`,
      translation: `O Allah, by Your will we have entered the morning and by Your will we enter the evening, by Your will we live and by Your will we die, and to You is the resurrection.`,
      sources: ['Sunan at-Tirmidhi', 'Authenticated by Al-Albani'],
      repetitions: 1,
    },
    {
      arabic: `أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ`,
      transliteration: `Aṣbaḥnā wa aṣbaḥa al-mulku lillāhi wa al-ḥamdu lillāh, lā ilāha illā Allāhu waḥdahū lā sharīka lah, lahu al-mulku wa lahu al-ḥamd wa huwa 'alā kulli shay'in qadīr, rabbi as'aluka khayra mā fī hādhā al-yawmi wa khayra mā ba'dah, wa a'ūdhu bika min sharri mā fī hādhā al-yawmi wa sharri mā ba'dah, rabbi a'ūdhu bika mina al-kasal wa sū'i al-kibar, rabbi a'ūdhu bika min 'adhābin fī an-nāri wa 'adhābin fī al-qabr.`,
      translation: `We have entered a new morning and with it all sovereignty belongs to Allah. All praise is due to Allah. There is no god except Allah Alone, with no partner. To Him belongs the Kingdom, to Him is all praise, and He has power over everything. My Lord, I ask You for the goodness of this day and the goodness that follows it, and I seek refuge in You from the evil of this day and the evil that follows it. My Lord, I seek refuge in You from laziness and the misery of old age. My Lord, I seek refuge in You from the punishment of the Fire and the punishment of the grave.`,
      sources: ['Sahih Muslim', 'Sunan Abu Dawud'],
      repetitions: 1,
    },
    // {
    //   arabic: `أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَٰذَا الْيَوْمِ ، فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ`,
    //   transliteration: `Aṣbaḥnā wa aṣbaḥa al-mulku lillāhi rabbi al-'ālamīn, Allāhumma innī as'aluka khayra hādhā al-yawm, fatḥahū wa naṣrahū wa nūrahū wa barakatahū wa hudāh, wa a'ūdhu bika min sharri mā fīhi wa sharri mā ba'dah.`,
    //   translation: `We have entered a new morning and with it all sovereignty belongs to Allah, Lord of all the worlds. O Allah, I ask You for the goodness of this day: its success, victory, light, blessings and guidance. I seek refuge in You from the evil in it and the evil that follows it.`,
    //   sources: ['Sunan Abu Dawud', 'Authenticated by Al-Albani'],
    //   repetitions: 1,
    // },
    {
      arabic: `اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ ، وَمَلَائِكَتَكَ ، وَجَمِيعَ خَلْقِكَ ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ`,
      transliteration: `Allāhumma innī aṣbaḥtu ush-hiduk, wa ush-hidu ḥamalata 'arshik, wa malā'ikatak, wa jamī'a khalqik, annaka anta Allāhu lā ilāha illā anta waḥdaka lā sharīka lak, wa anna Muḥammadan 'abduka wa rasūluk.`,
      translation: `O Allah, I have entered this morning calling upon You as witness, and calling the bearers of Your Throne, Your angels, and all Your creation to witness, that You are Allah, there is no god except You Alone, You have no partner, and that Muhammad is Your slave and Messenger.`,
      sources: [
        'Sunan Abu Dawud',
        'Authenticated by Al-Albani',
        'Reciting this 4 times in the morning frees one from the Fire',
      ],
      repetitions: 4,
    },
    {
      arabic: `يَا حَيُّ يَا قَيُّومُ ، بِرَحْمَتِكَ أَسْتَغِيثُ ، أَصْلِحْ لِي شَأْنِي كُلَّهُ ، وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ`,
      transliteration: `Yā ḥayyu yā qayyūm, bi-raḥmatika astaghīth, aṣliḥ lī sha'nī kullah, wa lā takilnī ilā nafsī ṭarfata 'ayn.`,
      translation: `O Ever-Living One, O Sustainer, I seek assistance through Your mercy. Rectify all my affairs for me, and do not entrust me to myself for even the blink of an eye.`,
      sources: ['Musnad Ahmad', 'Authenticated by Al-Albani'],
      repetitions: 1,
    },
    {
      arabic: `اللَّهُمَّ عَافِنِي فِي بَدَنِي ، اللَّهُمَّ عَافِنِي فِي سَمْعِي ، اللَّهُمَّ عَافِنِي فِي بَصَرِي ، لَا إِلَٰهَ إِلَّا أَنْتَ ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ ، لَا إِلَٰهَ إِلَّا أَنْتَ`,
      transliteration: `Allāhumma 'āfinī fī badanī, Allāhumma 'āfinī fī sam'ī, Allāhumma 'āfinī fī baṣarī, lā ilāha illā ant, Allāhumma innī a'ūdhu bika mina al-kufri wa al-faqr, wa a'ūdhu bika min 'adhābi al-qabr, lā ilāha illā ant.`,
      translation: `O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight. There is no god except You. O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave. There is no god except You.`,
      sources: ['Sunan Abu Dawud', 'Authenticated by Al-Albani'],
      repetitions: 3,
    },
    {
      arabic: `حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ، عَلَيْهِ تَوَكَّلْتُ ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ`,
      transliteration: `Ḥasbiya Allāhu lā ilāha illā huwa, 'alayhi tawakkaltu, wa huwa rabbu al-'arshi al-'aẓīm.`,
      translation: `Allah is Sufficient for me. There is no god except Him. In Him I have placed my trust, and He is the Lord of the Mighty Throne.`,
      sources: [
        'Sunan Abu Dawud',
        'Authenticated by Al-Albani',
        'Whoever recites this 7 times in the morning and evening, Allah will suffice him in his concerns',
      ],
      repetitions: 7,
    },
    {
      arabic: `بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ ، وَهُوَ السَّمِيعُ الْعَلِيمُ`,
      transliteration: `Bismillāhi alladhī lā yaḍurru ma'a ismihi shay'un fī al-arḍi wa lā fī as-samā', wa huwa as-samī'u al-'alīm.`,
      translation: `In the name of Allah, with Whose name nothing can harm in the earth nor in the heaven, and He is the All-Hearing, the All-Knowing.`,
      sources: [
        'Sunan Abu Dawud',
        'Sunan at-Tirmidhi',
        'Authenticated by Al-Albani',
        'Whoever recites this 3 times will not be harmed by any sudden affliction',
      ],
      repetitions: 3,
    },
    {
      arabic: `سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، عَدَدَ خَلْقِهِ ، وَرِضَا نَفْسِهِ ، وَزِنَةَ عَرْشِهِ ، وَمِدَادَ كَلِمَاتِهِ`,
      transliteration: `Subḥāna Allāhi wa bi-ḥamdih, 'adada khalqih, wa riḍā nafsih, wa zinata 'arshih, wa midāda kalimātih.`,
      translation: `Glory is to Allah and praise is to Him, by the number of His creation, by His pleasure, by the weight of His Throne, and by the ink of His words.`,
      sources: ['Sahih Muslim', 'This dhikr multiplies rewards immensely'],
      repetitions: 3,
    },
    {
      arabic: `رَضِيتُ بِاللَّهِ رَبًّا ، وَبِالْإِسْلَامِ دِينًا ، وَبِمُحَمَّدٍ ﷺ نَبِيًّا`,
      transliteration: `Raḍītu billāhi rabban, wa bi-al-islāmi dīnan, wa bi-Muḥammadin ﷺ nabiyyan.`,
      translation: `I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad ﷺ as my Prophet.`,
      sources: [
        "Sunan an-Nasa'i",
        'Musnad Ahmad',
        'Al-Bayhaqi',
        'Ibn Hibban',
        'Authenticated by Shaykh Nasir in As-Sahihah (334)',
        'Whoever says this, Paradise becomes obligatory for him',
      ],
      repetitions: 1,
    },
    {
      arabic: `سُبْحَانَ اللَّهِ وَبِحَمْدِهِ`,
      transliteration: `Subḥāna Allāhi wa bi-ḥamdih.`,
      translation: `Glory is to Allah and praise is to Him.`,
      sources: [
        'Sahih al-Bukhari',
        'Sahih Muslim',
        'Whoever recites this 100 times in the morning, their sins are forgiven even if they are like the foam of the sea',
      ],
      repetitions: 100,
    },
    {
      arabic: `لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ`,
      transliteration: `Lā ilāha illā Allāhu waḥdahū lā sharīka lah, lahu al-mulku wa lahu al-ḥamd wa huwa 'alā kulli shay'in qadīr.`,
      translation: `There is no god except Allah Alone, with no partner. To Him belongs the Kingdom, to Him is all praise, and He has power over everything.`,
      sources: [
        'Sahih al-Bukhari',
        'Sahih Muslim',
        'Whoever recites this 100 times will have the reward of freeing 10 slaves, 100 good deeds recorded, 100 sins erased, and protection from Satan for that day',
      ],
      repetitions: 100,
    },
    {
      arabic: `أَسْتَغْفِرُ اللَّهَ`,
      transliteration: `Astaghfiru Allāh.`,
      translation: `I seek forgiveness from Allah.`,
      sources: [
        "Abu Nu'aym in Akhbar Asbahan (1/60)",
        'At-Tabarani with authentic chain',
        'Authenticated by Shaykh Nasir in As-Sahihah (1600)',
        "Sahih al-Jami' (5410)",
      ],
      repetitions: 100,
    },

    {
      arabic: `سُبْحَانَ اللَّهِ`,
      transliteration: `Subḥāna Allāh.`,
      translation: `Allah is free from imperfection (Glory be to Allah).`,
      sources: [
        "Sunan an-Nasa'i",
        'The Messenger of Allah ﷺ said: "He who says Subhanallah 100 times before sunrise and 100 times before sunset, it will be better than 100 camels"',
      ],
      repetitions: 100,
    },
    {
      arabic: `الْحَمْدُ لِلَّهِ`,
      transliteration: `Al-ḥamdu lillāh.`,
      translation: `All praise is due to Allah.`,
      sources: [
        "Sunan an-Nasa'i",
        'The Messenger of Allah ﷺ said: "He who says Alhamdulillah 100 times before sunrise and 100 times before sunset, it will be better than 100 horses on which he sends 100 warriors"',
      ],
      repetitions: 100,
    },
    {
      arabic: `اللَّهُ أَكْبَرُ`,
      transliteration: `Allāhu akbar.`,
      translation: `Allah is the Greatest.`,
      sources: [
        "Sunan an-Nasa'i",
        'The Messenger of Allah ﷺ said: "He who says Allahu Akbar 100 times before sunrise and 100 times before sunset, it will be better than freeing 100 slaves"',
      ],
      repetitions: 100,
    },
    // {
    //   arabic: `اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ ، وَعَلَىٰ آلِ مُحَمَّدٍ ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ ، وَعَلَىٰ آلِ إِبْرَاهِيمَ ، إِنَّكَ حَمِيدٌ مَجِيدٌ . اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ ، وَعَلَىٰ آلِ مُحَمَّدٍ ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ ، وَعَلَىٰ آلِ إِبْرَاهِيمَ ، إِنَّكَ حَمِيدٌ مَجِيدٌ`,
    //   transliteration: `Allāhumma ṣalli 'alā Muḥammad, wa 'alā āli Muḥammad, kamā ṣallayta 'alā Ibrāhīm, wa 'alā āli Ibrāhīm, innaka ḥamīdun majīd. Allāhumma bārik 'alā Muḥammad, wa 'alā āli Muḥammad, kamā bārakta 'alā Ibrāhīm, wa 'alā āli Ibrāhīm, innaka ḥamīdun majīd.`,
    //   translation: `O Allah, bestow Your blessings upon Muhammad and upon the family of Muhammad, as You bestowed blessings upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy, Glorious.`,
    //   sources: [
    //     'Sahih al-Bukhari (3190)',
    //     'Sahih Muslim (406)',
    //     'At-Tabarani with good chain',
    //     "Authenticated by Shaykh Nasir in Sahih al-Jami' as-Saghir (6233)",
    //     'Whoever sends blessings upon me 10 times in the morning and 10 times in the evening will attain my intercession on the Day of Resurrection',
    //   ],
    //   repetitions: 10,
    // },
  ];

  currentIndex = 0;
  transliterationExpanded: { [key: number]: boolean } = {};
  translationExpanded: { [key: number]: boolean } = {};
  sourcesExpanded: { [key: number]: boolean } = {};
  remainingCounts: { [key: number]: number } = {};
  showCheckmark: { [key: number]: boolean } = {};
  showReviewPrompt = false;

  constructor(
    private router: Router,
    private reviewService: ReviewService
  ) {
    // Initialize remaining counts for each dhikr
    this.adhkar.forEach((dhikr, index) => {
      this.remainingCounts[index] = dhikr.repetitions;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  toggleTransliteration(index: number): void {
    this.transliterationExpanded[index] = !this.transliterationExpanded[index];
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

  async onRepetitionClick(index: number): Promise<void> {
    if (this.remainingCounts[index] > 0) {
      this.remainingCounts[index]--;

      // When count reaches 0, show checkmark animation
      if (this.remainingCounts[index] === 0) {
        this.showCheckmark[index] = true;

        // Check if this is the 5th dhikr (index 4) completion
        if (index === 4) {
          await this.checkAndShowReviewPrompt();
        }

        // After animation, move to next dhikr (if available)
        setTimeout(() => {
          if (this.currentIndex < this.adhkar.length - 1) {
            this.currentIndex++;
          }
        }, 630); // Wait for animation to complete
      }
    }
  }

  async checkAndShowReviewPrompt(): Promise<void> {
    const hasBeenPrompted = await this.reviewService.hasBeenPrompted();
    if (!hasBeenPrompted) {
      // Wait a bit for checkmark animation before showing prompt
      setTimeout(() => {
        this.showReviewPrompt = true;
      }, 800);
    }
  }

  async acceptReview(): Promise<void> {
    this.showReviewPrompt = false;
    await this.reviewService.openStoreForReview();
  }

  declineReview(): void {
    this.showReviewPrompt = false;
    // Mark as prompted so we don't ask again
    this.reviewService.hasBeenPrompted().then((prompted) => {
      if (!prompted) {
        // We still mark it as prompted even if they decline
        this.reviewService['markAsPrompted']();
      }
    });
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

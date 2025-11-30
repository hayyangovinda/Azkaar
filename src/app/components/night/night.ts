import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';

interface Dhikr {
  arabic: string;
  transliteration: string;
  translation: string;
  sources: string[];
  repetitions: number;
  isInfoCard?: boolean;
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
      transliteration: `Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm, lā ta'khudhuhū sinatun wa lā nawm, lahū mā fī as-samāwāti wa mā fī al-arḍ, man dhā alladhī yashfa'u 'indahū illā bi-idhnih, ya'lamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shay'in min 'ilmihī illā bi-mā shā', wasi'a kursiyyuhū as-samāwāti wa al-arḍ, wa lā ya'ūduhū ḥifẓuhumā, wa huwa al-'aliyyu al-'aẓīm.`,
      translation: `Allah, there is no god but He, the Ever Living, the One Who sustains and protects all that exists. Neither drowsiness overtakes Him nor sleep. To Him Alone belongs whatever is in the heavens and whatever is on the earth.  Who is it that can intercede with Him except with His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great. (2:255)`,
      sources: ["Ṭabarānī in Mu'jam al-Kabir 1/201"],
      repetitions: 1,
    },
    {
      arabic: `آمَنَ الرَّسُوْلُ بِمَا أُنْزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُوْنَ ، كُلٌّ آمَنَ بِاللهِ وَمَلآئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ ، لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ، وَقَالُوْا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيْرُ. لَا يُكَلِّفُ اللهُ نَفْسًا إِلَّا وُسْعَهَا ، لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ، رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِيْنَا أَوْ أَخْطَأْنَا ، رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا ، رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ، وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ، أَنْتَ مَوْلَانَا ، فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِيْنَ`,
      transliteration: `Āmana ar-rasūlu bi-mā unzila ilayhi min rabbih wa al-mu'minūn, kullun āmana billāhi wa malā'ikatihī wa kutubihī wa rusulih, lā nufarriqu bayna aḥadin min rusulih, wa qālū sami'nā wa aṭa'nā ghufrānaka rabbanā wa ilayka al-maṣīr. Lā yukallifu Allāhu nafsan illā wus'ahā, lahā mā kasabat wa 'alayhā mā iktasabat, rabbanā lā tu'ākhidhnā in nasīnā aw akhṭa'nā, rabbanā wa lā taḥmil 'alaynā iṣran kamā ḥamaltahū 'alā alladhīna min qablinā, rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih, wa'fu 'annā wa ghfir lanā wa rḥamnā, anta mawlānā fa-nṣurnā 'alā al-qawmi al-kāfirīn.`,
      translation: `The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah, His angels, His books and His messengers, [saying], "We make no distinction between any of His Messengers." And they say, "We hear and we obey. We seek Your forgiveness, our Lord, and to You is the final destination." Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."  (2:285-6)`,
      sources: ['Bukhārī 4008, 807'],
      repetitions: 1,
    },
    {
      arabic: `قُلْ يَا أَيُّهَا الْكَافِرُوْنَ ، لَا أَعْبُدُ مَا تَعْبُدُوْنَ ، وَلَا أَنْتُمْ عَابِدُوْنَ مَا أَعْبُدُ ، وَلَا أَنَا عَابِدٌ مَّا عَبَدْتُّمْ ، وَلَا أَنْتُمْ عَابِدُوْنَ مَا أَعْبُدُ ، لَكُمْ دِينُكُمْ وَلِيَ دِيْنِ`,
      transliteration: `Qul yā ayyuhā al-kāfirūn, lā a'budu mā ta'budūn, wa lā antum 'ābidūna mā a'bud, wa lā anā 'ābidun mā 'abadtum, wa lā antum 'ābidūna mā a'bud, lakum dīnukum wa liya dīn.`,
      translation: `Say: O disbelievers, I worship not that which you worship. And nor do you worship that which I worship. And I shall not worship that which you worship. Nor will you worship that which I worship. To you be your religion, and to me my religion. (109)`,
      sources: ['Tirmidhī 3403'],
      repetitions: 1,
    },
    {
      arabic: `قُلْ هُوَ اللهُ أَحَدٌ ، اَللهُ الصَّمَدُ ، لَمْ يَلِدْ وَلَمْ يُوْلَدْ ، وَلَمْ يَكُنْ لَّهُ كُفُوًا أَحَدٌ`,
      transliteration: `Qul huwa Allāhu aḥad, Allāhu aṣ-ṣamad, lam yalid wa lam yūlad, wa lam yakun lahū kufuwan aḥad.`,
      translation: `Say, He is Allah, the One, the Self-Sufficient Master, Who has not given birth and was not born, and to Whom no one is equal. (112)`,
      sources: ['Tirmidhī 3575', 'Tirmidhī 2901'],
      repetitions: 3,
    },
    {
      arabic: `قُلْ أَعُوْذُ بِرَبِّ الْفَلَقِ ، مِنْ شَرِّ مَا خَلَقَ ، وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      transliteration: `Qul a'ūdhu bi-rabbi al-falaq, min sharri mā khalaq, wa min sharri ghāsiqin idhā waqab, wa min sharri an-naffāthāti fī al-'uqad, wa min sharri ḥāsidin idhā ḥasad.`,
      translation: `Say, I seek protection of the Lord of the daybreak, from the evil of what He has created, and from the evil of the darkening night when it settles, and from the evil of the blowers in knots, and from the evil of the envier when he envies. (113)`,
      sources: ['Tirmidhī 3575'],
      repetitions: 3,
    },
    {
      arabic: `قُلْ أَعُوْذُ بِرَبِّ النَّاسِ ، مَلِكِ النَّاسِ ، إِلٰهِ النَّاسِ ، مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ، اَلَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِ ،مِنَ الْجِنَّةِ وَالنَّاسِ`,
      transliteration: `Qul a'ūdhu bi-rabbi an-nās, maliki an-nās, ilāhi an-nās, min sharri al-waswāsi al-khannās, alladhī yuwaswisu fī ṣudūri an-nās, mina al-jinnati wa an-nās.`,
      translation: `Say, I seek protection of the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the hearts of mankind, whether they be Jinn or people. (114)`,
      sources: ['Tirmidhī 3575'],
      repetitions: 3,
    },
    {
      arabic: `سُبْحَانَ اللهِ (×33) ، اَلْحَمْدُ للهِ (×33) ، اَللهُ أَكْبَرُ (×34)`,
      transliteration: `Subḥāna Allāh (×33), Al-ḥamdu lillāh (×33), Allāhu akbar (×34).`,
      translation: `Allah is free from imperfection (×33). All praise be to Allah (×33). Allah is the Greatest (×34).`,
      sources: ['Bukhārī 3705'],
      repetitions: 100,
    },
    {
      arabic: `بِاسْمِكَ رَبِّيْ وَضَعْتُ جَنْبِيْ ، وَبِكَ أَرْفَعُهُ ، فَإِنْ أَمْسَكْتَ نَفْسِيْ فَارْحَمْهَا ، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِيْنَ`,
      transliteration: `Bismika rabbī waḍa'tu janbī, wa bika arfa'uh, fa-in amsakta nafsī fa-rḥamhā, wa in arsaltahā fa-ḥfaẓhā bi-mā taḥfaẓu bihi 'ibādaka aṣ-ṣāliḥīn.`,
      translation: `In Your Name my Lord, I lie down, and in Your Name, I rise. If You take my soul away then have mercy upon it, and if You return my soul then protect it with what you protect Your righteous servants with.`,
      sources: ['Bukhārī 6320'],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ قِنِيْ عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ`,
      transliteration: `Allāhumma qinī 'adhābaka yawma tab'athu 'ibādak.`,
      translation: `O Allah, protect me from Your punishment on the day You resurrect Your servants.`,
      sources: ['Abū Dāwūd 5045'],
      repetitions: 3,
    },
    {
      arabic: `اَلْحَمْدُ للهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا ، وَكَفَانَا ، وَآوَانَا ، فَكَمْ مِّمَّنْ لَا كَافِيَ لَهُ وَلَا مُؤْوِيَ`,
      transliteration: `Al-ḥamdu lillāhi alladhī aṭ'amanā wa saqānā, wa kafānā, wa āwānā, fa-kam mimman lā kāfiya lahū wa lā mu'wiya.`,
      translation: `All praise is for Allah, Who provided us food and drink and Who sufficed us and has sheltered us; for how many have none to suffice them or shelter them.`,
      sources: ['Muslim 2715'],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ ، فَاطِرَ السَّمٰوَاتِ وَالْأَرْضِ رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ ، أَشْهَدُ أَنْ لَّا إِلٰهَ إِلَّا أَنْتَ ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ ، وَأَنْ أَقْتَرِفَ عَلَىٰ نَفْسِيْ سُوْءًا ، أَوْ أَجُرَّهُ إِلَىٰ مُسْلِمٍ`,
      transliteration: `Allāhumma 'ālima al-ghaybi wa ash-shahādah, fāṭira as-samāwāti wa al-arḍ, rabba kulli shay'in wa malīkah, ashhadu an lā ilāha illā ant, a'ūdhu bika min sharri nafsī, wa min sharri ash-shayṭāni wa shirkih, wa an aqtarifa 'alā nafsī sū'an, aw ajurrahū ilā muslim.`,
      translation: `O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of everything; I bear witness that there is no god but You. I seek Your protection from the evil of my own self, from the evil of Shaytān and from the evil of polytheism to which he calls, and from inflicting evil on myself, or bringing it upon a Muslim.`,
      sources: ['Tirmidhī 3392'],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ رَبَّ السَّمٰوَاتِ وَرَبَّ الْعَرْشِ الْعَظِيْمِ ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ ، فَالِقَ الْحَبِّ وَالنَّوَىٰ ، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيْلِ وَالْفُرْقَانِ ، أَعُوْذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ ، اَللّٰهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُوْنَكَ شَيْءٌ ، اِقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ`,
      transliteration: `Allāhumma rabba as-samāwāti wa rabba al-'arshi al-'aẓīm, rabbanā wa rabba kulli shay', fāliqa al-ḥabbi wa an-nawā, wa munzila at-tawrāti wa al-injīli wa al-furqān, a'ūdhu bika min sharri kulli shay'in anta ākhidhun bi-nāṣiyatih, Allāhumma anta al-awwalu fa-laysa qablaka shay', wa anta al-ākhiru fa-laysa ba'daka shay', wa anta aẓ-ẓāhiru fa-laysa fawqaka shay', wa anta al-bāṭinu fa-laysa dūnaka shay', iqḍi 'annā ad-dayna wa aghninā mina al-faqr.`,
      translation: `O Allah, Lord of the heavens, Lord of the Magnificent Throne, our Lord and Lord of all things, Splitter of the seed and the date stone, Revealer of the Torah, the Bible and the Criterion (Qur'ān); I seek Your protection from the evil of every thing You hold by the forehead. You are the First and there is nothing before You. You are the Last and there is nothing after You. You are the Most High and there is nothing above You. You are the Most Near and nothing is closer than You; settle our debts for us and spare us from poverty.`,
      sources: ['Muslim 2713'],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ إِنَّكَ خَلَقْتَ نَفْسِيْ وَأَنْتَ تَوَفَّاهَا ، لَكَ مَمَاتُهَا وَمَحْيَاهَا ، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا ، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ الْعَافِيَة`,
      transliteration: `Allāhumma innaka khalaqta nafsī wa anta tawaffāhā, laka mamātuhā wa maḥyāhā, in aḥyaytahā fa-ḥfaẓhā, wa in amattahā fa-ghfir lahā, Allāhumma innī as'aluka al-'āfiyah.`,
      translation: `O Allah, verily You have created my soul and You shall take its life. To You Alone belongs its life and death. If You keep my soul alive then protect it, and if You take it away, then forgive it. O Allah, I ask You to grant me well-being.`,
      sources: ['Aḥmad 5502'],
      repetitions: 1,
    },
    {
      arabic: `بِسْمِ اللهِ وَضَعْتُ جَنْبِيْ ، اَللّٰهُمَّ اغْفِرْ لِيْ ذَنْبِيْ ، وَأَخْسِئْ شَيْطَانِيْ ، وَفُكَّ رِهَانِيْ ، وَاجْعَلْنِيْ فِي النَّدِيِّ الْأَعْلَىٰ`,
      transliteration: `Bismillāhi waḍa'tu janbī, Allāhumma ghfir lī dhanbī, wa akhsi' shayṭānī, wa fukka rihānī, wa j'alnī fī an-nadiyyi al-a'lā.`,
      translation: `In the Name of Allah, I lie down. O Allah, forgive my sins, ward off from me my shaytān, free me from my obligations (to others) and enter me into the loftiest assembly (of angels).`,
      sources: ['Abū Dāwūd 5054'],
      repetitions: 1,
    },
    {
      arabic: `اَلْحَمْدُ للهِ الَّذِيْ كَفَانِيْ وَآوَانِيْ ، اَلْحَمْدُ للهِ الَّذِيْ أَطْعَمَنِيْ وَسَقَانِيْ ، اَلْحَمْدُ للهِ الَّذِيْ مَنَّ عَلَيَّ فَأَفْضَلَ ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ بِعِزَّتِكَ أَنْ تُنَجِّيَنِيْ مِنَ النَّارِ`,
      transliteration: `Al-ḥamdu lillāhi alladhī kafānī wa āwānī, Al-ḥamdu lillāhi alladhī aṭ'amanī wa saqānī, Al-ḥamdu lillāhi alladhī manna 'alayya fa-afḍal, Allāhumma innī as'aluka bi-'izzatika an tunajjiyanī mina an-nār.`,
      translation: `All praise is for Allah Who has sufficed me and given me refuge. All praise is for Allah Who has fed me and given me drink. All praise is for Allah Who has been gracious to me and showered favours on me. O Allah, I ask You by Your Glory, save me from the Hell-Fire.`,
      sources: ['Hākim 2001'],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ بِاسْمِكَ أَمُوْتُ وَأَحْيَا`,
      transliteration: `Allāhumma bismika amūtu wa aḥyā.`,
      translation: `O Allah, solely in Your Name I die and I live.`,
      sources: ['Bukhārī 6325'],
      repetitions: 1,
    },
    {
      arabic: `لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ ، سُبْحَانَ اللهِ وَالْحَمْدُ للهِ وَلَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ`,
      transliteration: `Lā ilāha illā Allāhu waḥdahū lā sharīka lah, lahu al-mulku wa lahu al-ḥamd, wa huwa 'alā kulli shay'in qadīr, wa lā ḥawla wa lā quwwata illā billāh, subḥāna Allāh wa al-ḥamdu lillāh wa lā ilāha illā Allāh wa Allāhu akbar.`,
      translation: `There is no god but Allah. He is Alone and He has no partner whatsoever. To Him Alone belong all sovereignty and all praise. He is over all things All-Powerful. There is no power (in averting evil) or strength (in attaining good) except through Allah. Allah is free from imperfection, and all praise is for Allah. There is no god but Allah and Allah is the Greatest.`,
      sources: ["Nasā'ī"],
      repetitions: 1,
    },
    {
      arabic: `اَللّٰهُمَّ أَسْلَمْتُ نَفْسِيْ إِلَيْكَ ، وَفَوَّضْتُ أَمْرِيْ إِلَيْكَ ، وَوَجَّهْتُ وَجْهِيْ إِلَيْكَ ، وَأَلْجَاْتُ ظَهْرِيْ إِلَيْكَ ، رَغْبَةً وَرَهْبَةً إِلَيْكَ ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ ، آمَنْتُ بِكِتَابِكَ الَّذِيْ أَنْزَلْتَ وَبِنَبِيِّكَ الَّذِيْ أَرْسَلْتَ`,
      transliteration: `Allāhumma aslamtu nafsī ilayk, wa fawwaḍtu amrī ilayk, wa wajjahtu wajhī ilayk, wa alja'tu ẓahrī ilayk, raghbatan wa rahbatan ilayk, lā malja'a wa lā manjā minka illā ilayk, āmantu bi-kitābika alladhī anzalta wa bi-nabiyyika alladhī arsalt.`,
      translation: `O Allah, I submit my soul unto You, and I entrust my affair unto You, and I turn my face towards You, and I totally rely on You, in hope and fear of You. Verily there is no refuge or safe haven from You except with You. I believe in Your Book which You have revealed and in Your Prophet whom You have sent.`,
      sources: ['Bukhārī 6313', 'Bukhārī 247'],
      repetitions: 1,
    },
    {
      arabic: `
1. Surah Al-Mulk (67)

2. Surah As-Sajdah (32)

3. Surah Al-Isra (17)

4. Surah Az-Zumar (39)`,
      transliteration: ``,
      translation: `Recommended Surahs to recite before sleep`,
      sources: [],
      repetitions: 0,
      isInfoCard: true,
    },
  ];

  currentIndex = 0;
  transliterationExpanded: { [key: number]: boolean } = {};
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

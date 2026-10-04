(function() {
    // 4-Language Translation Dictionaries
    const I18N = {
      en: {
        backLink: "← Back to Tools",
        badgePill: "100% Client-Side • Real-Time Ticking Engine • Zero Server Logs",
        toolTitle: "Age & Milestone Calculator",
        toolSubtitle: "Compute your exact chronological age in years, months, days, and seconds with real-time ticking counters, upcoming birthday countdowns, and fun life statistics.",
        birthDetailsTitle: "Birthdate Details",
        birthDateLabel: "Date of Birth",
        birthTimeLabel: "Birth Time (Optional)",
        customTargetDateLabel: "Calculate Age at Specific Date?",
        targetDateLabel: "Target Comparison Date",
        btnTargetNow: "Use Current Time (Live)",
        exactAgeLabel: "Exact Chronological Age",
        nextBdayTitle: "Upcoming Birthday Countdown",
        unitDays: "Days",
        unitHours: "Hours",
        unitMinutes: "Mins",
        unitSeconds: "Secs",
        lifeMetricsTitle: "Life Journey & Biological Estimates",
        metricDaysLived: "Total Days",
        metricDaysSub: "Days on Earth",
        metricHoursLived: "Total Hours",
        metricHoursSub: "Elapsed hours",
        metricHeartbeats: "Heartbeats",
        metricHeartbeatsSub: "~80 beats/min",
        metricBreaths: "Breaths Taken",
        metricBreathsSub: "~16 breaths/min",
        metricSleep: "Hours Asleep",
        metricSleepSub: "~8 hrs/day",
        metricZodiac: "Astrology",
        milestonesTitle: "Unique Life Milestones",
        ms10k: "10,000th Day of Life (~27.4 yrs)",
        ms20k: "20,000th Day of Life (~54.7 yrs)",
        ms1Billion: "1,000,000,000 Seconds (~31.7 yrs)",
        msHalfBday: "Next Half-Birthday (+6 Months)",
        tagReached: "Completed",
        tagUpcoming: "Upcoming",
        btnCopySummary: "Copy Age Summary",
        btnPrint: "Print / Save PDF",
        btnReset: "Reset",
        copiedToast: "Copied to clipboard!",
        eduTitle: "Understanding Chronological Age & Milestones",
        eduSub: "How calendar variations, leap years, and client-side calculations work together.",
        guide1Title: "Chronological vs. Approximate Age",
        guide1Desc: "Dividing elapsed days by 365 or 365.25 creates date drift due to varying month lengths (28, 29, 30, and 31 days) and quadrennial leap years. Our engine resolves exact calendar month boundaries to guarantee legal documentation accuracy.",
        guide2Title: "The Significance of Life Day Milestones",
        guide2Desc: "While annual birthdays are cultural, metric milestones like 10,000 days (~27.4 years) or 1 billion seconds (~31.7 years) provide fascinating quantitative markers of human longevity and personal development.",
        guide3Title: "Zero Telemetry & PII Privacy",
        guide3Desc: "Your date of birth is sensitive Personally Identifiable Information (PII) frequently exploited in security questions. VantorKit processes all dates exclusively in client-side memory, never transmitting or saving personal data.",
        faq1Q: "Why does entering birth time change the countdown?",
        faq1A: "By specifying your exact time of birth (e.g. 08:30 AM), the calculator factors in precise elapsed hours and minutes, offering second-level precision for live ticking counters.",
        faq2Q: "What if I was born on a Leap Day (February 29th)?",
        faq2A: "The engine properly accounts for February 29th. In non-leap years, your upcoming birthday countdown accurately targets March 1st (common law convention) or February 28th based on standard calendar alignment.",
        faq3Q: "How are heartbeats and breaths estimated?",
        faq3A: "Calculations are based on standard clinical baseline averages: 80 heartbeats per minute and 16 breaths per minute for healthy resting adults, multiplied across your total lived minutes.",
        faq4Q: "Can I calculate age for a past or future date?",
        faq4A: "Yes! Click 'Calculate Age at Specific Date?' in the input panel to see your exact age at historical events, graduation dates, or future retirement milestones."
      },
      ar: {
        backLink: "الرجوع إلى الأدوات ←",
        badgePill: "100% داخل المتصفح • عداد حي بالثواني • لا سجلات سحابية",
        toolTitle: "حاسبة العمر والمحطات الحياتية",
        toolSubtitle: "احسب عمرك الدقيق بالسنين والأشهر والأيام والثواني لحظياً مع عداد حي، وعد تنازلي ليوم ميلادك القادم، وإحصائيات بيولوجية ممتعة.",
        birthDetailsTitle: "تفاصيل تاريخ الميلاد",
        birthDateLabel: "تاريخ الميلاد",
        birthTimeLabel: "وقت الميلاد (اختياري)",
        customTargetDateLabel: "حساب العمر في تاريخ محدد؟",
        targetDateLabel: "تاريخ المقارنة المستهدف",
        btnTargetNow: "الوقت الحالي (حي)",
        exactAgeLabel: "العمر الزمني الدقيق",
        nextBdayTitle: "العد التنازلي ليوم ميلادك القادم",
        unitDays: "يوم",
        unitHours: "ساعة",
        unitMinutes: "دقيقة",
        unitSeconds: "ثانية",
        lifeMetricsTitle: "محطات الرحلة الحياتية والتقديرات الحيوية",
        metricDaysLived: "إجمالي الأيام",
        metricDaysSub: "يوماً على الأرض",
        metricHoursLived: "إجمالي الساعات",
        metricHoursSub: "ساعة منقضية",
        metricHeartbeats: "نبضات القلب",
        metricHeartbeatsSub: "~80 نبضة/دقيقة",
        metricBreaths: "الأنفاس المأخوذة",
        metricBreathsSub: "~16 نفساً/دقيقة",
        metricSleep: "ساعات النوم",
        metricSleepSub: "~8 ساعات/يوم",
        metricZodiac: "الأبراج والفلك",
        milestonesTitle: "محطات حياة استثنائية",
        ms10k: "اليوم الـ 10,000 من حياتك (~27.4 سنة)",
        ms20k: "اليوم الـ 20,000 من حياتك (~54.7 سنة)",
        ms1Billion: "1,000,000,000 ثانية (~31.7 سنة)",
        msHalfBday: "نصف عيد الميلاد القادم (+6 أشهر)",
        tagReached: "تم الوصول",
        tagUpcoming: "قادم",
        btnCopySummary: "نسخ ملخص العمر",
        btnPrint: "طباعة / حفظ PDF",
        btnReset: "إعادة ضبط",
        copiedToast: "تم النسخ إلى الحافظة بنجاح!",
        eduTitle: "فهم حساب العمر الزمني والمحطات",
        eduSub: "كيف تعمل الفروق التقويمية والسنوات الكبيسة والحسابات المحلية معاً.",
        guide1Title: "العمر الزمني الحقيقي مقابل التقريبي",
        guide1Desc: "قسمة الأيام على 365 أو 365.25 تسبب انحرافاً بسبب تباين أطوال الشهور (28، 29، 30، 31 يوماً) والسنوات الكبيسة. يعتمد نظامنا حدود الشهور التقويمية الدقيقة لضمان صحة الوثائق الرسمية.",
        guide2Title: "أهمية محطات الأيام الحياتية",
        guide2Desc: "بينما تعد أعياد الميلاد السنوية تقليداً، فإن بلوغ اليوم الـ 10,000 (~27.4 سنة) أو المليار ثانية (~31.7 سنة) يعطي مقياساً رقمياً فريداً لتطور الإنسان وإنجازاته.",
        guide3Title: "حماية الخصوصية وتشفير البيانات محلياً",
        guide3Desc: "يعد تاريخ الميلاد معلومة حساسة يتم استغلالها غالباً في أسئلة الأمان. يعالج VantorKit كافة الحسابات في ذاكرة المتصفح فقط دون حفظ أو نقل أي بيانات عبر الإنترنت.",
        faq1Q: "لماذا يغير إدخال وقت الميلاد العد التنازلي؟",
        faq1A: "تحديد وقت ميلادك بدقة (مثل 08:30 صباحاً) يتيح للحاسبة احتساب الساعات والدقائق المنقضية بدقة على مستوى الثانية للعداد الحي.",
        faq2Q: "ماذا لو وُلدت في يوم كبيس (29 فبراير)؟",
        faq2A: "يتعامل النظام بدقة مع 29 فبراير، وفي السنوات العادية يستهدف العد التنازلي 1 مارس (حسب الأعراف القانونية) بدقة تامة.",
        faq3Q: "كيف يتم تقدير نبضات القلب والأنفاس؟",
        faq3A: "تعتمد التقديرات على المعدلات الحيوية الطبيعية لشخص بالغ في حالة راحة: 80 نبضة/دقيقة و 16 نفساً/دقيقة مضروبة في إجمالي الدقائق المعاشة.",
        faq4Q: "هل يمكنني حساب عمري في تاريخ ماضٍ أو مستقبلي؟",
        faq4A: "نعم! انقر على 'حساب العمر في تاريخ محدد؟' في لوحة الإدخال لمعرفة عمرك عند التخرج أو التقاعد أو أي مناسبة أخرى."
      },
      fr: {
        backLink: "← Retour aux outils",
        badgePill: "100% Côté Client • Horloge en Temps Réel • Zéro Télémétrie",
        toolTitle: "Calculateur d'Âge & Jalons de Vie",
        toolSubtitle: "Calculez votre âge chronologique exact en années, mois, jours et secondes avec un compteur dynamique, le décompte de votre anniversaire et des statistiques de vie amusantes.",
        birthDetailsTitle: "Date et Heure de Naissance",
        birthDateLabel: "Date de naissance",
        birthTimeLabel: "Heure de naissance (optionnel)",
        customTargetDateLabel: "Calculer l'âge à une date spécifique ?",
        targetDateLabel: "Date cible de comparaison",
        btnTargetNow: "Heure actuelle (en direct)",
        exactAgeLabel: "Âge Chronologique Exact",
        nextBdayTitle: "Compte à Rebours du Prochain Anniversaire",
        unitDays: "Jours",
        unitHours: "Heures",
        unitMinutes: "Mins",
        unitSeconds: "Secs",
        lifeMetricsTitle: "Parcours de Vie & Estimations Biologiques",
        metricDaysLived: "Total Jours",
        metricDaysSub: "Jours sur Terre",
        metricHoursLived: "Total Heures",
        metricHoursSub: "Heures vécues",
        metricHeartbeats: "Battements de Cœur",
        metricHeartbeatsSub: "~80 bpm",
        metricBreaths: "Respirations",
        metricBreathsSub: "~16 resp/min",
        metricSleep: "Heures de Sommeil",
        metricSleepSub: "~8 h/jour",
        metricZodiac: "Astrologie",
        milestonesTitle: "Jalons de Vie Remarquables",
        ms10k: "10 000e Jour de Vie (~27,4 ans)",
        ms20k: "20 000e Jour de Vie (~54,7 ans)",
        ms1Billion: "1 000 000 000 Secondes (~31,7 ans)",
        msHalfBday: "Prochain Demi-Anniversaire (+6 mois)",
        tagReached: "Atteint",
        tagUpcoming: "À venir",
        btnCopySummary: "Copier le résumé d'âge",
        btnPrint: "Imprimer / Sauvegarder PDF",
        btnReset: "Réinitialiser",
        copiedToast: "Copié dans le presse-papiers !",
        eduTitle: "Comprendre l'Âge Chronologique & les Jalons",
        eduSub: "Comment s'articulent les variations de calendrier, les années bissextiles et le calcul local.",
        guide1Title: "Âge Chronologique vs Approximatif",
        guide1Desc: "Diviser par 365 crée un décalage en raison des mois inégaux (28 à 31 jours) et des années bissextiles. Notre calculateur utilise les limites réelles du calendrier pour une exactitude juridique parfaite.",
        guide2Title: "La Portée des Jalons Quantitatifs",
        guide2Desc: "Franchir son 10 000e jour de vie (~27,4 ans) ou son milliardième de seconde constitue un repère mathématique fascinant marquant le temps écoulé.",
        guide3Title: "Zéro Télémétrie & Protection des Données (PII)",
        guide3Desc: "Votre date de naissance est une donnée sensible. VantorKit exécute l'intégralité des calculs en mémoire locale dans votre navigateur, sans aucun enregistrement ni transfert distant.",
        faq1Q: "Pourquoi indiquer l'heure de naissance ?",
        faq1A: "L'heure de naissance permet d'intégrer les heures et minutes réelles pour animer le compteur à la seconde près en temps réel.",
        faq2Q: "Que se passe-t-il si je suis né un 29 février ?",
        faq2A: "Les années non bissextiles, le décompte cible le 1er mars conformément aux normes civiles et administratives.",
        faq3Q: "Comment sont estimés les battements et respirations ?",
        faq3A: "Les estimations reposent sur des moyennes physiologiques au repos : 80 battements/minute et 16 respirations/minute multipliés par votre temps de vie.",
        faq4Q: "Puis-je calculer mon âge à une date passée ou future ?",
        faq4A: "Oui ! Déroulez 'Calculer l'âge à une date spécifique ?' pour connaître votre âge lors d'un événement marquant ou lors de votre retraite."
      },
      it: {
        backLink: "← Torna agli strumenti",
        badgePill: "100% Lato Client • Orologio in Tempo Reale • Zero Log su Server",
        toolTitle: "Calcolatore Età & Traguardi di Vita",
        toolSubtitle: "Calcola la tua età cronologica esatta in anni, mesi, giorni e secondi con un contatore in tempo reale, il conto alla rovescia del compleanno e statistiche biologiche.",
        birthDetailsTitle: "Dettagli di Nascita",
        birthDateLabel: "Data di nascita",
        birthTimeLabel: "Ora di nascita (opzionale)",
        customTargetDateLabel: "Calcolare l'età a una data specifica?",
        targetDateLabel: "Data di confronto",
        btnTargetNow: "Ora attuale (in tempo reale)",
        exactAgeLabel: "Età Cronologica Esatta",
        nextBdayTitle: "Conto alla Rovescia Prossimo Compleanno",
        unitDays: "Giorni",
        unitHours: "Ore",
        unitMinutes: "Min",
        unitSeconds: "Sec",
        lifeMetricsTitle: "Traguardi di Vita & Stime Biologiche",
        metricDaysLived: "Giorni Totali",
        metricDaysSub: "Giorni sulla Terra",
        metricHoursLived: "Ore Totali",
        metricHoursSub: "Ore trascorse",
        metricHeartbeats: "Battiti Cardiaci",
        metricHeartbeatsSub: "~80 bpm",
        metricBreaths: "Respiri Fatti",
        metricBreathsSub: "~16 resp/min",
        metricSleep: "Ore di Sonno",
        metricSleepSub: "~8 ore/giorno",
        metricZodiac: "Astrologia",
        milestonesTitle: "Traguardi di Vita Significativi",
        ms10k: "10.000° Giorno di Vita (~27,4 anni)",
        ms20k: "20.000° Giorno di Vita (~54,7 anni)",
        ms1Billion: "1.000.000.000 di Secondi (~31,7 anni)",
        msHalfBday: "Prossimo Mezzo Compleanno (+6 mesi)",
        tagReached: "Raggiunto",
        tagUpcoming: "In arrivo",
        btnCopySummary: "Copia riepilogo età",
        btnPrint: "Stampa / Salva PDF",
        btnReset: "Reimposta",
        copiedToast: "Copiato negli appunti!",
        eduTitle: "Comprendere l'Età Cronologica & i Traguardi",
        eduSub: "Come si combinano le variazioni del calendario, gli anni bisestili e l'elaborazione locale.",
        guide1Title: "Età Cronologica vs Approssimativa",
        guide1Desc: "Dividere i giorni per 365 crea discrepanze a causa dei mesi irregolari (28-31 giorni) e degli anni bisestili. Il nostro algoritmo rispetta i confini mensili esatti.",
        guide2Title: "Il Valore dei Traguardi Quantitativi",
        guide2Desc: "Raggiungere il 10.000° giorno di vita o il miliardesimo di secondo offre una prospettiva affascinante sul tempo vissuto e sullo sviluppo personale.",
        guide3Title: "Zero Telemetria & Privacy Dati (PII)",
        guide3Desc: "La data di nascita è un dato personale sensibile. VantorKit elabora tutti i calcoli nella memoria del tuo browser senza inviare dati su server.",
        faq1Q: "Perché inserire l'ora di nascita?",
        faq1A: "Specificare l'ora consente di includere ore e minuti precisi per animare il contatore al secondo in tempo reale.",
        faq2Q: "Cosa succede se sono nato il 29 febbraio?",
        faq2A: "Negli anni non bisestili, il calcolo punta correttamente al 1° marzo secondo le consuetudini legali.",
        faq3Q: "Come vengono stimati i battiti e i respiri?",
        faq3A: "Le stime usano valori medi a riposo: 80 battiti al minuto e 16 respiri al minuto moltiplicati per i minuti totali vissuti.",
        faq4Q: "Posso calcolare l'età a una data passata o futura?",
        faq4A: "Sì! Espandi 'Calcolare l'età a una data specifica?' per visualizzare la tua età esatta alla laurea, alle nozze o al pensionamento."
      }
    };

    // State Variables
    let activeLang = 'en';
    let isLiveTimer = true;
    let timerInterval = null;

    // DOM Elements
    const birthDateInput = document.getElementById('birthDate');
    const birthTimeInput = document.getElementById('birthTime');
    const btnToggleCustomDate = document.getElementById('btnToggleCustomDate');
    const customDateContent = document.getElementById('customDateContent');
    const targetDateInput = document.getElementById('targetDate');
    const btnTargetNow = document.getElementById('btnTargetNow');
    const arrowToggle = document.getElementById('arrowToggle');

    const resExactAgeYears = document.getElementById('resExactAgeYears');
    const resExactAgeTicking = document.getElementById('resExactAgeTicking');
    const resBirthWeekday = document.getElementById('resBirthWeekday');
    const resTurningAge = document.getElementById('resTurningAge');
    const resCountDays = document.getElementById('resCountDays');
    const resCountHours = document.getElementById('resCountHours');
    const resCountMins = document.getElementById('resCountMins');
    const resCountSecs = document.getElementById('resCountSecs');
    const resNextBdayDate = document.getElementById('resNextBdayDate');

    const metricTotalDays = document.getElementById('metricTotalDays');
    const metricTotalHours = document.getElementById('metricTotalHours');
    const metricHeartbeats = document.getElementById('metricHeartbeats');
    const metricBreaths = document.getElementById('metricBreaths');
    const metricSleep = document.getElementById('metricSleep');
    const zodiacIcon = document.getElementById('zodiacIcon');
    const metricZodiacWestern = document.getElementById('metricZodiacWestern');
    const metricZodiacChinese = document.getElementById('metricZodiacChinese');

    const msDate10k = document.getElementById('msDate10k');
    const msTag10k = document.getElementById('msTag10k');
    const msDate20k = document.getElementById('msDate20k');
    const msTag20k = document.getElementById('msTag20k');
    const msDate1Billion = document.getElementById('msDate1Billion');
    const msTag1Billion = document.getElementById('msTag1Billion');
    const msDateHalfBday = document.getElementById('msDateHalfBday');

    const btnCopySummary = document.getElementById('btnCopySummary');
    const copySummaryText = document.getElementById('copySummaryText');
    const btnPrintCard = document.getElementById('btnPrintCard');
    const btnResetTool = document.getElementById('btnResetTool');
    const toastBox = document.getElementById('toastBox');
    const toastMessage = document.getElementById('toastMessage');

    // Toast Notification Utility
    let toastTimer = null;
    function showToast(msg) {
      if (toastTimer) clearTimeout(toastTimer);
      toastMessage.textContent = msg;
      toastBox.classList.add('show');
      toastTimer = setTimeout(() => {
        toastBox.classList.remove('show');
      }, 2500);
    }

    // Zodiac Definitions
    function getWesternZodiac(month, day) {
      const signs = [
        { name: 'Capricorn', symbol: '♑', endMonth: 1, endDay: 19 },
        { name: 'Aquarius', symbol: '♒', endMonth: 2, endDay: 18 },
        { name: 'Pisces', symbol: '♓', endMonth: 3, endDay: 20 },
        { name: 'Aries', symbol: '♈', endMonth: 4, endDay: 19 },
        { name: 'Taurus', symbol: '♉', endMonth: 5, endDay: 20 },
        { name: 'Gemini', symbol: '♊', endMonth: 6, endDay: 20 },
        { name: 'Cancer', symbol: '♋', endMonth: 7, endDay: 22 },
        { name: 'Leo', symbol: '♌', endMonth: 8, endDay: 22 },
        { name: 'Virgo', symbol: '♍', endMonth: 9, endDay: 22 },
        { name: 'Libra', symbol: '♎', endMonth: 10, endDay: 22 },
        { name: 'Scorpio', symbol: '♏', endMonth: 11, endDay: 21 },
        { name: 'Sagittarius', symbol: '♐', endMonth: 12, endDay: 21 },
        { name: 'Capricorn', symbol: '♑', endMonth: 12, endDay: 31 }
      ];
      for (const s of signs) {
        if (month < s.endMonth || (month === s.endMonth && day <= s.endDay)) {
          return s;
        }
      }
      return signs[0];
    }

    const CHINESE_ANIMALS = {
      en: ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
      ar: ['الفأر', 'الثور', 'النمر', 'الأرنب', 'التنين', 'الأفعى', 'الحصان', 'الخروف', 'القرد', 'الديك', 'الكلب', 'الخنزير'],
      fr: ['Rat', 'Buffle', 'Tigre', 'Lapin', 'Dragon', 'Serpent', 'Cheval', 'Chèvre', 'Singe', 'Coq', 'Chien', 'Cochon'],
      it: ['Topo', 'Bufalo', 'Tigre', 'Coniglio', 'Drago', 'Serpente', 'Cavallo', 'Capra', 'Scimmia', 'Gallo', 'Cane', 'Maiale']
    };

    function getChineseZodiac(year, lang) {
      const idx = ((year - 4) % 12 + 12) % 12;
      const list = CHINESE_ANIMALS[lang] || CHINESE_ANIMALS.en;
      return list[idx];
    }

    function formatFullDateLocalized(d, lang) {
      if (!d) return '';
      const loc = lang === 'ar' ? 'ar-SA' : (lang === 'fr' ? 'fr-FR' : (lang === 'it' ? 'it-IT' : 'en-US'));
      return new Intl.DateTimeFormat(loc, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(d);
    }

    function formatShortDate(d) {
      if (!d) return '';
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    }

    // Core Calculation Logic
    function recalculate() {
      if (!birthDateInput.value) return;

      const [bY, bM, bD] = birthDateInput.value.split('-').map(Number);
      const timeVal = birthTimeInput.value || "00:00";
      const [bHour, bMin] = timeVal.split(':').map(Number);

      const birthDate = new Date(bY, bM - 1, bD, bHour || 0, bMin || 0, 0);

      // Comparison Target Date
      let targetDate;
      if (!isLiveTimer && targetDateInput.value) {
        const [tY, tM, tD] = targetDateInput.value.split('-').map(Number);
        targetDate = new Date(tY, tM - 1, tD, 23, 59, 59);
      } else {
        targetDate = new Date();
      }

      if (birthDate > targetDate) {
        resExactAgeYears.textContent = "Birthdate is in the future!";
        resExactAgeTicking.textContent = "Please pick a date in the past";
        return;
      }

      // Exact Age [Years, Months, Days, Hours, Minutes, Seconds]
      let years = targetDate.getFullYear() - birthDate.getFullYear();
      let months = targetDate.getMonth() - birthDate.getMonth();
      let days = targetDate.getDate() - birthDate.getDate();
      let hours = targetDate.getHours() - birthDate.getHours();
      let minutes = targetDate.getMinutes() - birthDate.getMinutes();
      let seconds = targetDate.getSeconds() - birthDate.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        months--;
        const prevMonthLast = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
        days += prevMonthLast.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      // Update Exact Age Display
      if (activeLang === 'ar') {
        resExactAgeYears.textContent = `${years} سنة، ${months} شهر، ${days} يوم`;
        resExactAgeTicking.textContent = `${hours} ساعة، ${minutes} دقيقة، ${seconds} ثانية`;
        resBirthWeekday.textContent = `وُلدت يوم ${new Intl.DateTimeFormat('ar-SA', { weekday: 'long' }).format(birthDate)}`;
      } else if (activeLang === 'fr') {
        resExactAgeYears.textContent = `${years} ans, ${months} mois, ${days} jours`;
        resExactAgeTicking.textContent = `${hours} heures, ${minutes} minutes, ${seconds} secondes`;
        resBirthWeekday.textContent = `Né(e) un ${new Intl.DateTimeFormat('fr-FR', { weekday: 'long' }).format(birthDate)}`;
      } else if (activeLang === 'it') {
        resExactAgeYears.textContent = `${years} anni, ${months} mesi, ${days} giorni`;
        resExactAgeTicking.textContent = `${hours} ore, ${minutes} minuti, ${seconds} secondi`;
        resBirthWeekday.textContent = `Nato/a di ${new Intl.DateTimeFormat('it-IT', { weekday: 'long' }).format(birthDate)}`;
      } else {
        resExactAgeYears.textContent = `${years} Year${years === 1 ? '' : 's'}, ${months} Month${months === 1 ? '' : 's'}, ${days} Day${days === 1 ? '' : 's'}`;
        resExactAgeTicking.textContent = `${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
        resBirthWeekday.textContent = `Born on a ${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(birthDate)}`;
      }

      // Next Birthday Countdown
      let nextBday = new Date(targetDate.getFullYear(), birthDate.getMonth(), birthDate.getDate(), birthDate.getHours(), birthDate.getMinutes(), 0);
      if (nextBday <= targetDate) {
        nextBday.setFullYear(targetDate.getFullYear() + 1);
      }
      const diffMs = nextBday - targetDate;
      const countDays = Math.floor(diffMs / 86400000);
      const countHours = Math.floor((diffMs % 86400000) / 3600000);
      const countMins = Math.floor((diffMs % 3600000) / 60000);
      const countSecs = Math.floor((diffMs % 60000) / 1000);

      resCountDays.textContent = String(countDays).padStart(2, '0');
      resCountHours.textContent = String(countHours).padStart(2, '0');
      resCountMins.textContent = String(countMins).padStart(2, '0');
      resCountSecs.textContent = String(countSecs).padStart(2, '0');

      const turning = years + 1;
      if (activeLang === 'ar') {
        resTurningAge.textContent = `تبلغ ${turning} عاماً`;
        resNextBdayDate.textContent = `يوافق عيد الميلاد القادم: ${formatFullDateLocalized(nextBday, activeLang)}`;
      } else if (activeLang === 'fr') {
        resTurningAge.textContent = `${turning} ans bientôt`;
        resNextBdayDate.textContent = `Le prochain anniversaire tombe un ${formatFullDateLocalized(nextBday, activeLang)}`;
      } else if (activeLang === 'it') {
        resTurningAge.textContent = `Compirai ${turning} anni`;
        resNextBdayDate.textContent = `Il prossimo compleanno cadrà di ${formatFullDateLocalized(nextBday, activeLang)}`;
      } else {
        resTurningAge.textContent = `Turning ${turning}`;
        resNextBdayDate.textContent = `Next birthday falls on ${formatFullDateLocalized(nextBday, activeLang)}`;
      }

      // Totals & Fun Metrics
      const totalElapsedMs = targetDate - birthDate;
      const totalDays = Math.floor(totalElapsedMs / 86400000);
      const totalHours = Math.floor(totalElapsedMs / 3600000);
      const totalMinutes = Math.floor(totalElapsedMs / 60000);

      metricTotalDays.textContent = totalDays.toLocaleString();
      metricTotalHours.textContent = totalHours.toLocaleString();

      const estHeartbeats = Math.floor(totalMinutes * 80);
      metricHeartbeats.textContent = estHeartbeats > 1e9 ? `~${(estHeartbeats / 1e9).toFixed(2)}B` : `~${(estHeartbeats / 1e6).toFixed(1)}M`;

      const estBreaths = Math.floor(totalMinutes * 16);
      metricBreaths.textContent = estBreaths > 1e9 ? `~${(estBreaths / 1e9).toFixed(2)}B` : `~${(estBreaths / 1e6).toFixed(1)}M`;

      const estSleepHours = Math.floor(totalDays * 8);
      metricSleep.textContent = `${estSleepHours.toLocaleString()}h`;

      // Astrological Signs
      const westZodiac = getWesternZodiac(birthDate.getMonth() + 1, birthDate.getDate());
      const chinZodiac = getChineseZodiac(birthDate.getFullYear(), activeLang);
      zodiacIcon.textContent = westZodiac.symbol;
      metricZodiacWestern.textContent = westZodiac.name;
      metricZodiacChinese.textContent = activeLang === 'ar' ? `عام ${chinZodiac}` : (activeLang === 'fr' ? `Année du ${chinZodiac}` : (activeLang === 'it' ? `Anno del ${chinZodiac}` : `Year of the ${chinZodiac}`));

      // Milestones
      const day10kDate = new Date(birthDate.getTime() + 10000 * 86400000);
      const day20kDate = new Date(birthDate.getTime() + 20000 * 86400000);
      const sec1bDate = new Date(birthDate.getTime() + 1000000000 * 1000);

      // Half Birthday: +6 months from next birthday
      const halfBday = new Date(nextBday.getTime());
      halfBday.setMonth(halfBday.getMonth() - 6);
      if (halfBday <= targetDate) {
        halfBday.setFullYear(halfBday.getFullYear() + 1);
      }

      msDate10k.textContent = formatShortDate(day10kDate);
      msDate20k.textContent = formatShortDate(day20kDate);
      msDate1Billion.textContent = formatShortDate(sec1bDate);
      msDateHalfBday.textContent = formatShortDate(halfBday);

      const dict = I18N[activeLang] || I18N.en;

      if (targetDate >= day10kDate) {
        msTag10k.textContent = dict.tagReached;
        msTag10k.className = "milestone-status-tag past";
      } else {
        msTag10k.textContent = dict.tagUpcoming;
        msTag10k.className = "milestone-status-tag future";
      }

      if (targetDate >= day20kDate) {
        msTag20k.textContent = dict.tagReached;
        msTag20k.className = "milestone-status-tag past";
      } else {
        msTag20k.textContent = dict.tagUpcoming;
        msTag20k.className = "milestone-status-tag future";
      }

      if (targetDate >= sec1bDate) {
        msTag1Billion.textContent = dict.tagReached;
        msTag1Billion.className = "milestone-status-tag past";
      } else {
        msTag1Billion.textContent = dict.tagUpcoming;
        msTag1Billion.className = "milestone-status-tag future";
      }
    }

    // Set Default Initial Date (e.g. 25 years ago)
    function setInitialDefaults() {
      const now = new Date();
      const def = new Date(now.getFullYear() - 25, 4, 15, 8, 30);
      birthDateInput.value = formatShortDate(def);
      birthTimeInput.value = "08:30";
      recalculate();

      // Start live 1-second interval ticker
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        if (isLiveTimer) {
          recalculate();
        }
      }, 1000);
    }

    // Event Listeners
    birthDateInput.addEventListener('change', recalculate);
    birthDateInput.addEventListener('input', recalculate);
    birthTimeInput.addEventListener('change', recalculate);
    birthTimeInput.addEventListener('input', recalculate);

    // Collapsible Custom Target Date
    btnToggleCustomDate.addEventListener('click', () => {
      const isOpen = customDateContent.classList.contains('show');
      if (isOpen) {
        customDateContent.classList.remove('show');
        arrowToggle.style.transform = 'rotate(0deg)';
        isLiveTimer = true;
        recalculate();
      } else {
        customDateContent.classList.add('show');
        arrowToggle.style.transform = 'rotate(180deg)';
        if (!targetDateInput.value) {
          targetDateInput.value = formatShortDate(new Date());
        }
        isLiveTimer = false;
        recalculate();
      }
    });

    targetDateInput.addEventListener('change', () => {
      isLiveTimer = false;
      recalculate();
    });

    btnTargetNow.addEventListener('click', () => {
      targetDateInput.value = '';
      customDateContent.classList.remove('show');
      arrowToggle.style.transform = 'rotate(0deg)';
      isLiveTimer = true;
      recalculate();
    });

    // Quick Presets
    document.querySelectorAll('.btn-preset[data-years-ago]').forEach(btn => {
      btn.addEventListener('click', () => {
        const yAgo = parseInt(btn.getAttribute('data-years-ago'), 10);
        const now = new Date();
        const d = new Date(now.getFullYear() - yAgo, now.getMonth(), now.getDate());
        birthDateInput.value = formatShortDate(d);
        recalculate();
      });
    });

    document.querySelectorAll('.btn-preset[data-exact]').forEach(btn => {
      btn.addEventListener('click', () => {
        birthDateInput.value = btn.getAttribute('data-exact');
        recalculate();
      });
    });

    // Copy Summary Action
    btnCopySummary.addEventListener('click', () => {
      const summary = `VantorKit Age & Milestone Summary:
Exact Age: ${resExactAgeYears.textContent} (${resExactAgeTicking.textContent})
${resBirthWeekday.textContent}
Next Birthday: ${resTurningAge.textContent} in ${resCountDays.textContent}d ${resCountHours.textContent}h ${resCountMins.textContent}m
Total Days Lived: ${metricTotalDays.textContent} Days (${metricTotalHours.textContent} Hours)
Estimated Heartbeats: ${metricHeartbeats.textContent} | Breaths: ${metricBreaths.textContent}
Astrology: ${metricZodiacWestern.textContent} • ${metricZodiacChinese.textContent}
Calculated with VantorKit (https://vantorkit.com/tools/age-calculator.html)`;

      navigator.clipboard.writeText(summary).then(() => {
        btnCopySummary.classList.add('copied');
        copySummaryText.textContent = "✓ Copied!";
        showToast(I18N[activeLang]?.copiedToast || "Copied to clipboard!");
        setTimeout(() => {
          btnCopySummary.classList.remove('copied');
          copySummaryText.textContent = I18N[activeLang]?.btnCopySummary || "Copy Age Summary";
        }, 2000);
      });
    });

    // Print / Screenshot View
    btnPrintCard.addEventListener('click', () => {
      window.print();
    });

    // Reset Tool
    btnResetTool.addEventListener('click', () => {
      setInitialDefaults();
      showToast("Reset to defaults");
    });

    // i18n Translation Switcher
    function setLanguage(lang) {
      if (!I18N[lang]) lang = 'en';
      activeLang = lang;
      const dict = I18N[lang];

      // Update static elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      recalculate();
    }

    // Expose setLanguage globally for standardized dropdown sync
    window.setLanguage = setLanguage;

    // Initialize
    setInitialDefaults();
    const initialLang = localStorage.getItem('vantorkit_lang') || 'en';
    setLanguage(initialLang);

  })();

(function() {
    'use strict';

    const LANG_NAMES = {
      en: 'English',
      ar: 'العربية',
      fr: 'Français',
      it: 'Italiano'
    };

    const BACK_LABELS = {
      en: '← Back to Tools',
      ar: 'الرجوع إلى الأدوات ←',
      fr: '← Retour aux outils',
      it: '← Torna agli strumenti'
    };

    const SEO_META = {
    "en": {
        "title": "Age Calculator – Precise Birth Milestones & Stats",
        "desc": "Calculate your chronological age down to days, hours, and minutes with upcoming milestone countdowns. Birthdate figures evaluate privately in browser RAM."
    },
    "ar": {
        "title": "حاسبة العمر الدقيقة – إحصائيات الميلاد والمحطات",
        "desc": "احسب عمرك الزمني بالسنوات والأشهر والأيام والدقائق مع عداد للأعياد القادمة. يتم احتساب تاريخ ميلادك محلياً في متصفحك بسرية تامة دون تسجيله."
    },
    "fr": {
        "title": "Calculateur d'Âge Précis – Anniversaires et Jalons",
        "desc": "Calculez votre âge exact en années, mois et jours avec compte à rebours de vos jalons. Vos dates restent confidentielles dans votre navigateur."
    },
    "it": {
        "title": "Calcolatore Età Esatta – Giorni Vissuti e Compleanni",
        "desc": "Determina la tua età cronologica esatta in giorni, ore e minuti con i prossimi traguardi. Il calcolo si svolge nella RAM del tuo browser."
    }
};

    function updateActiveLanguageUI(lang) {
      if (!LANG_NAMES[lang]) lang = 'en';
      const isRtl = (lang === 'ar');

      // 1. Root lang & dir attributes
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      const htmlRoot = document.getElementById('htmlRoot');
      if (htmlRoot && htmlRoot !== document.documentElement) {
        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      }

      // 2. Active button label text
      const currentLangLabel = document.getElementById('currentLangLabel');
      if (currentLangLabel) {
        currentLangLabel.textContent = LANG_NAMES[lang];
      }

      // 3. Dropdown option active indicator
      document.querySelectorAll('.lang-option').forEach(opt => {
        const optLang = opt.getAttribute('data-lang');
        opt.classList.toggle('active', optLang === lang);
      });

      // 4. Back to Tools link localization
      const backSpan = document.querySelector('#backToHome [data-i18n="backLink"]');
      if (backSpan && BACK_LABELS[lang]) {
        backSpan.textContent = BACK_LABELS[lang];
      }

      // 5. SEO Content Layer language block visibility sync
      if (typeof SEO_META !== 'undefined' && SEO_META[lang]) {
        if (SEO_META[lang].title) {
          document.title = SEO_META[lang].title;
          const ogTitle = document.querySelector('meta[property="og:title"]');
          if (ogTitle) ogTitle.setAttribute('content', SEO_META[lang].title);
        }
        if (SEO_META[lang].desc) {
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute('content', SEO_META[lang].desc);
          const ogDesc = document.querySelector('meta[property="og:description"]');
          if (ogDesc) ogDesc.setAttribute('content', SEO_META[lang].desc);
        }
      }

      document.querySelectorAll('.tool-content-layer .lang-content-block').forEach(block => {
        block.style.display = (block.getAttribute('data-lang') === lang) ? 'block' : 'none';
      });
    }

    function initLangSwitcher() {
      const dropdown = document.getElementById('langDropdown');
      const oldBtn = document.getElementById('langToggleBtn');
      const oldMenu = document.getElementById('langMenu');
      if (!dropdown || !oldBtn || !oldMenu) return;

      // Clone button & menu to neutralize any competing or double-toggling event listeners
      const toggleBtn = oldBtn.cloneNode(true);
      oldBtn.parentNode.replaceChild(toggleBtn, oldBtn);

      const menu = oldMenu.cloneNode(true);
      oldMenu.parentNode.replaceChild(menu, oldMenu);

      function openMenu() {
        menu.classList.add('open', 'show');
        dropdown.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }

      function closeMenu() {
        menu.classList.remove('open', 'show');
        dropdown.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }

      function toggleMenu(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const isOpen = menu.classList.contains('open') || menu.classList.contains('show') || dropdown.classList.contains('active');
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      }

      // Authoritative toggle click listener
      toggleBtn.addEventListener('click', toggleMenu);

      // Authoritative language options click listener
      menu.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', function(e) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          const selectedLang = opt.getAttribute('data-lang');
          if (selectedLang && LANG_NAMES[selectedLang]) {
            try {
              localStorage.setItem('vantorkit_lang', selectedLang);
            } catch (err) {}

            updateActiveLanguageUI(selectedLang);

            // Call tool translation engine if defined
            if (typeof window.setLanguage === 'function') {
              try { window.setLanguage(selectedLang); } catch (err) { console.warn(err); }
            } else if (typeof window.applyLanguage === 'function') {
              try { window.applyLanguage(selectedLang); } catch (err) { console.warn(err); }
            }

            closeMenu();
          }
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
          closeMenu();
        }
      });

      // Close dropdown on Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeMenu();
        }
      });

      // Initial apply from localStorage
      let currentLang = 'en';
      try {
        currentLang = localStorage.getItem('vantorkit_lang') || 'en';
      } catch (err) {}
      if (!LANG_NAMES[currentLang]) currentLang = 'en';
      updateActiveLanguageUI(currentLang);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initLangSwitcher);
    } else {
      initLangSwitcher();
    }
  })();
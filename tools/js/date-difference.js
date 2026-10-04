(function() {
    // 4-Language Translation Dictionaries
    const I18N = {
      en: {
        backLink: "← Back to Tools",
        badgePill: "100% Client-Side • Instant Date Math • Custom Weekend Filters",
        toolTitle: "Date Difference & Workdays",
        toolSubtitle: "Calculate calendar days, business working days, weekends, and equivalent hours between dates, or add/subtract business days with custom weekend filters.",
        tabDiffTitle: "Difference Between Dates",
        tabAddSubTitle: "Add or Subtract Days",
        intervalSettings: "Interval Settings",
        startDateLabel: "Start Date",
        endDateLabel: "End Date",
        presetToday: "Today",
        presetYesterday: "Yesterday",
        presetTomorrow: "Tomorrow",
        presetStartYear: "Jan 1",
        presetEndYear: "Dec 31",
        includeEndLabel: "Include End Date in count (+1 day)",
        weekendFilterLabel: "Weekend Days (Non-Working)",
        optSatSun: "Saturday & Sunday (Western / International)",
        optFriSat: "Friday & Saturday (Middle East / Gulf)",
        optSunOnly: "Sunday only",
        optNoWeekends: "None (Continuous 7-Day Week)",
        holidaysLabel: "Public Holidays to Exclude (Count)",
        calculationResults: "Calculation Results",
        totalCalendarDays: "Total Calendar Days",
        workingDaysTitle: "Working Days",
        weekendDaysTitle: "Weekend Days",
        holidaysTitle: "Public Holidays",
        deductedSub: "deducted",
        equivalentTime: "Equivalent Time & Calendar Breakdown",
        lblYMD: "Years, Months, Days",
        lblWeeks: "Weeks & Days",
        lblHours: "Total Hours",
        lblWorkingHours: "Standard Working Hours (8h/day)",
        lblMinutes: "Total Minutes & Seconds",
        btnCopySummary: "Copy Calculation Summary",
        btnReset: "Reset",
        shiftSettings: "Date Shift Parameters",
        baseDateLabel: "Base Starting Date",
        operationLabel: "Operation",
        opAdd: "Add (+)",
        opSubtract: "Subtract (-)",
        shiftDaysLabel: "Number of Days",
        dayTypeLabel: "Count Days As",
        typeCalendar: "Calendar Days",
        typeBusiness: "Business Days Only",
        targetDateResult: "Computed Target Date",
        shiftSummaryTitle: "Date Shift Summary",
        lblIsoDate: "ISO Date (YYYY-MM-DD)",
        lblTotalCalendarSpan: "Calendar Days Spanned",
        lblWeekendDaysEncountered: "Weekend Days En-Route",
        btnCopyTargetDate: "Copy Target Date",
        copiedToast: "Copied to clipboard!",
        eduTitle: "Working Days & Calendar Time Calculations",
        eduSub: "Master contract delivery timelines, SLA deadlines, and international working calendar rules.",
        guide1Title: "Contracts & SLA Milestones",
        guide1Desc: "Commercial contracts, legal notices, and software SLAs specify deadlines in 'Business Days' rather than calendar days. A 10-business-day turnaround usually spans 14 to 16 calendar days once weekends and holidays are accounted for.",
        guide2Title: "International Weekend Variations",
        guide2Desc: "While Europe and the Americas recognize Saturday and Sunday as weekends, several Middle Eastern and Gulf nations observed Thursday/Friday or Friday/Saturday schedules. Selecting the right filter ensures contractual accuracy.",
        guide3Title: "DST & Timezone Boundaries",
        guide3Desc: "Naive calendar math that divides millisecond timestamps by 86,400,000 can produce subtle off-by-one errors during Daylight Saving Time (DST) changes. Our engine calculates UTC day boundaries to eliminate timezone drift.",
        faq1Q: "Why does 'Include End Date' change the result by 1 day?",
        faq1A: "By default, standard calendar subtraction (e.g. May 5 minus May 1) yields 4 days of elapsed time. For project milestones where work occurs on both May 1 and May 5, checking 'Include End Date' accounts for both days, resulting in 5 days.",
        faq2Q: "Can I exclude custom national or bank holidays?",
        faq2A: "Yes! You can enter the exact number of public holidays in your region in the 'Public Holidays to Exclude' field, and the calculator will automatically deduct them from the total business working days.",
        faq3Q: "How are Leap Years handled?",
        faq3A: "Our calculation uses native JavaScript UTC calendar logic, which accurately factors in February 29th during leap years (such as 2024 and 2028), ensuring total day and month precision.",
        faq4Q: "Are calculations private and secure?",
        faq4A: "Yes, 100%. No dates, project schedules, or calculations are ever transmitted across the internet. Everything runs purely within your local browser runtime."
      },
      ar: {
        backLink: "الرجوع إلى الأدوات ←",
        badgePill: "100% داخل المتصفح • حسابات فورية • فلاتر عطلات مخصصة",
        toolTitle: "حساب فرق التواريخ وأيام العمل",
        toolSubtitle: "احسب عدد الأيام التقويمية وأيام العمل الرسمية وعطلات نهاية الأسبوع، أو أضف واطرح أيام العمل مع دعم فلاتر عطلات الشرق الأوسط والغرب.",
        tabDiffTitle: "الفرق بين تاريخين",
        tabAddSubTitle: "إضافة أو طرح أيام من تاريخ",
        intervalSettings: "إعدادات الفترة الزمنية",
        startDateLabel: "تاريخ البداية",
        endDateLabel: "تاريخ النهاية",
        presetToday: "اليوم",
        presetYesterday: "أمس",
        presetTomorrow: "غداً",
        presetStartYear: "1 يناير",
        presetEndYear: "31 ديسمبر",
        includeEndLabel: "تضمين تاريخ النهاية في الحساب (+1 يوم)",
        weekendFilterLabel: "عطلة نهاية الأسبوع (أيام التوقف)",
        optSatSun: "السبت والأحد (النظام الدولي / الغربي)",
        optFriSat: "الجمعة والسبت (الشرق الأوسط والخليج)",
        optSunOnly: "الأحد فقط",
        optNoWeekends: "بدون عطلات (أسبوع كامل 7 أيام)",
        holidaysLabel: "عدد الإجازات الرسمية للخصم",
        calculationResults: "نتائج الحساب",
        totalCalendarDays: "إجمالي الأيام التقويمية",
        workingDaysTitle: "أيام العمل",
        weekendDaysTitle: "أيام العطلة",
        holidaysTitle: "العطلات الرسمية",
        deductedSub: "تم خصمها",
        equivalentTime: "تفصيل المدة المكافئة والتقويم",
        lblYMD: "سنوات، أشهر، أيام",
        lblWeeks: "أسابيع وأيام",
        lblHours: "إجمالي الساعات",
        lblWorkingHours: "ساعات العمل الرسمية (8 س/يوم)",
        lblMinutes: "إجمالي الدقائق والثواني",
        btnCopySummary: "نسخ ملخص الحساب",
        btnReset: "إعادة ضبط",
        shiftSettings: "إعدادات إزاحة التاريخ",
        baseDateLabel: "تاريخ البداية الأساسي",
        operationLabel: "العملية",
        opAdd: "إضافة (+)",
        opSubtract: "طرح (-)",
        shiftDaysLabel: "عدد الأيام",
        dayTypeLabel: "نوع احتساب الأيام",
        typeCalendar: "أيام تقويمية",
        typeBusiness: "أيام عمل فقط",
        targetDateResult: "التاريخ الناتج المحسوب",
        shiftSummaryTitle: "ملخص إزاحة التاريخ",
        lblIsoDate: "تاريخ ISO (YYYY-MM-DD)",
        lblTotalCalendarSpan: "الأيام التقويمية المقطوعة",
        lblWeekendDaysEncountered: "عطلات نهاية الأسبوع المصادفة",
        btnCopyTargetDate: "نسخ التاريخ الناتج",
        copiedToast: "تم النسخ إلى الحافظة بنجاح!",
        eduTitle: "حسابات أيام العمل والفترات الزمنية",
        eduSub: "تعرف على آليات احتساب تسليم العقود، مواعيد اتفاقيات مستوى الخدمة (SLA)، وأنظمة العطلات الدولية.",
        guide1Title: "مواعيد العقود واتفاقيات SLA",
        guide1Desc: "تحدد العقود التجارية والمشاريع المواعيد بـ 'أيام العمل' وليس الأيام التقويمية. غالباً ما تمتد فترة الـ 10 أيام عمل إلى 14 إلى 16 يوماً تقويمياً عند احتساب العطلات.",
        guide2Title: "اختلاف العطلات الأسبوعية دولياً",
        guide2Desc: "بينما تعتمد أوروبا وأمريكا السبت والأحد كعطلة، تتبع دول الخليج والشرق الأوسط نظام الجمعة والسبت. اختيار الفلتر الملائم يضمن دقة قانونية لعقودك.",
        guide3Title: "المناطق الزمنية والتوقيت الصيفي",
        guide3Desc: "الحساب البسيط بقسمة الملي ثانية على 86,400,000 يسبب أخطاء أثناء التوقيت الصيفي (DST). يعتمد محركنا على حدود أيام UTC لإلغاء أي انحراف زمني.",
        faq1Q: "لماذا يغير خيار 'تضمين تاريخ النهاية' النتيجة بيوم واحد؟",
        faq1A: "افتراضياً، طرح 1 مايو من 5 مايو يعطي 4 أيام منقضية. إذا كان العمل يُنجز في كلا اليومين (1 و 5 مايو)، فإن تحديد الخيار يضيف يوم النهاية لتصبح 5 أيام.",
        faq2Q: "هل يمكنني استبعاد العطلات الوطنية أو الأعياد؟",
        faq2A: "نعم! أدخل عدد أيام العطلات في حقل 'عدد الإجازات الرسمية للخصم' وسيقوم الحاسب تلقائياً بطرحها من صافي أيام العمل.",
        faq3Q: "كيف يتم التعامل مع السنوات الكبيسة؟",
        faq3A: "يستخدم نظامنا منطق تقويم UTC الأصلي في جافاسكريبت، والذي يحتسب بدقة يوم 29 فبراير في السنوات الكبيسة لضمان دقة كاملة.",
        faq4Q: "هل الحسابات آمنة وخاصة؟",
        faq4A: "نعم 100%. لا يتم إرسال أي تواريخ أو بيانات عبر الإنترنت. تجري كافة العمليات محلياً داخل متصفحك."
      },
      fr: {
        backLink: "← Retour aux outils",
        badgePill: "100% Côté Client • Calculs Instantanés • Filtres de Week-end Personnalisés",
        toolTitle: "Différence de Dates & Jours Ouvrés",
        toolSubtitle: "Calculez le nombre de jours calendaires, jours ouvrés, week-ends et heures équivalentes entre deux dates, ou ajoutez/soustrayez des jours ouvrés.",
        tabDiffTitle: "Différence entre deux dates",
        tabAddSubTitle: "Ajouter ou soustraire des jours",
        intervalSettings: "Paramètres de l'intervalle",
        startDateLabel: "Date de début",
        endDateLabel: "Date de fin",
        presetToday: "Aujourd'hui",
        presetYesterday: "Hier",
        presetTomorrow: "Demain",
        presetStartYear: "1er Janv",
        presetEndYear: "31 Déc",
        includeEndLabel: "Inclure la date de fin (+1 jour)",
        weekendFilterLabel: "Jours de week-end (non travaillés)",
        optSatSun: "Samedi & Dimanche (Standard occidental / international)",
        optFriSat: "Vendredi & Samedi (Moyen-Orient / Golfe)",
        optSunOnly: "Dimanche uniquement",
        optNoWeekends: "Aucun (Semaine continue de 7 jours)",
        holidaysLabel: "Jours fériés à déduire (Nombre)",
        calculationResults: "Résultats du calcul",
        totalCalendarDays: "Total des jours calendaires",
        workingDaysTitle: "Jours ouvrés",
        weekendDaysTitle: "Jours de week-end",
        holidaysTitle: "Jours fériés",
        deductedSub: "déduits",
        equivalentTime: "Équivalence horaire & Décomposition",
        lblYMD: "Années, Mois, Jours",
        lblWeeks: "Semaines & Jours",
        lblHours: "Heures totales",
        lblWorkingHours: "Heures de travail standards (8h/j)",
        lblMinutes: "Minutes & Secondes totales",
        btnCopySummary: "Copier le résumé du calcul",
        btnReset: "Réinitialiser",
        shiftSettings: "Paramètres du décalage de date",
        baseDateLabel: "Date de départ",
        operationLabel: "Opération",
        opAdd: "Ajouter (+)",
        opSubtract: "Soustraire (-)",
        shiftDaysLabel: "Nombre de jours",
        dayTypeLabel: "Comptabiliser en",
        typeCalendar: "Jours calendaires",
        typeBusiness: "Jours ouvrés uniquement",
        targetDateResult: "Date d'échéance calculée",
        shiftSummaryTitle: "Résumé du décalage",
        lblIsoDate: "Date ISO (AAAA-MM-JJ)",
        lblTotalCalendarSpan: "Jours calendaires écoulés",
        lblWeekendDaysEncountered: "Week-ends rencontrés",
        btnCopyTargetDate: "Copier la date cible",
        copiedToast: "Copié dans le presse-papiers !",
        eduTitle: "Calcul des Jours Ouvrés & Gestion du Temps",
        eduSub: "Maîtrisez les délais contractuels, les livrables SLA et les règles de calendrier internationales.",
        guide1Title: "Contrats & Jalons SLA",
        guide1Desc: "Les contrats d'affaires et accords de niveau de service (SLA) définissent souvent les délais en 'Jours Ouvrés'. Un délai de 10 jours ouvrés s'étale généralement sur 14 à 16 jours calendaires avec les week-ends.",
        guide2Title: "Variations Internationales de Week-ends",
        guide2Desc: "Alors que l'Europe et l'Amérique observent le samedi et dimanche, plusieurs pays du Moyen-Orient fonctionnent selon un cycle vendredi-samedi. Choisir le bon filtre garantit la conformité contractuelle.",
        guide3Title: "Fuseaux Horaires & Heure d'Été",
        guide3Desc: "Les calculs simplistes divisant les millisecondes par 86 400 000 génèrent des erreurs lors du passage à l'heure d'été. Notre outil opère en dates UTC pures pour éliminer toute dérive.",
        faq1Q: "Pourquoi 'Inclure la date de fin' ajoute-t-il 1 jour ?",
        faq1A: "Par défaut, la soustraction calendaire (du 1er au 5 mai) compte 4 jours écoulés. Si vous travaillez sur le projet le 1er et le 5 mai, cocher cette option comptabilise les deux bornes, soit 5 jours.",
        faq2Q: "Puis-je déduire des jours fériés spécifiques ?",
        faq2A: "Oui ! Indiquez simplement le nombre de jours fériés de votre région dans le champ 'Jours fériés à déduire' pour les soustraire automatiquement des jours ouvrés.",
        faq3Q: "Comment sont gérées les années bissextiles ?",
        faq3A: "L'outil utilise les fonctions de date natives en UTC, prenant en compte le 29 février lors des années bissextiles (comme 2024 et 2028).",
        faq4Q: "Mes données restent-elles confidentielles ?",
        faq4A: "Oui, à 100%. Aucun calendrier ni résultat n'est transmis sur internet. Tout s'exécute dans votre navigateur."
      },
      it: {
        backLink: "← Torna agli strumenti",
        badgePill: "100% Lato Client • Calcoli Immediati • Filtri Weekend Personalizzati",
        toolTitle: "Differenza Date & Giorni Lavorativi",
        toolSubtitle: "Calcola giorni di calendario, giorni lavorativi aziendali, weekend e ore equivalenti tra date, oppure aggiungi/sottrai giorni lavorativi.",
        tabDiffTitle: "Differenza tra due date",
        tabAddSubTitle: "Aggiungi o sottrai giorni",
        intervalSettings: "Parametri dell'intervallo",
        startDateLabel: "Data di inizio",
        endDateLabel: "Data di fine",
        presetToday: "Oggi",
        presetYesterday: "Ieri",
        presetTomorrow: "Domani",
        presetStartYear: "1 Gen",
        presetEndYear: "31 Dic",
        includeEndLabel: "Includi data di fine nel conteggio (+1 giorno)",
        weekendFilterLabel: "Giorni di weekend (non lavorativi)",
        optSatSun: "Sabato & Domenica (Standard occidentale / internazionale)",
        optFriSat: "Venerdì & Sabato (Medio Oriente / Golfo)",
        optSunOnly: "Solo Domenica",
        optNoWeekends: "Nessuno (Settimana continua di 7 giorni)",
        holidaysLabel: "Festività pubbliche da dedurre (Conteggio)",
        calculationResults: "Risultati del calcolo",
        totalCalendarDays: "Totale giorni di calendario",
        workingDaysTitle: "Giorni lavorativi",
        weekendDaysTitle: "Giorni di weekend",
        holidaysTitle: "Festività pubbliche",
        deductedSub: "dedotti",
        equivalentTime: "Equivalenza temporale & Scomposizione",
        lblYMD: "Anni, Mesi, Giorni",
        lblWeeks: "Settimane & Giorni",
        lblHours: "Ore totali",
        lblWorkingHours: "Ore lavorative standard (8h/g)",
        lblMinutes: "Minuti & Secondi totali",
        btnCopySummary: "Copia riepilogo calcolo",
        btnReset: "Reimposta",
        shiftSettings: "Parametri di spostamento data",
        baseDateLabel: "Data iniziale di base",
        operationLabel: "Operazione",
        opAdd: "Aggiungi (+)",
        opSubtract: "Sottrai (-)",
        shiftDaysLabel: "Numero di giorni",
        dayTypeLabel: "Calcola come",
        typeCalendar: "Giorni di calendario",
        typeBusiness: "Solo giorni lavorativi",
        targetDateResult: "Data calcolata di destinazione",
        shiftSummaryTitle: "Riepilogo spostamento data",
        lblIsoDate: "Data ISO (AAAA-MM-GG)",
        lblTotalCalendarSpan: "Giorni di calendario trascorsi",
        lblWeekendDaysEncountered: "Giorni di weekend incontrati",
        btnCopyTargetDate: "Copia data calcolata",
        copiedToast: "Copiato negli appunti!",
        eduTitle: "Calcolo dei Giorni Lavorativi & Gestione Scadenze",
        eduSub: "Gestisci le tempistiche contrattuali, le consegne SLA e le regole di calendario internazionali.",
        guide1Title: "Contratti & Scadenze SLA",
        guide1Desc: "I contratti commerciali e gli accordi di servizio (SLA) indicano le scadenze in 'Giorni Lavorativi'. Un termine di 10 giorni lavorativi si traduce solitamente in 14-16 giorni di calendario.",
        guide2Title: "Variazioni Internazionali del Weekend",
        guide2Desc: "Mentre l'Europa e le Americhe osservano il sabato e la domenica, diversi paesi del Medio Oriente operano con il ciclo venerdì-sabato. Scegliere il filtro corretto garantisce la precisione contrattuale.",
        guide3Title: "Fusi Orari & Ora Legale",
        guide3Desc: "Calcolare i giorni dividendo i millisecondi per 86.400.000 può generare errori durante il cambio dell'ora legale. Il nostro motore calcola date UTC per eliminare ogni deriva temporale.",
        faq1Q: "Perché 'Includi data di fine' aggiunge 1 giorno?",
        faq1A: "Per impostazione predefinita, la sottrazione (es. dal 1° al 5 maggio) calcola 4 giorni trascorsi. Per progetti in cui si lavora sia il 1° che il 5 maggio, selezionare questa opzione conteggia entrambi gli estremi (5 giorni).",
        faq2Q: "Posso escludere festività nazionali specifiche?",
        faq2A: "Sì! Inserisci il numero esatto di festività nel campo 'Festività pubbliche da dedurre' e verranno sottratte dal conteggio dei giorni lavorativi.",
        faq3Q: "Come vengono gestiti gli anni bisestili?",
        faq3A: "Il calcolo utilizza la logica UTC standard di JavaScript, che include correttamente il 29 febbraio negli anni bisestili (come il 2024 e il 2028).",
        faq4Q: "I calcoli sono privati e sicuri?",
        faq4A: "Sì, al 100%. Nessuna data o calcolo viene inviato via internet. Tutto viene elaborato localmente nel tuo browser."
      }
    };

    // State Variables
    let activeLang = 'en';
    let currentCalcView = 'diff'; // 'diff' or 'addsub'
    let shiftOp = 'add'; // 'add' or 'sub'
    let shiftDayType = 'calendar'; // 'calendar' or 'business'

    // DOM Elements - Tab 1
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const btnSwapDates = document.getElementById('btnSwapDates');
    const checkIncludeEnd = document.getElementById('checkIncludeEnd');
    const selectWeekend = document.getElementById('selectWeekend');
    const inputHolidays = document.getElementById('inputHolidays');

    const resTotalDays = document.getElementById('resTotalDays');
    const resSpanSummary = document.getElementById('resSpanSummary');
    const resWorkDays = document.getElementById('resWorkDays');
    const resWorkPct = document.getElementById('resWorkPct');
    const resWeekendDays = document.getElementById('resWeekendDays');
    const resWeekendPct = document.getElementById('resWeekendPct');
    const resHolidays = document.getElementById('resHolidays');
    const resYMD = document.getElementById('resYMD');
    const resWeeks = document.getElementById('resWeeks');
    const resHours = document.getElementById('resHours');
    const resWorkHours = document.getElementById('resWorkHours');
    const resMinutes = document.getElementById('resMinutes');
    const btnCopyDiff = document.getElementById('btnCopyDiff');
    const copyDiffText = document.getElementById('copyDiffText');
    const btnResetDiff = document.getElementById('btnResetDiff');

    // DOM Elements - Tab 2
    const baseDateInput = document.getElementById('baseDate');
    const btnOpAdd = document.getElementById('btnOpAdd');
    const btnOpSub = document.getElementById('btnOpSub');
    const inputShiftDays = document.getElementById('inputShiftDays');
    const btnTypeCal = document.getElementById('btnTypeCal');
    const btnTypeBiz = document.getElementById('btnTypeBiz');
    const groupShiftWeekend = document.getElementById('groupShiftWeekend');
    const selectShiftWeekend = document.getElementById('selectShiftWeekend');

    const resTargetWeekday = document.getElementById('resTargetWeekday');
    const resTargetDateFormatted = document.getElementById('resTargetDateFormatted');
    const resTargetExplanation = document.getElementById('resTargetExplanation');
    const resTargetBaseDisplay = document.getElementById('resTargetBaseDisplay');
    const resTargetIso = document.getElementById('resTargetIso');
    const resTargetSpanDays = document.getElementById('resTargetSpanDays');
    const resTargetWeekendEncountered = document.getElementById('resTargetWeekendEncountered');
    const btnCopyTarget = document.getElementById('btnCopyTarget');
    const copyTargetText = document.getElementById('copyTargetText');
    const btnResetAddSub = document.getElementById('btnResetAddSub');

    // Toast Box
    const toastBox = document.getElementById('toastBox');
    const toastMessage = document.getElementById('toastMessage');

    let toastTimer = null;
    function showToast(msg) {
      if (toastTimer) clearTimeout(toastTimer);
      toastMessage.textContent = msg;
      toastBox.classList.add('show');
      toastTimer = setTimeout(() => {
        toastBox.classList.remove('show');
      }, 2500);
    }

    // Date Utilities
    function parseDateUTC(dateStr) {
      if (!dateStr) return null;
      const parts = dateStr.split('-');
      if (parts.length !== 3) return null;
      return new Date(Date.UTC(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10)));
    }

    function formatDateISO(d) {
      if (!d) return '';
      const year = d.getUTCFullYear();
      const month = String(d.getUTCMonth() + 1).padStart(2, '0');
      const day = String(d.getUTCDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function getLocaleCode(lang) {
      if (lang === 'ar') return 'ar-SA';
      if (lang === 'fr') return 'fr-FR';
      if (lang === 'it') return 'it-IT';
      return 'en-US';
    }

    function formatFullDateLocalized(d, lang) {
      if (!d) return '';
      const loc = getLocaleCode(lang);
      return new Intl.DateTimeFormat(loc, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
      }).format(d);
    }

    function formatWeekdayLocalized(d, lang) {
      if (!d) return '';
      const loc = getLocaleCode(lang);
      return new Intl.DateTimeFormat(loc, {
        weekday: 'long',
        timeZone: 'UTC'
      }).format(d);
    }

    // Difference Calculation Engine
    function calculateDifference() {
      const d1 = parseDateUTC(startDateInput.value);
      const d2 = parseDateUTC(endDateInput.value);
      if (!d1 || !d2) return;

      const includeEnd = checkIncludeEnd.checked;
      const weekendType = selectWeekend.value;
      const holidayCount = Math.max(0, parseInt(inputHolidays.value, 10) || 0);

      let start = d1;
      let end = d2;
      let isInverted = false;
      if (start > end) {
        start = d2;
        end = d1;
        isInverted = true;
      }

      const oneDay = 86400000;
      let totalCalendarDays = Math.round((end - start) / oneDay);
      if (includeEnd) totalCalendarDays += 1;

      let workdays = 0;
      let weekends = 0;

      const cur = new Date(start.getTime());
      const endLimit = includeEnd ? new Date(end.getTime() + oneDay) : new Date(end.getTime());

      while (cur < endLimit) {
        const day = cur.getUTCDay();
        let isWeekend = false;
        if (weekendType === 'sat-sun') {
          isWeekend = (day === 0 || day === 6);
        } else if (weekendType === 'fri-sat') {
          isWeekend = (day === 5 || day === 6);
        } else if (weekendType === 'sun') {
          isWeekend = (day === 0);
        }

        if (isWeekend) {
          weekends++;
        } else {
          workdays++;
        }
        cur.setUTCDate(cur.getUTCDate() + 1);
      }

      const actualWorkdays = Math.max(0, workdays - holidayCount);
      const workPct = totalCalendarDays > 0 ? ((actualWorkdays / totalCalendarDays) * 100).toFixed(1) : 0;
      const weekendPct = totalCalendarDays > 0 ? ((weekends / totalCalendarDays) * 100).toFixed(1) : 0;

      // Calculate Years, Months, Days breakdown
      let sDate = new Date(start);
      let eDate = new Date(end);
      if (includeEnd) {
        eDate.setUTCDate(eDate.getUTCDate() + 1);
      }
      let years = eDate.getUTCFullYear() - sDate.getUTCFullYear();
      let months = eDate.getUTCMonth() - sDate.getUTCMonth();
      let days = eDate.getUTCDate() - sDate.getUTCDate();

      if (days < 0) {
        months -= 1;
        const prevMonthLastDay = new Date(Date.UTC(eDate.getUTCFullYear(), eDate.getUTCMonth(), 0)).getUTCDate();
        days += prevMonthLastDay;
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const totalWeeks = Math.floor(totalCalendarDays / 7);
      const remDays = totalCalendarDays % 7;
      const totalHours = totalCalendarDays * 24;
      const standardWorkHours = actualWorkdays * 8;
      const totalMinutes = totalHours * 60;
      const totalSeconds = totalMinutes * 60;

      // Update UI Elements
      resTotalDays.textContent = `${totalCalendarDays} ${activeLang === 'ar' ? 'يوم' : (totalCalendarDays === 1 ? 'Day' : 'Days')}`;
      
      const formattedStart = formatFullDateLocalized(d1, activeLang);
      const formattedEnd = formatFullDateLocalized(d2, activeLang);
      if (isInverted) {
        resSpanSummary.textContent = `${formattedEnd} → ${formattedStart}`;
      } else {
        resSpanSummary.textContent = `${formattedStart} → ${formattedEnd}`;
      }

      resWorkDays.textContent = actualWorkdays.toLocaleString();
      resWorkPct.textContent = `${workPct}% of total`;
      resWeekendDays.textContent = weekends.toLocaleString();
      resWeekendPct.textContent = `${weekendPct}% of total`;
      resHolidays.textContent = holidayCount.toLocaleString();

      if (activeLang === 'ar') {
        resYMD.textContent = `${years} سنوات، ${months} أشهر، ${days} أيام`;
        resWeeks.textContent = `${totalWeeks} أسابيع، ${remDays} أيام`;
        resHours.textContent = `${totalHours.toLocaleString()} ساعة`;
        resWorkHours.textContent = `${standardWorkHours.toLocaleString()} ساعة`;
        resMinutes.textContent = `${totalMinutes.toLocaleString()} دقيقة (${totalSeconds.toLocaleString()} ثانية)`;
      } else if (activeLang === 'fr') {
        resYMD.textContent = `${years} an(s), ${months} mois, ${days} jour(s)`;
        resWeeks.textContent = `${totalWeeks} semaine(s), ${remDays} jour(s)`;
        resHours.textContent = `${totalHours.toLocaleString()} heures`;
        resWorkHours.textContent = `${standardWorkHours.toLocaleString()} heures`;
        resMinutes.textContent = `${totalMinutes.toLocaleString()} min (${totalSeconds.toLocaleString()} s)`;
      } else if (activeLang === 'it') {
        resYMD.textContent = `${years} anno/i, ${months} mese/i, ${days} giorno/i`;
        resWeeks.textContent = `${totalWeeks} settimana/e, ${remDays} giorno/i`;
        resHours.textContent = `${totalHours.toLocaleString()} ore`;
        resWorkHours.textContent = `${standardWorkHours.toLocaleString()} ore`;
        resMinutes.textContent = `${totalMinutes.toLocaleString()} min (${totalSeconds.toLocaleString()} sec)`;
      } else {
        resYMD.textContent = `${years} Year${years === 1 ? '' : 's'}, ${months} Month${months === 1 ? '' : 's'}, ${days} Day${days === 1 ? '' : 's'}`;
        resWeeks.textContent = `${totalWeeks} Week${totalWeeks === 1 ? '' : 's'}, ${remDays} Day${remDays === 1 ? '' : 's'}`;
        resHours.textContent = `${totalHours.toLocaleString()} Hours`;
        resWorkHours.textContent = `${standardWorkHours.toLocaleString()} Hours`;
        resMinutes.textContent = `${totalMinutes.toLocaleString()} min (${totalSeconds.toLocaleString()} sec)`;
      }
    }

    // Add or Subtract Days Engine
    function calculateShift() {
      const baseDate = parseDateUTC(baseDateInput.value);
      if (!baseDate) return;

      const numDays = Math.max(1, parseInt(inputShiftDays.value, 10) || 1);
      const step = shiftOp === 'add' ? 1 : -1;
      const weekendType = selectShiftWeekend.value;

      const target = new Date(baseDate.getTime());
      let calendarDaysElapsed = 0;
      let weekendsEncountered = 0;

      if (shiftDayType === 'calendar') {
        target.setUTCDate(target.getUTCDate() + (step * numDays));
        calendarDaysElapsed = numDays;

        // Count weekends passed
        const cur = new Date(baseDate.getTime());
        const countStep = step;
        for (let i = 0; i < numDays; i++) {
          cur.setUTCDate(cur.getUTCDate() + countStep);
          const day = cur.getUTCDay();
          let isWeekend = false;
          if (weekendType === 'sat-sun') isWeekend = (day === 0 || day === 6);
          else if (weekendType === 'fri-sat') isWeekend = (day === 5 || day === 6);
          else if (weekendType === 'sun') isWeekend = (day === 0);
          if (isWeekend) weekendsEncountered++;
        }
      } else {
        // Business days
        let added = 0;
        let safety = 0;
        while (added < numDays && safety < 100000) {
          target.setUTCDate(target.getUTCDate() + step);
          calendarDaysElapsed++;
          safety++;
          const day = target.getUTCDay();
          let isWeekend = false;
          if (weekendType === 'sat-sun') isWeekend = (day === 0 || day === 6);
          else if (weekendType === 'fri-sat') isWeekend = (day === 5 || day === 6);
          else if (weekendType === 'sun') isWeekend = (day === 0);

          if (!isWeekend) {
            added++;
          } else {
            weekendsEncountered++;
          }
        }
      }

      // Display results
      resTargetWeekday.textContent = formatWeekdayLocalized(target, activeLang);
      resTargetDateFormatted.textContent = formatFullDateLocalized(target, activeLang);
      resTargetIso.textContent = formatDateISO(target);
      resTargetBaseDisplay.textContent = formatFullDateLocalized(baseDate, activeLang);
      resTargetSpanDays.textContent = `${calendarDaysElapsed} ${activeLang === 'ar' ? 'يوم' : 'Days'}`;
      resTargetWeekendEncountered.textContent = `${weekendsEncountered} ${activeLang === 'ar' ? 'يوم عطلة' : 'Days'}`;

      if (activeLang === 'ar') {
        resTargetExplanation.textContent = `${numDays} ${shiftDayType === 'business' ? 'أيام عمل' : 'أيام تقويمية'} ${shiftOp === 'add' ? 'بعد' : 'قبل'} تاريخ البداية`;
      } else if (activeLang === 'fr') {
        resTargetExplanation.textContent = `${numDays} ${shiftDayType === 'business' ? 'jours ouvrés' : 'jours calendaires'} ${shiftOp === 'add' ? 'après' : 'avant'} la date de départ`;
      } else if (activeLang === 'it') {
        resTargetExplanation.textContent = `${numDays} ${shiftDayType === 'business' ? 'giorni lavorativi' : 'giorni di calendario'} ${shiftOp === 'add' ? 'dopo' : 'prima'} la data iniziale`;
      } else {
        resTargetExplanation.textContent = `${numDays} ${shiftDayType === 'business' ? 'business days' : 'calendar days'} ${shiftOp === 'add' ? 'after' : 'before'} base date`;
      }
    }

    // Set Default Initial Dates
    function setDefaults() {
      const today = new Date();
      const todayISO = formatDateISO(today);

      const plus30 = new Date(today.getTime() + 30 * 86400000);
      const plus30ISO = formatDateISO(plus30);

      startDateInput.value = todayISO;
      endDateInput.value = plus30ISO;
      baseDateInput.value = todayISO;
      inputShiftDays.value = "30";
      inputHolidays.value = "0";
      checkIncludeEnd.checked = false;

      calculateDifference();
      calculateShift();
    }

    // Tab Navigation Logic
    const btnTabDiff = document.getElementById('btnTabDiff');
    const btnTabAddSub = document.getElementById('btnTabAddSub');
    const viewDiff = document.getElementById('viewDiff');
    const viewAddSub = document.getElementById('viewAddSub');

    btnTabDiff.addEventListener('click', () => {
      currentCalcView = 'diff';
      btnTabDiff.classList.add('active');
      btnTabAddSub.classList.remove('active');
      viewDiff.classList.add('active');
      viewAddSub.classList.remove('active');
      calculateDifference();
    });

    btnTabAddSub.addEventListener('click', () => {
      currentCalcView = 'addsub';
      btnTabAddSub.classList.add('active');
      btnTabDiff.classList.remove('active');
      viewAddSub.classList.add('active');
      viewDiff.classList.remove('active');
      calculateShift();
    });

    // Tab 1 Events
    [startDateInput, endDateInput, selectWeekend, inputHolidays].forEach(el => {
      el.addEventListener('change', calculateDifference);
      el.addEventListener('input', calculateDifference);
    });
    checkIncludeEnd.addEventListener('change', calculateDifference);

    btnSwapDates.addEventListener('click', () => {
      const temp = startDateInput.value;
      startDateInput.value = endDateInput.value;
      endDateInput.value = temp;
      calculateDifference();
    });

    document.querySelectorAll('#viewDiff .btn-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        const now = new Date();
        const curYear = now.getUTCFullYear();

        if (action === 'start-today') {
          startDateInput.value = formatDateISO(now);
        } else if (action === 'start-yesterday') {
          const y = new Date(now.getTime() - 86400000);
          startDateInput.value = formatDateISO(y);
        } else if (action === 'start-first-year') {
          startDateInput.value = `${curYear}-01-01`;
        } else if (action === 'end-today') {
          endDateInput.value = formatDateISO(now);
        } else if (action === 'end-plus7') {
          const s = parseDateUTC(startDateInput.value) || now;
          endDateInput.value = formatDateISO(new Date(s.getTime() + 7 * 86400000));
        } else if (action === 'end-plus30') {
          const s = parseDateUTC(startDateInput.value) || now;
          endDateInput.value = formatDateISO(new Date(s.getTime() + 30 * 86400000));
        } else if (action === 'end-plus90') {
          const s = parseDateUTC(startDateInput.value) || now;
          endDateInput.value = formatDateISO(new Date(s.getTime() + 90 * 86400000));
        } else if (action === 'end-last-year') {
          endDateInput.value = `${curYear}-12-31`;
        }
        calculateDifference();
      });
    });

    btnResetDiff.addEventListener('click', () => {
      const today = new Date();
      startDateInput.value = formatDateISO(today);
      endDateInput.value = formatDateISO(new Date(today.getTime() + 30 * 86400000));
      checkIncludeEnd.checked = false;
      inputHolidays.value = "0";
      selectWeekend.value = "sat-sun";
      calculateDifference();
    });

    btnCopyDiff.addEventListener('click', () => {
      const summary = `VantorKit Date Difference Calculation:
Interval: ${startDateInput.value} to ${endDateInput.value}
${resTotalDays.textContent} (${resSpanSummary.textContent})
Working Days: ${resWorkDays.textContent} (${resWorkPct.textContent})
Weekend Days: ${resWeekendDays.textContent} (${resWeekendPct.textContent})
Holidays Deducted: ${resHolidays.textContent}
Equivalent: ${resYMD.textContent} | ${resWeeks.textContent} | ${resHours.textContent}
Calculated with VantorKit (https://vantorkit.com/tools/date-difference.html)`;

      navigator.clipboard.writeText(summary).then(() => {
        btnCopyDiff.classList.add('copied');
        copyDiffText.textContent = "✓ Copied!";
        showToast(I18N[activeLang]?.copiedToast || "Copied to clipboard!");
        setTimeout(() => {
          btnCopyDiff.classList.remove('copied');
          copyDiffText.textContent = I18N[activeLang]?.btnCopySummary || "Copy Calculation Summary";
        }, 2000);
      });
    });

    // Tab 2 Events
    baseDateInput.addEventListener('change', calculateShift);
    inputShiftDays.addEventListener('input', calculateShift);
    selectShiftWeekend.addEventListener('change', calculateShift);

    btnOpAdd.addEventListener('click', () => {
      shiftOp = 'add';
      btnOpAdd.classList.add('active');
      btnOpSub.classList.remove('active');
      calculateShift();
    });

    btnOpSub.addEventListener('click', () => {
      shiftOp = 'sub';
      btnOpSub.classList.add('active');
      btnOpAdd.classList.remove('active');
      calculateShift();
    });

    btnTypeCal.addEventListener('click', () => {
      shiftDayType = 'calendar';
      btnTypeCal.classList.add('active');
      btnTypeBiz.classList.remove('active');
      groupShiftWeekend.style.display = 'none';
      calculateShift();
    });

    btnTypeBiz.addEventListener('click', () => {
      shiftDayType = 'business';
      btnTypeBiz.classList.add('active');
      btnTypeCal.classList.remove('active');
      groupShiftWeekend.style.display = 'block';
      calculateShift();
    });

    document.querySelectorAll('#viewAddSub .btn-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        const shiftVal = btn.getAttribute('data-shift');
        const now = new Date();

        if (action === 'base-today') {
          baseDateInput.value = formatDateISO(now);
        } else if (action === 'base-tomorrow') {
          const t = new Date(now.getTime() + 86400000);
          baseDateInput.value = formatDateISO(t);
        } else if (shiftVal) {
          inputShiftDays.value = shiftVal;
        }
        calculateShift();
      });
    });

    btnResetAddSub.addEventListener('click', () => {
      const today = new Date();
      baseDateInput.value = formatDateISO(today);
      inputShiftDays.value = "30";
      shiftOp = 'add';
      btnOpAdd.classList.add('active');
      btnOpSub.classList.remove('active');
      shiftDayType = 'calendar';
      btnTypeCal.classList.add('active');
      btnTypeBiz.classList.remove('active');
      groupShiftWeekend.style.display = 'none';
      selectShiftWeekend.value = "sat-sun";
      calculateShift();
    });

    btnCopyTarget.addEventListener('click', () => {
      const text = `${resTargetDateFormatted.textContent} (${resTargetIso.textContent})
${resTargetExplanation.textContent}
Calculated with VantorKit (https://vantorkit.com/tools/date-difference.html)`;

      navigator.clipboard.writeText(text).then(() => {
        btnCopyTarget.classList.add('copied');
        copyTargetText.textContent = "✓ Copied!";
        showToast(I18N[activeLang]?.copiedToast || "Copied to clipboard!");
        setTimeout(() => {
          btnCopyTarget.classList.remove('copied');
          copyTargetText.textContent = I18N[activeLang]?.btnCopyTargetDate || "Copy Target Date";
        }, 2000);
      });
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

      calculateDifference();
      calculateShift();
    }

    // Expose setLanguage globally for standardized dropdown sync
    window.setLanguage = setLanguage;

    // Initialize
    setDefaults();
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
        "title": "Date Difference Calculator – Workdays & Duration",
        "desc": "Calculate elapsed days, weekends, and business workdays between two calendar dates. Date math executes in local browser scripts without saving dates."
    },
    "ar": {
        "title": "حاسبة فرق الأيام والتاريخ – أيام العمل والتقويم",
        "desc": "احسب عدد الأيام المنقضية وأيام العمل والعطلات الأسبوعية بين تاريخين بدقة. تجري الحسابات التقويمية محلياً في متصفحك دون حفظ أي تواريخ."
    },
    "fr": {
        "title": "Calculateur d'Écart de Dates – Jours Ouvrés & Durée",
        "desc": "Calculez le nombre de jours ouvrés, week-ends et durées entre deux dates. Traitement calendaire exécuté sur votre machine sans stockage."
    },
    "it": {
        "title": "Calcolatore Differenza Date – Giorni Lavorativi e Mesi",
        "desc": "Calcola giorni solari, fine settimana e giorni lavorativi tra due date. Le operazioni di calendario avvengono offline nel tuo browser."
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
(function() {
    // 4-Language Translation Dictionaries
    const I18N = {
      en: {
        backLink: "← Back to Tools",
        badgePill: "100% Client-Side • Native Intl Engine • Zero External APIs",
        toolTitle: "Time Zone Meeting Planner",
        toolSubtitle: "Coordinate cross-border team meetings, remote standups, and international client calls across multiple time zones with an interactive 24-hour visual overlap matrix.",
        meetingDateLabel: "Meeting Date:",
        btnToday: "Today",
        referenceHourLabel: "Reference Meeting Hour:",
        btnCurrentHour: "Current Hour",
        legendWork: "Standard Work (09:00 - 17:00)",
        legendExtended: "Extended (07:00 - 09:00 & 17:00 - 20:00)",
        legendSleep: "Off-Hours / Sleep",
        legendHint: "💡 Click any hour block to set meeting time",
        meetingSummaryTitle: "Selected Meeting Time Slot",
        overlapOptimal: "Optimal Meeting Window (All within business hours)",
        overlapPartial: "Workable Meeting Window (Some extended hours)",
        overlapChallenging: "Challenging Window (Includes sleep/off-hours)",
        btnCopyInvite: "Copy Meeting Times",
        btnReset: "Reset to Defaults",
        copiedToast: "Copied to clipboard!",
        tagWork: "Work Hours",
        tagExtended: "Extended",
        tagSleep: "Sleep / Off",
        eduTitle: "Remote Collaboration & Time Zone Strategy",
        eduSub: "Master asynchronous scheduling, Daylight Saving shifts, and distributed team dynamics.",
        guide1Title: "Finding the Golden Overlap",
        guide1Desc: "The 'Golden Hour' occurs when participants across multiple continents fall within core business hours (09:00 - 17:00). When full overlap is impossible, rotate weekly meeting slots to distribute inconvenience fairly.",
        guide2Title: "The Daylight Saving (DST) Trap",
        guide2Desc: "Different countries transition into Daylight Saving Time on different weeks (e.g., the US in early March, Europe in late March, while the Southern Hemisphere moves inversely). Our planner calculates the exact date to prevent missed meetings.",
        guide3Title: "Asynchronous by Default",
        guide3Desc: "For teams spanning more than 8 time zones, reserve synchronous meetings for collaborative brainstorming, 1-on-1 feedback, and social bonding, delegating status updates to asynchronous channels like Slack or Loom.",
        faq1Q: "How does the planner detect my local time zone?",
        faq1A: "The tool uses your web browser's native Intl.DateTimeFormat().resolvedOptions().timeZone to accurately identify your local IANA time zone without querying any external IP location service.",
        faq2Q: "What does the '+1d' or '-1d' badge mean?",
        faq2A: "When a time slot in another city crosses midnight relative to your base reference date, the badge indicates that the meeting occurs on the following day (+1d) or the previous day (-1d) for that participant.",
        faq3Q: "How do I change the reference base city?",
        faq3A: "Click the star icon (★) on any city row to set it as the primary base. The 00:00 to 23:00 timeline axis will immediately re-anchor around that city's local day.",
        faq4Q: "Are my meeting dates or selected cities tracked?",
        faq4A: "Never. All calculations run strictly in client-side memory with zero analytics, zero cookies, and zero server logging."
      },
      ar: {
        backLink: "الرجوع إلى الأدوات ←",
        badgePill: "100% داخل المتصفح • محرك Intl أصلي • بدون واجهات خارجية",
        toolTitle: "مخطط اجتماعات المناطق الزمنية",
        toolSubtitle: "نسّق اجتماعات الفرق العالمية ومكالمات العملاء الدولية عبر المناطق الزمنية المختلفة باستخدام مصفوفة تداخل بصرية تفاعلية على مدار 24 ساعة.",
        meetingDateLabel: "تاريخ الاجتماع:",
        btnToday: "اليوم",
        referenceHourLabel: "ساعة الاجتماع المرجعية:",
        btnCurrentHour: "الساعة الحالية",
        legendWork: "ساعات العمل الرسمية (09:00 - 17:00)",
        legendExtended: "ساعات ممتدة (07:00 - 09:00 و 17:00 - 20:00)",
        legendSleep: "أوقات الراحة / النوم",
        legendHint: "💡 اضغط على أي خانة لتحديد موعد الاجتماع",
        meetingSummaryTitle: "تفاصيل الموعد الزمني المختار",
        overlapOptimal: "نافذة اجتماعات مثالية (الجميع في أوقات العمل)",
        overlapPartial: "نافذة مقبولة (بعض الأطراف في ساعات ممتدة)",
        overlapChallenging: "توقيت صعب (يشمل أوقات نوم لبعض الأطراف)",
        btnCopyInvite: "نسخ مواعيد الاجتماع",
        btnReset: "إعادة الضبط الافتراضي",
        copiedToast: "تم النسخ إلى الحافظة بنجاح!",
        tagWork: "أوقات عمل",
        tagExtended: "ساعات ممتدة",
        tagSleep: "خارج العمل / نوم",
        eduTitle: "إدارة فرق العمل عن بُعد واستراتيجيات المناطق الزمنية",
        eduSub: "تعرف على آليات التنسيق اللامتزامن، والتوقيت الصيفي، وتقليل إرهاق فروق التوقيت.",
        guide1Title: "البحث عن التداخل الذهبي",
        guide1Desc: "تتحقق 'الساعة الذهبية' عندما يقع المشاركون عبر القارات المختلفة ضمن ساعات العمل الأساسية. إذا استحال التوافق الكامل، قم بتدوير مواعيد الاجتماعات أسبوعياً.",
        guide2Title: "فخ التوقيت الصيفي (DST)",
        guide2Desc: "تنتقل الدول إلى التوقيت الصيفي في أسابيع متباينة (مثل أمريكا في أوائل مارس، وأوروبا في أواخره). يعتمد محركنا على تقويم التاريخ المختار لحساب التحولات بدقة.",
        guide3Title: "التواصل غير المتزامن كأصل",
        guide3Desc: "للفرق التي تتجاوز فروق التوقيت بينها 8 ساعات، يُفضل حصر الاجتماعات الحية للعصف الذهني والتواصل الإنساني، مع تفويض التحديثات الروتينية للرسائل غير المتزامنة.",
        faq1Q: "كيف يكتشف المخطط منطقتي الزمنية المحلية؟",
        faq1A: "يعتمد التطبيق على خاصية متصفحك الأصلية Intl.DateTimeFormat().resolvedOptions().timeZone لتحديد المنطقة بدقة دون طلب أي خوادم خارجية.",
        faq2Q: "ماذا تعني علامة '+1d' أو '-1d'؟",
        faq2A: "عندما تتجاوز الساعة في مدينة أخرى منتصف الليل بالنسبة للمدينة المرجعية، تشير العلامة إلى أن الاجتماع يقع في اليوم التالي (+1d) أو السابق (-1d).",
        faq3Q: "كيف أغير المدينة المرجعية الأساسية؟",
        faq3A: "اضغط على أيقونة النجمة (★) بجانب أي مدينة لجعلها المرجع الأساسي، وسيعاد ترتيب شريط الـ 24 ساعة وفقاً ليومها المحلي فوراً.",
        faq4Q: "هل يتم تسجيل مواعيدي أو المدن المختارة؟",
        faq4A: "أبداً. تتم كافة العمليات داخل ذاكرة متصفحك بنسبة 100% دون كوكيز أو تتبع."
      },
      fr: {
        backLink: "← Retour aux outils",
        badgePill: "100% Côté Client • Moteur Intl Natif • Zéro API Externe",
        toolTitle: "Planificateur de Réunions Fuseaux Horaires",
        toolSubtitle: "Coordonnez vos réunions d'équipe internationales et appels clients à travers les fuseaux horaires grâce à une matrice visuelle de chevauchement sur 24 heures.",
        meetingDateLabel: "Date de la réunion :",
        btnToday: "Aujourd'hui",
        referenceHourLabel: "Heure de référence :",
        btnCurrentHour: "Heure actuelle",
        legendWork: "Heures de bureau (09h00 - 17h00)",
        legendExtended: "Heures étendues (07h00 - 09h00 & 17h00 - 20h00)",
        legendSleep: "Repos / Sommeil",
        legendHint: "💡 Cliquez sur une heure pour fixer la réunion",
        meetingSummaryTitle: "Créneau de Réunion Sélectionné",
        overlapOptimal: "Créneau optimal (Tous pendant les heures ouvrées)",
        overlapPartial: "Créneau acceptable (Horaires étendus pour certains)",
        overlapChallenging: "Créneau difficile (Heures de nuit ou sommeil)",
        btnCopyInvite: "Copier les horaires de réunion",
        btnReset: "Réinitialiser",
        copiedToast: "Copié dans le presse-papiers !",
        tagWork: "Heures de travail",
        tagExtended: "Horaires étendus",
        tagSleep: "Nuit / Repos",
        eduTitle: "Collaboration à Distance & Stratégie des Fuseaux Horaires",
        eduSub: "Maîtrisez la planification asynchrone, les décalages d'heure d'été et la dynamique des équipes distribuées.",
        guide1Title: "Trouver le Chevauchement Idéal",
        guide1Desc: "Le 'créneau en or' intervient lorsque les collaborateurs sur plusieurs continents se trouvent simultanément dans leurs heures de travail normales. En cas de décalage extrême, alternez les horaires chaque semaine.",
        guide2Title: "Le Piège du Changement d'Heure (DST)",
        guide2Desc: "Les pays passent à l'heure d'été à des dates différentes. Notre planificateur s'appuie sur la date civile exacte pour recalculer automatiquement les écarts réels.",
        guide3Title: "Privilégier l'Asynchrone",
        guide3Desc: "Pour les équipes séparées par plus de 8 heures de décalage, réservez les visioconférences aux ateliers créatifs et utilisez les canaux asynchrones pour le suivi quotidien.",
        faq1Q: "Comment l'outil détecte-t-il mon fuseau horaire ?",
        faq1A: "L'application interroge l'API standard Intl.DateTimeFormat de votre navigateur pour identifier votre zone IANA sans faire appel à un serveur distant.",
        faq2Q: "Que signifie le badge '+1d' ou '-1d' ?",
        faq2A: "Si l'heure dans une ville franchit minuit par rapport à votre fuseau de référence, le badge indique que la réunion a lieu le lendemain (+1d) ou la veille (-1d).",
        faq3Q: "Comment définir une nouvelle ville de référence ?",
        faq3A: "Cliquez sur l'étoile (★) sur n'importe quelle ligne de ville pour en faire la référence de l'axe 24 heures.",
        faq4Q: "Mes réunions et villes sont-elles enregistrées ?",
        faq4A: "Jamais. Tout fonctionne localement dans la mémoire de votre navigateur, sans cookies ni transmission de données."
      },
      it: {
        backLink: "← Torna agli strumenti",
        badgePill: "100% Lato Client • Motore Intl Nativo • Zero API Esterne",
        toolTitle: "Pianificatore Riunioni Fusi Orari",
        toolSubtitle: "Coordina riunioni di team internazionali e call con clienti attraverso fusi orari diversi con una matrice visiva di sovrapposizione su 24 ore.",
        meetingDateLabel: "Data riunione:",
        btnToday: "Oggi",
        referenceHourLabel: "Ora di riferimento:",
        btnCurrentHour: "Ora attuale",
        legendWork: "Orario lavorativo (09:00 - 17:00)",
        legendExtended: "Orario esteso (07:00 - 09:00 & 17:00 - 20:00)",
        legendSleep: "Ore notturne / Riposo",
        legendHint: "💡 Clicca su un'ora per impostare la riunione",
        meetingSummaryTitle: "Fascia Oraria Selezionata",
        overlapOptimal: "Fascia ottimale (Tutti in orario lavorativo)",
        overlapPartial: "Fascia praticabile (Orari estesi per alcuni)",
        overlapChallenging: "Fascia difficile (Include ore di riposo/notturne)",
        btnCopyInvite: "Copia orari riunione",
        btnReset: "Reimposta predefiniti",
        copiedToast: "Copiato negli appunti!",
        tagWork: "Orario di lavoro",
        tagExtended: "Orario esteso",
        tagSleep: "Notte / Riposo",
        eduTitle: "Collaborazione Remota & Gestione dei Fusi Orari",
        eduSub: "Padroneggia la pianificazione asincrona, i cambi di ora legale e la gestione di team distribuiti.",
        guide1Title: "Trovare la Sovrapposizione Perfetta",
        guide1Desc: "La 'fascia d'oro' si verifica quando i partecipanti in diversi continenti rientrano nell'orario lavorativo standard. Se la sovrapposizione è limitata, ruota gli orari settimanalmente.",
        guide2Title: "La Trappola dell'Ora Legale (DST)",
        guide2Desc: "I diversi paesi passano all'ora legale in date differenti. Il nostro strumento calcola la data esatta per evitare errori di coordinamento stagionali.",
        guide3Title: "Approccio Asincrono",
        guide3Desc: "Per team con più di 8 ore di differenza, riserva le riunioni sincrone ai momenti strategici ed esegui i report su canali asincroni come Slack o Notion.",
        faq1Q: "Come viene rilevato il mio fuso orario locale?",
        faq1A: "L'applicazione utilizza l'API nativa Intl.DateTimeFormat del tuo browser per identificare la zona IANA senza consultare server esterni.",
        faq2Q: "Cosa indicano i badge '+1d' o '-1d'?",
        faq2A: "Se l'orario di un'altra città supera la mezzanotte rispetto alla città di riferimento, il badge indica che la call cadrà il giorno successivo (+1d) o precedente (-1d).",
        faq3Q: "Come cambio la città di riferimento?",
        faq3A: "Clicca sull'icona della stella (★) su una città per impostarla come riferimento principale dell'asse delle 24 ore.",
        faq4Q: "I miei dati o le città selezionate vengono tracciati?",
        faq4A: "Mai. L'elaborazione avviene al 100% nella memoria del tuo browser senza cookie né archiviazione remota."
      }
    };

    // Major Global Cities Catalog
    const GLOBAL_CITIES = [
      { name: "Casablanca", country: "Morocco", tz: "Africa/Casablanca", flag: "🇲🇦" },
      { name: "London", country: "United Kingdom", tz: "Europe/London", flag: "🇬🇧" },
      { name: "Paris", country: "France", tz: "Europe/Paris", flag: "🇫🇷" },
      { name: "New York", country: "USA", tz: "America/New_York", flag: "🇺🇸" },
      { name: "San Francisco", country: "USA", tz: "America/Los_Angeles", flag: "🇺🇸" },
      { name: "Dubai", country: "UAE", tz: "Asia/Dubai", flag: "🇦🇪" },
      { name: "Tokyo", country: "Japan", tz: "Asia/Tokyo", flag: "🇯🇵" },
      { name: "Sydney", country: "Australia", tz: "Australia/Sydney", flag: "🇦🇺" },
      { name: "Singapore", country: "Singapore", tz: "Asia/Singapore", flag: "🇸🇬" },
      { name: "Berlin", country: "Germany", tz: "Europe/Berlin", flag: "🇩🇪" },
      { name: "Madrid", country: "Spain", tz: "Europe/Madrid", flag: "🇪🇸" },
      { name: "Rome", country: "Italy", tz: "Europe/Rome", flag: "🇮🇹" },
      { name: "Amsterdam", country: "Netherlands", tz: "Europe/Amsterdam", flag: "🇳🇱" },
      { name: "Toronto", country: "Canada", tz: "America/Toronto", flag: "🇨🇦" },
      { name: "Chicago", country: "USA", tz: "America/Chicago", flag: "🇺🇸" },
      { name: "Los Angeles", country: "USA", tz: "America/Los_Angeles", flag: "🇺🇸" },
      { name: "São Paulo", country: "Brazil", tz: "America/Sao_Paulo", flag: "🇧🇷" },
      { name: "Buenos Aires", country: "Argentina", tz: "America/Argentina/Buenos_Aires", flag: "🇦🇷" },
      { name: "Mexico City", country: "Mexico", tz: "America/Mexico_City", flag: "🇲🇽" },
      { name: "Cairo", country: "Egypt", tz: "Africa/Cairo", flag: "🇪🇬" },
      { name: "Riyadh", country: "Saudi Arabia", tz: "Asia/Riyadh", flag: "🇸🇦" },
      { name: "Istanbul", country: "Turkey", tz: "Europe/Istanbul", flag: "🇹🇷" },
      { name: "Mumbai / New Delhi", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
      { name: "Bangkok", country: "Thailand", tz: "Asia/Bangkok", flag: "🇹🇭" },
      { name: "Hong Kong", country: "Hong Kong", tz: "Asia/Hong_Kong", flag: "🇭🇰" },
      { name: "Seoul", country: "South Korea", tz: "Asia/Seoul", flag: "🇰🇷" },
      { name: "Melbourne", country: "Australia", tz: "Australia/Melbourne", flag: "🇦🇺" },
      { name: "Auckland", country: "New Zealand", tz: "Pacific/Auckland", flag: "🇳🇿" },
      { name: "Honolulu", country: "USA", tz: "Pacific/Honolulu", flag: "🇺🇸" },
      { name: "Johannesburg", country: "South Africa", tz: "Africa/Johannesburg", flag: "🇿🇦" },
      { name: "Lagos", country: "Nigeria", tz: "Africa/Lagos", flag: "🇳🇬" },
      { name: "Nairobi", country: "Kenya", tz: "Africa/Nairobi", flag: "🇰🇪" }
    ];

    // State Variables
    let activeLang = 'en';
    let selectedDate = new Date().toISOString().split('T')[0];
    let selectedHour = 14; // Base hour 0 - 23
    let baseCityIndex = 0; // Index of the primary base city in activeCities

    // Detect Local Time Zone
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const localCityName = localTz.split('/').pop().replace(/_/g, ' ') + " (Local)";

    // Initial Active Cities
    let activeCities = [
      { name: localCityName, country: "Your Location", tz: localTz, flag: "📍" },
      { name: "London", country: "United Kingdom", tz: "Europe/London", flag: "🇬🇧" },
      { name: "New York", country: "USA", tz: "America/New_York", flag: "🇺🇸" },
      { name: "Paris", country: "France", tz: "Europe/Paris", flag: "🇫🇷" }
    ];

    // DOM Elements
    const meetingDateInput = document.getElementById('meetingDate');
    const btnTodayDate = document.getElementById('btnTodayDate');
    const hourSlider = document.getElementById('hourSlider');
    const sliderTimeBadge = document.getElementById('sliderTimeBadge');
    const btnCurrentHour = document.getElementById('btnCurrentHour');
    const citySearchInput = document.getElementById('citySearchInput');
    const cityDropdownMenu = document.getElementById('cityDropdownMenu');
    const matrixTable = document.getElementById('matrixTable');
    const meetingCitiesGrid = document.getElementById('meetingCitiesGrid');
    const overlapBadge = document.getElementById('overlapBadge');
    const overlapBadgeText = document.getElementById('overlapBadgeText');
    const btnCopyTimes = document.getElementById('btnCopyTimes');
    const copyTimesBtnText = document.getElementById('copyTimesBtnText');
    const btnResetAll = document.getElementById('btnResetAll');
    const toastBox = document.getElementById('toastBox');
    const toastMessage = document.getElementById('toastMessage');

    // Toast Utility
    let toastTimer = null;
    function showToast(msg) {
      if (toastTimer) clearTimeout(toastTimer);
      toastMessage.textContent = msg;
      toastBox.classList.add('show');
      toastTimer = setTimeout(() => {
        toastBox.classList.remove('show');
      }, 2500);
    }

    // Date/Time Calculation Utilities
    function getUtcForTzHour(dateStr, hour, tz) {
      const [y, m, d] = dateStr.split('-').map(Number);
      let guess = new Date(Date.UTC(y, m - 1, d, hour, 0, 0));
      
      const f = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', hour12: false
      });
      
      for (let i = 0; i < 3; i++) {
        const parts = {};
        f.formatToParts(guess).forEach(p => parts[p.type] = p.value);
        const tzHour = parseInt(parts.hour === '24' ? '0' : parts.hour, 10);
        const tzDay = parseInt(parts.day, 10);
        const diffHours = (tzDay - d) * 24 + (tzHour - hour);
        if (diffHours === 0) break;
        guess = new Date(guess.getTime() - diffHours * 3600000);
      }
      return guess;
    }

    function getTimePartsInTz(utcDate, tz) {
      const f = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false
      });
      const parts = {};
      f.formatToParts(utcDate).forEach(p => parts[p.type] = p.value);
      return {
        year: parseInt(parts.year, 10),
        month: parseInt(parts.month, 10),
        day: parseInt(parts.day, 10),
        hour: parseInt(parts.hour === '24' ? '0' : parts.hour, 10),
        minute: parseInt(parts.minute, 10)
      };
    }

    function getTzOffsetString(date, tz) {
      try {
        const str = new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          timeZoneName: 'shortOffset'
        }).format(date);
        const match = str.match(/GMT([+-]\d+(:?\d+)?)/);
        return match ? 'UTC' + match[1] : 'UTC';
      } catch (e) {
        return 'UTC';
      }
    }

    function getHourStatus(hour) {
      if (hour >= 9 && hour < 17) return 'work';
      if ((hour >= 7 && hour < 9) || (hour >= 17 && hour < 20)) return 'extended';
      return 'sleep';
    }

    // Render 24-Hour Timeline Matrix
    function renderMatrix() {
      matrixTable.innerHTML = '';

      if (baseCityIndex >= activeCities.length) {
        baseCityIndex = 0;
      }
      const baseCity = activeCities[baseCityIndex] || activeCities[0];

      // Compute UTC moments for each hour 0 - 23 in baseCity
      const hourlyUtcMoments = [];
      for (let h = 0; h < 24; h++) {
        hourlyUtcMoments.push(getUtcForTzHour(selectedDate, h, baseCity.tz));
      }

      // Base date day number
      const baseDayNum = parseInt(selectedDate.split('-')[2], 10);

      activeCities.forEach((city, cityIdx) => {
        const isBase = cityIdx === baseCityIndex;
        const row = document.createElement('div');
        row.className = `city-row ${isBase ? 'is-base' : ''}`;

        // City Meta Column
        const offsetStr = getTzOffsetString(hourlyUtcMoments[selectedHour], city.tz);
        const metaCol = document.createElement('div');
        metaCol.className = 'city-meta-col';
        metaCol.innerHTML = `
          <div class="city-title-group">
            <span class="city-name"><span>${city.flag}</span> <span>${city.name}</span></span>
            <span class="city-tz-label">${offsetStr} &bull; ${city.country}</span>
          </div>
          <div class="city-row-actions">
            <button type="button" class="btn-set-base ${isBase ? 'active' : ''}" title="Set as primary reference base" data-idx="${cityIdx}">★</button>
            ${activeCities.length > 1 ? `<button type="button" class="btn-remove-city" title="Remove city" data-idx="${cityIdx}">✕</button>` : ''}
          </div>
        `;

        // 24-Hour Timeline Bar
        const bar = document.createElement('div');
        bar.className = 'timeline-bar';

        for (let h = 0; h < 24; h++) {
          const utcMoment = hourlyUtcMoments[h];
          const timeParts = getTimePartsInTz(utcMoment, city.tz);
          const localHour = timeParts.hour;
          const status = getHourStatus(localHour);
          const isSelected = h === selectedHour;

          // Day shift relative to base date
          const diffDays = timeParts.day - baseDayNum;
          let shiftBadge = '';
          if (diffDays === 1 || diffDays < -20) {
            shiftBadge = '<span class="day-shift-badge">+1d</span>';
          } else if (diffDays === -1 || diffDays > 20) {
            shiftBadge = '<span class="day-shift-badge">-1d</span>';
          }

          const block = document.createElement('div');
          block.className = `hour-block ${status} ${isSelected ? 'selected-hour' : ''}`;
          block.innerHTML = `<span>${String(localHour).padStart(2, '0')}</span>${shiftBadge}`;
          block.title = `${city.name}: ${String(localHour).padStart(2, '0')}:00`;

          block.addEventListener('click', () => {
            selectedHour = h;
            hourSlider.value = h;
            sliderTimeBadge.textContent = `${String(h).padStart(2, '0')}:00`;
            renderMatrix();
            renderSummary();
          });

          bar.appendChild(block);
        }

        row.appendChild(metaCol);
        row.appendChild(bar);
        matrixTable.appendChild(row);
      });

      // Attach base toggle & remove listeners
      matrixTable.querySelectorAll('.btn-set-base').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          baseCityIndex = parseInt(btn.getAttribute('data-idx'), 10);
          renderMatrix();
          renderSummary();
        });
      });

      matrixTable.querySelectorAll('.btn-remove-city').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          if (activeCities.length > 1) {
            activeCities.splice(idx, 1);
            if (baseCityIndex >= activeCities.length) {
              baseCityIndex = 0;
            }
            renderMatrix();
            renderSummary();
          }
        });
      });
    }

    // Render Selected Meeting Summary
    function renderSummary() {
      meetingCitiesGrid.innerHTML = '';

      if (baseCityIndex >= activeCities.length) {
        baseCityIndex = 0;
      }
      const baseCity = activeCities[baseCityIndex] || activeCities[0];
      const selectedUtc = getUtcForTzHour(selectedDate, selectedHour, baseCity.tz);

      let workCount = 0;
      let extendedCount = 0;
      let sleepCount = 0;

      const dict = I18N[activeLang] || I18N.en;

      activeCities.forEach(city => {
        const timeParts = getTimePartsInTz(selectedUtc, city.tz);
        const status = getHourStatus(timeParts.hour);
        const offset = getTzOffsetString(selectedUtc, city.tz);

        if (status === 'work') workCount++;
        else if (status === 'extended') extendedCount++;
        else sleepCount++;

        let statusText = dict.tagWork;
        let statusClass = 'color:#34d399;';
        if (status === 'extended') {
          statusText = dict.tagExtended;
          statusClass = 'color:#fbbf24;';
        } else if (status === 'sleep') {
          statusText = dict.tagSleep;
          statusClass = 'color:#94a3b8;';
        }

        const card = document.createElement('div');
        card.className = 'meeting-city-card';
        card.innerHTML = `
          <div class="meeting-city-name">${city.flag} ${city.name}</div>
          <div class="meeting-city-time">${String(timeParts.hour).padStart(2, '0')}:00</div>
          <div class="meeting-city-sub">
            <span>${offset}</span>
            <span style="${statusClass}font-weight:600;">${statusText}</span>
          </div>
        `;
        meetingCitiesGrid.appendChild(card);
      });

      // Calculate Overlap Quality
      if (sleepCount === 0 && extendedCount === 0) {
        overlapBadge.className = 'overlap-quality-badge good';
        overlapBadgeText.textContent = dict.overlapOptimal;
      } else if (sleepCount === 0) {
        overlapBadge.className = 'overlap-quality-badge partial';
        overlapBadgeText.textContent = dict.overlapPartial;
      } else {
        overlapBadge.className = 'overlap-quality-badge poor';
        overlapBadgeText.textContent = dict.overlapChallenging;
      }
    }

    // Autocomplete Search Dropdown
    function setupCitySearch() {
      citySearchInput.addEventListener('input', () => {
        const q = citySearchInput.value.trim().toLowerCase();
        if (!q) {
          cityDropdownMenu.classList.remove('show');
          return;
        }

        const matches = GLOBAL_CITIES.filter(c => 
          c.name.toLowerCase().includes(q) || 
          c.country.toLowerCase().includes(q) ||
          c.tz.toLowerCase().includes(q)
        );

        cityDropdownMenu.innerHTML = '';
        if (matches.length === 0) {
          cityDropdownMenu.innerHTML = `<div class="city-option-item" style="color:var(--text-muted);">No matching cities</div>`;
        } else {
          matches.slice(0, 10).forEach(c => {
            const item = document.createElement('div');
            item.className = 'city-option-item';
            item.innerHTML = `
              <span>${c.flag} <strong>${c.name}</strong> (${c.country})</span>
              <span class="city-option-tz">${c.tz}</span>
            `;
            item.addEventListener('click', () => {
              // Add city if not already present
              const exists = activeCities.some(ac => ac.name === c.name || ac.tz === c.tz);
              if (!exists) {
                activeCities.push({ ...c });
                renderMatrix();
                renderSummary();
                showToast(`Added ${c.name}`);
              } else {
                showToast(`${c.name} is already in the list`);
              }
              citySearchInput.value = '';
              cityDropdownMenu.classList.remove('show');
            });
            cityDropdownMenu.appendChild(item);
          });
        }
        cityDropdownMenu.classList.add('show');
      });

      document.addEventListener('click', (e) => {
        if (!citySearchInput.contains(e.target) && !cityDropdownMenu.contains(e.target)) {
          cityDropdownMenu.classList.remove('show');
        }
      });
    }

    // Set Defaults
    function setDefaults() {
      const now = new Date();
      selectedDate = now.toISOString().split('T')[0];
      selectedHour = now.getHours();
      meetingDateInput.value = selectedDate;
      hourSlider.value = selectedHour;
      sliderTimeBadge.textContent = `${String(selectedHour).padStart(2, '0')}:00`;
      baseCityIndex = 0;

      activeCities = [
        { name: localCityName, country: "Your Location", tz: localTz, flag: "📍" },
        { name: "London", country: "United Kingdom", tz: "Europe/London", flag: "🇬🇧" },
        { name: "New York", country: "USA", tz: "America/New_York", flag: "🇺🇸" },
        { name: "Paris", country: "France", tz: "Europe/Paris", flag: "🇫🇷" }
      ];

      renderMatrix();
      renderSummary();
    }

    // Event Listeners
    meetingDateInput.addEventListener('change', () => {
      selectedDate = meetingDateInput.value;
      renderMatrix();
      renderSummary();
    });

    btnTodayDate.addEventListener('click', () => {
      selectedDate = new Date().toISOString().split('T')[0];
      meetingDateInput.value = selectedDate;
      renderMatrix();
      renderSummary();
    });

    hourSlider.addEventListener('input', (e) => {
      selectedHour = parseInt(e.target.value, 10);
      sliderTimeBadge.textContent = `${String(selectedHour).padStart(2, '0')}:00`;
      renderMatrix();
      renderSummary();
    });

    btnCurrentHour.addEventListener('click', () => {
      selectedHour = new Date().getHours();
      hourSlider.value = selectedHour;
      sliderTimeBadge.textContent = `${String(selectedHour).padStart(2, '0')}:00`;
      renderMatrix();
      renderSummary();
    });

    btnResetAll.addEventListener('click', () => {
      setDefaults();
      showToast("Reset to defaults");
    });

    // Copy Meeting Invitation Text
    btnCopyTimes.addEventListener('click', () => {
      if (baseCityIndex >= activeCities.length) baseCityIndex = 0;
      const baseCity = activeCities[baseCityIndex] || activeCities[0];
      const selectedUtc = getUtcForTzHour(selectedDate, selectedHour, baseCity.tz);

      let text = `Global Meeting Invitation\n`;
      text += `Date: ${selectedDate}\n\n`;

      activeCities.forEach(city => {
        const timeParts = getTimePartsInTz(selectedUtc, city.tz);
        const offset = getTzOffsetString(selectedUtc, city.tz);
        text += `• ${city.name} (${offset}): ${String(timeParts.hour).padStart(2, '0')}:00\n`;
      });

      text += `\nScheduled with VantorKit (https://vantorkit.com/tools/timezone-planner.html)`;

      navigator.clipboard.writeText(text).then(() => {
        btnCopyTimes.classList.add('copied');
        copyTimesBtnText.textContent = "✓ Copied!";
        showToast(I18N[activeLang]?.copiedToast || "Copied to clipboard!");
        setTimeout(() => {
          btnCopyTimes.classList.remove('copied');
          copyTimesBtnText.textContent = I18N[activeLang]?.btnCopyInvite || "Copy Meeting Times";
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

      renderMatrix();
      renderSummary();
    }

    // Expose setLanguage globally
    window.setLanguage = setLanguage;

    // Initialization
    setupCitySearch();
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
        "title": "Time Zone Planner – Working Hours Overlap Matrix",
        "desc": "Coordinate international meetings across world cities using a 24-hour visual overlap matrix. Schedule calculations evaluate offline on your computer."
    },
    "ar": {
        "title": "مخطط المناطق الزمنية – تداخل ساعات العمل للمقابلات",
        "desc": "نسق الاجتماعات الدولية بين مختلف المدن العالمية عبر مخطط تداخل زمني 24 ساعة. تتم مقارنة التوقيتات محلياً في جهازك لتنظيم مواعيدك بأمان."
    },
    "fr": {
        "title": "Planificateur de Fuseaux – Matrice de Travail 24h",
        "desc": "Organisez vos réunions internationales avec une matrice visuelle de chevauchement sur 24h. Les calculs d'horaires s'effectuent hors ligne."
    },
    "it": {
        "title": "Pianificatore Fusi Orari – Orari di Lavoro Condivisi",
        "desc": "Coordina riunioni tra team remoti con una matrice visuale di sovrapposizione a 24 ore. L'elaborazione degli orari avviene sul tuo dispositivo."
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
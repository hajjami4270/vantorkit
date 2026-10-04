/* ==========================================================================
       VantorKit GPA & Grade Calculation Engine
       100% Client-Side with Multi-Scale & Cumulative Support
       ========================================================================== */

    const TRANSLATIONS = {
      en: {
        backLink: "← Back to Tools",
        badgePill: "Client-Side • Privacy-First • No Logs",
        toolTitle: "GPA & Grade Calculator",
        toolSubtitle: "Compute semester and cumulative grade point averages across standard 4.0, weighted 5.0, and percentage grading scales with zero server telemetry.",
        lblGradingScale: "Grading Scale:",
        btnLoadSample: "Load Demo Semester",
        btnClearCourses: "Clear",
        panelCoursesTitle: "Semester Course Work",
        lblCumulativeToggle: "Include Prior Cumulative GPA",
        lblPriorGpa: "Prior Cumulative GPA",
        lblPriorCredits: "Prior Credits Completed",
        thCourse: "Course Name (Optional)",
        thGrade: "Grade",
        thCredits: "Credits",
        thWeight: "Weight",
        btnAddCourse: "Add Course",
        lblAutoSave: "Autosaved to browser storage",
        lblSemesterGpaTitle: "Semester Grade Point Average",
        lblTotalCredits: "Total Credits",
        lblCumulativeGpa: "Cumulative GPA",
        btnExportCsv: "Export Schedule as CSV",
        btnPrintReport: "Print Clean Report (PDF)",
        btnSaveStorage: "Save Grades to Device",
        guideHeading: "Academic GPA Standards & Calculation Formulas",
        guideSubheading: "Learn how quality points, weighted course credits, and cumulative averages are determined across universities and high schools.",
        g1Title: "Quality Points & Credit Weighting",
        g1Desc: "Courses with more credit hours have a proportionally higher impact on your GPA. A 4-credit calculus course with an A provides 16 quality points (4.0 × 4), whereas a 1-credit lab with an A yields only 4 quality points. Your final GPA equals total quality points divided by total attempted credits.",
        g2Title: "Weighted 5.0 vs Unweighted 4.0",
        g2Desc: "Standard 4.0 grading treats all courses equally. Weighted 5.0 scales reward academic rigor by granting +0.5 points for Honors and +1.0 point for AP, IB, or Dual Enrollment college-level courses, helping students maintain a competitive admissions profile.",
        g3Title: "FERPA-Grade Local Privacy",
        g3Desc: "Student grades, transcripts, and course records are confidential. VantorKit processes all math locally within your browser sandbox. No grades are transmitted across networks, uploaded to databases, or logged in tracking analytics.",
        faq1Q: "What GPA is required for Dean's List or Latin Honors?",
        faq1A: "While specific thresholds vary by institution, general standards require: Dean's List (3.50+), Cum Laude (3.50 - 3.74), Magna Cum Laude (3.75 - 3.89), and Summa Cum Laude (3.90 - 4.00).",
        faq2Q: "How does Cumulative GPA work with prior semesters?",
        faq2A: "Cumulative GPA is not a simple average of semester GPAs. It weighs total credit volume. The formula is: ((Prior GPA × Prior Credits) + (Current Semester Quality Points)) / (Prior Credits + Current Credits).",
        faq3Q: "How do Pass/Fail or Withdrawn (W) courses affect my GPA?",
        faq3A: "Pass/Fail and Withdrawn courses generally do not factor into GPA calculations, as they award credit toward graduation without contributing quality points or affecting your grade point average.",
        faq4Q: "Can I save my grades and revisit them later?",
        faq4A: "Yes! Your course list automatically saves to your browser's local storage. When you return to VantorKit on the same device, your semester courses and cumulative inputs will be restored immediately.",
        toastSaved: "Grades saved to local storage!",
        toastCleared: "Courses reset.",
        toastCsv: "CSV report downloaded successfully!"
      },
      ar: {
        backLink: "← العودة إلى الأدوات",
        badgePill: "على جهازك 100% • خصوصية تامة • دون خوادم",
        toolTitle: "حاسبة المعدل التراكمي والدرجات",
        toolSubtitle: "احسب المعدل الفصلي والتراكمي بدقة عبر مقاييس 4.0 القياسي و 5.0 الموزون والنسبة المئوية مع حفظ الخصوصية بالكامل.",
        lblGradingScale: "نظام التقييم:",
        btnLoadSample: "تحميل فصل تجريبي",
        btnClearCourses: "مسح",
        panelCoursesTitle: "مقررات الفصل الدراسي",
        lblCumulativeToggle: "تضمين المعدل التراكمي السابق",
        lblPriorGpa: "المعدل التراكمي السابق",
        lblPriorCredits: "الساعات المكتسبة السابقة",
        thCourse: "اسم المقرر (اختياري)",
        thGrade: "الدرجة",
        thCredits: "الساعات",
        thWeight: "المستوى",
        btnAddCourse: "إضافة مقرر",
        lblAutoSave: "حفظ تلقائي في المتصفح",
        lblSemesterGpaTitle: "المعدل الفصلي الحالي",
        lblTotalCredits: "إجمالي الساعات",
        lblCumulativeGpa: "المعدل التراكمي",
        btnExportCsv: "تصدير السجل كملف CSV",
        btnPrintReport: "طباعة التقرير (PDF)",
        btnSaveStorage: "حفظ الدرجات على الجهاز",
        guideHeading: "معايير حساب المعدل الأكاديمي والمعادلات الرياضية",
        guideSubheading: "تعرف على كيفية احتساب نقاط الجودة وتأثير الساعات المعتمدة في الجامعات والمدارس الثانوية.",
        g1Title: "نقاط الجودة ووزن الساعات",
        g1Desc: "المقررات ذات الساعات الأكثر يكون لها تأثير أكبر على المعدل. مقرر 4 ساعات بتقدير ممتاز يمنح 16 نقطة، بينما مقرر ساعة واحدة يمنح 4 نقاط. المعدل = مجموع النقاط مقسوماً على مجموع الساعات.",
        g2Title: "المقياس الموزون 5.0 مقابل 4.0",
        g2Desc: "المقياس 4.0 يعامل جميع المواد بالتساوي، بينما المقياس الموزون 5.0 يمنح نقاطاً إضافية لمقررات الشرف والمستوى المتقدم AP لمكافأة الجهد الإضافي للطلاب.",
        g3Title: "خصوصية محلية تامة 100%",
        g3Desc: "سجلات الطلاب وسجلات الدرجات سرية تماماً. تنفذ جميع العمليات داخل متصفحك دون إرسال أي درجة أو معلومة إلى أي خادم خارجي.",
        faq1Q: "ما هو المعدل المطلوب لمراتب الشرف أو قائمة العميد؟",
        faq1A: "تتطلب المعايير الشائعة: قائمة العميد (3.50 فما فوق)، مرتبة الشرف الثانية (3.75 - 3.89)، ومرتبة الشرف الأولى (3.90 - 4.00).",
        faq2Q: "كيف يتأثر المعدل التراكمي بالفصول السابقة؟",
        faq2A: "المعدل التراكمي يراعي حجم الساعات المكتملة: ((المعدل السابق × الساعات السابقة) + نقاط الفصل الحالي) ÷ (إجمالي الساعات السابقة والحالية).",
        faq3Q: "كيف تؤثر مواد ناجح/راسب على المعدل؟",
        faq3A: "مقررات ناجح/راسب تحتسب كساعات تخرج فقط ولا تدخل ضمن حساب المعدل الفصلي أو التراكمي.",
        faq4Q: "هل يمكنني حفظ المقررات والعودة لاحقاً؟",
        faq4A: "نعم، تحفظ قائمة المقررات تلقائياً على جهازك محلياً وتستعاد فور فتح الصفحة مرة أخرى.",
        toastSaved: "تم حفظ المقررات بنجاح!",
        toastCleared: "تمت إعادة تعيين المقررات.",
        toastCsv: "تم تصدير ملف CSV بنجاح!"
      },
      fr: {
        backLink: "← Retour aux Outils",
        badgePill: "Côté Client • Confidentialité Totale • Zéro Log",
        toolTitle: "Calculateur de Moyenne & Notes (GPA)",
        toolSubtitle: "Calculez votre moyenne semestrielle et cumulative sur l'échelle 4.0, pondérée 5.0 ou en pourcentage en toute confidentialité.",
        lblGradingScale: "Échelle de Notation :",
        btnLoadSample: "Charger Exemple Démo",
        btnClearCourses: "Effacer",
        panelCoursesTitle: "Cours du Semestre",
        lblCumulativeToggle: "Inclure Moyenne Cumulative Antérieure",
        lblPriorGpa: "Moyenne Cumulative Antérieure",
        lblPriorCredits: "Crédits Antérieurs Validés",
        thCourse: "Nom du Cours (Optionnel)",
        thGrade: "Note",
        thCredits: "Crédits",
        thWeight: "Niveau",
        btnAddCourse: "Ajouter un Cours",
        lblAutoSave: "Sauvegarde locale automatique",
        lblSemesterGpaTitle: "Moyenne du Semestre (GPA)",
        lblTotalCredits: "Crédits Totaux",
        lblCumulativeGpa: "GPA Cumulatif",
        btnExportCsv: "Exporter le Relevé en CSV",
        btnPrintReport: "Imprimer le Relevé (PDF)",
        btnSaveStorage: "Sauvegarder les Notes",
        guideHeading: "Normes Universitaires & Formules du GPA",
        guideSubheading: "Comprenez la pondération des crédits et l'impact des cours avancés sur vos relevés académiques.",
        g1Title: "Points Qualité & Pondération",
        g1Desc: "Chaque cours impacte votre moyenne selon son nombre de crédits. Un cours de 4 crédits avec note A apporte 16 points qualité, contre 4 points pour un cours de 1 crédit. La moyenne = points qualité totaux / crédits tentés.",
        g2Title: "Échelle 5.0 Pondérée vs 4.0 Standard",
        g2Desc: "L'échelle 4.0 évalue tous les cours de la même manière. L'échelle 5.0 valorise l'exigence des cours avancés (Honors, AP) en attribuant des points supplémentaires.",
        g3Title: "Confidentialité Étudiante 100% Locale",
        g3Desc: "Vos notes et relevés sont strictement confidentiels. VantorKit effectue tous les calculs localement sans aucun transfert de données vers un serveur distant.",
        faq1Q: "Quelle moyenne pour figurer sur la Liste du Doyen ?",
        faq1A: "Généralement, une moyenne de 3.50+ donne accès à la Dean's List, 3.75+ pour Magna Cum Laude et 3.90+ pour Summa Cum Laude.",
        faq2Q: "Comment est calculée la moyenne cumulative ?",
        faq2A: "La formule pondère tous les crédits passés et actuels : ((GPA Antérieur × Crédits Antérieurs) + Points Qualité du Semestre) / Crédits Totaux.",
        faq3Q: "Les mentions Réussi/Échoué impactent-elles le GPA ?",
        faq3A: "Non, ces cours valident des crédits pour l'obtention du diplôme mais ne modifient pas la moyenne générale.",
        faq4Q: "Puis-je retrouver mes cours plus tard ?",
        faq4A: "Oui, la liste des cours est sauvegardée dans le stockage local de votre navigateur et rechargée automatiquement.",
        toastSaved: "Notes sauvegardées localement !",
        toastCleared: "Liste des cours réinitialisée.",
        toastCsv: "Fichier CSV téléchargé avec succès !"
      },
      it: {
        backLink: "← Torna agli Strumenti",
        badgePill: "Lato Client • Massima Privacy • Zero Log",
        toolTitle: "Calcolatore Media & Voti Accademici",
        toolSubtitle: "Calcola la media ponderata degli esami, GPA su scala 4.0, 5.0 o in percentuale con supporto crediti e media cumulativa.",
        lblGradingScale: "Scala di Valutazione:",
        btnLoadSample: "Carica Semestre Demo",
        btnClearCourses: "Cancella",
        panelCoursesTitle: "Corsi del Semestre",
        lblCumulativeToggle: "Includi Media Precedente",
        lblPriorGpa: "GPA Cumulativo Precedente",
        lblPriorCredits: "Crediti Precedenti Acquisiti",
        thCourse: "Nome Corso (Opzionale)",
        thGrade: "Voto",
        thCredits: "Crediti (CFU)",
        thWeight: "Tipologia",
        btnAddCourse: "Aggiungi Corso",
        lblAutoSave: "Salvataggio automatico nel browser",
        lblSemesterGpaTitle: "Media Ponderata Semestre",
        lblTotalCredits: "Crediti Totali",
        lblCumulativeGpa: "GPA Cumulativo",
        btnExportCsv: "Esporta Libretto in CSV",
        btnPrintReport: "Stampa Prospetto (PDF)",
        btnSaveStorage: "Salva Voti sul Dispositivo",
        guideHeading: "Formule e Criteri del Calcolo Accademico",
        guideSubheading: "Scopri come i crediti formativi (CFU) pesano sulla media e determinano le lodi accademiche.",
        g1Title: "Punteggi Qualità & Ponderazione CFU",
        g1Desc: "La media ponderata moltiplica il voto di ciascun esame per i rispettivi CFU. Un esame da 9 CFU ha un peso triplo rispetto a uno da 3 CFU sul conteggio finale.",
        g2Title: "Scala 4.0 vs Scala Ponderata 5.0",
        g2Desc: "La scala internazionale 4.0 è il riferimento accademico standard. Le scale a 5.0 assegnano punti extra per corsi avanzati, honors o internazionali.",
        g3Title: "Riservatezza Totale per gli Studenti",
        g3Desc: "I tuoi voti non vengono mai inviati a server esterni né tracciati da cookies. Tutto viene calcolato sul tuo dispositivo.",
        faq1Q: "Quali requisiti servono per le lodi accademiche?",
        faq1A: "Negli standard internazionali, una media superiore a 3.75 garantisce le menzioni d'onore e la Dean's List (3.50+).",
        faq2Q: "Come si calcola la media cumulativa?",
        faq2A: "Si sommano tutti i punti qualità precedenti e attuali e si dividono per la somma totale di tutti i crediti formativi.",
        faq3Q: "Gli esami di idoneità incidono sul voto di laurea?",
        faq3A: "Le idoneità assegnano CFU utili al piano di studi ma non concorrono alla determinazione del punteggio di media.",
        faq4Q: "Posso salvare il piano esami per la prossima volta?",
        faq4A: "Sì, i dati vengono conservati nella memoria del browser e saranno disponibili alla prossima apertura della pagina.",
        toastSaved: "Voti salvati con successo!",
        toastCleared: "Lista esami azzerata.",
        toastCsv: "File CSV esportato correttamente!"
      }
    };

    let currentLang = 'en';
    let currentScale = '4.0'; // '4.0', '5.0', 'percentage'
    let isCumulativeActive = false;

    // Grade points mapping for 4.0 scale
    const SCALE_4_0 = [
      { label: "A+ (4.0)", value: 4.0 },
      { label: "A  (4.0)", value: 4.0 },
      { label: "A- (3.7)", value: 3.7 },
      { label: "B+ (3.3)", value: 3.3 },
      { label: "B  (3.0)", value: 3.0 },
      { label: "B- (2.7)", value: 2.7 },
      { label: "C+ (2.3)", value: 2.3 },
      { label: "C  (2.0)", value: 2.0 },
      { label: "C- (1.7)", value: 1.7 },
      { label: "D+ (1.3)", value: 1.3 },
      { label: "D  (1.0)", value: 1.0 },
      { label: "D- (0.7)", value: 0.7 },
      { label: "F  (0.0)", value: 0.0 }
    ];

    // Grade points mapping for 5.0 scale
    const SCALE_5_0 = [
      { label: "A+ (5.0)", value: 5.0 },
      { label: "A  (5.0)", value: 5.0 },
      { label: "A- (4.7)", value: 4.7 },
      { label: "B+ (4.3)", value: 4.3 },
      { label: "B  (4.0)", value: 4.0 },
      { label: "B- (3.7)", value: 3.7 },
      { label: "C+ (3.3)", value: 3.3 },
      { label: "C  (3.0)", value: 3.0 },
      { label: "C- (2.7)", value: 2.7 },
      { label: "D+ (2.3)", value: 2.3 },
      { label: "D  (2.0)", value: 2.0 },
      { label: "D- (1.7)", value: 1.7 },
      { label: "F  (0.0)", value: 0.0 }
    ];

    let courses = [];

    function initLanguage() {
      const stored = localStorage.getItem('vantorkit_lang');
      if (stored && TRANSLATIONS[stored]) {
        currentLang = stored;
      }
      applyLanguage(currentLang);

      const toggleBtn = document.getElementById('langToggleBtn');
      const menu = document.getElementById('langMenu');
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
      });

      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          if (lang && TRANSLATIONS[lang]) {
            currentLang = lang;
            localStorage.setItem('vantorkit_lang', lang);
            applyLanguage(lang);
            toggleBtn.setAttribute('aria-expanded', 'false');
            menu.classList.remove('show');
            calculateGpa();
          }
        });
      });
    }

    function applyLanguage(lang) {
      window.applyLanguage = applyLanguage;
      const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
      const html = document.getElementById('htmlRoot');
      html.setAttribute('lang', lang);
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
      });

      const langNames = { en: 'English', ar: 'العربية', fr: 'Français', it: 'Italiano' };
      document.getElementById('currentLangLabel').textContent = langNames[lang] || 'English';

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
          el.innerHTML = t[key];
        }
      });
    }

    function showToast(message) {
      const toast = document.getElementById('toastBox');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2600);
    }

    /* ==========================================================================
       Course Management & Calculation Engine
       ========================================================================== */

    const coursesList = document.getElementById('coursesList');
    const dispSemesterGpa = document.getElementById('dispSemesterGpa');
    const dispScaleMax = document.getElementById('dispScaleMax');
    const dispStandingBadge = document.getElementById('dispStandingBadge');
    const dispStandingText = document.getElementById('dispStandingText');
    const dispTotalCredits = document.getElementById('dispTotalCredits');
    const dispCourseCount = document.getElementById('dispCourseCount');
    const dispCumulativeGpa = document.getElementById('dispCumulativeGpa');
    const dispCumulativeCredits = document.getElementById('dispCumulativeCredits');
    const ringProgress = document.getElementById('ringProgress');

    const cumulBox = document.getElementById('cumulBox');
    const cumulCheck = document.getElementById('cumulCheck');
    const cumulInputs = document.getElementById('cumulInputs');
    const inputPriorGpa = document.getElementById('inputPriorGpa');
    const inputPriorCredits = document.getElementById('inputPriorCredits');

    function createCourseItem(name = '', grade = 4.0, credits = 3, weight = 'regular') {
      return {
        id: 'c_' + Math.random().toString(36).substr(2, 9),
        name,
        grade,
        credits,
        weight
      };
    }

    function renderCourseRow(course) {
      const row = document.createElement('div');
      row.className = `course-row ${currentScale === '5.0' ? 'weighted' : ''}`;
      row.id = course.id;

      // 1. Course Name Input
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.className = 'calc-input course-name';
      nameInput.placeholder = 'e.g. Calculus I';
      nameInput.value = course.name;
      nameInput.addEventListener('input', (e) => {
        course.name = e.target.value;
        saveToLocalStorage(false);
      });

      // 2. Grade Input or Select
      let gradeEl;
      if (currentScale === 'percentage') {
        gradeEl = document.createElement('input');
        gradeEl.type = 'number';
        gradeEl.className = 'calc-input';
        gradeEl.placeholder = '0 - 100%';
        gradeEl.min = '0';
        gradeEl.max = '100';
        gradeEl.value = course.grade >= 0 && course.grade <= 100 && course.grade > 4.5 ? course.grade : 92;
        course.grade = parseFloat(gradeEl.value);
        gradeEl.addEventListener('input', (e) => {
          course.grade = Math.min(100, Math.max(0, parseFloat(e.target.value) || 0));
          calculateGpa();
        });
      } else {
        gradeEl = document.createElement('select');
        gradeEl.className = 'course-select';
        const scaleOpts = currentScale === '5.0' ? SCALE_5_0 : SCALE_4_0;
        scaleOpts.forEach(opt => {
          const optEl = document.createElement('option');
          optEl.value = opt.value;
          optEl.textContent = opt.label;
          if (Math.abs(opt.value - course.grade) < 0.05) {
            optEl.selected = true;
          }
          gradeEl.appendChild(optEl);
        });
        gradeEl.addEventListener('change', (e) => {
          course.grade = parseFloat(e.target.value);
          calculateGpa();
        });
      }

      // 3. Weight Select (Only for 5.0 scale)
      let weightEl = null;
      if (currentScale === '5.0') {
        weightEl = document.createElement('select');
        weightEl.className = 'course-select';
        weightEl.innerHTML = `
          <option value="regular">Regular (+0.0)</option>
          <option value="honors">Honors (+0.5)</option>
          <option value="ap">AP / IB (+1.0)</option>
        `;
        weightEl.value = course.weight || 'regular';
        weightEl.addEventListener('change', (e) => {
          course.weight = e.target.value;
          calculateGpa();
        });
      }

      // 4. Credits Input
      const creditsInput = document.createElement('input');
      creditsInput.type = 'number';
      creditsInput.className = 'calc-input';
      creditsInput.min = '0.5';
      creditsInput.max = '12';
      creditsInput.step = '0.5';
      creditsInput.value = course.credits || 3;
      creditsInput.addEventListener('input', (e) => {
        course.credits = Math.max(0.5, parseFloat(e.target.value) || 0.5);
        calculateGpa();
      });

      // 5. Delete Button
      const delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'btn-del-row';
      delBtn.title = 'Delete course';
      delBtn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      `;
      delBtn.addEventListener('click', () => {
        courses = courses.filter(c => c.id !== course.id);
        row.remove();
        calculateGpa();
        saveToLocalStorage(false);
      });

      row.appendChild(nameInput);
      row.appendChild(gradeEl);
      if (weightEl) row.appendChild(weightEl);
      row.appendChild(creditsInput);
      row.appendChild(delBtn);

      return row;
    }

    function renderAllCourses() {
      coursesList.innerHTML = '';
      const header = document.getElementById('rowHeader');
      if (currentScale === '5.0') {
        header.className = 'course-row-header weighted';
        header.innerHTML = `
          <span data-i18n="thCourse">${TRANSLATIONS[currentLang]?.thCourse || 'Course Name'}</span>
          <span data-i18n="thGrade">${TRANSLATIONS[currentLang]?.thGrade || 'Grade'}</span>
          <span data-i18n="thWeight">${TRANSLATIONS[currentLang]?.thWeight || 'Weight'}</span>
          <span data-i18n="thCredits">${TRANSLATIONS[currentLang]?.thCredits || 'Credits'}</span>
          <span></span>
        `;
      } else {
        header.className = 'course-row-header';
        header.innerHTML = `
          <span data-i18n="thCourse">${TRANSLATIONS[currentLang]?.thCourse || 'Course Name'}</span>
          <span data-i18n="thGrade">${TRANSLATIONS[currentLang]?.thGrade || 'Grade'}</span>
          <span data-i18n="thCredits">${TRANSLATIONS[currentLang]?.thCredits || 'Credits'}</span>
          <span></span>
        `;
      }

      courses.forEach(course => {
        coursesList.appendChild(renderCourseRow(course));
      });
      calculateGpa();
    }

    function percentageToGradePoints(pct) {
      if (pct >= 93) return 4.0;
      if (pct >= 90) return 3.7;
      if (pct >= 87) return 3.3;
      if (pct >= 83) return 3.0;
      if (pct >= 80) return 2.7;
      if (pct >= 77) return 2.3;
      if (pct >= 73) return 2.0;
      if (pct >= 70) return 1.7;
      if (pct >= 67) return 1.3;
      if (pct >= 65) return 1.0;
      return 0.0;
    }

    function calculateGpa() {
      let totalQualityPoints = 0;
      let totalSemesterCredits = 0;

      courses.forEach(course => {
        let pts = 0;
        if (currentScale === 'percentage') {
          pts = percentageToGradePoints(course.grade);
        } else {
          pts = parseFloat(course.grade) || 0;
          if (currentScale === '5.0') {
            if (course.weight === 'honors') pts = Math.min(5.0, pts + 0.5);
            else if (course.weight === 'ap') pts = Math.min(5.0, pts + 1.0);
          }
        }
        const cr = parseFloat(course.credits) || 0;
        totalQualityPoints += pts * cr;
        totalSemesterCredits += cr;
      });

      const maxScaleNum = currentScale === '5.0' ? 5.0 : 4.0;
      dispScaleMax.textContent = `/ ${maxScaleNum.toFixed(2)}`;

      const semesterGpa = totalSemesterCredits > 0 ? (totalQualityPoints / totalSemesterCredits) : 0;
      dispSemesterGpa.textContent = semesterGpa.toFixed(2);
      dispTotalCredits.textContent = totalSemesterCredits.toFixed(1);
      dispCourseCount.textContent = `${courses.length} Courses Attempted`;

      // Update SVG radial ring (circumference is 2 * PI * 56 ≈ 351.86)
      const circumference = 351.86;
      const gpaRatio = Math.min(1.0, semesterGpa / maxScaleNum);
      const offset = circumference - (gpaRatio * circumference);
      ringProgress.style.strokeDashoffset = offset;

      // Color coding & Academic Standing
      let badgeText = "Good Standing";
      let ringColor = "#3b82f6";
      let badgeColor = "rgba(59, 130, 246, 0.15)";
      let textColor = "#60a5fa";

      const normGpa = (semesterGpa / maxScaleNum) * 4.0; // Normalized to 4.0 standard

      if (normGpa >= 3.90) {
        badgeText = "Summa Cum Laude / Dean's List 🏆";
        ringColor = "#10b981";
        badgeColor = "rgba(16, 185, 129, 0.15)";
        textColor = "#34d399";
      } else if (normGpa >= 3.75) {
        badgeText = "Magna Cum Laude / High Honors 🌟";
        ringColor = "#10b981";
        badgeColor = "rgba(16, 185, 129, 0.15)";
        textColor = "#34d399";
      } else if (normGpa >= 3.50) {
        badgeText = "Cum Laude / Dean's List 🎖️";
        ringColor = "#3b82f6";
        badgeColor = "rgba(59, 130, 246, 0.15)";
        textColor = "#60a5fa";
      } else if (normGpa >= 3.00) {
        badgeText = "Good Academic Standing 👍";
        ringColor = "#3b82f6";
        badgeColor = "rgba(59, 130, 246, 0.15)";
        textColor = "#60a5fa";
      } else if (normGpa >= 2.00) {
        badgeText = "Satisfactory Progress ℹ️";
        ringColor = "#f59e0b";
        badgeColor = "rgba(245, 158, 11, 0.15)";
        textColor = "#fbbf24";
      } else if (normGpa > 0) {
        badgeText = "Academic Review Needed ⚠️";
        ringColor = "#ef4444";
        badgeColor = "rgba(239, 68, 68, 0.15)";
        textColor = "#f87171";
      } else {
        badgeText = "No Courses Added";
        ringColor = "rgba(255, 255, 255, 0.1)";
        badgeColor = "rgba(255, 255, 255, 0.05)";
        textColor = "var(--text-muted)";
      }

      ringProgress.style.stroke = ringColor;
      dispStandingBadge.style.background = badgeColor;
      dispStandingBadge.style.color = textColor;
      dispStandingText.textContent = badgeText;

      // Cumulative Calculation
      if (isCumulativeActive) {
        const priorGpa = parseFloat(inputPriorGpa.value) || 0;
        const priorCredits = parseFloat(inputPriorCredits.value) || 0;
        const totalCreditsCombined = priorCredits + totalSemesterCredits;
        const priorQualityPoints = priorGpa * priorCredits;
        const cumulativeGpa = totalCreditsCombined > 0 
          ? ((priorQualityPoints + totalQualityPoints) / totalCreditsCombined) 
          : 0;

        dispCumulativeGpa.textContent = cumulativeGpa.toFixed(2);
        dispCumulativeCredits.textContent = `${totalCreditsCombined.toFixed(1)} Total Credits`;
      } else {
        dispCumulativeGpa.textContent = semesterGpa.toFixed(2);
        dispCumulativeCredits.textContent = `${totalSemesterCredits.toFixed(1)} Semester Credits`;
      }

      saveToLocalStorage(false);
    }

    function saveToLocalStorage(showFeedback = true) {
      try {
        const payload = {
          scale: currentScale,
          cumulativeActive: isCumulativeActive,
          priorGpa: inputPriorGpa.value,
          priorCredits: inputPriorCredits.value,
          courses
        };
        localStorage.setItem('vantorkit_gpa_data', JSON.stringify(payload));
        if (showFeedback) {
          showToast(TRANSLATIONS[currentLang]?.toastSaved || 'Grades saved to local storage!');
        }
      } catch (e) {
        console.error('Local storage save failed:', e);
      }
    }

    function loadFromLocalStorage() {
      try {
        const data = localStorage.getItem('vantorkit_gpa_data');
        if (data) {
          const parsed = JSON.parse(data);
          if (parsed.scale) {
            currentScale = parsed.scale;
            document.querySelectorAll('.scale-btn').forEach(btn => {
              btn.classList.toggle('active', btn.getAttribute('data-scale') === currentScale);
            });
          }
          if (parsed.cumulativeActive !== undefined) {
            isCumulativeActive = parsed.cumulativeActive;
            cumulCheck.checked = isCumulativeActive;
            cumulBox.classList.toggle('active', isCumulativeActive);
            cumulInputs.classList.toggle('show', isCumulativeActive);
          }
          if (parsed.priorGpa) inputPriorGpa.value = parsed.priorGpa;
          if (parsed.priorCredits) inputPriorCredits.value = parsed.priorCredits;
          if (Array.isArray(parsed.courses) && parsed.courses.length > 0) {
            courses = parsed.courses;
            renderAllCourses();
            return;
          }
        }
      } catch (e) {
        console.error('Local storage load error:', e);
      }
      loadDemoSemester();
    }

    function loadDemoSemester() {
      courses = [
        createCourseItem('Calculus I', 4.0, 4, 'ap'),
        createCourseItem('Computer Science 101', 4.0, 4, 'honors'),
        createCourseItem('English Composition', 3.7, 3, 'regular'),
        createCourseItem('Physics with Lab', 3.3, 4, 'honors'),
        createCourseItem('Public Speaking', 4.0, 2, 'regular')
      ];
      renderAllCourses();
    }

    /* ==========================================================================
       Event Listeners & Action Buttons
       ========================================================================== */

    function setupEventListeners() {
      // Scale Buttons
      document.querySelectorAll('.scale-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.scale-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentScale = btn.getAttribute('data-scale');
          renderAllCourses();
        });
      });

      // Add Course
      document.getElementById('btnAddCourse').addEventListener('click', () => {
        const newCourse = createCourseItem('', 4.0, 3, 'regular');
        courses.push(newCourse);
        coursesList.appendChild(renderCourseRow(newCourse));
        calculateGpa();
      });

      // Cumulative Checkbox & Inputs
      cumulCheck.addEventListener('change', (e) => {
        isCumulativeActive = e.target.checked;
        cumulBox.classList.toggle('active', isCumulativeActive);
        cumulInputs.classList.toggle('show', isCumulativeActive);
        calculateGpa();
      });
      inputPriorGpa.addEventListener('input', calculateGpa);
      inputPriorCredits.addEventListener('input', calculateGpa);

      // Load Sample Demo
      document.getElementById('btnLoadSample').addEventListener('click', () => {
        loadDemoSemester();
        showToast('Demo semester loaded!');
      });

      // Clear Courses
      document.getElementById('btnClearCourses').addEventListener('click', () => {
        if (confirm('Clear all course grades and start fresh?')) {
          courses = [createCourseItem('', 4.0, 3, 'regular')];
          renderAllCourses();
          showToast(TRANSLATIONS[currentLang]?.toastCleared || 'Courses reset.');
        }
      });

      // Save to Device Button
      document.getElementById('btnSaveStorage').addEventListener('click', () => {
        saveToLocalStorage(true);
      });

      // Export as CSV
      document.getElementById('btnExportCsv').addEventListener('click', () => {
        if (courses.length === 0) return;
        let csv = 'Course Name,Grade,Credits,Quality Points\n';
        courses.forEach(c => {
          const pts = currentScale === 'percentage' ? percentageToGradePoints(c.grade) : c.grade;
          const qPoints = (pts * c.credits).toFixed(2);
          csv += `"${(c.name || 'Untitled Course').replace(/"/g, '""')}",${c.grade},${c.credits},${qPoints}\n`;
        });
        csv += `\n"Total Credits",,${dispTotalCredits.textContent},\n`;
        csv += `"Semester GPA",,${dispSemesterGpa.textContent},\n`;
        if (isCumulativeActive) {
          csv += `"Cumulative GPA",,${dispCumulativeGpa.textContent},\n`;
        }

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `vantorkit-gpa-report-${new Date().toISOString().slice(0,10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        showToast(TRANSLATIONS[currentLang]?.toastCsv || 'CSV report downloaded!');
      });

      // Print Report
      document.getElementById('btnPrintReport').addEventListener('click', () => {
        window.print();
      });
    }

    // Initialize Tool
    document.addEventListener('DOMContentLoaded', () => {
      initLanguage();
      setupEventListeners();
      loadFromLocalStorage();
    });

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
        "title": "GPA & Grade Calculator – Academic Average Tracker",
        "desc": "Tally semester and cumulative credit points on 4.0 or weighted 5.0 systems. Grades stay strictly in local memory with exportable transcript records."
    },
    "ar": {
        "title": "حاسبة المعدل التراكمي والفصلي – حساب الدرجات بدقة",
        "desc": "احسب معدلك الفصلي والتراكمي بالساعات المعتمدة على مقياس 4.0 أو 5.0 الموزون. تظل سجلاتك الدراسية محفوظة محلياً في جهازك مع إمكانية التصدير."
    },
    "fr": {
        "title": "Calculateur de Moyenne & GPA – Suivi des Notes",
        "desc": "Calculez votre moyenne semestrielle et cumulative sur barème 4.0 ou pondéré. Vos notes restent confidentielles dans votre navigateur personnel."
    },
    "it": {
        "title": "Calcolatore Media Esami & GPA – Calcolo Voti Universitari",
        "desc": "Determina la media pesata dei tuoi crediti universitari e il punteggio GPA. I tuoi dati accademici restano riservati nella memoria del browser."
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
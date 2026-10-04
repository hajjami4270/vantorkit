(function () {
      'use strict';

      // --- DOM Elements ---
      const inputPrincipal = document.getElementById('inputPrincipal');
      const inputMonthly = document.getElementById('inputMonthly');
      const inputRate = document.getElementById('inputRate');
      const yearsSlider = document.getElementById('yearsSlider');
      const yearsInput = document.getElementById('yearsInput');
      const yearsLabel = document.getElementById('yearsLabel');
      const selectFrequency = document.getElementById('selectFrequency');
      const btnResetDefaults = document.getElementById('btnResetDefaults');

      const kpiFutureValue = document.getElementById('kpiFutureValue');
      const kpiFutureMeta = document.getElementById('kpiFutureMeta');
      const kpiTotalPrincipal = document.getElementById('kpiTotalPrincipal');
      const kpiPrincipalMeta = document.getElementById('kpiPrincipalMeta');
      const kpiTotalInterest = document.getElementById('kpiTotalInterest');
      const kpiInterestMeta = document.getElementById('kpiInterestMeta');

      const ratioPrincipalText = document.getElementById('ratioPrincipalText');
      const ratioInterestText = document.getElementById('ratioInterestText');
      const ratioFillPrincipal = document.getElementById('ratioFillPrincipal');
      const ratioFillInterest = document.getElementById('ratioFillInterest');

      const scheduleTableBody = document.getElementById('scheduleTableBody');
      const btnCopySummary = document.getElementById('btnCopySummary');
      const btnPrintReport = document.getElementById('btnPrintReport');

      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');
      let toastTimer = null;

      let chartInstance = null;

      // --- i18n Translation Dictionary ---
      const I18N = {
        en: {
          langLabel: "English",
          backLink: "← Back to Tools",
          brandBadge: "Math &amp; Finance • Client-Side Simulation • Zero Refresh",
          pageTitle: 'Compound Interest <span>Calculator</span>',
          pageSubtitle: "Simulate future portfolio growth, recurring monthly deposits, and compounding frequencies in real time with interactive charts and year-by-year amortization schedules.",
          cardTitle: "Investment Parameters",
          btnReset: "Reset",
          labelPrincipal: "Initial Investment (Principal)",
          labelMonthly: "Monthly Contribution",
          labelRate: "Estimated Annual Return Rate",
          labelHorizon: "Investment Horizon",
          labelFrequency: "Compounding Frequency",
          freq_12: "Monthly (12/yr)",
          freq_365: "Daily (365/yr)",
          freq_4: "Quarterly (4/yr)",
          freq_2: "Semi-Annually (2/yr)",
          freq_1: "Annually (1/yr)",
          kpiFuture: "Future Investment Value",
          kpiPrincipal: "Total Principal Invested",
          kpiInterest: "Total Interest Earned",
          ratioPrincipal: "Principal",
          ratioInterest: "Interest",
          chartTitle: "Portfolio Accumulation Over Time",
          btnCopySummary: "Copy Summary",
          btnPrintReport: "Print / PDF",
          scheduleTitle: "Annual Amortization &amp; Growth Schedule",
          scheduleSub: "Year-by-year compounding trajectory",
          thYear: "Year",
          thStart: "Starting Balance",
          thDeposits: "Annual Deposits",
          thInterest: "Interest Earned",
          thEnd: "Ending Balance",
          copied: "Copied!",
          toastCopied: "Summary copied to clipboard!",
          toastReset: "Reset to default values",
          chartPrincipal: "Principal Invested",
          chartInterest: "Interest Earned",
          chartStart: "Start",
          chartYr: "Yr",
          yearWord: "Year",
          yearSingular: "Year",
          yearsPlural: "Years",
          atYear: "At year",
          returnWord: "return",
          baseWord: "base",
          depositsWord: "deposits",
          ofPortfolio: "of portfolio",
          footerText: "© 2026 VantorKit. Fast, Private &amp; Free Web Utilities. All client processing is performed locally."
        },
        ar: {
          langLabel: "العربية",
          backLink: "← العودة إلى الأدوات",
          brandBadge: "الرياضيات والمالية • محاكاة محلية • استجابة فورية",
          pageTitle: 'حاسبة <span>الفائدة المركبة</span>',
          pageSubtitle: "حاكي نمو محفظتك الاستثمارية، والإيداعات الشهرية المتكررة، وتواتر الفائدة المركبة في الوقت الفعلي مع رسوم بيانية تفاعلية وجداول إهلاك سنوية.",
          cardTitle: "معلمات الاستثمار",
          btnReset: "إعادة ضبط",
          labelPrincipal: "الاستثمار الأولي (رأس المال)",
          labelMonthly: "المساهمة الشهرية",
          labelRate: "معدل العائد السنوي المتوقع",
          labelHorizon: "أفق الاستثمار",
          labelFrequency: "تكرار الفائدة المركبة",
          freq_12: "شهرياً (12/سنة)",
          freq_365: "يومياً (365/سنة)",
          freq_4: "ربع سنوياً (4/سنة)",
          freq_2: "نصف سنوياً (2/سنة)",
          freq_1: "سنوياً (1/سنة)",
          kpiFuture: "قيمة الاستثمار المستقبلية",
          kpiPrincipal: "إجمالي رأس المال المستثمر",
          kpiInterest: "إجمالي الفوائد المكتسبة",
          ratioPrincipal: "رأس المال",
          ratioInterest: "الأرباح",
          chartTitle: "تراكم المحفظة بمرور الوقت",
          btnCopySummary: "نسخ الملخص",
          btnPrintReport: "طباعة / PDF",
          scheduleTitle: "جدول النمو والإهلاك السنوي",
          scheduleSub: "مسار الفائدة المركبة سنة بسنة",
          thYear: "السنة",
          thStart: "رصيد البداية",
          thDeposits: "الودائع السنوية",
          thInterest: "الفائدة المكتسبة" ,
          thEnd: "رصيد النهاية",
          copied: "تم النسخ!",
          toastCopied: "تم نسخ الملخص إلى الحافظة!",
          toastReset: "تمت إعادة الضبط للقيم الافتراضية",
          chartPrincipal: "رأس المال المستثمر",
          chartInterest: "الفائدة المكتسبة",
          chartStart: "البداية",
          chartYr: "سنة",
          yearWord: "السنة",
          yearSingular: "سنة",
          yearsPlural: "سنوات",
          atYear: "في السنة",
          returnWord: "عائد",
          baseWord: "أساسي",
          depositsWord: "إيداعات",
          ofPortfolio: "من المحفظة",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً على جهازك."
        },
        fr: {
          langLabel: "Français",
          backLink: "← Retour aux outils",
          brandBadge: "Maths &amp; Finance • Simulation Côté Client • Zéro Rafraîchissement",
          pageTitle: 'Calculateur d\'<span>Intérêts Composés</span>',
          pageSubtitle: "Simulez la croissance future de votre portefeuille, les versements mensuels et les fréquences de composition en temps réel avec graphiques interactifs et tableaux d'amortissement.",
          cardTitle: "Paramètres d'Investissement",
          btnReset: "Réinitialiser",
          labelPrincipal: "Investissement Initial (Capital)",
          labelMonthly: "Versement Mensuel",
          labelRate: "Taux de Rendement Annuel Estimé",
          labelHorizon: "Horizon de Placement",
          labelFrequency: "Fréquence de Composition",
          freq_12: "Mensuelle (12/an)",
          freq_365: "Quotidienne (365/an)",
          freq_4: "Trimestrielle (4/an)",
          freq_2: "Semestrielle (2/an)",
          freq_1: "Annuelle (1/an)",
          kpiFuture: "Valeur Future de l'Investissement",
          kpiPrincipal: "Capital Total Investi",
          kpiInterest: "Intérêts Totaux Gagnés",
          ratioPrincipal: "Capital",
          ratioInterest: "Intérêts",
          chartTitle: "Accumulation du Portefeuille au Fil du Temps",
          btnCopySummary: "Copier le Résumé",
          btnPrintReport: "Imprimer / PDF",
          scheduleTitle: "Tableau d'Amortissement &amp; Croissance Annuelle",
          scheduleSub: "Trajectoire de composition année par année",
          thYear: "Année",
          thStart: "Solde Initial",
          thDeposits: "Dépôts Annuels",
          thInterest: "Intérêts Gagnés",
          thEnd: "Solde Final",
          copied: "Copié !",
          toastCopied: "Résumé copié dans le presse-papiers !",
          toastReset: "Valeurs par défaut restaurées",
          chartPrincipal: "Capital Investi",
          chartInterest: "Intérêts Gagnés",
          chartStart: "Début",
          chartYr: "An",
          yearWord: "Année",
          yearSingular: "An",
          yearsPlural: "Ans",
          atYear: "À l'année",
          returnWord: "rendement",
          baseWord: "base",
          depositsWord: "dépôts",
          ofPortfolio: "du portefeuille",
          footerText: "© 2026 VantorKit. Utilitaires web rapides, privés et gratuits. Tout le traitement est effectué localement."
        },
        it: {
          langLabel: "Italiano",
          backLink: "← Torna agli strumenti",
          brandBadge: "Matematica &amp; Finanza • Simulazione Lato Client • Zero Ricaricamento",
          pageTitle: 'Calcolatore di <span>Interesse Composto</span>',
          pageSubtitle: "Simula la crescita futura del portafoglio, i depositi mensili ricorrenti e la frequenza di capitalizzazione in tempo reale con grafici interattivi e piani di ammortamento annuali.",
          cardTitle: "Parametri di Investimento",
          btnReset: "Reimposta",
          labelPrincipal: "Investimento Iniziale (Capitale)",
          labelMonthly: "Contributo Mensile",
          labelRate: "Rendimento Annuo Stimato",
          labelHorizon: "Orizzonte Temporale",
          labelFrequency: "Frequenza di Capitalizzazione",
          freq_12: "Mensile (12/anno)",
          freq_365: "Giornaliera (365/anno)",
          freq_4: "Trimestrale (4/anno)",
          freq_2: "Semestrale (2/anno)",
          freq_1: "Annuale (1/anno)",
          kpiFuture: "Valore Futuro dell'Investimento",
          kpiPrincipal: "Capitale Totale Investito",
          kpiInterest: "Interessi Totali Maturati",
          ratioPrincipal: "Capitale",
          ratioInterest: "Interessi",
          chartTitle: "Accumulazione del Portafoglio nel Tempo",
          btnCopySummary: "Copia Riepilogo",
          btnPrintReport: "Stampa / PDF",
          scheduleTitle: "Piano Annuale di Ammortamento e Crescita",
          scheduleSub: "Traiettoria di capitalizzazione anno per anno",
          thYear: "Anno",
          thStart: "Saldo Iniziale",
          thDeposits: "Depositi Annuali",
          thInterest: "Interessi Maturati",
          thEnd: "Saldo Finale",
          copied: "Copiato!",
          toastCopied: "Riepilogo copiato negli appunti!",
          toastReset: "Reimpostato ai valori predefiniti",
          chartPrincipal: "Capitale Investito",
          chartInterest: "Interessi Maturati",
          chartStart: "Inizio",
          chartYr: "Anno",
          yearWord: "Anno",
          yearSingular: "Anno",
          yearsPlural: "Anni",
          atYear: "All'anno",
          returnWord: "rendimento",
          baseWord: "base",
          depositsWord: "depositi",
          ofPortfolio: "del portafoglio",
          footerText: "© 2026 VantorKit. Utilità web veloci, private e gratuite. Tutte le elaborazioni vengono eseguite localmente."
        }
      };

      // --- i18n Engine & State ---
      const htmlRoot = document.getElementById('htmlRoot');
      const langToggleBtn = document.getElementById('langToggleBtn');
      const langMenu = document.getElementById('langMenu');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');

      let activeLang = 'en';

      function setLanguage(lang) {
      window.setLanguage = setLanguage;
        if (!I18N[lang]) lang = 'en';
        activeLang = lang;
        localStorage.setItem('vantorkit_lang', lang);

        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        currentLangLabel.textContent = I18N[lang].langLabel;
        langOptions.forEach(opt => {
          if (opt.dataset.lang === lang) opt.classList.add('active');
          else opt.classList.remove('active');
        });

        const dict = I18N[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.dataset.i18n;
          if (dict[key]) {
            el.innerHTML = dict[key];
          }
        });

        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle && dict.pageTitle) pageTitle.innerHTML = dict.pageTitle;

        // Update selectFrequency options
        document.querySelectorAll('#selectFrequency option').forEach(opt => {
          const freqKey = 'freq_' + opt.value;
          if (dict[freqKey]) opt.textContent = dict[freqKey];
        });

        runSimulation();
      }

      langToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langMenu.classList.contains('open');
        if (isOpen) {
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          langMenu.classList.add('open');
          langToggleBtn.setAttribute('aria-expanded', 'true');
        }
      });

      langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          setLanguage(opt.dataset.lang);
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (e) => {
        if (!document.getElementById('langDropdown').contains(e.target)) {
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // --- Format Currency ---
      function formatMoney(amount, decimals = 2) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        }).format(amount);
      }

      function showToast(msg) {
        toastMsg.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.remove('show');
        }, 2200);
      }

      // --- Financial Math Engine ---
      function computeFutureValue(P, PMT, r, n, t) {
        if (t === 0) return { fv: P, principal: P, interest: 0 };

        if (r === 0) {
          const principal = P + (PMT * 12 * t);
          return { fv: principal, principal: principal, interest: 0 };
        }

        const principalFV = P * Math.pow(1 + (r / n), n * t);
        const ear = Math.pow(1 + (r / n), n) - 1;
        const rm = Math.pow(1 + ear, 1 / 12) - 1;
        const monthlyFV = PMT * ((Math.pow(1 + rm, 12 * t) - 1) / rm);

        const totalFV = principalFV + monthlyFV;
        const totalPrincipal = P + (PMT * 12 * t);
        const totalInterest = Math.max(0, totalFV - totalPrincipal);

        return {
          fv: totalFV,
          principal: totalPrincipal,
          interest: totalInterest
        };
      }

      // --- Simulation & UI Update ---
      function runSimulation() {
        const P = Math.max(0, parseFloat(inputPrincipal.value) || 0);
        const PMT = Math.max(0, parseFloat(inputMonthly.value) || 0);
        const ratePercent = Math.max(0, parseFloat(inputRate.value) || 0);
        const r = ratePercent / 100;
        const t = Math.max(1, parseInt(yearsInput.value, 10) || 1);
        const n = parseInt(selectFrequency.value, 10) || 12;

        const dict = I18N[activeLang] || I18N.en;

        yearsLabel.textContent = `${t} ${t === 1 ? dict.yearSingular : dict.yearsPlural}`;

        // Compute End Result
        const finalResult = computeFutureValue(P, PMT, r, n, t);

        kpiFutureValue.textContent = formatMoney(finalResult.fv, 2);
        kpiFutureMeta.textContent = `${dict.atYear} ${t} (${ratePercent}% ${dict.returnWord})`;

        kpiTotalPrincipal.textContent = formatMoney(finalResult.principal, 2);
        kpiPrincipalMeta.textContent = `${formatMoney(P, 0)} ${dict.baseWord} + ${formatMoney(PMT * 12 * t, 0)} ${dict.depositsWord}`;

        kpiTotalInterest.textContent = formatMoney(finalResult.interest, 2);
        kpiInterestMeta.textContent = `${finalResult.fv > 0 ? ((finalResult.interest / finalResult.fv) * 100).toFixed(1) : 0}% ${dict.ofPortfolio}`;

        // Ratio Bar
        const principalPct = finalResult.fv > 0 ? (finalResult.principal / finalResult.fv) * 100 : 100;
        const interestPct = finalResult.fv > 0 ? (finalResult.interest / finalResult.fv) * 100 : 0;

        ratioPrincipalText.textContent = `${principalPct.toFixed(1)}%`;
        ratioInterestText.textContent = `${interestPct.toFixed(1)}%`;
        ratioFillPrincipal.style.width = `${principalPct}%`;
        ratioFillInterest.style.width = `${interestPct}%`;

        // Generate Year-by-Year Schedule & Chart Datasets
        const labels = [];
        const principalData = [];
        const interestData = [];
        const scheduleRows = [];

        // Year 0 Base
        labels.push(dict.chartStart || 'Start');
        principalData.push(Math.round(P));
        interestData.push(0);

        let prevBalance = P;

        for (let yr = 1; yr <= t; yr++) {
          const yrResult = computeFutureValue(P, PMT, r, n, yr);
          const annualDeposits = PMT * 12;
          const interestEarned = yrResult.fv - prevBalance - annualDeposits;

          labels.push(`${dict.chartYr || 'Yr'} ${yr}`);
          principalData.push(Math.round(yrResult.principal));
          interestData.push(Math.round(yrResult.interest));

          scheduleRows.push({
            year: yr,
            start: prevBalance,
            deposits: annualDeposits,
            interest: Math.max(0, interestEarned),
            end: yrResult.fv
          });

          prevBalance = yrResult.fv;
        }

        // Render Table Body
        scheduleTableBody.innerHTML = scheduleRows.map(row => `
          <tr>
            <td class="text-white">${dict.yearWord || 'Year'} ${row.year}</td>
            <td>${formatMoney(row.start, 2)}</td>
            <td>${formatMoney(row.deposits, 2)}</td>
            <td class="text-green">+${formatMoney(row.interest, 2)}</td>
            <td class="text-white">${formatMoney(row.end, 2)}</td>
          </tr>
        `).join('');

        // Render Chart.js
        updateChart(labels, principalData, interestData);
      }

      // --- Chart.js Visualization ---
      function updateChart(labels, principalData, interestData) {
        const ctx = document.getElementById('growthChart').getContext('2d');
        const dict = I18N[activeLang] || I18N.en;

        if (!chartInstance) {
          chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: dict.chartPrincipal || 'Principal Invested',
                  data: principalData,
                  backgroundColor: 'rgba(56, 189, 248, 0.4)',
                  borderColor: '#38bdf8',
                  borderWidth: 2,
                  fill: true,
                  pointRadius: 2,
                  pointHoverRadius: 5,
                  tension: 0.25
                },
                {
                  label: dict.chartInterest || 'Interest Earned',
                  data: interestData,
                  backgroundColor: 'rgba(168, 85, 247, 0.45)',
                  borderColor: '#a855f7',
                  borderWidth: 2,
                  fill: true,
                  pointRadius: 2,
                  pointHoverRadius: 5,
                  tension: 0.25
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: {
                mode: 'index',
                intersect: false
              },
              plugins: {
                legend: {
                  position: 'top',
                  labels: {
                    color: '#94a3b8',
                    font: {
                      family: activeLang === 'ar' ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
                      weight: 600,
                      size: 12
                    },
                    boxWidth: 14
                  }
                },
                tooltip: {
                  backgroundColor: 'rgba(11, 14, 23, 0.95)',
                  titleColor: '#fff',
                  bodyColor: '#e2e8f0',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 1,
                  padding: 12,
                  boxPadding: 6,
                  callbacks: {
                    label: function (context) {
                      return `${context.dataset.label}: $${new Intl.NumberFormat('en-US').format(context.raw)}`;
                    }
                  }
                }
              },
              scales: {
                x: {
                  stacked: true,
                  grid: {
                    color: 'rgba(255, 255, 255, 0.05)'
                  },
                  ticks: {
                    color: '#94a3b8',
                    font: { size: 11 }
                  }
                },
                y: {
                  stacked: true,
                  grid: {
                    color: 'rgba(255, 255, 255, 0.05)'
                  },
                  ticks: {
                    color: '#94a3b8',
                    font: { size: 11 },
                    callback: function (val) {
                      if (val >= 1000000) return '$' + (val / 1000000).toFixed(1) + 'M';
                      if (val >= 1000) return '$' + (val / 1000).toFixed(0) + 'k';
                      return '$' + val;
                    }
                  }
                }
              }
            }
          });
        } else {
          chartInstance.data.labels = labels;
          chartInstance.data.datasets[0].label = dict.chartPrincipal || 'Principal Invested';
          chartInstance.data.datasets[0].data = principalData;
          chartInstance.data.datasets[1].label = dict.chartInterest || 'Interest Earned';
          chartInstance.data.datasets[1].data = interestData;
          chartInstance.update('none');
        }
      }

      // --- Synchronize Years Range & Number Input ---
      yearsSlider.addEventListener('input', () => {
        yearsInput.value = yearsSlider.value;
        runSimulation();
      });

      yearsInput.addEventListener('input', () => {
        let val = parseInt(yearsInput.value, 10);
        if (isNaN(val)) val = 1;
        if (val > 50) val = 50;
        if (val < 1) val = 1;
        yearsSlider.value = val;
        runSimulation();
      });

      // Inputs event listeners
      [inputPrincipal, inputMonthly, inputRate, selectFrequency].forEach(el => {
        el.addEventListener('input', runSimulation);
        el.addEventListener('change', runSimulation);
      });

      // Reset Defaults
      btnResetDefaults.addEventListener('click', () => {
        inputPrincipal.value = '10000';
        inputMonthly.value = '500';
        inputRate.value = '7.5';
        yearsSlider.value = '20';
        yearsInput.value = '20';
        selectFrequency.value = '12';
        runSimulation();
        const dict = I18N[activeLang] || I18N.en;
        showToast(dict.toastReset || 'Reset to default values');
      });

      // Copy Summary
      btnCopySummary.addEventListener('click', () => {
        const P = parseFloat(inputPrincipal.value) || 0;
        const PMT = parseFloat(inputMonthly.value) || 0;
        const rate = inputRate.value;
        const years = yearsInput.value;
        const freqText = selectFrequency.options[selectFrequency.selectedIndex].text;
        const dict = I18N[activeLang] || I18N.en;

        const summaryText = [
          'VantorKit Compound Interest Summary:',
          `• Initial Principal: ${formatMoney(P, 2)}`,
          `• Monthly Contribution: ${formatMoney(PMT, 2)}`,
          `• Annual Return Rate: ${rate}%`,
          `• Investment Horizon: ${years} Years`,
          `• Compounding Frequency: ${freqText}`,
          '----------------------------------------',
          `• Future Balance: ${kpiFutureValue.textContent}`,
          `• Total Principal Invested: ${kpiTotalPrincipal.textContent}`,
          `• Total Interest Earned: ${kpiTotalInterest.textContent}`,
          'Simulated locally via VantorKit (https://vantorkit.com)'
        ].join('\n');

        function indicateCopied() {
          const originalHTML = btnCopySummary.innerHTML;
          btnCopySummary.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${dict.copied || 'Copied!'}</span>
          `;
          btnCopySummary.classList.add('copied');
          showToast(dict.toastCopied || 'Summary copied to clipboard!');
          setTimeout(() => {
            btnCopySummary.innerHTML = originalHTML;
            btnCopySummary.classList.remove('copied');
          }, 2000);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(summaryText).then(indicateCopied).catch(() => {
            fallbackCopy(summaryText, indicateCopied);
          });
        } else {
          fallbackCopy(summaryText, indicateCopied);
        }
      });

      function fallbackCopy(text, cb) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          cb();
        } catch (e) {
          console.error('Copy failed:', e);
        }
        document.body.removeChild(ta);
      }

      // Print / PDF Report
      btnPrintReport.addEventListener('click', () => {
        window.print();
      });

      // --- Initial Execution with Saved Language ---
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
        "title": "Compound Interest Calculator – Forecast Savings Growth",
        "desc": "Model multi-year wealth accumulation with custom deposit frequencies and rates. Projections render in real time without sending financials anywhere."
    },
    "ar": {
        "title": "حاسبة الفائدة المركبة – محاكاة نمو الاستثمارات",
        "desc": "قم بتقدير نمو أموالك عبر الفائدة المركبة مع مساهمات دورية متنوعة. تجري جميع العمليات الحسابية محلياً في جهازك بأمان تام وبدون أي خوادم."
    },
    "fr": {
        "title": "Calculateur d'Intérêts Composés – Projections Épargne",
        "desc": "Simulez la croissance de vos placements avec versements programmés. Vos projections financières se calculent en direct sans partage de données."
    },
    "it": {
        "title": "Calcolatore Interesse Composto – Crescita Investimenti",
        "desc": "Modella la crescita dei tuoi risparmi nel tempo con versamenti periodici. I calcoli finanziari avvengono sul tuo dispositivo con la massima privacy."
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
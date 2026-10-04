(function() {
    'use strict';

    // Curated Diceware wordlist (670 clean, memorable words)
    const WORDLIST = [
      'acorn','actor','adapt','agate','agent','agile','alarm','album','alert','alien',
      'align','alibi','alley','alloy','alpha','altar','amber','amend','amigo','amiss',
      'angel','angle','ankle','antic','anvil','apart','apex','apple','apron','arbor',
      'arena','armor','arrow','asset','atlas','atom','audio','audit','aurora','avail',
      'bacon','badge','baker','balm','bamboo','bandit','banjo','banner','baron','barrel',
      'basil','beacon','beaver','beetle','bistro','bizarre','blade','blaze','bliss','blizzard',
      'bloom','bonus','border','bounce','bounty','brave','breeze','bridge','bronze','bubble',
      'buffer','cabin','cactus','cadet','camel','camera','canary','candle','canyon','carbon',
      'cargo','carpet','carrot','cascade','castle','cavern','cedar','celery','cement','census',
      'cereal','chalet','champion','channel','chapel','charcoal','cheese','cherry','cipher','circus',
      'citrus','clover','clutch','coastal','cobalt','cobra','coffee','collar','colony','column',
      'comet','compass','cookie','copper','coral','corner','corral','cosmos','cradle','crater',
      'creek','cricket','crystal','custom','dagger','daisy','dancer','danger','daring','delta',
      'depot','desert','detail','device','diamond','diadem','digit','disco','diver','doctor',
      'dolphin','donkey','dragon','dynamo','eagle','earth','echo','eclipse','ember','emerald',
      'empire','enigma','epoch','equator','escort','estate','exile','exotic','fabric','falcon',
      'famine','fantasy','fathom','feather','fender','festival','filter','flame','flavor','fleece',
      'flint','floor','flora','flower','flute','flux','forest','formula','fortress','fossil',
      'foster','fountain','fractal','galaxy','gallery','galley','garage','garden','garlic','garnet',
      'gasket','gateway','gazelle','geyser','ginger','glacier','glamour','glider','globe','gloria',
      'goddess','golden','gondola','granite','grapes','gravity','griffin','grove','guitar','gypsum',
      'harbor','harmony','harvest','haven','hawk','hazel','helmet','herald','heron','hickory',
      'holiday','horizon','horn','hydra','iceberg','icon','igloo','impact','impulse','indigo',
      'infant','inlet','insect','island','ivory','jacket','jaguar','jasmine','javelin','jester',
      'jigsaw','jockey','journey','jungle','junior','jupiter','karate','kernel','kettle','king',
      'kiosk','kitchen','knight','koala','labrador','ladder','lagoon','lamp','lantern','laptop',
      'larva','laser','laurel','lavender','leader','legacy','legend','lemon','leopard','liberty',
      'lily','linear','lion','lizard','locket','locust','logic','lotus','lumber','lunar',
      'lynx','magic','magnet','magnolia','maize','mallet','mango','manor','mantle','maple',
      'marble','marine','marmot','marsh','matrix','meadow','medal','melody','melon','mentor',
      'mercury','mermaid','meteor','midway','mineral','mirror','misty','monarch','monkey','monument',
      'mosaic','motive','mountain','museum','mustang','mystery','mythic','nanotech','nautical','nebula',
      'nectar','needle','neon','nestle','network','neutral','neutron','nexus','nickel','nimbus',
      'ninja','noble','nomad','nova','nugget','nylon','oasis','obsidian','ocean','octave',
      'olive','omega','onion','opal','optics','orbit','orchard','orchid','origami','osprey',
      'otter','outback','outlaw','oxygen','oyster','package','paddle','palace','panther','papaya',
      'parade','parrot','parsnip','passage','pastel','pasture','patrol','pattern','peacock','pebble',
      'pelican','penguin','pepper','phantom','phoenix','picnic','pillar','pilot','pinnacle','pioneer',
      'pirate','pistol','pixel','planet','plasma','plateau','platinum','plaza','plum','plover',
      'pocket','polar','polka','pond','poodle','poplar','poppy','portal','potion','potter',
      'powder','prairie','prism','proteus','prowler','puddle','pulley','pulse','puma','pumpkin',
      'puppet','puzzle','pyramid','python','quail','quantum','quarry','quartz','quasar','queen',
      'quiver','rabbit','radar','radian','radiant','radish','radius','raft','railway','rainbow',
      'rampart','ranger','raptor','rattle','ravine','ray','reactor','rebel','record','reflex',
      'relic','remote','rescue','resort','rhino','rhythm','ribbon','ridge','rifle','ripple',
      'river','robot','rocket','rodeo','roller','ruby','runner','rustic','saddle','safari',
      'sailor','salad','salmon','salt','salute','samba','samurai','sand','sapphire','sardine',
      'satellite','saucer','scarlet','scenic','scholar','scooter','scout','screen','sculptor','seaweed',
      'senator','sequoia','serenade','serpent','shadow','shaman','shark','shelter','sheriff','shield',
      'shimmer','shrine','sierra','signal','silent','silver','siren','skater','skipper','skylight',
      'slalom','slumber','sniper','solar','sonar','sonic','source','space','sparrow','spark',
      'spectrum','sphere','spider','spiral','spirit','sponge','spring','sprite','sprout','spur',
      'squad','stable','stadium','starlight','station','statue','stealth','stellar','stereo','stork',
      'strata','stream','street','strike','studio','subway','sugar','sulfur','summit','sunset',
      'sunshine','surface','surfer','swallow','swift','symbol','syntax','table','tactics','talisman',
      'talon','tangerine','tango','target','tariff','tavern','teacup','temple','tempo','tennis',
      'tensor','terrace','theater','therm','thistle','thrill','thunder','tiger','timber','titan',
      'tobacco','topaz','torch','tornado','torpedo','torrent','tortoise','totem','tourist','tractor',
      'traffic','trailer','transit','treasure','tribal','tribute','trophy','trumpet','tulip','tumble',
      'tundra','tunnel','turbine','turkey','turtle','twilight','tycoon','typhoon','umbrella','unicorn',
      'uniform','universe','uranium','urban','urchin','vaccine','valley','vampire','vanilla','vapor',
      'vector','velvet','vender','verdict','vessel','veteran','vibrant','village','vineyard','vintage',
      'violet','violin','viper','virtual','vision','visual','vivid','volcano','voltage','volume',
      'vortex','voyage','vulture','waffle','walnut','walrus','wander','warden','warrior','waterfall',
      'wave','weapon','weather','weaver','weasel','welcome','western','whisper','whistle','wilderness',
      'willow','window','winter','wisdom','wizard','wombat','wonder','yacht','yard','yellow',
      'yodel','yosemite','yucca','zebra','zenith','zephyr','zero','zigzag','zipper','zodiac'
    ];

    const CHARSETS = {
      upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lower: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?~'
    };
    const AMBIGUOUS_CHARS = ['0', 'O', 'o', '1', 'l', 'I', '|', ';', ':', '.', ',', '"', "'"];

    const I18N = {
      en: {
        langLabel: 'English',
        backLink: '\u2190 Back to Tools',
        brandBadge: 'Everyday Tools \u2022 100% Client-Side \u2022 Web Crypto API',
        pageSubtitle: 'Generate cryptographically secure passwords and passphrases with zero server contact. Live entropy metrics and offline brute-force resistance analysis.',
        modeRandom: 'Random Password',
        modePassphrase: 'Memorable Passphrase',
        modePin: 'PIN Code',
        tabRandom: 'Random Characters',
        tabPassphrase: 'Memorable Passphrase',
        tabPin: 'PIN Code',
        lengthLabel: 'Password Length',
        optUpper: 'Uppercase (A-Z)',
        optLower: 'Lowercase (a-z)',
        optNumbers: 'Numbers (0-9)',
        optSymbols: 'Symbols (!@#$...)',
        optAmbiguous: 'Exclude Ambiguous',
        wordCountLabel: 'Number of Words',
        separatorLabel: 'Word Separator',
        optCapitalize: 'Capitalize Words',
        optIncludeNumber: 'Append Number',
        pinLengthLabel: 'PIN Length',
        optNoRepeat: 'Avoid Repeated Digits',
        bulkLabel: 'Batch / Bulk Variations',
        bulkDesc: 'Generate multiple variations simultaneously',
        btnCopyAll: 'Copy All',
        bulkGeneratedTitle: 'Generated Variations',
        historyTitle: 'Recent Passwords (Current Tab Session)',
        btnClearHistory: 'Clear History',
        noHistory: 'No passwords generated in this session yet.',
        entropyLabel: 'Entropy',
        strengthLabel: 'Strength',
        crackTimeLabel: 'Time to Crack (GPU)',
        btnCopy: 'Copy Password',
        btnCopied: 'Copied!',
        btnRegenerate: 'Regenerate',
        strengthWeak: 'Weak',
        strengthModerate: 'Moderate',
        strengthStrong: 'Strong',
        strengthUltra: 'Fortified',
        toastCopied: '\u2705 Password copied to clipboard!',
        toastAllCopied: '\u2705 All variations copied to clipboard!',
        toastCleared: '\u{1f5d1}\ufe0f Session history cleared.',
        toastSelectOne: '\u26a0\ufe0f Please enable at least one character type.',
        guideHeading: 'Understanding Password Entropy & Cryptographic Security',
        guideSub: 'How mathematical randomness protects accounts against modern offline GPU cluster attacks.',
        guide1Title: '1. Cryptographic PRNG',
        guide1Desc: "Standard JavaScript Math.random() is pseudorandom and predictable. VantorKit uses window.crypto.getRandomValues, backed by your operating system's hardware entropy pool, eliminating predictability.",
        guide2Title: '2. Shannon Entropy (E)',
        guide2Desc: 'Entropy measures unpredictable search space: E = L * log2(R). A 16-character mixed password yields over 100 bits of entropy, requiring 2^100 brute force trials to exhaust.',
        guide3Title: '3. Diceware Passphrases',
        guide3Desc: 'Combining 4 to 6 random natural words produces passphrases that humans can easily visualize and type on mobile devices, yet remain virtually impossible for supercomputers to crack.',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'Are generated passwords sent to any server?',
        faq1A: 'No. All password generation and entropy calculations happen entirely inside your web browser using Web Crypto. No data is ever transmitted or logged.',
        faq2Q: 'What is the recommended password length?',
        faq2A: 'For random character passwords, 16 or more characters is recommended for critical accounts. For Diceware passphrases, 4 to 5 words provides top-tier security.',
        faq3Q: 'How is the estimated crack time determined?',
        faq3A: 'We simulate a worst-case offline attack scenario using an attacker with a high-end GPU cracking rig capable of testing 100 billion hashes per second.',
        faq4Q: 'Why should I avoid ambiguous characters?',
        faq4A: "Characters like capital 'O' and zero '0', or lowercase 'l' and uppercase 'I' look identical in many fonts. Excluding them makes manual entry error-free.",
        footerText: '\u00a9 2026 VantorKit. Fast, Private & Free Web Utilities. All processing is performed locally in your browser.'
      },
      ar: {
        langLabel: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
        backLink: '\u2190 \u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u062f\u0648\u0627\u062a',
        brandBadge: '\u0623\u062f\u0648\u0627\u062a \u064a\u0648\u0645\u064a\u0629 \u2022 \u0645\u062d\u0644\u064a 100% \u2022 \u062a\u0634\u0641\u064a\u0631 \u0622\u0645\u0646 Web Crypto',
        pageSubtitle: '\u0648\u0644\u0651\u062f \u0643\u0644\u0645\u0627\u062a \u0645\u0631\u0648\u0631 \u0648\u0639\u0628\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0629 \u0642\u0648\u064a\u0629 \u062f\u0648\u0646 \u0623\u064a \u0627\u062a\u0635\u0627\u0644 \u0628\u062e\u0648\u0627\u062f\u0645. \u062d\u0633\u0627\u0628 \u0641\u0648\u0631\u064a \u0644\u0644\u0625\u0646\u062a\u0631\u0648\u0628\u064a\u0627 \u0648\u062a\u0642\u062f\u064a\u0631 \u0648\u0642\u062a \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0642.',
        modeRandom: '\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0639\u0634\u0648\u0627\u0626\u064a\u0629',
        modePassphrase: '\u0639\u0628\u0627\u0631\u0629 \u0633\u0631 \u0633\u0647\u0644\u0629 \u0627\u0644\u062d\u0641\u0638',
        modePin: '\u0631\u0645\u0632 PIN',
        tabRandom: '\u0623\u062d\u0631\u0641 \u0639\u0634\u0648\u0627\u0626\u064a\u0629',
        tabPassphrase: '\u0639\u0628\u0627\u0631\u0629 \u0633\u0631 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0630\u0643\u0631',
        tabPin: '\u0631\u0645\u0632 PIN \u0631\u0642\u0645\u064a',
        lengthLabel: '\u0637\u0648\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631',
        optUpper: '\u0623\u062d\u0631\u0641 \u0643\u0628\u064a\u0631\u0629 (A-Z)',
        optLower: '\u0623\u062d\u0631\u0641 \u0635\u063a\u064a\u0631\u0629 (a-z)',
        optNumbers: '\u0623\u0631\u0642\u0627\u0645 (0-9)',
        optSymbols: '\u0631\u0645\u0648\u0632 \u062e\u0627\u0635\u0629 (!@#$...)',
        optAmbiguous: '\u0627\u0633\u062a\u0628\u0639\u0627\u062f \u0627\u0644\u0623\u062d\u0631\u0641 \u0627\u0644\u0645\u062a\u0634\u0627\u0628\u0647\u0629',
        wordCountLabel: '\u0639\u062f\u062f \u0627\u0644\u0643\u0644\u0645\u0627\u062a',
        separatorLabel: '\u0627\u0644\u0641\u0627\u0635\u0644 \u0628\u064a\u0646 \u0627\u0644\u0643\u0644\u0645\u0627\u062a',
        optCapitalize: '\u0628\u062f\u0621 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0628\u062d\u0631\u0641 \u0643\u0628\u064a\u0631',
        optIncludeNumber: '\u0625\u0636\u0627\u0641\u0629 \u0631\u0642\u0645 \u0639\u0634\u0648\u0627\u0626\u064a',
        pinLengthLabel: '\u0637\u0648\u0644 \u0631\u0645\u0632 PIN',
        optNoRepeat: '\u062a\u062c\u0646\u0628 \u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u062a\u062a\u0627\u0644\u064a\u0629',
        bulkLabel: '\u062a\u0648\u0644\u064a\u062f \u062c\u0645\u0627\u0639\u064a / \u0645\u062a\u0639\u062f\u062f',
        bulkDesc: '\u062a\u0648\u0644\u064a\u062f \u0639\u062f\u0629 \u062e\u064a\u0627\u0631\u0627\u062a \u062f\u0641\u0639\u0629 \u0648\u0627\u062d\u062f\u0629',
        btnCopyAll: '\u0646\u0633\u062e \u0627\u0644\u0643\u0644',
        bulkGeneratedTitle: '\u0627\u0644\u0646\u0645\u0627\u0630\u062c \u0627\u0644\u0645\u0648\u0644\u062f\u0629',
        historyTitle: '\u0633\u062c\u0644 \u0627\u0644\u062c\u0644\u0633\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629',
        btnClearHistory: '\u0645\u0633\u062d \u0627\u0644\u0633\u062c\u0644',
        noHistory: '\u0644\u0645 \u064a\u062a\u0645 \u062a\u0648\u0644\u064a\u062f \u0643\u0644\u0645\u0627\u062a \u0645\u0631\u0648\u0631 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u062c\u0644\u0633\u0629 \u0628\u0639\u062f.',
        entropyLabel: '\u0627\u0644\u0625\u0646\u062a\u0631\u0648\u0628\u064a\u0627',
        strengthLabel: '\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0642\u0648\u0629',
        crackTimeLabel: '\u0648\u0642\u062a \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0642 (GPU)',
        btnCopy: '\u0646\u0633\u062e \u0643\u0644\u0645\u062a \u0627\u0644\u0645\u0631\u0648\u0631',
        btnCopied: '\u062a\u0645 \u0627\u0644\u0646\u0633\u062e!',
        btnRegenerate: '\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0648\u0644\u064a\u062f',
        strengthWeak: '\u0636\u0639\u064a\u0641',
        strengthModerate: '\u0645\u062a\u0648\u0633\u0637',
        strengthStrong: '\u0642\u0648\u064a',
        strengthUltra: '\u0641\u0627\u0626\u0642 \u0627\u0644\u062a\u062d\u0635\u064a\u0646',
        toastCopied: '\u2705 \u062a\u0645 \u0646\u0633\u062e \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0625\u0644\u0649 \u0627\u0644\u062d\u0627\u0641\u0638\u0629!',
        toastAllCopied: '\u2705 \u062a\u0645 \u0646\u0633\u062e \u062c\u0645\u064a\u0639 \u0627\u0644\u0646\u0645\u0627\u0630\u062c!',
        toastCleared: '\u{1f5d1}\ufe0f \u062a\u0645 \u0645\u0633\u062d \u0627\u0644\u0633\u062c\u0644.',
        toastSelectOne: '\u26a0\ufe0f \u064a\u0631\u062c\u0649 \u062a\u0641\u0639\u064a\u0644 \u0646\u0648\u0639 \u0648\u0627\u062d\u062f \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.',
        guideHeading: '\u0641\u0647\u0645 \u0625\u0646\u062a\u0631\u0648\u0628\u064a\u0627 \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0631\u0648\u0631 \u0648\u0627\u0644\u0623\u0645\u0627\u0646 \u0627\u0644\u0631\u0642\u0645\u064a',
        guideSub: '\u0643\u064a\u0641 \u062a\u062d\u0645\u064a \u0627\u0644\u0639\u0634\u0648\u0627\u0626\u064a\u0629 \u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629 \u062d\u0633\u0627\u0628\u0627\u062a\u0643 \u0645\u0646 \u0647\u062c\u0645\u0627\u062a \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0642 \u0627\u0644\u062d\u062f\u064a\u062b\u0629.',
        guide1Title: '1. \u062a\u0648\u0644\u064a\u062f \u0639\u0634\u0648\u0627\u0626\u064a \u0645\u0634\u0641\u0631',
        guide1Desc: '\u062f\u0648\u0627\u0644 Math.random() \u063a\u064a\u0631 \u0622\u0645\u0646\u0629. \u0646\u0633\u062a\u062e\u062f\u0645 \u0648\u0627\u062c\u0647\u0629 window.crypto \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u0639\u062a\u0627\u062f \u0627\u0644\u062c\u0647\u0627\u0632 \u0644\u0636\u0645\u0627\u0646 \u0639\u0634\u0648\u0627\u0626\u064a\u0629 \u0645\u0637\u0644\u0642\u0629.',
        guide2Title: '2. \u0625\u0646\u062a\u0631\u0648\u0628\u064a\u0627 \u0634\u0627\u0646\u0648\u0646 (E)',
        guide2Desc: '\u062a\u0642\u064a\u0633 \u0627\u0644\u0625\u0646\u062a\u0631\u0648\u0628\u064a\u0627 \u0635\u0639\u0648\u0628\u0629 \u0627\u0644\u062a\u062e\u0645\u064a\u0646: E = L * log2(R). \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0645\u0646 16 \u062d\u0631\u0641\u0627\u064b \u062a\u0645\u0646\u062d \u0623\u0643\u062b\u0631 \u0645\u0646 100 \u0628\u062a \u0645\u0646 \u0627\u0644\u062a\u0639\u0642\u064a\u062f.',
        guide3Title: '3. \u0639\u0628\u0627\u0631\u0627\u062a \u062f\u0627\u064a\u0633\u0648\u064a\u0631 (Diceware)',
        guide3Desc: '\u062f\u0645\u062c 4 \u0625\u0644\u0649 6 \u0643\u0644\u0645\u0627\u062a \u0639\u0634\u0648\u0627\u0626\u064a\u0629 \u064a\u0648\u0641\u0631 \u0623\u0642\u0635\u0649 \u062f\u0631\u062c\u0627\u062a \u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0645\u0639 \u0633\u0647\u0648\u0644\u0629 \u062a\u0630\u0643\u0631\u0647\u0627 \u0648\u0643\u062a\u0627\u0628\u062a\u0647\u0627.',
        faqTitle: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
        faq1Q: '\u0647\u0644 \u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0631\u0648\u0631 \u0625\u0644\u0649 \u0623\u064a \u062e\u0627\u062f\u0645\u061f',
        faq1A: '\u0644\u0627. \u062a\u062a\u0645 \u062c\u0645\u064a\u0639 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u062f\u0627\u062e\u0644 \u0645\u062a\u0635\u0641\u062d\u0643 \u062d\u0635\u0631\u0627\u064b \u062f\u0648\u0646 \u0623\u064a \u0646\u0642\u0644 \u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a.',
        faq2Q: '\u0645\u0627 \u0647\u0648 \u0627\u0644\u0637\u0648\u0644 \u0627\u0644\u0645\u0648\u0635\u0649 \u0628\u0647\u061f',
        faq2A: '\u064a\u064f\u0646\u0635\u062d \u0628\u0640 16 \u062d\u0631\u0641\u0627\u064b \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629\u060c \u0623\u0648 4 \u0625\u0644\u0649 5 \u0643\u0644\u0645\u0627\u062a \u0644\u0639\u0628\u0627\u0631\u0627\u062a \u0627\u0644\u0633\u0631.',
        faq3Q: '\u0643\u064a\u0641 \u064a\u062a\u0645 \u062a\u0642\u062f\u064a\u0631 \u0648\u0642\u062a \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0642\u061f',
        faq3A: '\u0646\u062d\u0627\u0643\u064a \u0647\u062c\u0648\u0645 \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0639\u0645\u064a\u0627\u0621 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0635\u0641\u0648\u0641\u0629 GPU \u062e\u0627\u0631\u0642\u0629 \u062a\u062e\u0645\u0646 100 \u0645\u0644\u064a\u0627\u0631 \u0645\u062d\u0627\u0648\u0644\u0629 \u0628\u0627\u0644\u062b\u0627\u0646\u064a\u0629.',
        faq4Q: '\u0644\u0645\u0627\u0630\u0627 \u064a\u064f\u0633\u062a\u0628\u0639\u062f \u0627\u0644\u0628\u0639\u0636 \u0627\u0644\u0623\u062d\u0631\u0641 \u0627\u0644\u0645\u062a\u0634\u0627\u0628\u0647\u0629\u061f',
        faq4A: '\u0623\u062d\u0631\u0641 \u0645\u062b\u0644 O \u0648 0 \u0623\u0648 l \u0648 I \u062a\u062a\u0637\u0627\u0628\u0642 \u0628\u0635\u0631\u064a\u0627\u064b \u0641\u064a \u0639\u062f\u0629 \u062e\u0637\u0648\u0637\u060c \u0648\u0627\u0633\u062a\u0628\u0639\u0627\u062f\u0647\u0627 \u064a\u0645\u0646\u0639 \u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0643\u062a\u0627\u0628\u0629.',
        footerText: '\u00a9 2026 VantorKit. \u0623\u062f\u0648\u0627\u062a \u0648\u064a\u0628 \u0633\u0631\u064a\u0639\u0629\u060c \u062e\u0627\u0635\u0629 \u0648\u0645\u062c\u0627\u0646\u064a\u0629.'
      },
      fr: {
        langLabel: 'Fran\u00e7ais',
        backLink: '\u2190 Retour aux Outils',
        brandBadge: 'Outils Quotidiens \u2022 100% C\u00f4t\u00e9 Client \u2022 Web Crypto API',
        pageSubtitle: 'G\u00e9n\u00e9rez des mots de passe et phrases secr\u00e8tes cryptographiquement s\u00e9curis\u00e9s, z\u00e9ro contact serveur. Mesure d\u2019entropie en direct et r\u00e9sistance brute-force.',
        modeRandom: 'Mot de passe al\u00e9atoire',
        modePassphrase: 'Phrase secr\u00e8te (Diceware)',
        modePin: 'Code PIN',
        tabRandom: 'Caract\u00e8res Al\u00e9atoires',
        tabPassphrase: 'Phrase Secr\u00e8te M\u00e9morable',
        tabPin: 'Code PIN',
        lengthLabel: 'Longueur du mot de passe',
        optUpper: 'Majuscules (A-Z)',
        optLower: 'Minuscules (a-z)',
        optNumbers: 'Chiffres (0-9)',
        optSymbols: 'Symboles (!@#$...)',
        optAmbiguous: 'Exclure caract\u00e8res ambigus',
        wordCountLabel: 'Nombre de mots',
        separatorLabel: 'S\u00e9parateur de mots',
        optCapitalize: 'Majuscule \u00e0 chaque mot',
        optIncludeNumber: 'Ajouter un nombre al\u00e9atoire',
        pinLengthLabel: 'Longueur du code PIN',
        optNoRepeat: '\u00c9viter les chiffres cons\u00e9cutifs r\u00e9p\u00e9t\u00e9s',
        bulkLabel: 'G\u00e9n\u00e9ration en lot',
        bulkDesc: 'G\u00e9n\u00e9rer plusieurs variantes instantan\u00e9ment',
        btnCopyAll: 'Tout copier',
        bulkGeneratedTitle: 'Variations g\u00e9n\u00e9r\u00e9es',
        historyTitle: 'Historique r\u00e9cent (session en cours)',
        btnClearHistory: "Effacer l'historique",
        noHistory: 'Aucun mot de passe g\u00e9n\u00e9r\u00e9 durant cette session.',
        entropyLabel: 'Entropie',
        strengthLabel: 'Force',
        crackTimeLabel: 'Temps de crack (GPU)',
        btnCopy: 'Copier le mot de passe',
        btnCopied: 'Copi\u00e9 !',
        btnRegenerate: 'R\u00e9g\u00e9n\u00e9rer',
        strengthWeak: 'Faible',
        strengthModerate: 'Mod\u00e9r\u00e9',
        strengthStrong: 'Fort',
        strengthUltra: 'Ultra Blind\u00e9',
        toastCopied: '\u2705 Mot de passe copi\u00e9 dans le presse-papiers !',
        toastAllCopied: '\u2705 Toutes les variantes ont \u00e9t\u00e9 copi\u00e9es !',
        toastCleared: '\u{1f5d1}\ufe0f Historique effac\u00e9.',
        toastSelectOne: '\u26a0\ufe0f Veuillez activer au moins un type de caract\u00e8re.',
        guideHeading: "Comprendre l'Entropie et la S\u00e9curit\u00e9 Cryptographique",
        guideSub: "Comment l'al\u00e9a math\u00e9matique prot\u00e8ge vos comptes contre les attaques par force brute GPU.",
        guide1Title: '1. PRNG Cryptographique',
        guide1Desc: "Math.random() n'est pas s\u00e9curis\u00e9. VantorKit utilise window.crypto.getRandomValues, reli\u00e9 au g\u00e9n\u00e9rateur d'al\u00e9a mat\u00e9riel de votre syst\u00e8me.",
        guide2Title: '2. Entropie de Shannon',
        guide2Desc: "L'entropie mesure l'espace des cl\u00e9s : E = L * log2(R). Un mot de passe de 16 caract\u00e8res vari\u00e9s d\u00e9passe 100 bits d'entropie.",
        guide3Title: '3. Phrases Secr\u00e8tes Diceware',
        guide3Desc: 'Associer 4 \u00e0 6 mots al\u00e9atoires produit une protection colossale tout en restant simple \u00e0 m\u00e9moriser et taper sur mobile.',
        faqTitle: 'Foire Aux Questions',
        faq1Q: 'Les mots de passe sont-ils envoy\u00e9s \u00e0 un serveur ?',
        faq1A: "Non. Tout s'ex\u00e9cute dans votre navigateur sans aucune transmission ni t\u00e9l\u00e9m\u00e9trie.",
        faq2Q: 'Quelle longueur est recommand\u00e9e ?',
        faq2A: '16 caract\u00e8res ou plus pour un mot de passe al\u00e9atoire, ou 4 \u00e0 5 mots pour une phrase Diceware.',
        faq3Q: "Comment est calcul\u00e9 le temps d'attaque ?",
        faq3A: "Nous simulons une grappe de cartes graphiques d\u00e9di\u00e9es testant 100 milliards d'empreintes par seconde.",
        faq4Q: 'Pourquoi \u00e9viter les caract\u00e8res ambigus ?',
        faq4A: "Le chiffre 0 et la lettre O se confondent facilement. Les exclure \u00e9vite les erreurs de saisie.",
        footerText: '\u00a9 2026 VantorKit. Utilitaires web rapides, priv\u00e9s et gratuits.'
      },
      it: {
        langLabel: 'Italiano',
        backLink: '\u2190 Torna agli Strumenti',
        brandBadge: 'Strumenti Quotidiani \u2022 100% Lato Client \u2022 Web Crypto API',
        pageSubtitle: 'Genera password e frasi segrete crittograficamente sicure, zero contatti con il server. Analisi entropia in tempo reale e stima crack brute-force.',
        modeRandom: 'Password Casuale',
        modePassphrase: 'Frase Segreta (Diceware)',
        modePin: 'Codice PIN',
        tabRandom: 'Caratteri Casuali',
        tabPassphrase: 'Frase Segreta Memorizzabile',
        tabPin: 'Codice PIN',
        lengthLabel: 'Lunghezza password',
        optUpper: 'Maiuscole (A-Z)',
        optLower: 'Minuscole (a-z)',
        optNumbers: 'Numeri (0-9)',
        optSymbols: 'Simboli (!@#$...)',
        optAmbiguous: 'Escludi caratteri ambigui',
        wordCountLabel: 'Numero di parole',
        separatorLabel: 'Separatore di parole',
        optCapitalize: 'Iniziali maiuscole',
        optIncludeNumber: 'Aggiungi numero casuale',
        pinLengthLabel: 'Lunghezza PIN',
        optNoRepeat: 'Evita cifre consecutive ripetute',
        bulkLabel: 'Generazione in blocco',
        bulkDesc: 'Genera pi\u00f9 varianti contemporaneamente',
        btnCopyAll: 'Copia tutti',
        bulkGeneratedTitle: 'Varianti generate',
        historyTitle: 'Cronologia recente (sessione corrente)',
        btnClearHistory: 'Cancella cronologia',
        noHistory: 'Nessuna password generata in questa sessione.',
        entropyLabel: 'Entropia',
        strengthLabel: 'Livello di Forza',
        crackTimeLabel: 'Tempo di crack (GPU)',
        btnCopy: 'Copia Password',
        btnCopied: 'Copiato!',
        btnRegenerate: 'Rigenera',
        strengthWeak: 'Debole',
        strengthModerate: 'Moderato',
        strengthStrong: 'Forte',
        strengthUltra: 'Blindato / Ultra',
        toastCopied: '\u2705 Password copiata negli appunti!',
        toastAllCopied: '\u2705 Tutte le varianti copiate!',
        toastCleared: '\u{1f5d1}\ufe0f Cronologia cancellata.',
        toastSelectOne: '\u26a0\ufe0f Attiva almeno un tipo di carattere.',
        guideHeading: 'Comprendere Entropia e Sicurezza Crittografica',
        guideSub: 'Come la casualit\u00e0 matematica protegge i tuoi account dagli attacchi brute force dei cluster GPU moderni.',
        guide1Title: '1. PRNG Crittografico',
        guide1Desc: "Math.random() non \u00e8 sicuro. VantorKit usa window.crypto.getRandomValues, collegato all'entropia hardware del tuo sistema.",
        guide2Title: '2. Entropia di Shannon',
        guide2Desc: "L'entropia misura lo spazio di ricerca: E = L * log2(R). Una password da 16 caratteri assortiti offre pi\u00f9 di 100 bit di sicurezza.",
        guide3Title: '3. Frasi Segrete Diceware',
        guide3Desc: 'Unire da 4 a 6 parole casuali offre una robustezza formidabile rimanendo facili da ricordare e digitare su dispositivi mobili.',
        faqTitle: 'Domande Frequenti',
        faq1Q: 'Le password vengono inviate a un server?',
        faq1A: 'No. Tutta la generazione avviene all\u2019interno del browser tramite Web Crypto API.',
        faq2Q: 'Qual \u00e8 la lunghezza consigliata?',
        faq2A: '16 caratteri o pi\u00f9 per password casuali, oppure 4-5 parole per frasi Diceware.',
        faq3Q: 'Come viene stimato il tempo di violazione?',
        faq3A: 'Simuliamo un cluster GPU dedicato capace di 100 miliardi di tentativi al secondo.',
        faq4Q: 'Perch\u00e9 evitare caratteri ambigui?',
        faq4A: 'Caratteri come O e 0 o l e I si confondono facilmente; escluderli evita errori di digitazione.',
        footerText: '\u00a9 2026 VantorKit. Utilit\u00e0 web veloci, private e gratuite.'
      }
    };

    // DOM Elements
    const htmlRoot = document.getElementById('htmlRoot');
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langMenu = document.getElementById('langMenu');
    const currentLangLabel = document.getElementById('currentLangLabel');
    const langOptions = document.querySelectorAll('.lang-option');

    const heroCard = document.getElementById('heroCard');
    const modePill = document.getElementById('modePill');
    const passwordViewport = document.getElementById('passwordViewport');
    const passwordDisplay = document.getElementById('passwordDisplay');
    const btnToggleMask = document.getElementById('btnToggleMask');
    const eyeIconOpen = document.getElementById('eyeIconOpen');
    const eyeIconClosed = document.getElementById('eyeIconClosed');
    const btnHeroRegen = document.getElementById('btnHeroRegen');
    const regenSvg = document.getElementById('regenSvg');
    const btnMainCopy = document.getElementById('btnMainCopy');
    const copyBtnText = document.getElementById('copyBtnText');
    const btnRegenerate = document.getElementById('btnRegenerate');

    const seg1 = document.getElementById('seg1');
    const seg2 = document.getElementById('seg2');
    const seg3 = document.getElementById('seg3');
    const seg4 = document.getElementById('seg4');
    const hudEntropy = document.getElementById('hudEntropy');
    const hudStrength = document.getElementById('hudStrength');
    const hudCrackTime = document.getElementById('hudCrackTime');

    const tabModeRandom = document.getElementById('tabModeRandom');
    const tabModePassphrase = document.getElementById('tabModePassphrase');
    const tabModePin = document.getElementById('tabModePin');
    const panelRandom = document.getElementById('panelRandom');
    const panelPassphrase = document.getElementById('panelPassphrase');
    const panelPin = document.getElementById('panelPin');

    // Controls: Random
    const lengthSlider = document.getElementById('lengthSlider');
    const lengthBadge = document.getElementById('lengthBadge');
    const chkUpper = document.getElementById('chkUpper');
    const chkLower = document.getElementById('chkLower');
    const chkNumbers = document.getElementById('chkNumbers');
    const chkSymbols = document.getElementById('chkSymbols');
    const chkAmbiguous = document.getElementById('chkAmbiguous');
    const lblUpper = document.getElementById('lblUpper');
    const lblLower = document.getElementById('lblLower');
    const lblNumbers = document.getElementById('lblNumbers');
    const lblSymbols = document.getElementById('lblSymbols');
    const lblAmbiguous = document.getElementById('lblAmbiguous');

    // Controls: Passphrase
    const wordCountSlider = document.getElementById('wordCountSlider');
    const wordCountBadge = document.getElementById('wordCountBadge');
    const selSeparator = document.getElementById('selSeparator');
    const chkCapitalize = document.getElementById('chkCapitalize');
    const chkIncludeNum = document.getElementById('chkIncludeNum');
    const lblCapitalize = document.getElementById('lblCapitalize');
    const lblIncludeNum = document.getElementById('lblIncludeNum');

    // Controls: PIN
    const pinLengthSlider = document.getElementById('pinLengthSlider');
    const pinLengthBadge = document.getElementById('pinLengthBadge');
    const chkNoRepeat = document.getElementById('chkNoRepeat');
    const lblNoRepeat = document.getElementById('lblNoRepeat');

    // Bulk & History
    const selBulk = document.getElementById('selBulk');
    const bulkSection = document.getElementById('bulkSection');
    const bulkList = document.getElementById('bulkList');
    const btnCopyAll = document.getElementById('btnCopyAll');
    const historyList = document.getElementById('historyList');
    const btnClearHistory = document.getElementById('btnClearHistory');

    const toastEl = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    // State
    let currentLang = 'en';
    let currentMode = 'random'; // 'random' | 'passphrase' | 'pin'
    let currentPassword = '';
    let isMasked = false;
    let recentHistory = [];

    function dict() { return I18N[currentLang] || I18N.en; }

    var toastTimer;
    function showToast(msg, dur) {
      dur = dur || 2600;
      toastMsg.textContent = msg;
      toastEl.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function() { toastEl.classList.remove('show'); }, dur);
    }

    // Cryptographic Random Integer [0, max - 1] with rejection sampling to eliminate modulo bias
    function secureRandomInt(max) {
      if (max <= 1) return 0;
      const uint32Max = 0xFFFFFFFF;
      const limit = uint32Max - (uint32Max % max);
      const buf = new Uint32Array(1);
      let rand;
      do {
        window.crypto.getRandomValues(buf);
        rand = buf[0];
      } while (rand >= limit);
      return rand % max;
    }

    // Cryptographic Fisher-Yates shuffle
    function secureShuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = secureRandomInt(i + 1);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    // Generate Single Password based on mode
    function generateOne() {
      if (currentMode === 'random') {
        let pool = '';
        let guaranteed = [];

        const useUpper = chkUpper.checked;
        const useLower = chkLower.checked;
        const useNums = chkNumbers.checked;
        const useSyms = chkSymbols.checked;
        const noAmbiguous = chkAmbiguous.checked;

        if (!useUpper && !useLower && !useNums && !useSyms) {
          showToast(dict().toastSelectOne);
          chkLower.checked = true;
          lblLower.classList.add('checked');
          return generateOne();
        }

        function filterChars(str) {
          if (!noAmbiguous) return str;
          return str.split('').filter(function(c) { return !AMBIGUOUS_CHARS.includes(c); }).join('');
        }

        const upSet = filterChars(CHARSETS.upper);
        const lowSet = filterChars(CHARSETS.lower);
        const numSet = filterChars(CHARSETS.numbers);
        const symSet = filterChars(CHARSETS.symbols);

        if (useUpper && upSet.length > 0) { pool += upSet; guaranteed.push(upSet[secureRandomInt(upSet.length)]); }
        if (useLower && lowSet.length > 0) { pool += lowSet; guaranteed.push(lowSet[secureRandomInt(lowSet.length)]); }
        if (useNums && numSet.length > 0) { pool += numSet; guaranteed.push(numSet[secureRandomInt(numSet.length)]); }
        if (useSyms && symSet.length > 0) { pool += symSet; guaranteed.push(symSet[secureRandomInt(symSet.length)]); }

        if (pool.length === 0) pool = 'abcdefghijkmnopqrstuvwxyz';

        const length = parseInt(lengthSlider.value, 10);
        const resultChars = [].concat(guaranteed);
        while (resultChars.length < length) {
          resultChars.push(pool[secureRandomInt(pool.length)]);
        }
        return secureShuffle(resultChars).slice(0, length).join('');
      } else if (currentMode === 'passphrase') {
        const count = parseInt(wordCountSlider.value, 10);
        const sep = selSeparator.value;
        const capitalize = chkCapitalize.checked;
        const includeNum = chkIncludeNum.checked;

        const words = [];
        for (let i = 0; i < count; i++) {
          let w = WORDLIST[secureRandomInt(WORDLIST.length)];
          if (capitalize) {
            w = w.charAt(0).toUpperCase() + w.slice(1);
          }
          words.push(w);
        }
        let phrase = words.join(sep);
        if (includeNum) {
          const num = secureRandomInt(90) + 10; // 10 - 99
          phrase += (sep ? sep : '') + num;
        }
        return phrase;
      } else if (currentMode === 'pin') {
        const length = parseInt(pinLengthSlider.value, 10);
        const noRepeat = chkNoRepeat.checked;
        const digits = [];
        let prev = -1;
        for (let i = 0; i < length; i++) {
          let d;
          do {
            d = secureRandomInt(10);
          } while (noRepeat && d === prev && length <= 10);
          digits.push(d);
          prev = d;
        }
        return digits.join('');
      }
      return '';
    }

    // Calculate Entropy in Bits
    function calculateEntropy(pwd) {
      if (!pwd || pwd.length === 0) return 0;
      if (currentMode === 'random') {
        let poolSize = 0;
        const hasUpper = /[A-Z]/.test(pwd);
        const hasLower = /[a-z]/.test(pwd);
        const hasNum = /[0-9]/.test(pwd);
        const hasSym = /[^A-Za-z0-9]/.test(pwd);
        if (hasUpper) poolSize += 26;
        if (hasLower) poolSize += 26;
        if (hasNum) poolSize += 10;
        if (hasSym) poolSize += 28;
        if (poolSize === 0) poolSize = 26;
        return pwd.length * Math.log2(poolSize);
      } else if (currentMode === 'passphrase') {
        const count = parseInt(wordCountSlider.value, 10);
        const bitsPerWord = Math.log2(WORDLIST.length); // ~9.39
        let ent = count * bitsPerWord;
        if (chkCapitalize.checked) ent += count; // 1 extra bit per word for capitalization
        if (chkIncludeNum.checked) ent += Math.log2(90); // ~6.49 bits
        return ent;
      } else if (currentMode === 'pin') {
        return pwd.length * Math.log2(10);
      }
      return 0;
    }

    // Format Crack Time
    function getCrackTime(entropy) {
      if (entropy < 28) return dict().strengthWeak;
      const logSeconds = (entropy - 1) * Math.LOG10E * Math.LN2 - 11;
      if (logSeconds <= 0) return currentLang === 'ar' ? 'أقل من ثانية' : 'Under 1 second';
      if (logSeconds < 1.77) return Math.round(Math.pow(10, logSeconds)) + (currentLang === 'ar' ? ' ثوانٍ' : ' seconds');
      if (logSeconds < 3.55) return Math.round(Math.pow(10, logSeconds) / 60) + (currentLang === 'ar' ? ' دقيقة' : ' minutes');
      if (logSeconds < 4.93) return Math.round(Math.pow(10, logSeconds) / 3600) + (currentLang === 'ar' ? ' ساعة' : ' hours');
      if (logSeconds < 7.50) return Math.round(Math.pow(10, logSeconds) / 86400) + (currentLang === 'ar' ? ' يوم' : ' days');
      const logYears = logSeconds - Math.log10(31536000);
      if (logYears < 2) return Math.round(Math.pow(10, logYears)) + (currentLang === 'ar' ? ' سنة' : ' years');
      if (logYears < 6) return Math.round(Math.pow(10, logYears - 2)) + (currentLang === 'ar' ? ' قرن' : ' centuries');
      if (logYears < 9) return (Math.pow(10, logYears - 6)).toFixed(1) + (currentLang === 'ar' ? ' مليون سنة' : ' million years');
      if (logYears < 12) return (Math.pow(10, logYears - 9)).toFixed(1) + (currentLang === 'ar' ? ' مليار سنة' : ' billion years');
      return currentLang === 'ar' ? 'تريليونات السنين (غير قابل للكسر)' : 'Trillions of years';
    }

    // Colorize characters for visual accessibility
    function renderHighlightedPassword(pwd) {
      if (isMasked) {
        return '•'.repeat(pwd.length);
      }
      if (currentMode === 'passphrase') {
        const sep = selSeparator.value;
        const escSep = sep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (sep) {
          const parts = pwd.split(new RegExp('(' + escSep + ')'));
          return parts.map(function(part) {
            if (part === sep) {
              return '<span class="char-sep">' + escapeHtml(part) + '</span>';
            }
            if (/^\d+$/.test(part)) {
              return '<span class="char-number">' + escapeHtml(part) + '</span>';
            }
            return '<span class="char-upper">' + escapeHtml(part) + '</span>';
          }).join('');
        }
      }
      return pwd.split('').map(function(c) {
        if (/[A-Z]/.test(c)) return '<span class="char-upper">' + escapeHtml(c) + '</span>';
        if (/[a-z]/.test(c)) return '<span class="char-lower">' + escapeHtml(c) + '</span>';
        if (/[0-9]/.test(c)) return '<span class="char-number">' + escapeHtml(c) + '</span>';
        return '<span class="char-symbol">' + escapeHtml(c) + '</span>';
      }).join('');
    }

    function escapeHtml(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // Update Strength HUD & Segments
    function updateHUD(entropy) {
      hudEntropy.textContent = entropy.toFixed(1) + ' Bits';

      [seg1, seg2, seg3, seg4].forEach(function(s) {
        s.className = 'meter-segment';
      });
      heroCard.classList.remove('ultra-glow');

      hudStrength.className = 'hud-value';

      if (entropy < 40) {
        seg1.classList.add('active-weak');
        hudStrength.textContent = dict().strengthWeak;
        hudStrength.classList.add('color-weak');
      } else if (entropy < 65) {
        seg1.classList.add('active-mod');
        seg2.classList.add('active-mod');
        hudStrength.textContent = dict().strengthModerate;
        hudStrength.classList.add('color-mod');
      } else if (entropy < 85) {
        seg1.classList.add('active-strong');
        seg2.classList.add('active-strong');
        seg3.classList.add('active-strong');
        hudStrength.textContent = dict().strengthStrong;
        hudStrength.classList.add('color-strong');
      } else {
        seg1.classList.add('active-ultra');
        seg2.classList.add('active-ultra');
        seg3.classList.add('active-ultra');
        seg4.classList.add('active-ultra');
        hudStrength.textContent = dict().strengthUltra;
        hudStrength.classList.add('color-ultra');
        heroCard.classList.add('ultra-glow');
      }

      hudCrackTime.textContent = getCrackTime(entropy);
    }

    // Main Generate action
    function refreshPassword() {
      currentPassword = generateOne();
      passwordDisplay.innerHTML = renderHighlightedPassword(currentPassword);

      const entropy = calculateEntropy(currentPassword);
      updateHUD(entropy);

      // Add to session history
      addToHistory(currentPassword);

      // Handle Bulk if active
      renderBulk();
    }

    function renderBulk() {
      const bulkCount = parseInt(selBulk.value, 10);
      if (bulkCount <= 1) {
        bulkSection.classList.remove('visible');
        bulkList.innerHTML = '';
        return;
      }
      bulkSection.classList.add('visible');
      bulkList.innerHTML = '';

      const variations = [currentPassword];
      while (variations.length < bulkCount) {
        variations.push(generateOne());
      }

      variations.forEach(function(pwd, idx) {
        const item = document.createElement('div');
        item.className = 'bulk-item';
        item.innerHTML = '<span class="bulk-password-text">' + escapeHtml(pwd) + '</span>' +
          '<button type="button" class="btn-bulk-copy" title="Copy" aria-label="Copy password variation">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>' +
          '</button>';
        const btn = item.querySelector('.btn-bulk-copy');
        btn.addEventListener('click', function() {
          copyToClipboard(pwd);
          showToast(dict().toastCopied);
        });
        bulkList.appendChild(item);
      });
    }

    function addToHistory(pwd) {
      if (!pwd) return;
      if (recentHistory.length > 0 && recentHistory[0] === pwd) return;
      recentHistory.unshift(pwd);
      if (recentHistory.length > 5) recentHistory.pop();
      renderHistory();
    }

    function renderHistory() {
      if (recentHistory.length === 0) {
        historyList.innerHTML = '<div class="history-empty">' + dict().noHistory + '</div>';
        return;
      }
      historyList.innerHTML = '';
      recentHistory.forEach(function(pwd) {
        const row = document.createElement('div');
        row.className = 'history-row';
        row.innerHTML = '<span class="history-text">' + escapeHtml(pwd) + '</span>' +
          '<button type="button" class="btn-bulk-copy" title="Copy" aria-label="Copy historical password">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>' +
          '</button>';
        row.querySelector('.btn-bulk-copy').addEventListener('click', function() {
          copyToClipboard(pwd);
          showToast(dict().toastCopied);
        });
        historyList.appendChild(row);
      });
    }

    function copyToClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(function() {
          fallbackCopy(text);
        });
      } else {
        fallbackCopy(text);
      }
    }

    function fallbackCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    }

    // Trigger visual copy animation on main button
    function triggerMainCopyAnimation() {
      copyToClipboard(currentPassword);
      btnMainCopy.classList.add('copied');
      copyBtnText.textContent = dict().btnCopied;
      showToast(dict().toastCopied);
      setTimeout(function() {
        btnMainCopy.classList.remove('copied');
        copyBtnText.textContent = dict().btnCopy;
      }, 2000);
    }

    // Mode Switching
    function setMode(mode) {
      currentMode = mode;
      tabModeRandom.classList.toggle('active', mode === 'random');
      tabModePassphrase.classList.toggle('active', mode === 'passphrase');
      tabModePin.classList.toggle('active', mode === 'pin');

      panelRandom.classList.toggle('active', mode === 'random');
      panelPassphrase.classList.toggle('active', mode === 'passphrase');
      panelPin.classList.toggle('active', mode === 'pin');

      if (mode === 'random') modePill.textContent = dict().modeRandom;
      else if (mode === 'passphrase') modePill.textContent = dict().modePassphrase;
      else if (mode === 'pin') modePill.textContent = dict().modePin;

      refreshPassword();
    }

    tabModeRandom.addEventListener('click', function() { setMode('random'); });
    tabModePassphrase.addEventListener('click', function() { setMode('passphrase'); });
    tabModePin.addEventListener('click', function() { setMode('pin'); });

    // Events: Sliders & Badges
    lengthSlider.addEventListener('input', function() {
      lengthBadge.textContent = this.value + ' chars';
      refreshPassword();
    });

    wordCountSlider.addEventListener('input', function() {
      wordCountBadge.textContent = this.value + ' words';
      refreshPassword();
    });

    pinLengthSlider.addEventListener('input', function() {
      pinLengthBadge.textContent = this.value + ' digits';
      refreshPassword();
    });

    // Preset buttons
    document.querySelectorAll('[data-len]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        lengthSlider.value = this.dataset.len;
        lengthBadge.textContent = this.dataset.len + ' chars';
        refreshPassword();
      });
    });

    document.querySelectorAll('[data-words]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        wordCountSlider.value = this.dataset.words;
        wordCountBadge.textContent = this.dataset.words + ' words';
        refreshPassword();
      });
    });

    document.querySelectorAll('[data-pin]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        pinLengthSlider.value = this.dataset.pin;
        pinLengthBadge.textContent = this.dataset.pin + ' digits';
        refreshPassword();
      });
    });

    // Checkbox custom label sync
    function bindToggle(lbl, chk) {
      lbl.addEventListener('click', function(e) {
        if (e.target !== chk) {
          chk.checked = !chk.checked;
        }
        lbl.classList.toggle('checked', chk.checked);
        refreshPassword();
      });
    }

    bindToggle(lblUpper, chkUpper);
    bindToggle(lblLower, chkLower);
    bindToggle(lblNumbers, chkNumbers);
    bindToggle(lblSymbols, chkSymbols);
    bindToggle(lblAmbiguous, chkAmbiguous);
    bindToggle(lblCapitalize, chkCapitalize);
    bindToggle(lblIncludeNum, chkIncludeNum);
    bindToggle(lblNoRepeat, chkNoRepeat);

    selSeparator.addEventListener('change', refreshPassword);
    selBulk.addEventListener('change', refreshPassword);

    // Copy actions
    btnMainCopy.addEventListener('click', triggerMainCopyAnimation);
    passwordViewport.addEventListener('click', triggerMainCopyAnimation);

    // Regenerate
    function triggerRegenSpin() {
      regenSvg.classList.remove('spin');
      void regenSvg.offsetWidth;
      regenSvg.classList.add('spin');
      refreshPassword();
    }
    btnHeroRegen.addEventListener('click', triggerRegenSpin);
    btnRegenerate.addEventListener('click', triggerRegenSpin);

    // Mask / Unmask
    btnToggleMask.addEventListener('click', function() {
      isMasked = !isMasked;
      eyeIconOpen.style.display = isMasked ? 'none' : 'block';
      eyeIconClosed.style.display = isMasked ? 'block' : 'none';
      btnToggleMask.classList.toggle('active', isMasked);
      passwordDisplay.innerHTML = renderHighlightedPassword(currentPassword);
    });

    // Copy All in Bulk
    btnCopyAll.addEventListener('click', function() {
      const items = Array.from(bulkList.querySelectorAll('.bulk-password-text')).map(function(el) { return el.textContent; });
      if (items.length > 0) {
        copyToClipboard(items.join('\n'));
        showToast(dict().toastAllCopied);
      }
    });

    // Clear History
    btnClearHistory.addEventListener('click', function() {
      recentHistory = [];
      renderHistory();
      showToast(dict().toastCleared);
    });

    // Keyboard shortcut: Space or Enter regenerates, Cmd/Ctrl+C copies
    document.addEventListener('keydown', function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        triggerRegenSpin();
      }
    });

    // Language Handling
    function setLanguage(lang) {
      window.setLanguage = setLanguage;
      if (!I18N[lang]) lang = 'en';
      currentLang = lang;
      localStorage.setItem('vantorkit_lang', lang);
      const d = I18N[lang];

      htmlRoot.setAttribute('lang', lang);
      htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      currentLangLabel.textContent = d.langLabel;

      langOptions.forEach(function(o) {
        o.classList.toggle('active', o.dataset.lang === lang);
      });

      document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const k = el.dataset.i18n;
        if (d[k] && typeof d[k] === 'string') el.textContent = d[k];
      });

      if (currentMode === 'random') modePill.textContent = d.modeRandom;
      else if (currentMode === 'passphrase') modePill.textContent = d.modePassphrase;
      else if (currentMode === 'pin') modePill.textContent = d.modePin;

      if (currentPassword) {
        const entropy = calculateEntropy(currentPassword);
        updateHUD(entropy);
      }
      renderHistory();
    }

    langToggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const open = langMenu.classList.contains('open');
      langMenu.classList.toggle('open', !open);
      langToggleBtn.setAttribute('aria-expanded', String(!open));
    });

    langOptions.forEach(function(o) {
      o.addEventListener('click', function() {
        setLanguage(o.dataset.lang);
        langMenu.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function(e) {
      if (!document.getElementById('langDropdown').contains(e.target)) {
        langMenu.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Initialization
    const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
    setLanguage(savedLang);
    refreshPassword();
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
        "title": "Password Generator – Secure Passphrases & Entropy",
        "desc": "Generate cryptographically random passwords, PINs, and Diceware passphrases. Keys derive via window.crypto with zero network transmissions or log storage."
    },
    "ar": {
        "title": "مولد كلمات المرور – إنشاء رموز سرية ومقياس القوة",
        "desc": "ولد كلمات مرور عشوائية قوية وعبارات Diceware سهلة الحفظ باستخدام Web Crypto API. تتولد الرموز محلياً في معالج جهازك دون حفظ أي سجلات."
    },
    "fr": {
        "title": "Générateur de Mots de Passe – Clés Sécurisées & Entropie",
        "desc": "Générez des mots de passe robustes et phrases Diceware via l'API Web Crypto. Les clés se créent localement sans aucun transfert réseau."
    },
    "it": {
        "title": "Generatore Password Sicure – Frasi Diceware ed Entropia",
        "desc": "Genera chiavi casuali crittograficamente sicure, PIN e passphrase Diceware. Le credenziali nascono via window.crypto senza invio a server."
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
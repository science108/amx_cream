/* ============================================================
   AMX Luxury — i18n (EN / PL) — Single Product
   ============================================================ */
(function () {
  'use strict';

  var T = {
    /* ====== NAVIGATION ====== */
    'nav.story':       { en: 'Our Story',   pl: 'Nasza Historia' },
    'nav.product':     { en: 'The Cream',   pl: 'Krem' },
    'nav.secret':      { en: 'The Secret',  pl: 'Sekret' },
    'nav.vegan':       { en: 'Why Vegan',   pl: 'Dlaczego Vegan' },

    /* ====== HERO ====== */
    'hero.badge':      { en: '100% Vegan \u00B7 Cruelty-Free \u00B7 Lab-Proven',
                         pl: '100% Wega\u0144skie \u00B7 Bez Okrucie\u0144stwa \u00B7 Potwierdzone Klinicznie' },
    'hero.title1':     { en: 'One Product.',   pl: 'Jeden Produkt.' },
    'hero.title2':     { en: 'Total Transformation.',   pl: 'Totalna Transformacja.' },
    'hero.subtitle':   { en: 'Peptidermax &mdash; the advanced vegan peptide cream that activates your body\'s own collagen production. No animals harmed. Ever.',
                         pl: 'Peptidermax &mdash; zaawansowany wega\u0144ski krem peptydowy, kt\u00F3ry aktywuje w\u0142asn\u0105 produkcj\u0119 kolagenu w Twoim organizmie. Bez krzywdzenia zwierz\u0105t. Nigdy.' },
    'hero.cta':        { en: 'Shop Now',   pl: 'Kup Teraz' },
    'hero.cta2':       { en: 'Learn More',   pl: 'Dowiedz si\u0119 wi\u0119cej' },
    'hero.scroll':     { en: 'Scroll',    pl: 'Przewi\u0144' },

    /* ====== STORY ====== */
    'story.label':       { en: 'Our Story',   pl: 'Nasza Historia' },
    'story.title':       { en: 'Why AMX Luxury?<br><em>A Personal Mission</em>',
                           pl: 'Dlaczego AMX Luxury?<br><em>Osobista Misja</em>' },
    'story.greeting':    { en: 'Hi, I\'m Anna Marysia.',
                           pl: 'Cze\u015B\u0107, tu Anna Marysia.' },
    'story.intro.p1':    { en: 'For years, watching the beauty industry, I felt a growing unease. Collagen was everywhere &mdash; a miracle ingredient promising eternal youth. But no one was talking about the fact that this collagen means animal suffering, a fishing industry that I &mdash; a vegetarian since childhood &mdash; simply cannot accept.',
                           pl: 'Przez lata, obserwuj\u0105c \u015Bwiat beauty, czu\u0142am narastaj\u0105cy zgrzyt. Wsz\u0119dzie kolagen &mdash; cudowny sk\u0142adnik, kt\u00F3ry obiecuje wieczn\u0105 m\u0142odo\u015B\u0107. Ale nikt nie m\u00F3wi\u0142 g\u0142o\u015Bno o tym, \u017Ce ten kolagen to cierpienie zwierz\u0105t, to przemys\u0142 rybny, kt\u00F3rego ja &mdash; jako wegetarianka od dziecka &mdash; nie potrafi\u0119 zaakceptowa\u0107.' },
    'story.intro.p2':    { en: 'My followers, many of you from India, kept writing to me: <em>"Anna, how do we care for our skin while respecting life?"</em> I searched for an alternative that wouldn\'t just be an "eco-label," but real technology.',
                           pl: 'Moi odbiorcy, w tym wielu z Was z Indii, pisali\u015Bcie do mnie: <em>\u201EAniu, jak dba\u0107 o sk\u00F3r\u0119, szanuj\u0105c \u017Cycie?\u201D</em> Szuka\u0142am alternatywy, kt\u00F3ra nie by\u0142aby tylko \u201Eeko-etykietk\u0105\u201D, ale realn\u0105 technologi\u0105.' },
    'story.intro.p3':    { en: 'I went back to my roots. My father has been running a family supplement workshop for years, where ethics always came before profit. We sat down together in the lab. I wanted to create something that doesn\'t imitate animal collagen, but activates your own body to produce it.',
                           pl: 'Wr\u00F3ci\u0142am do korzeni. M\u00F3j tata od lat prowadzi rodzinn\u0105 manufaktur\u0119 suplement\u00F3w, gdzie etyka zawsze sta\u0142a przed zyskiem. Usiedli\u015Bmy razem w laboratorium. Chcia\u0142am stworzy\u0107 co\u015B, co nie na\u015Bladuje kolagenu zwierz\u0119cego, ale pobudza Tw\u00F3j w\u0142asny organizm do jego produkcji.' },
    'story.intro.p4':    { en: 'That\'s how <strong>Peptidermax</strong> was born. It isn\'t just a product. It is my father\'s legacy and my promise to you: <strong>100% plant power, 0% suffering, 100% results.</strong>',
                           pl: 'Tak powsta\u0142 <strong>Peptidermax</strong>. To nie jest tylko produkt. To dziedzictwo mojego taty i moja obietnica dla Was: <strong>100% ro\u015Blinnej mocy, 0% cierpienia, 100% rezultat\u00F3w.</strong>' },
    'story.ch1.title':   { en: 'The Search',   pl: 'Poszukiwania' },
    'story.ch1.text':    { en: 'Anna Marysia had been a vegetarian her entire life. As a wellness influencer, she watched the world embrace collagen &mdash; yet every product she found was derived from fish, bovine, or other animal sources. For someone who had never compromised her values, this was simply not an option.',
                           pl: 'Anna Marysia by\u0142a wegetariank\u0105 przez ca\u0142e swoje \u017Cycie. Jako influencerka wellness, obserwowa\u0142a, jak \u015Bwiat pokocha\u0142 kolagen &mdash; ale ka\u017Cdy produkt, jaki znalaz\u0142a, pochodzi\u0142 z ryb, byd\u0142a lub innych \u017Ar\u00F3de\u0142 zwierz\u0119cych. Dla kogo\u015B, kto nigdy nie poszed\u0142 na kompromis ze swoimi warto\u015Bciami, to po prostu nie wchodzi\u0142o w gr\u0119.' },
    'story.quote1':      { en: '"I couldn\'t ask my community to put something into their bodies that contradicts everything we believe in."',
                           pl: '\u201ENie mog\u0142am prosi\u0107 mojej spo\u0142eczno\u015Bci, \u017Ceby przyjmowali co\u015B, co stoi w sprzeczno\u015Bci ze wszystkim, w co wierzymy.\u201D' },
    'story.ch2.title':   { en: 'A Shared Belief',   pl: 'Wsp\u00F3lne Przekonanie' },
    'story.ch2.text':    { en: 'Her audience &mdash; many from India and across Asia &mdash; shares a deep conviction: wellness should never come at the cost of another living being. They trusted Anna because she never faked it. She needed a solution that was as authentic as she was.',
                           pl: 'Jej odbiorcy &mdash; wielu z Indii i Azji &mdash; podziela g\u0142\u0119bokie przekonanie: wellness nigdy nie powinien by\u0107 kosztem innej \u017Cywej istoty. Ufali Annie, bo nigdy niczego nie udawa\u0142a. Potrzebowa\u0142a rozwi\u0105zania tak autentycznego jak ona sama.' },
    'story.ch3.title':   { en: 'Family Roots',   pl: 'Rodzinne Korzenie' },
    'story.ch3.text':    { en: 'What many don\'t know is that Anna\'s father had been running an ethical supplement company for years &mdash; a quiet family business built on the belief that effective formulas and compassion can coexist. No animal testing. No animal-derived ingredients. Just science and integrity.',
                           pl: 'Wielu nie wie, \u017Ce tata Anny od lat prowadzi etyczn\u0105 firm\u0119 suplement\u00F3w &mdash; cich\u0105 rodzinn\u0105 manufaktur\u0119 zbudowan\u0105 na przekonaniu, \u017Ce skuteczne formu\u0142y i wsp\u00F3\u0142czucie mog\u0105 wsp\u00F3\u0142istnie\u0107. \u017Badnych test\u00F3w na zwierz\u0119tach. \u017Badnych sk\u0142adnik\u00F3w odzwierz\u0119cych. Tylko nauka i uczciwo\u015B\u0107.' },
    'story.quote2':      { en: '"My father proved that you don\'t have to harm to heal. I grew up watching him choose the harder, kinder path &mdash; every single time."',
                           pl: '\u201EM\u00F3j tata udowodni\u0142, \u017Ce nie trzeba krzywdzi\u0107, \u017Ceby leczy\u0107. Dorasta\u0142am, patrz\u0105c jak za ka\u017Cdym razem wybiera trudniejsz\u0105, \u0142agodniejsz\u0105 drog\u0119.\u201D' },
    'story.ch4.title':   { en: 'Peptidermax Is Born',   pl: 'Narodziny Peptidermax' },
    'story.ch4.text':    { en: 'Father and daughter joined forces. Combining his decades of formulation expertise with her understanding of what modern, conscious consumers truly need, they created Peptidermax &mdash; a lab-proven, plant-based cream that delivers real results without a single compromise.',
                           pl: 'Ojciec i c\u00F3rka po\u0142\u0105czyli si\u0142y. \u0141\u0105cz\u0105c jego dekady do\u015Bwiadczenia w tworzeniu formu\u0142 z jej rozumieniem potrzeb nowoczesnych, \u015Bwiadomych konsument\u00F3w, stworzyli Peptidermax &mdash; potwierdzony klinicznie, ro\u015Blinny krem, kt\u00F3ry daje realne rezultaty bez \u017Cadnych kompromis\u00F3w.' },

    /* ====== PRODUCT SECTION ====== */
    'product.label':       { en: 'The Cream',   pl: 'Krem' },
    'product.title':       { en: 'Peptidermax<br><em>Advanced Peptide Cream</em>',
                             pl: 'Peptidermax<br><em>Zaawansowany Krem Peptydowy</em>' },
    'product.subtitle':    { en: 'A multi-functional rejuvenating cream that activates your body\'s own collagen production. The needle in a jar &mdash; without a single needle.',
                             pl: 'Wielofunkcyjny krem odm\u0142adzaj\u0105cy, kt\u00F3ry aktywuje w\u0142asn\u0105 produkcj\u0119 kolagenu w organizmie. Ig\u0142a w s\u0142oiczku &mdash; bez jednej ig\u0142y.' },
    'product.why.title':   { en: 'Why This Cream?',   pl: 'Dlaczego Ten Krem?' },
    'product.why.p1':      { en: 'Peptidermax is formulated for daily use, morning and night. Enriched with cutting-edge active peptides, it visibly improves skin condition and restores a healthy, youthful appearance.',
                             pl: 'Peptidermax jest stworzony do codziennego u\u017Cytku, rano i wieczorem. Wzbogacony o najnowocze\u015Bniejsze aktywne peptydy, widocznie poprawia kondycj\u0119 sk\u00F3ry i przywraca zdrowy, m\u0142odzie\u0144czy wygl\u0105d.' },
    'product.why.p2':      { en: 'The formula actively supports collagen and elastin production &mdash; the key proteins for skin strength, elasticity, and firmness. Regular use reduces visible wrinkles and increases skin firmness.',
                             pl: 'Formu\u0142a aktywnie wspiera produkcj\u0119 kolagenu i elastyny &mdash; kluczowych bia\u0142ek odpowiedzialnych za wytrzyma\u0142o\u015B\u0107, elastyczno\u015B\u0107 i j\u0119drno\u015B\u0107 sk\u00F3ry. Regularne stosowanie redukuje widoczne zmarszczki i zwi\u0119ksza j\u0119drno\u015B\u0107 sk\u00F3ry.' },
    'product.b1.title':    { en: 'Peptide Technology',   pl: 'Technologia Peptydowa' },
    'product.b1.text':     { en: 'Neodermyl + Argirelina vegan bioactive peptides',   pl: 'Neodermyl + Argirelina wega\u0144skie bioaktywne peptydy' },
    'product.b2.title':    { en: '100% Vegan',   pl: '100% Wega\u0144ski' },
    'product.b2.text':     { en: 'Zero animal-derived ingredients, zero cruelty',   pl: 'Zero sk\u0142adnik\u00F3w odzwierz\u0119cych, zero okrucie\u0144stwa' },
    'product.b3.title':    { en: 'Dermatologist Approved',   pl: 'Zatwierdzony Dermatologicznie' },
    'product.b3.text':     { en: 'Clinical tests: visible results in 28 days',   pl: 'Badania kliniczne: widoczne efekty w 28 dni' },
    'product.b4.title':    { en: 'Lasts ~3 Months',   pl: 'Wystarcza na ~3 Miesi\u0105ce' },
    'product.b4.text':     { en: '50ml jar \u00B7 Apply daily morning &amp; evening',   pl: 'S\u0142oiczek 50ml \u00B7 Stosuj codziennie rano i wieczorem' },
    'product.ing.title':   { en: 'Key Active Ingredients',   pl: 'Kluczowe Sk\u0142adniki Aktywne' },
    'product.ing.neo':     { en: 'Known as the "needle in a cream" &mdash; a bioactive peptide that stimulates collagen and elastin production. A non-invasive alternative to injections with visible rejuvenation results.',
                             pl: 'Znany jako \u201Eig\u0142a w kremie\u201D &mdash; bioaktywny peptyd stymuluj\u0105cy produkcj\u0119 kolagenu i elastyny. Nieinwazyjna alternatywa dla zastrzyk\u00F3w z widocznymi efektami odm\u0142adzania.' },
    'product.ing.argi':    { en: 'Acetyl Hexapeptide-8 &mdash; the vegan botox. Relaxes facial muscles to smooth expression lines and prevent new wrinkles.',
                             pl: 'Acetyl Hexapeptide-8 &mdash; wega\u0144ski botox. Rozlu\u017Ania mi\u0119\u015Bnie twarzy, wyg\u0142adza zmarszczki mimiczne i zapobiega powstawaniu nowych.' },
    'product.ing.hemp':    { en: 'Natural plant-based nourishment that deeply hydrates and supports the skin\'s barrier function.',
                             pl: 'Naturalne ro\u015Blinne od\u017Cywienie, kt\u00F3re g\u0142\u0119boko nawil\u017Ca i wspiera barier\u0119 ochronn\u0105 sk\u00F3ry.' },

    /* ====== VALUES ====== */
    'values.label':      { en: 'Our Philosophy',   pl: 'Nasza Filozofia' },
    'values.title':      { en: 'Three Pillars of<br><em>AMX Luxury</em>',
                           pl: 'Trzy Filary<br><em>AMX Luxury</em>' },
    'values.v1.title':   { en: '100% Vegan &amp; Cruelty-Free',
                           pl: '100% Wega\u0144skie &amp; Bez Okrucie\u0144stwa' },
    'values.v1.text':    { en: 'Every ingredient is plant-derived. No animal testing, no animal by-products \u2014 ever. Certified compassion from formula to shelf.',
                           pl: 'Ka\u017Cdy sk\u0142adnik jest ro\u015Blinny. \u017Badnych test\u00F3w na zwierz\u0119tach, \u017Cadnych produkt\u00F3w ubocznych \u2014 nigdy. Certyfikowane wsp\u00F3\u0142czucie od formu\u0142y po p\u00F3\u0142k\u0119.' },
    'values.v2.title':   { en: 'Laboratory Proven',   pl: 'Potwierdzone Klinicznie' },
    'values.v2.text':    { en: 'Rigorous clinical testing backs every claim. Our formulas aren\'t just natural \u2014 they\'re scientifically validated to deliver visible, measurable results.',
                           pl: 'Rygorystyczne badania kliniczne stoj\u0105 za ka\u017Cdym twierdzeniem. Nasze formu\u0142y nie s\u0105 tylko naturalne \u2014 s\u0105 naukowo potwierdzone, by dawa\u0107 widoczne, mierzalne rezultaty.' },
    'values.v3.title':   { en: 'Family Heritage',   pl: 'Rodzinne Dziedzictwo' },
    'values.v3.text':    { en: 'Built on decades of ethical supplement expertise passed from father to daughter. AMX Luxury is a family promise \u2014 that doing good and doing well are never mutually exclusive.',
                           pl: 'Zbudowane na dekadach etycznej wiedzy suplementacyjnej przekazywanej z ojca na c\u00F3rk\u0119. AMX Luxury to rodzinna obietnica \u2014 \u017Ce czynienie dobra i odnoszenie sukces\u00F3w nigdy si\u0119 nie wykluczaj\u0105.' },

    /* ====== PRESS / ARTICLE SECTION ====== */
    'press.label':       { en: 'As Seen In',   pl: 'W Prasie' },
    'press.title':       { en: 'Secret of the Qatari Princess',   pl: 'Sekret Katarskiej Ksi\u0119\u017Cniczki' },
    'press.quote':       { en: '&ldquo;I looked at her and couldn\'t believe my eyes. She was nearly sixty, yet she glowed like a woman half her age.&rdquo;',
                           pl: '&ldquo;Patrzy\u0142am na ni\u0105 i nie mog\u0142am uwierzy\u0107 w\u0142asnym oczom. Mia\u0142a prawie sze\u015B\u0107dziesi\u0105t lat, a promieniowa\u0142a jak kobieta o po\u0142ow\u0119 m\u0142odsza.&rdquo;' },
    'press.desc':        { en: 'The extraordinary true story of how a chance encounter with a Qatari princess changed everything &mdash; and led to the creation of AMX Luxury.',
                           pl: 'Niezwyk\u0142a prawdziwa historia o tym, jak spotkanie z katarsk\u0105 ksi\u0119\u017Cniczk\u0105 zmieni\u0142o wszystko &mdash; i doprowadzi\u0142o do powstania AMX Luxury.' },
    'press.badge':       { en: 'Featured Article',   pl: 'Artyku\u0142 Prasowy' },
    'press.cta':         { en: 'Read the Full Story',   pl: 'Przeczytaj Ca\u0142\u0105 Histori\u0119' },

    /* ====== BUY SECTION ====== */
    'buy.label':         { en: 'Order Now',   pl: 'Zam\u00F3w Teraz' },
    'buy.title':         { en: 'Choose Your<br><em>Peptidermax</em>',
                           pl: 'Wybierz Sw\u00F3j<br><em>Peptidermax</em>' },
    'buy.onetime.title': { en: 'One-Time Purchase',   pl: 'Zakup Jednorazowy' },
    'buy.onetime.note':  { en: '+ shipping',   pl: '+ wysy\u0142ka' },
    'buy.sub.badge':     { en: 'Best Value \u2014 Save \u20AC300',   pl: 'Najlepsza Warto\u015B\u0107 \u2014 Oszcz\u0119d\u017A \u20AC300' },
    'buy.sub.title':     { en: '6-Month Subscription',   pl: 'Subskrypcja 6-Miesi\u0119czna' },
    'buy.sub.note':      { en: '/ month \u00B7 free shipping',   pl: '/ miesi\u0105c \u00B7 darmowa wysy\u0142ka' },
    'buy.feat.cream':    { en: 'Peptidermax Advanced Peptide Cream \u00B7 50ml',   pl: 'Peptidermax Zaawansowany Krem Peptydowy \u00B7 50ml' },
    'buy.feat.box':      { en: 'Premium black gift box',   pl: 'Ekskluzywne czarne pude\u0142ko prezentowe' },
    'buy.feat.3mo':      { en: 'Lasts approx. 3 months',   pl: 'Wystarcza na ok. 3 miesi\u0105ce' },
    'buy.feat.vegan':    { en: '100% Vegan &amp; Cruelty-Free',   pl: '100% Wega\u0144ski &amp; Bez Okrucie\u0144stwa' },
    'buy.feat.freeship': { en: 'Free shipping every month',   pl: 'Darmowa wysy\u0142ka co miesi\u0105c' },
    'buy.feat.save':     { en: 'Save \u20AC300 over 6 months vs one-time',   pl: 'Oszcz\u0119d\u017A \u20AC300 przez 6 miesi\u0119cy vs jednorazowo' },
    'buy.feat.cancel':   { en: 'Cancel anytime after 6 months',   pl: 'Anuluj w dowolnym momencie po 6 miesi\u0105cach' },
    'buy.cta.add':       { en: 'Add to Cart',   pl: 'Dodaj do Koszyka' },
    'buy.cta.subscribe': { en: 'Subscribe &amp; Save',   pl: 'Subskrybuj &amp; Oszcz\u0119dzaj' },

    /* ====== VEGAN ====== */
    'vegan.label':       { en: 'Why It Matters',   pl: 'Dlaczego To Wa\u017Cne' },
    'vegan.title':       { en: 'The world doesn\'t need<br>another animal-derived product.',
                           pl: '\u015Awiat nie potrzebuje<br>kolejnego produktu odzwierz\u0119cego.' },
    'vegan.stat1.label': { en: 'of collagen supplements are made from fish or bovine sources',
                           pl: 'suplement\u00F3w kolagenu powstaje z ryb lub byd\u0142a' },
    'vegan.stat2.label': { en: 'animal ingredients in Peptidermax',
                           pl: 'sk\u0142adnik\u00F3w odzwierz\u0119cych w Peptidermax' },
    'vegan.stat3.label': { en: 'plant-powered, lab-verified effectiveness',
                           pl: 'ro\u015Blinna, klinicznie potwierdzona skuteczno\u015B\u0107' },
    'vegan.statement':   { en: 'We believe beauty and wellness should never demand a sacrifice from another living being. Peptidermax proves that nature and science, combined with compassion, create something truly extraordinary.',
                           pl: 'Wierzymy, \u017Ce pi\u0119kno i wellness nigdy nie powinny wymaga\u0107 ofiary ze strony innej \u017Cywej istoty. Peptidermax dowodzi, \u017Ce natura i nauka, po\u0142\u0105czone ze wsp\u00F3\u0142czuciem, tworz\u0105 co\u015B naprawd\u0119 niezwyk\u0142ego.' },

    /* ====== TRUST BADGES ====== */
    'trust.vegan':       { en: '100% Vegan',   pl: '100% Wega\u0144skie' },
    'trust.lab':         { en: 'Lab-Proven',   pl: 'Klinicznie Potwierdzone' },
    'trust.cruelty':     { en: 'Cruelty-Free',   pl: 'Bez Okrucie\u0144stwa' },
    'trust.secure':      { en: 'Secure Checkout',   pl: 'Bezpieczna Kasa' },

    /* ====== FOOTER ====== */
    'footer.tagline':    { en: 'Luxury without compromise.<br>Science without cruelty.',
                           pl: 'Luksus bez kompromis\u00F3w.<br>Nauka bez okrucie\u0144stwa.' },
    'footer.explore':    { en: 'Explore',   pl: 'Odkryj' },
    'footer.connect':    { en: 'Connect',   pl: 'Kontakt' },
    'footer.contact':    { en: 'Contact Us',   pl: 'Napisz do Nas' },
    'footer.newsletter': { en: 'Stay in Touch',   pl: 'B\u0105d\u017A na Bie\u017C\u0105co' },
    'footer.nl.text':    { en: 'Be the first to know about new products and exclusive offers.',
                           pl: 'B\u0105d\u017A pierwsz\u0105 osob\u0105, kt\u00F3ra dowie si\u0119 o nowych produktach i ekskluzywnych ofertach.' },
    'footer.nl.ph':      { en: 'Your email',   pl: 'Tw\u00F3j email' },
    'footer.nl.btn':     { en: 'Join',   pl: 'Do\u0142\u0105cz' },
    'footer.copy':       { en: '\u00A9 2026 AMX Luxury. All rights reserved.',
                           pl: '\u00A9 2026 AMX Luxury. Wszelkie prawa zastrze\u017Cone.' },

    /* ====== ARTICLE PAGE ====== */
    'art.label':         { en: 'Family Stories',   pl: 'Historie Rodzinne' },
    'art.title':         { en: 'Secret of the<br>Qatari <em>Princess</em>',
                           pl: 'Sekret Katarskiej<br><em>Ksi\u0119\u017Cniczki</em>' },
    'art.subtitle':      { en: 'My name is Anna and I would like to tell you my story &mdash; a story that really happened.',
                           pl: 'Mam na imi\u0119 Anna i chcia\u0142abym opowiedzie\u0107 moj\u0105 histori\u0119, kt\u00F3ra wydarzy\u0142a si\u0119 naprawd\u0119.' },
    'art.scan.label':    { en: 'As Featured In Print',   pl: 'Opublikowano w Prasie' },
    'art.scan.desc':     { en: 'This story was originally published as a feature article in a national lifestyle magazine.',
                           pl: 'Ta historia zosta\u0142a pierwotnie opublikowana jako artyku\u0142 w og\u00F3lnopolskim magazynie lifestylowym.' },
    'art.ch1.title':     { en: 'Until now, I only saw princesses in movies\u2026',
                           pl: 'Do tej pory ksi\u0119\u017Cniczki widzia\u0142am tylko w filmach\u2026' },
    'art.ch1.p1':        { en: 'Until now, I only saw princesses in movies. Those beautiful, mysterious women draped in gold, living in palaces beyond imagination. I never thought that one day I would meet one in person &mdash; and that she would change my life forever.',
                           pl: 'Do tej pory ksi\u0119\u017Cniczki widzia\u0142am tylko w filmach. Te pi\u0119kne, tajemnicze kobiety ubrane w z\u0142oto, \u017Cyj\u0105ce w pa\u0142acach przekraczaj\u0105cych wyobra\u017Ani\u0119. Nigdy nie pomy\u015Bla\u0142am, \u017Ce pewnego dnia spotkam jedn\u0105 z nich osobi\u015Bcie &mdash; i \u017Ce zmieni moje \u017Cycie na zawsze.' },
    'art.ch1.p2':        { en: 'My name is Anna. For over 15 years, I have been passionate about beauty, natural skincare, and wellness.',
                           pl: 'Mam na imi\u0119 Anna. Od ponad 15 lat pasjonuj\u0119 si\u0119 urod\u0105, naturaln\u0105 piel\u0119gnacj\u0105 sk\u00F3ry i wellness.' },
    'art.ch1.p3':        { en: 'I was invited to Doha for a private beauty conference organized by one of the most prestigious families in the Persian Gulf.',
                           pl: 'Zosta\u0142am zaproszona do Dohy na prywatn\u0105 konferencj\u0119 beauty, zorganizowan\u0105 przez jedn\u0105 z najbardziej presti\u017Cowych rodzin Zatoki Perskiej.' },
    'art.ch2.title':     { en: 'And then I saw her\u2026',   pl: 'I wtedy j\u0105 zobaczy\u0142am\u2026' },
    'art.ch2.p1':        { en: 'At a private reception, I noticed a woman whose presence commanded the entire room. Her skin was luminous. I assumed she was in her thirties. She was approaching sixty.',
                           pl: 'Na prywatnym przyj\u0119ciu zauwa\u017Cy\u0142am kobiet\u0119, kt\u00F3rej obecno\u015B\u0107 przyci\u0105ga\u0142a uwag\u0119 ca\u0142ego pomieszczenia. Jej sk\u00F3ra by\u0142a promienna. Za\u0142o\u017Cy\u0142am, \u017Ce ma trzydzie\u015Bci kilka lat. Zbli\u017Ca\u0142a si\u0119 do sze\u015B\u0107dziesi\u0105tki.' },
    'art.quote1':        { en: '&ldquo;I looked at her and couldn\'t believe my eyes. She was nearly sixty, yet she glowed like a woman half her age.&rdquo;',
                           pl: '&ldquo;Patrzy\u0142am na ni\u0105 i nie mog\u0142am uwierzy\u0107 w\u0142asnym oczom. Mia\u0142a prawie sze\u015B\u0107dziesi\u0105t lat, a promieniowa\u0142a jak kobieta o po\u0142ow\u0119 m\u0142odsza.&rdquo;' },
    'art.teaser1.title': { en: 'Peptidermax Cream',   pl: 'Krem Peptidermax' },
    'art.teaser1.desc':  { en: 'Inspired by ancient peptide rituals &mdash; advanced vegan bioactive cream',
                           pl: 'Inspirowany staro\u017Cytnymi rytua\u0142ami peptydowymi &mdash; zaawansowany wega\u0144ski krem bioaktywny' },
    'art.teaser.discover':{ en: 'Discover',   pl: 'Odkryj' },
    'art.ch3.title':     { en: 'My husband is a Sheikh of Qatar',   pl: 'M\u00F3j m\u0105\u017C to szejk Kataru' },
    'art.ch4.title':     { en: 'The Great Secret of Youth',   pl: 'Wielki Sekret M\u0142odo\u015Bci' },
    'art.ch5.title':     { en: 'The Youth Injection &mdash; Without a Single Needle',
                           pl: 'Zastrzyk M\u0142odo\u015Bci &mdash; Bez Jednej Ig\u0142y' },
    'art.shop.label':    { en: 'Shop the Secret',   pl: 'Kup Sekret' },
    'art.shop.title':    { en: 'Peptidermax Cream',   pl: 'Krem Peptidermax' },
    'art.shop.cta':      { en: 'Shop Peptidermax',   pl: 'Kup Peptidermax' },
    'art.final.quote':   { en: '&ldquo;Now we have become the holders of the great secret of youth. And it\'s 100% plant-powered.&rdquo;',
                           pl: '&ldquo;Teraz to my sta\u0142y\u015Bmy si\u0119 posiadaczkami wielkiego sekretu m\u0142odo\u015Bci. I jest w 100% ro\u015Blinny.&rdquo;' },
    'art.final.cta':     { en: 'Explore Peptidermax',   pl: 'Odkryj Peptidermax' }
  };

  /* ---------- Engine ---------- */
  function getLang() {
    return localStorage.getItem('amx_lang') || 'en';
  }

  function setLang(lang) {
    localStorage.setItem('amx_lang', lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[key] && T[key][lang]) {
        el.innerHTML = T[key][lang];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (T[key] && T[key][lang]) {
        el.placeholder = T[key][lang];
      }
    });

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.classList.toggle('lang-switch__btn--active', btn.getAttribute('data-lang') === lang);
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
    applyLang(getLang());
  });
})();

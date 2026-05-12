/* ============================================================
   AMX Luxury — i18n (EN / PL) — Single Product
   ============================================================ */
(function () {
  'use strict';

  var T = {
    /* ====== NAVIGATION ====== */
    'nav.story':       { en: 'The Secret',   pl: 'Sekret' },
    'nav.product':     { en: 'IN Technology',   pl: 'Technologia IN' },
    'nav.buy':         { en: 'Shop',   pl: 'Sklep' },
    'nav.vegan':       { en: 'Why Vegan',   pl: 'Dlaczego Vegan' },
    'nav.fullstory':   { en: 'Full Article',   pl: 'Ca\u0142y Artyku\u0142' },

    /* ====== HERO ====== */
    'hero.badge':      { en: 'Advanced IN Technology \u00B7 100% Vegan \u00B7 Lab-Proven',
                         pl: 'Zaawansowana Technologia IN \u00B7 100% Wega\u0144skie \u00B7 Klinicznie Potwierdzone' },
    'hero.title1':     { en: 'Instead of Needle.',   pl: 'Zamiast Ig\u0142y.' },
    'hero.title2':     { en: 'Advanced IN Technology.',   pl: 'Zaawansowana Technologia IN.' },
    'hero.subtitle':   { en: 'Peptidermax &mdash; the breakthrough vegan peptide cream with IN Technology that delivers injection-level results without a single needle. Activates your body\'s own collagen production.',
                         pl: 'Peptidermax &mdash; prze\u0142omowy wega\u0144ski krem peptydowy z Technologi\u0105 IN, kt\u00F3ry zapewnia efekty na poziomie zastrzyku bez jednej ig\u0142y. Aktywuje w\u0142asn\u0105 produkcj\u0119 kolagenu.' },
    'hero.cta':        { en: 'Shop Now',   pl: 'Kup Teraz' },
    'hero.cta2':       { en: 'Discover the Secret',   pl: 'Odkryj Sekret' },
    'hero.scroll':     { en: 'Scroll',    pl: 'Przewi\u0144' },

    /* ====== STORY — QATARI PRINCESS TEASER ====== */
    'story.label':       { en: 'The Secret',   pl: 'Sekret' },
    'story.title':       { en: 'Secret of the<br><em>Qatari Princess</em>',
                           pl: 'Sekret Katarskiej<br><em>Ksi\u0119\u017Cniczki</em>' },
    'story.greeting':    { en: 'My name is Anna.',
                           pl: 'Mam na imi\u0119 Anna.' },
    'story.intro.p1':    { en: 'Until now, I only saw princesses in movies. Those beautiful, mysterious women draped in gold. I never thought I would meet one &mdash; and that she would change my life forever.',
                           pl: 'Do tej pory ksi\u0119\u017Cniczki widzia\u0142am tylko w filmach. Te pi\u0119kne, tajemnicze kobiety ubrane w z\u0142oto. Nigdy nie pomy\u015Bla\u0142am, \u017Ce spotkam jedn\u0105 z nich osobi\u015Bcie &mdash; i \u017Ce zmieni moje \u017Cycie na zawsze.' },
    'story.intro.p2':    { en: 'I was invited to Doha for a private beauty conference. At a reception, I noticed a woman whose presence commanded the entire room. Her skin was luminous &mdash; porcelain-smooth with an inner glow that no makeup could replicate. I assumed she was in her thirties. <strong>She was approaching sixty.</strong>',
                           pl: 'Zosta\u0142am zaproszona do Dohy na prywatn\u0105 konferencj\u0119 beauty. Na przyj\u0119ciu zauwa\u017Cy\u0142am kobiet\u0119, kt\u00F3rej obecno\u015B\u0107 przyci\u0105ga\u0142a uwag\u0119 ca\u0142ego pomieszczenia. Jej sk\u00F3ra by\u0142a promienna &mdash; g\u0142adka jak porcelana, ze \u015Bwiat\u0142em od wewn\u0105trz, kt\u00F3rego \u017Caden makija\u017C nie jest w stanie odtworzy\u0107. Za\u0142o\u017Cy\u0142am, \u017Ce ma trzydzie\u015Bci kilka lat. <strong>Zbli\u017Ca\u0142a si\u0119 do sze\u015B\u0107dziesi\u0105tki.</strong>' },
    'story.intro.p3':    { en: 'She was a princess from one of the ruling families. That evening she shared her secret &mdash; ancient beauty rituals using plant-based peptides, formulas her family had refined over centuries. <em>They never used animal-derived ingredients.</em> Everything came from plants, seeds, and desert botanicals.',
                           pl: 'By\u0142a ksi\u0119\u017Cniczk\u0105 z jednej z rz\u0105dz\u0105cych rodzin. Tego wieczoru podzieli\u0142a si\u0119 swoim sekretem &mdash; staro\u017Cytnymi rytua\u0142ami pi\u0119kno\u015Bci opartymi na ro\u015Blinnych peptydach, formu\u0142ach, kt\u00F3re jej rodzina udoskonala\u0142a przez wieki. <em>Nigdy nie u\u017Cywali sk\u0142adnik\u00F3w odzwierz\u0119cych.</em> Wszystko pochodzi\u0142o z ro\u015Blin, nasion i pustynnych botanik\u00F3w.' },
    'story.quote1':      { en: '&ldquo;I looked at her and couldn\'t believe my eyes. Her skin was flawless &mdash; not in the way of someone who has had work done, but in a way that spoke of deep, natural radiance. She was nearly sixty, yet she glowed like a woman half her age.&rdquo;',
                           pl: '&ldquo;Patrzy\u0142am na ni\u0105 i nie mog\u0142am uwierzy\u0107 w\u0142asnym oczom. Jej sk\u00F3ra by\u0142a nieskazitelna &mdash; nie w spos\u00F3b kogo\u015B po zabiegach, ale promieniuj\u0105ca g\u0142\u0119bokim, naturalnym blaskiem. Mia\u0142a prawie sze\u015B\u0107dziesi\u0105t lat, a l\u015Bni\u0142a jak kobieta o po\u0142ow\u0119 m\u0142odsza.&rdquo;' },
    'story.teaser.p1':   { en: 'I returned home with notebooks full of her formulas and sat down in my father\u2019s laboratory. Together, we translated her ancient wisdom into modern science &mdash; combining cutting-edge vegan peptides like <strong>Neodermyl</strong> and <strong>Argirelina</strong> with traditional botanical extracts.',
                           pl: 'Wr\u00F3ci\u0142am do domu z notatnikami pe\u0142nymi jej formu\u0142 i usiad\u0142am w laboratorium mojego taty. Razem prze\u0142o\u017Cyli\u015Bmy staro\u017Cytn\u0105 m\u0105dro\u015B\u0107 na nowoczesn\u0105 nauk\u0119 &mdash; \u0142\u0105cz\u0105c najnowsze wega\u0144skie peptydy jak <strong>Neodermyl</strong> i <strong>Argirelina</strong> z tradycyjnymi wyci\u0105gami botanicznymi.' },
    'story.teaser.p2':   { en: 'The result was <strong>Peptidermax</strong> and its revolutionary <strong>IN Technology</strong> &mdash; <em>Instead of Needle</em>. A cream that delivers what only injections could promise, powered entirely by plants. Clinical tests confirmed it: visible wrinkle reduction in 28 days.',
                           pl: 'Rezultatem by\u0142 <strong>Peptidermax</strong> i jego rewolucyjna <strong>Technologia IN</strong> &mdash; <em>Instead of Needle (Zamiast Ig\u0142y)</em>. Krem, kt\u00F3ry zapewnia to, co dot\u0105d obiecywa\u0142y tylko zastrzyki, nap\u0119dzany wy\u0142\u0105cznie ro\u015Blinami. Badania kliniczne potwierdzi\u0142y: widoczna redukcja zmarszczek w 28 dni.' },
    'story.scan.badge':  { en: 'As Featured In Print',   pl: 'Opublikowano w Prasie' },
    'story.cta':         { en: 'Read the Full Story',   pl: 'Przeczytaj Ca\u0142\u0105 Histori\u0119' },

    /* ====== PRODUCT SECTION ====== */
    'product.label':       { en: 'The Cream',   pl: 'Krem' },
    'product.title':       { en: 'Peptidermax<br><em>IN Technology Cream</em>',
                             pl: 'Peptidermax<br><em>Krem z Technologi\u0105 IN</em>' },
    'product.subtitle':    { en: 'Advanced IN Technology &mdash; Instead of Needle. A rejuvenating cream that delivers injection-level results using vegan bioactive peptides. No needles. No animal ingredients. Just science.',
                             pl: 'Zaawansowana Technologia IN &mdash; Zamiast Ig\u0142y. Krem odm\u0142adzaj\u0105cy, kt\u00F3ry zapewnia efekty na poziomie zastrzyku dzi\u0119ki wega\u0144skim bioaktywnym peptydom. Bez igie\u0142. Bez sk\u0142adnik\u00F3w odzwierz\u0119cych. Tylko nauka.' },
    'product.why.title':   { en: 'Why This Cream?',   pl: 'Dlaczego Ten Krem?' },
    'product.why.p1':      { en: 'Peptidermax is formulated for daily use, morning and night. Enriched with cutting-edge active peptides, it visibly improves skin condition and restores a healthy, youthful appearance.',
                             pl: 'Peptidermax jest stworzony do codziennego u\u017Cytku, rano i wieczorem. Wzbogacony o najnowocze\u015Bniejsze aktywne peptydy, widocznie poprawia kondycj\u0119 sk\u00F3ry i przywraca zdrowy, m\u0142odzie\u0144czy wygl\u0105d.' },
    'product.why.p2':      { en: 'The formula actively supports collagen and elastin production &mdash; the key proteins for skin strength, elasticity, and firmness. Regular use reduces visible wrinkles and increases skin firmness.',
                             pl: 'Formu\u0142a aktywnie wspiera produkcj\u0119 kolagenu i elastyny &mdash; kluczowych bia\u0142ek odpowiedzialnych za wytrzyma\u0142o\u015B\u0107, elastyczno\u015B\u0107 i j\u0119drno\u015B\u0107 sk\u00F3ry. Regularne stosowanie redukuje widoczne zmarszczki i zwi\u0119ksza j\u0119drno\u015B\u0107 sk\u00F3ry.' },
    'product.b1.title':    { en: 'IN Technology',   pl: 'Technologia IN' },
    'product.b1.text':     { en: 'Instead of Needle \u2014 Neodermyl + Argirelina vegan bioactive peptides',   pl: 'Zamiast Ig\u0142y \u2014 Neodermyl + Argirelina wega\u0144skie bioaktywne peptydy' },
    'product.b2.title':    { en: '100% Vegan',   pl: '100% Wega\u0144ski' },
    'product.b2.text':     { en: 'Zero animal-derived ingredients, zero cruelty',   pl: 'Zero sk\u0142adnik\u00F3w odzwierz\u0119cych, zero okrucie\u0144stwa' },
    'product.b3.title':    { en: 'Dermatologist Approved',   pl: 'Zatwierdzony Dermatologicznie' },
    'product.b3.text':     { en: 'Clinical tests: visible results in 28 days',   pl: 'Badania kliniczne: widoczne efekty w 28 dni' },
    'product.b4.title':    { en: 'Lasts ~3 Months',   pl: 'Wystarcza na ~3 Miesi\u0105ce' },
    'product.b4.text':     { en: '50ml jar \u00B7 Apply daily morning &amp; evening',   pl: 'S\u0142oiczek 50ml \u00B7 Stosuj codziennie rano i wieczorem' },
    'product.ing.title':   { en: 'Key Active Ingredients',   pl: 'Kluczowe Sk\u0142adniki Aktywne' },
    'product.ing.neo':     { en: 'The core of our IN Technology &mdash; a bioactive peptide that stimulates collagen and elastin production. Delivers injection-level rejuvenation results without a single needle.',
                             pl: 'Serce naszej Technologii IN &mdash; bioaktywny peptyd stymuluj\u0105cy produkcj\u0119 kolagenu i elastyny. Zapewnia efekty odm\u0142adzania na poziomie zastrzyku bez jednej ig\u0142y.' },
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

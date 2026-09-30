# Funkcionalna Kickstarter Hero naslovna

## Cilj

Pretvoriti poslatu `Hero.png` kompoziciju u stvarni prvi ekran sajta: isti upečatljiv plavi vizuelni stil, ali sa pravim tekstom, navigacijom, odbrojavanjem i akcijama umesto jedne statične slike.

## Plan

1. **Pripremiti Hero vizuel**
  - Koristiti poslatu `Hero.png` kao izvor za glavni kadar sa plavim kaputom i zimskim okruženjem.
  - Napraviti čistu pozadinsku verziju bez naslikanog menija, teksta, odbrojavanja i kartica, kako se statični i funkcionalni elementi ne bi duplirali.
  - Zadržati model, kaput, plavu atmosferu i raspored što bliže primeru.
2. **Rekonstruisati prvi ekran kao funkcionalan interfejs**
  - Prikazati `GABBYS DESIGN`, `LAUNCHING SOON`, naslov `The World’s 1st Smart Merino Kaput.` i slogan `NATURAL COMFORT. SMARTER LIVING.` kao pravi tekst.
  - Napraviti navigaciju preko fotografije: Home, Our Coat, Smart Features, Merino Wool, Sustainability i Contact.
  - Home vraća na vrh; ostale stavke vode do odgovarajućih delova postojeće stranice ili kontakt strane.
  - Ne prikazivati Search, Profile i Bag ikone, prema izboru korisnika.
3. **Napraviti aktivne karakteristike proizvoda**
  - Zadržati tekst sa slike: Regulates Temperature, Water Resistant, Breathable Merino Wool, Sustainable & Natural, Smart Temperature Control.
  - Donje ikone i desne kartice biće stvarni elementi sa jasnim reakcijama na prelazak mišem/dodir i vezama ka odgovarajućim informacijama niže na stranici.
  - Linije ka kaputu biće prilagodljive različitim veličinama ekrana i neće prekrivati lice ili naslov.
4. **Ugraditi pravo odbrojavanje i Kickstarter akcije**
  - Zameniti brojke sa slike postojećim živim odbrojavanjem do 29. novembra 2026: meseci, dani, sati, minuti i sekunde.
  - Dugme `Coming Soon on Kickstarter` vodi do Kickstarter/prijavne sekcije.
  - Odmah nakon prvog ekrana dodati posebno, veoma uočljivo dugme `Pre-Order · 20% Early Bird`, koje vodi direktno do postojeće forme za prijavu.
  - Očuvati postojeće čuvanje prijava i Google Sheet povezivanje bez promene poslovne logike.
5. **Ukloniti neželjeni element i prilagoditi telefone**
  - Potpuno ukloniti malu fotografiju i tekst `Gabriela, in her own design`.  
  Uklani takodje sliku koja je vezana za ovaj text.
  - Na telefonu zadržati model kao glavni fokus, skratiti raspored kartica i obezbediti da naslov, odbrojavanje i oba dugmeta ostanu čitljivi i lako dostupni.
  - Dodati suptilno pojavljivanje elemenata i poštovati podešavanje za smanjenu animaciju.
6. **Provera**
  - Proveriti desktop i mobilni prikaz, rad svih navigacionih stavki, funkcionalno odbrojavanje, oba CTA dugmeta i prijavnu formu.
  - Proveriti da nijedan element ne prekriva lice/model i da stranica prolazi bez grešaka.

## Tehničke napomene

- `Hero.png` će ostati vizuelni izvor, dok će sav tekst i kontrole biti zasebni HTML elementi radi čitljivosti, prilagodljivosti i funkcionalnosti.
- Izmene su ograničene na početnu stranu, navigaciju i potrebne stilove; postojeće Portfolio, About i Contact stranice ostaju sadržajno nepromenjene.
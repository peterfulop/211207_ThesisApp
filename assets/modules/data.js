export const data = [
  {
    id: 1,
    language: "hu-HU",
    name: "Magyar szóbeli tételek 2017",
    items: [
      {
        id: 1,
        title:
          "Egy kis vegyesbolt vezetője felkéri, hogy készítsen egy számítógépes programot, amely a bolt raktárkészletét tartja nyilván. Határozza meg a fejlesztendő szoftver funkcionális és minőségi követelményeit, valamint az alkalmazás szerkezeti felépítését!",
        task: [
          "Mutassa be a programtervezés folyamatát!",
          "Nevezze meg és jellemezze a tervezés során készítendő dokumentumokat!",
          " Határozza meg a fejlesztendő szoftver funkcionális követelményeit!",
          "Határozza meg a fejlesztendő szoftver minőségi követelményeit!",
        ],
        keys: [
          "Programtervezés: követelmények meghatározása, specifikáció, tervezés",
          "Rendszerkövetelmények, felhasználói követelmények",
          "A követelményfeltárás módszerei",
          "Követelményspecifikáció",
        ],
        content: `<br>
        <p><strong>A programtervez&eacute;s folyamata:</strong></p>
        <p>1. Specifik&aacute;ci&oacute;</p>
        <p>2. Tervez&eacute;s</p>
        <p>3. K&oacute;dol&aacute;s</p>
        <p>4. Tesztel&eacute;s</p>
        <p>5. Hibajav&iacute;t&aacute;s</p>
        <p>6. Dokument&aacute;ci&oacute;</p>
        <br>
        <p><strong>A tervez&eacute;s sor&aacute;n k&eacute;sz&iacute;tendő dokumentumok:</strong></p>
        <p>1. Felhaszn&aacute;l&oacute;i dokument&aacute;ci&oacute;</p>
        <p>2. Fejlesztői dokument&aacute;ci&oacute;</p>
        <p>2.1 V&aacute;ltoz&oacute; t&aacute;bl&aacute;k</p>
        <p>2.2 Fut&aacute;sidő eredm&eacute;nyek</p>
        <p>2.3 Tov&aacute;bbfejleszt&eacute;si tervek</p>
        <br>
        <p><strong>A k&ouml;vetelm&eacute;nyek tervez&eacute;s&eacute;n&eacute;l n&eacute;gy f&aacute;zist k&uuml;l&ouml;nb&ouml;ztethet&uuml;k meg:</strong></p>
        <p><strong>1. Megval&oacute;s&iacute;that&oacute;s&aacute;gi tanulm&aacute;ny</strong></p>
        <p>A legelső folyamat, amikor a probl&eacute;m&aacute;k felt&aacute;r&aacute;sa, &eacute;s elemz&eacute;se megt&ouml;rt&eacute;nik. Meghat&aacute;rozzuk a rendszer hat&aacute;rait, illetve meg&aacute;llap&iacute;tjuk annak &uuml;zleti megval&oacute;s&iacute;that&oacute;s&aacute;g&aacute;t.</p>
        <p><strong>2. K&ouml;vetelm&eacute;nyek felt&aacute;r&aacute;sa &eacute;s elemz&eacute;se</strong></p>
        <p>Itt t&ouml;rt&eacute;nik a a rendszer funkcion&aacute;lis k&ouml;vetelm&eacute;nyeinek meghat&aacute;roz&aacute;sa. Ez t&ouml;rt&eacute;nhet m&aacute;r megl&eacute;vő tapasztalatok &ouml;sszegyűjt&eacute;se alapj&aacute;n, vagy interj&uacute;k, meghallgat&aacute;sok sor&aacute;n.</p>
        <p><strong>3. K&ouml;vetelm&eacute;nyspecifik&aacute;ci&oacute;</strong></p>
        <p>Az &ouml;sszegyűjt&ouml;tt inform&aacute;ci&oacute;k egys&eacute;gbe foglal&aacute;sa, dokument&aacute;ci&oacute; k&eacute;sz&iacute;t&eacute;se. Ez lesz maga a szoftverspecifik&aacute;ci&oacute;.</p>
        <p><strong>4. K&ouml;vetelm&eacute;ny valid&aacute;ci&oacute;</strong></p>
        <p>A kor&aacute;bban meghat&aacute;rozott k&ouml;vetelm&eacute;nyek fel&uuml;lvizsg&aacute;lata, &uuml;tk&ouml;z&eacute;sek kiszűr&eacute;se.</p>`,
      },
      {
        id: 2,
        title:
          "Egy desktop ügyviteli szoftver tesztelését kell megvalósítani. Készítse el a tesztelési tervet, tegyen javaslatot a tesztelési környezet kialakítására!",
        task: [
          "Definiálja a tesztelés fogalmát és jellemzőit!",
          "Határozza meg a szükséges teszttípusokat! ",
          "Határozza meg a tesztelés szintjeit! ",
          "Jellemezze a tesztelési módszereket! ",
          "Definiáljon egy teljes tesztelési környezetet!",
        ],
        keys: [
          "Validáció és verifikáció",
          "Tesztelés szintjei: komponens teszt, modul teszt, integrációs teszt (alrendszer, rendszer teszt), elfogadási teszt",
          "Tesztelési módszerek: statikus és dinamikus tesztelés, fekete doboz, fehér doboz",
          "Szoftvertesztelés módszertana és folyamata",
          "Tesztelési vezérlevek",
          "Rendszertesztelés, integrációs tesztelés, végtesztelés",
          "Teljesítménytesztek (volumen, stressz teszt)",
          "Automatikus tesztelési eszközök (pl. JUnit, NUnit, xUnit)",
          "Tesztvezérelt fejlesztés (napi build, release)",
        ],
        content: `<p>Egy &uuml;gyviteli szoftver fejleszt&eacute;se el&eacute;g szerte&aacute;gaz&oacute; ismereteket k&ouml;vetel meg, ez&eacute;rt a tesztel&eacute;s&eacute;hez is sz&uuml;ks&eacute;gesek mind programoz&oacute;i, mind gazdas&aacute;gi ismeretek. Minden &uuml;gyviteli szoftver m&ouml;g&ouml;tt &aacute;ll egy &uuml;zleti folyamat, melynek ismerete nem k&ouml;vetelhető meg egy programoz&oacute;t&oacute;l vagy egy tesztelőtől sem. Ez&eacute;rt a tesztel&eacute;s k&eacute;t r&eacute;szre oszthat&oacute;, egy szoftver tesztel&eacute;sre &eacute;s egy &uuml;zleti folyamat tesztel&eacute;sre. A tesztel&eacute;s a szoftver minős&eacute;gbiztos&iacute;t&aacute;s &eacute;s &iacute;gy a szoftver fejleszt&eacute;s r&eacute;sz&eacute;t k&eacute;pezi. A tesztel&eacute;s egy rendszer vagy program kontroll&aacute;lt k&ouml;r&uuml;lm&eacute;nyek melletti futtat&aacute;sa, &eacute;s az eredm&eacute;nyek ki&eacute;rt&eacute;kel&eacute;se. A hagyom&aacute;nyos megk&ouml;zel&iacute;t&eacute;s szerint a tesztel&eacute;s c&eacute;lja az, hogy a fejleszt&eacute;s sor&aacute;n l&eacute;trej&ouml;vő hib&aacute;kat min&eacute;l kor&aacute;bban felfedezze, &eacute;s ezzel cs&ouml;kkentse azok jav&iacute;t&aacute;s&aacute;nak k&ouml;lts&eacute;geit.</p>
        <p><strong>A tesztel&eacute;s szintjei</strong></p>
        <p><strong>1. Unit teszt:</strong> Az egys&eacute;gtesztek a met&oacute;dusok tesztel&eacute;s&eacute;re szolg&aacute;lnak. Param&eacute;terek manu&aacute;lis megad&aacute;s&aacute;val vizsg&aacute;ljuk, hogy a met&oacute;dusok visszat&eacute;r&eacute;si &eacute;rt&eacute;ke egyezik-e az elv&aacute;rt eredm&eacute;nnyel.</p>
        <p><strong>2. Integr&aacute;ci&oacute;s teszt:</strong> &Ouml;sszetett met&oacute;dusokat, adat el&eacute;r&eacute;seket, oszt&aacute;lyok &eacute;s azok f&uuml;ggős&eacute;geit vizsg&aacute;ljuk. Fontos, hogy komplett modulok, egys&eacute;gek logik&aacute;ja, egy&uuml;ttes műk&ouml;d&eacute;se kifog&aacute;stalan legyen.</p>
        <p><strong>3. Modul teszt:</strong> Sebess&eacute;get, &eacute;s mem&oacute;ria foglal&aacute;st vizsg&aacute;l&oacute; egys&eacute;g, pl van-e mem&oacute;ria sziv&aacute;rg&aacute;s valahol.</p>
        <p><strong>4. Mennyis&eacute;gi teszt: </strong>A folyamat sor&aacute;n nagy adatb&aacute;zisokkal nagy rekordsz&aacute;m&uacute; adatok feldolgoz&aacute;sa t&ouml;rt&eacute;nik. Indexel&eacute;si hib&aacute;k kiszűr&eacute;se. A tesztel&eacute;s sor&aacute;n lehetős&eacute;g&uuml;nk van random gener&aacute;lt adatokkal dolgozni, amik l&eacute;nyegesen megk&ouml;nny&iacute;thetik az am&uacute;gy időig&eacute;nyes folyamatot.</p>
        <p><strong>5. Stressz teszt:</strong> Fel&uuml;gyelt k&ouml;r&uuml;lm&eacute;nyek k&ouml;z&ouml;tt a program stabilit&aacute;s&aacute;t vizsg&aacute;ljuk. A folyamat l&eacute;nyege, hogy az elv&aacute;rtn&aacute;l nagyobb, folyamatosan n&ouml;vekvő terhel&eacute;s mellett a rendszer viselked&eacute;s&eacute;t figyelj&uuml;k. Keress&uuml;k a gyenge pontokat, &eacute;s sz&uuml;ks&eacute;g eset&eacute;n m&eacute;g korrig&aacute;lhat&oacute; a rendszer.</p>
        <p><strong>6. Elfogad&aacute;si teszt: </strong>A legv&eacute;gső, &eacute;les k&ouml;rnyezetben t&ouml;rt&eacute;nő tesztel&eacute;si folyamat, amikor minden, a szoftver műk&ouml;d&eacute;s&eacute;hez sz&uuml;ks&eacute;ges komponens t&eacute;nylegesen rendelkez&eacute;sre &aacute;ll. &Aacute;ltal&aacute;ban b&eacute;ta verzi&oacute;ban ker&uuml;l ki első k&ouml;rben a program.</p>
        <p><strong>P&eacute;lda teszt t&iacute;pusokra</strong></p>
        <p><strong>Alfa teszt</strong></p>
        <p>Ez egy olyan t&iacute;pus&uacute; vizsg&aacute;lat, amelyet a term&eacute;k kiad&aacute;sa előtt hajtanak v&eacute;gre, hogy azonos&iacute;ts&aacute;k az &ouml;sszes lehets&eacute;ges hib&aacute;t. Ennek c&eacute;lja a val&oacute;di felhaszn&aacute;l&oacute;k szimul&aacute;l&aacute;sa olyan technik&aacute;k felhaszn&aacute;l&aacute;s&aacute;val, mint p&eacute;ld&aacute;ul a feh&eacute;r doboz tesztel&eacute;s &eacute;s a fekete doboz tesztel&eacute;s technika. Ezt laborat&oacute;riumi k&ouml;rnyezetben v&eacute;gzik, &eacute;s a tesztelők a belső alkalmazottak. A c&eacute;l azoknak a feladatoknak a megtart&aacute;sa, amelyeket egy tipikus felhaszn&aacute;l&oacute; elv&eacute;gezhet.</p>
        <p>K&eacute;t szakaszban t&ouml;rt&eacute;nik:</p>
        <p>1. Az első f&aacute;zist h&aacute;zon bel&uuml;li fejlesztők v&eacute;gzik; vagy hardvert t&aacute;mogat&oacute; hibakeresőket, vagy hibakereső szoftvereket haszn&aacute;lnak.</p>
        <p>2. A m&aacute;sodik f&aacute;zist a minős&eacute;gbiztos&iacute;t&aacute;si (QA) csapat v&eacute;gzi.</p>
        <p><strong>B&eacute;ta tesztel&eacute;s</strong></p>
        <p>A b&eacute;ta tesztel&eacute;s a v&eacute;gső pillant&aacute;s a term&eacute;k sz&aacute;ll&iacute;t&aacute;sa előtt. Ezt az &uuml;gyf&eacute;l k&ouml;rnyezet&eacute;ben hajtj&aacute;k v&eacute;gre. Ez egy k&uuml;lső tesztel&eacute;s, mivel a term&eacute;k val&oacute;s felhaszn&aacute;l&oacute;i val&oacute;s k&ouml;rnyezetben v&eacute;gzik el. Ennek c&eacute;lja, hogy visszajelz&eacute;st kapjon a szoftver / term&eacute;k szabv&aacute;ny&aacute;r&oacute;l. Korl&aacute;tozott sz&aacute;m&uacute; v&eacute;gfelhaszn&aacute;l&oacute; teszteli a term&eacute;ket, mivel csak korl&aacute;tozott sz&aacute;m&uacute; v&eacute;gfelhaszn&aacute;l&oacute; sz&aacute;m&aacute;ra ker&uuml;l kiad&aacute;sra. Cs&ouml;kkenti a term&eacute;khib&aacute;k kock&aacute;zat&aacute;t, mivel az &uuml;gyfelek &eacute;rv&eacute;nyes&iacute;t&eacute;se biztos&iacute;tja a term&eacute;k hiperbolikus minős&eacute;g&eacute;t.</p>
        <br>
        <p><strong>Feh&eacute;r dobozos tesztel&eacute;s</strong></p>
        <p>Ez egy olyan szoftver tesztel&eacute;si m&oacute;dszer, amelyben a program belső szerkezete, tervez&eacute;se &eacute;s megval&oacute;s&iacute;t&aacute;sa ismert a tesztelő sz&aacute;m&aacute;ra. A folyamatot a fejlesztők v&eacute;gzik, akik ismerik konkr&eacute;tan a k&oacute;dot, alkalmas algorutmisok tesztel&eacute;s&eacute;re is. Időig&eacute;nyes folyamat. Ilyen pl a unit &eacute;s integr&aacute;ci&oacute;s tesztek.</p>
        <p><strong>Fekete dobozos tesztel&eacute;s</strong></p>
        <p>Ez egy olyan szoftver tesztel&eacute;si m&oacute;dszer, amelyben a program belső szerkezete, tervez&eacute;se &eacute;s megval&oacute;s&iacute;t&aacute;sa nem ismert a tesztelő sz&aacute;m&aacute;ra. Professzion&aacute;lis tesztelő csapat v&eacute;gzi a munk&aacute;t, nem sz&uuml;ks&eacute;ges a programk&oacute;d ismerete, &iacute;gy algoritmusok tesztel&eacute;s&eacute;re sem alkalmas. Tesztel&eacute;shez m&eacute;rs&eacute;kelten k&eacute;pzett tesztelők is alkalmasak.</p>`,
      },
      {
        id: 3,
        title:
          "Egy játékszoftver fejlesztésén több programozó dolgozik. Feladata, hogy a projektben résztvevők számára kialakítsa a közös fejlesztési környezetet, valamint gondoskodjon az egyes programváltozatok és frissítések elkészítéséről.",
        task: [
          "Határozza meg a közös fejlesztés során jelentkező problémákat! ",
          "Ismertesse a verziókezelő rendszerek főbb jellemzőit! ",
          "Határozza meg egy tetszőlegesen választott verziókezelő rendszerre alapozva a programozók számára a közös munkafolyamatokat és szabályokat! ",
          "Jellemezze a szoftverek életciklusát! ",
          "Ismertesse egy programfrissítés készítésének módját!",
        ],
        keys: [
          "Verziókezelő rendszerek (pl. GIT, SNV)",
          "Automatikus dokumentumgeneráló eszközök",
          "Szoftverek életciklusa: alpha-, béta- és végleges verziók (release) kiadása",
          "Telepítőcsomag készítése",
          "Verziókövetés, hibajavítás az egyes verziókba, programfrissítések készítése",
        ],
        content: `<p>Egy j&aacute;t&eacute;kfejleszt&eacute;s viszonylag &ouml;sszetett feladat, &iacute;gy az &aacute;tlagosn&aacute;l t&ouml;bb r&eacute;szegs&eacute;gre tagoljuk a feladatokat. A legelső feladat egy fejleszt&eacute;si architekt&uacute;ra meghat&aacute;roz&aacute;sa, pl MVC logika alapj&aacute;n. A k&ouml;z&ouml;s fejleszt&eacute;s legalapvetőbb probl&eacute;m&aacute;ja tal&aacute;n a k&uuml;l&ouml;nb&ouml;ző fejlesztők &aacute;ltal &iacute;rt k&oacute;d kezel&eacute;se, k&ouml;vet&eacute;se, &ouml;sszef&eacute;s&uuml;l&eacute;se.</p>
        <p>A fejleszt&eacute;si folyamatok k&ouml;vethetős&eacute;g&eacute;re l&eacute;teznek &uacute;gynevezett verzi&oacute;kezelő technol&oacute;gi&aacute;k, amik megk&ouml;nny&iacute;tik a csapatban val&oacute; munk&aacute;t, &eacute;s azt &iacute;rt k&oacute;d k&ouml;vethetős&eacute;g&eacute;t.</p>
        <p>Alapvetően 2 fő kateg&oacute;ri&aacute;ra oszthatjuk a verzi&oacute;kezelőket: L&eacute;teznek centraliz&aacute;lt, &eacute;s decentraliz&aacute;lt megold&aacute;sok. M&iacute;g a centraliz&aacute;lt eset&eacute;ben a k&oacute;dunk egy szerveren van, addig a decentraliz&aacute;lt rendszerekn&eacute;l a teljes k&oacute;d minden fejlesztőn&eacute;l megtal&aacute;lhat&oacute;, a saj&aacute;t sz&aacute;m&iacute;t&oacute;g&eacute;p&eacute;n.</p>
        <p>Az egyik legn&eacute;pszerűbb decentraliz&aacute;lt rendszer a git, illetve ennek online kliense a github. A fejlesztett program k&uuml;l&ouml;nb&ouml;ző moduljait k&uuml;l&ouml;nb&ouml;ző &aacute;gakba t&ouml;ltik a fejlesztők, &iacute;gy a m&aacute;r k&eacute;sz, ellenőrz&ouml;tt master k&oacute;dj&aacute;t&oacute;l f&uuml;ggetlen&uuml;l tudnak dolgozni. Amikor egy modul fejleszt&eacute;se befejeződ&ouml;tt, &eacute;s t&ouml;bb ellenőrz&eacute;si f&aacute;zison is &aacute;tesett, akkor ker&uuml;l a mell&eacute;k&aacute;gb&oacute;l &ouml;sszef&eacute;s&uuml;l&eacute;sre a fő&aacute;ggal. (merge)</p>
        <p><strong>Egy program &eacute;letciklusa:</strong></p>
        <p>Egy szoftver &eacute;letciklusa a specifik&aacute;l&aacute;st&oacute;l kezdődik, &eacute;s a program kivezet&eacute;s&eacute;ig tart. A program elk&eacute;sz&uuml;l&eacute;se ut&aacute;n a k&uuml;l&ouml;nb&ouml;ző tesztel&eacute;si f&aacute;zisoknak megfelelően k&uuml;l&ouml;nb&ouml;ző verzi&oacute;kat, peri&oacute;dusokat hat&aacute;rozhatunk meg.</p>
        <p><strong>1. Pre-alpha</strong><br>Minden tesztf&aacute;zis itt t&ouml;rt&eacute;nik, a form&aacute;lis tesztel&eacute;sek előtt. Alap k&ouml;vetelm&eacute;nyeknek val&oacute; megfelel&eacute;s ellenőrz&eacute;se, grafika, design ellenőrz&eacute;se.</p>
        <p><strong>2. Alpha</strong><br>A tesztel&eacute;s első foka, ahol a szoftver műk&ouml;d&eacute;se m&eacute;g nem t&ouml;k&eacute;letes. Előfordulnak az adatveszt&eacute;sek, &ouml;sszeoml&aacute;sok, jellemzően &uacute;j funkci&oacute;kat itt m&aacute;r nem vezetnek be.</p>
        <p><strong>3. Beta</strong><br>A v&eacute;glegesnek gondolt, alapvető hib&aacute;kt&oacute;l mentes verzi&oacute;, amit &aacute;ltal&aacute;ban k&uuml;lső tesztel&eacute;sre adnak ki. Egy b&eacute;ta verzi&oacute;s szoftver haszn&aacute;lata k&ouml;zben előj&ouml;hetnek m&eacute;g felhaszn&aacute;l&oacute;k &aacute;ltal gener&aacute;lt hib&aacute;k, finom&iacute;t&aacute;st ig&eacute;nylő l&eacute;p&eacute;sek, kisebb bugok.</p>
        <p><strong>4. Relase Candid</strong><br>A b&eacute;ta verzi&oacute;ban produk&aacute;lt hib&aacute;k jav&iacute;t&aacute;sa, dokument&aacute;ci&oacute;k friss&iacute;t&eacute;se, &eacute;s a szoftver v&eacute;gleges&iacute;t&eacute;se t&ouml;rt&eacute;nik.</p>
        <p><strong>5. Relase to Manufacturing</strong><br>Elk&eacute;sz&uuml;l az első stabil verzi&oacute;, megkezdődhet a szoftver &eacute;rt&eacute;kes&iacute;t&eacute;se.</p>
        <p><strong>6. General Availability</strong><br>A program haszn&aacute;lata &eacute;les k&ouml;rnyezetben.</p>
        <p id="isPasted"><strong>Friss&iacute;t&eacute;sek</strong></p>
        <p>Egy szoftver publik&aacute;l&aacute;sa ut&aacute;n biztos&iacute;tanunk kell a felhaszn&aacute;l&oacute;knak, hogy &uacute;jabb, friss&iacute;tett verzi&oacute; megjelen&eacute;se eset&eacute;n lehetős&eacute;ge legyen a friss&iacute;t&eacute;sre. Bizonyos friss&iacute;t&eacute;sek lehetnek automatikusak, illetve manu&aacute;lisan let&ouml;lhetők. &Aacute;ltal&aacute;ban a szoftver webes kapcsolat seg&iacute;ts&eacute;g&eacute;vel kommunik&aacute;l egy szerverrel, ahol ak&aacute;r minden ind&iacute;t&aacute;sn&aacute;l ellenőrzi az adott verzi&oacute;t, &eacute;s a hozz&aacute; tartoz&oacute; el&eacute;rhető friss&iacute;t&eacute;seket. Ha tal&aacute;l frissebb verzi&oacute;t, erről a felhaszn&aacute;l&oacute;t t&aacute;j&eacute;koztatja, majd lehetős&eacute;get biztos&iacute;t ennek let&ouml;lt&eacute;s&eacute;re, telep&iacute;t&eacute;s&eacute;re.</p>`,
      },
      {
        id: 4,
        title:
          "Egy webalapú szoftvert többfelhasználós működésre kell kialakítani. Tervezze meg a webalapú szoftver többfelhasználós működését, definiálja a működéshez szükséges komponenseket, és alakítsa ki a szükséges biztonsági megoldásokat!",
        task: [
          "Ismertesse a webalapú rendszerek felhasználókezelési megoldásait és jellemzőit! ",
          "Ismertesse a jelszókezelésre és tárolásra vonatkozó alapelveket! ",
          "Mutasson be - egy webalapú szoftver esetében - egy teljes körű felhasználókezelési megoldást! ",
          "Ismertesse a leggyakoribb felhasználói fiókok elleni támadási módszereket, és tegyen javaslatot az ellenük való védekezésre!",
        ],
        keys: [
          "HTTP protokoll felépítése, működése. Kérés és válaszüzenet. Biztonság",
          "Munkamenet (session-kezelés)",
          "Web alkalmazások biztonsága. Felhasználó- és jogosultságkezelés",
          "Alkalmazásszerverek biztonsági megoldásai",
          "Jelszókezelésre vonatkozó szabályok, jelszavak tárolása",
          "Felhasználói fiókok elleni támadások: nyers erő (brute force) és szótármódszer",
          "Felhasználói fiókok védelme",
          "Adatbázisok védelme",
        ],
        content: `<p><strong>A webalap&uacute; rendszerek felhaszn&aacute;l&oacute;kezel&eacute;si megold&aacute;sai:</strong></p>
        <p>Emberek &eacute;s robotok megk&uuml;l&ouml;nb&ouml;ztet&eacute;se, Turing-teszt</p>
        <p>Captcha haszn&aacute;lata</p>
        <p>Authentik&aacute;ci&oacute;, hiteles&iacute;t&eacute;s : A felhaszn&aacute;l&oacute; adatainak hiteles&iacute;t&eacute;se, ellenőrz&eacute;se</p>
        <p>Autoriz&aacute;ci&oacute;, enged&eacute;lyez&eacute;s : A tartalom kiszolg&aacute;l&aacute;sa a hozz&aacute;f&eacute;r&eacute;si jogok alapj&aacute;n</p>
        <p><strong>Jelszavak kezel&eacute;se:</strong></p>
        <p>Jelszavak minim&aacute;lis hossz&aacute;nak &eacute;s karakter tartalm&aacute;nak meghat&aacute;roz&aacute;sa</p>
        <p>A jelszavak adatb&aacute;zisban t&ouml;rt&eacute;nő t&aacute;rol&aacute;sa minden esetben valamilyen titkos&iacute;t&aacute;si m&oacute;dszerrel t&ouml;rt&eacute;nik. Optim&aacute;lis esetben nem visszafejthető megold&aacute;st keres&uuml;nk, pl md5. (egy&eacute;b m&oacute;dszerek: sha256, sha 512)</p>
        <p>A felhaszn&aacute;l&oacute;k kezel&eacute;se &aacute;ltal&aacute;ban szerepk&ouml;r&uuml;k alapj&aacute;n t&ouml;rt&eacute;nik. Bizonyos szerepekhez bizonyos hozz&aacute;f&eacute;r&eacute;si lehetős&eacute;gek tartoznak. (pl egy adminisztr&aacute;tor, &aacute;tlag user)</p>
        <p><strong>T&aacute;mad&aacute;si form&aacute;k:</strong></p>
        <p><strong>1. Szerver t&aacute;mad&aacute;sa</strong></p>
        <p>DOS, DDOS</p>
        <p>Egy, vagy t&ouml;bb c&iacute;mről t&ouml;rt&eacute;nő terhel&eacute;s ind&iacute;t&aacute;sa. A folyamat l&eacute;nyege, hogy a terhel&eacute;s ideje alatt az oldal nagyon lass&uacute;, el&eacute;rhetetlen legyen, vagy ak&aacute;r &ouml;ssze is omoljon. Az 1 IP-c&iacute;mről &eacute;rkező k&eacute;r&eacute;seket viszonylag k&ouml;nnyen tudjuk maximaliz&aacute;lni k&uuml;lső bőv&iacute;tm&eacute;nyekkel.</p>
        <p><strong>2. Felhaszn&aacute;l&oacute; fi&oacute;k t&aacute;mad&aacute;sa</strong></p>
        <p>Nem a rendszer hib&aacute;ira &eacute;p&iacute;t, hanem a felhaszn&aacute;l&oacute; figyelmetlens&eacute;g&eacute;re. &Aacute;ltal&aacute;ban szem&eacute;lyes adatok gyűjt&eacute;se az elsődleges c&eacute;l. Ilyen lehet jelszavak, email, telefonsz&aacute;m, rosszabb esetben bankk&aacute;rtya adatok.</p>
        <p><strong>2.1 Dictionary Based (Sz&oacute;t&aacute;r alap&uacute;) t&aacute;mad&aacute;s:</strong></p>
        <p>A felhaszn&aacute;l&oacute; saj&aacute;t anyanyelv&eacute;ből indul ki. Egy a nyelv &eacute;rtelmes szavait tartalmaz&oacute; t&aacute;bl&aacute;b&oacute;l futtatja le az &ouml;sszes mentett lehetős&eacute;get, &eacute;s pr&oacute;b&aacute;lja meg a bejut&aacute;st. Tan&aacute;csos nem &eacute;rtelmes szavakat, kifejez&eacute;seket haszn&aacute;lni jelsz&oacute;nak.</p>
        <p><strong>2.2 Brute force (Nyers erő) t&aacute;mad&aacute;s:</strong></p>
        <p>Egy kicsit hosszabb folyamat mint a dictionary m&oacute;dszer, ugyanis random gener&aacute;lt &eacute;s k&oacute;dolt alfanumerikus karakterl&aacute;conkat pr&oacute;b&aacute;l a rendszer. Tulajdonk&eacute;ppen kellő idő &eacute;s energia r&aacute;ford&iacute;t&aacute;s&aacute;val előbb ut&oacute;bb fejthető lesz a jelsz&oacute;. Jelsz&oacute; gyakori cser&eacute;je megoldhatja a probl&eacute;m&aacute;t.</p>
        <p><strong>2.3 Phising (Adathal&aacute;sz) m&oacute;dszer:</strong></p>
        <p>&Aacute;ltal&aacute;ban emailből, vagy egy&eacute;l hivatkoz&aacute;s kattint&aacute;sb&oacute;l sz&aacute;rmaz&oacute; t&aacute;mad&aacute;si forma, amikor egy, a megl&eacute;vőre teljes m&eacute;rt&eacute;kben hasonl&iacute;t&oacute; oldalra navig&aacute;lnak &aacute;t minket. Jellemzően k&ouml;z&ouml;ss&eacute;gi oldalak, bankok, email fi&oacute;kok bejelentkez&eacute;si fel&uuml;let&eacute;t kapjuk, &eacute;s szem&eacute;lyes adataink megad&aacute;s&aacute;t k&eacute;rik től&uuml;nk. Ha nem figyel&uuml;nk mondjuk az URL-re, vagy a gyan&uacute;s elemekre, esetleg helyes&iacute;r&aacute;si hib&aacute;kra, sajnos bejelentkez&eacute;s c&iacute;m&eacute;n megadott adataink rossz k&eacute;zbe ker&uuml;lnek.</p>
        <p></p>
        <p><strong>3. Adatb&aacute;zisok t&aacute;mad&aacute;sa</strong></p>
        <p>Az adatb&aacute;zis kezelő rendszerekben is &eacute;lnek v&eacute;delmi funkci&oacute;k. Előbb azonos&iacute;tani kell magunkat egy n&eacute;vvel &eacute;s egy jelsz&oacute;val, hogy hozz&aacute;f&eacute;rhess&uuml;nk az adatb&aacute;zisban t&aacute;rolt adatokhoz. A sikeres bejelentkez&eacute;s ut&aacute;n itt is csak egy korl&aacute;tozott hozz&aacute;f&eacute;r&eacute;si jogot kapunk az adatb&aacute;zishoz, hiszen mind az elv&eacute;gezhető műveletek, mind pedig az el&eacute;rhető objektumok k&ouml;re csak egy szűk r&eacute;sze az adatb&aacute;zisban let&aacute;rolt &eacute;s biztos&iacute;tott objektumok, funkci&oacute;k halmaz&aacute;nak. </p>
        <p>&Eacute;rdekess&eacute;g, hogy adott adatb&aacute;zisok felt&ouml;r&eacute;se ut&aacute;n minden jelsz&oacute; &eacute;s szem&eacute;lyes adat is lop&aacute;sra ker&uuml;lhet, m&eacute;g akkor is, ha adott időben a jelszavak felt&ouml;r&eacute;se nem lehets&eacute;ges. A technika fejlőd&eacute;s&eacute;vel nem kiz&aacute;rt, hogy egy szupersz&aacute;m&iacute;t&oacute;g&eacute;p t&ouml;red&eacute;k idő alatt k&eacute;pes lesz elv&eacute;gezni azokat a sz&aacute;m&iacute;t&aacute;sokat, amiket most idő &eacute;s energia hi&aacute;ny&aacute;ban egy rendszer nem tud.</p>`,
      },
      {
        id: 5,
        title:
          "Egy grafikus, több platformon (desktop, web, mobil) is használható kártyajáték programot kell készíteni. Tegyen javaslatot a programozási nyelv és a fejlesztési környezet kiválasztására!",
        task: [
          "Tegyen javaslatot a feladathoz megfelelő programozási nyelv kiválasztására! ",
          "Hasonlítsa össze a választott programozási nyelvet más nyelvekkel, és indokolja választásának előnyeit! ",
          "Határozza meg a többplatformú alkalmazásfejlesztés kritikus pontjait és korlátait! ",
          "Válasszon ki egy fejlesztési környezetet és indokolja döntését!",
        ],
        keys: [
          "Programozási nyelvek típusai és jellemzői",
          "Alapvető input/output komponensek",
          "Grafikus komponensek",
          "GUI alkalmazás készítése",
          "Alkalmazásplatformok jellemzői",
          "Multiplatform-alkalmazáskészítés szabályai",
          "Programozói környezetek (IDE) és jellemzőik",
        ],
        content: `<p><strong>Programoz&aacute;si nyelvek</strong></p>
        <p><strong>G&eacute;pi k&oacute;d<br></strong>A g&eacute;p k&oacute;d az a v&eacute;gleges form&aacute;ja a k&oacute;dunknak, amit maga a hardver m&aacute;r &eacute;rtelmezni tud.</p>
        <p><strong>Assemply</strong><br>A g&eacute;pi k&oacute;dhoz legk&ouml;zelebb &aacute;ll&oacute; nyelvek az Assemply nyelvek. Ezek fut&aacute;sideje a leggyorsabb, viszont k&oacute;dol&aacute;suk a legnehezebb, a k&oacute;d legkev&eacute;sb&eacute; &eacute;rtelmezhető a felhaszn&aacute;l&oacute; sz&aacute;m&aacute;ra.</p>
        <p><strong>Compiler ( ford&iacute;t&oacute;) nyelvek<br></strong>G&eacute;pi k&oacute;dot &aacute;ll&iacute;t elő a program, &iacute;gy azt a rendszer k&ouml;zvetlen&uuml;l k&eacute;pes futtatni. (exe fileok)<br>p&eacute;lda: C, C++, C#, Visual Basic, Java</p>
        <p><strong>Interpret&aacute;lt (v&aacute;lasztott) nyelvek<br></strong>Nem g&eacute;pi k&oacute;dot &aacute;ll&iacute;t elő a nyelv, sz&uuml;ks&eacute;ges egy ford&iacute;t&oacute; (compiler) nyelv.<br>p&eacute;lda: JavaScript, PHP, Python</p>
        <p><br></p>
        <p><strong>Platformf&uuml;ggetlens&eacute;g, multi-platform / cross-platform megold&aacute;sok</strong></p>
        <p>Ahhoz, hogy egy elkalmaz&aacute;st t&ouml;bb platformon is futtatni tudjunk, 2 lehetősg&uuml;nk van. Vagy idő, &eacute;s energiaig&eacute;nyes m&oacute;don meg&iacute;rjuk minden platformmra a saj&aacute;t nyelv&eacute;n az alkalmaz&aacute;st, vagy v&aacute;lasztunk egy programoz&aacute;si nyelvet, &eacute;s egy cross-platform keretrendszert.</p>
        <p>Egy platformf&uuml;ggetlen alkalmaz&aacute;s p&eacute;ld&aacute;ul futhat x86-os architekt&uacute;r&aacute;j&uacute; Microsoft Windowson, Linuxon, Mac OS X-en vagy PowerPC-alap&uacute; Mac OS X rendszereken. Egy t&ouml;bbplatformos alkalmaz&aacute;s futhat az &ouml;sszes gyakori platformon vagy egyszerűen csak egyn&eacute;l t&ouml;bb&ouml;n.</p>
        <p>&Aacute;ltal&aacute;noss&aacute;gban elmondhat&oacute;, hogy a cross-platform appok előnye a nat&iacute;vhoz k&eacute;pest az, hogy:</p>
        <ol>
            <li>k&uuml;l&ouml;nf&eacute;le oper&aacute;ci&oacute;s rendszereken fut,</li>
            <li>k&ouml;lts&eacute;ghat&eacute;kony,</li>
            <li>kevesebb erőforr&aacute;ssal nagyobb piaci lefedetts&eacute;get biztos&iacute;t,</li>
            <li>gyorsabb a piacra ker&uuml;l&eacute;si idő.</li>
        </ol>
        <p>Ugyanaz az alkalmaz&aacute;s b&aacute;rmilyen eszk&ouml;z&ouml;n k&eacute;pes futni, &eacute;s pont ez&eacute;rt magasabb a piaci el&eacute;r&eacute;se is. Költséghatékony, mivel nem natív kell minden nyelven minden eszközre lekódolni, csak egyszer. Stabil, gyorsabb, hatékonyabb a hibajavítás.</p>
        <p><strong>A legn&eacute;pszerűbb cross-platform keretrendszerek</strong></p>
        <p><strong>1. Xamarin</strong></p>
        <p>A Xamarin 2011-ben indult, elősz&ouml;r f&uuml;ggetlen alkalmaz&aacute;sfejleszt&eacute;si keretrendszerk&eacute;nt, majd 2016-ban a Microsoft megv&aacute;s&aacute;rolta, &iacute;gy sokak sz&aacute;m&aacute;ra megb&iacute;zhat&oacute;bb h&aacute;tt&eacute;rrel műk&ouml;d&ouml;tt a tov&aacute;bbiakban. Ez egy ny&iacute;lt forr&aacute;sk&oacute;d&uacute; rendszer, amely egyar&aacute;nt alkalmas nat&iacute;v &eacute;s cross-platform appok fejleszt&eacute;s&eacute;re.</p>
        <p>Mivel C# programoz&aacute;st haszn&aacute;l, ez&eacute;rt sz&aacute;mos platformon z&ouml;kkenőmentesen műk&ouml;dik, bele&eacute;rtve az Android &eacute;s iOS rendszereket. Tov&aacute;bbi előnye, hogy a k&oacute;db&aacute;zis 75%-&aacute;t megoszthatod, &iacute;gy egyetlen m&oacute;dos&iacute;t&aacute;s sz&uuml;ks&eacute;ges, &eacute;s nem sz&uuml;ks&eacute;ges minden platform eset&eacute;ben k&uuml;l&ouml;n elv&eacute;gezni azt.</p>
        <p>H&aacute;tr&aacute;nya, hogy viszonylag dr&aacute;ga. B&aacute;r mag&aacute;nszem&eacute;lyek &eacute;s startupok sz&aacute;m&aacute;ra ingyenes, a v&aacute;llalatoknak el&eacute;gg&eacute; k&ouml;lts&eacute;ges lehet ez a keretrendszer.</p>
        <p><strong>2. React Native</strong></p>
        <p>A React Native keretrendszert a Facebook 2015-ben ind&iacute;totta el, ezzel hull&aacute;mot ind&iacute;tva a hibrid keretrendszerek piac&aacute;n. Bevezet&eacute;se ut&aacute;n n&eacute;h&aacute;ny &eacute;ven bel&uuml;l az egyik legn&eacute;pszerűbb keretrendszernek sz&aacute;m&iacute;tott.</p>
        <p>Seg&iacute;ts&eacute;g&eacute;vel React &eacute;s JavaScript technol&oacute;gi&aacute;kat &ouml;tv&ouml;zve k&eacute;sz&iacute;thet&uuml;nk mobilappokat. A Xamarinnal szemben a k&oacute;db&aacute;zis ak&aacute;r 80%-a oszthat&oacute; meg a platformok k&ouml;z&ouml;tt, amely gyorsabb &eacute;s k&ouml;lts&eacute;ghat&eacute;konyabb fejleszt&eacute;st jelent. Tov&aacute;bbi előnye, hogy lehetős&eacute;get biztos&iacute;t nat&iacute;v k&oacute;dr&eacute;szletek felhaszn&aacute;l&aacute;s&aacute;ra, &iacute;gy a fejlesztők b&aacute;rmikor kieg&eacute;sz&iacute;thetik ezzel a cross-platform k&oacute;dot.</p>
        <p>pl: Instagram, Pinterest, Skype</p>
        <p><strong>3. Flutter</strong></p>
        <p>A Facebook ut&aacute;n a m&aacute;sik nagy &oacute;ri&aacute;s, a Google keretrendszere. A React Native-hoz hasonl&oacute;an nat&iacute;v komponensekre &eacute;p&uuml;l, &eacute;s a nat&iacute;v appokkal megegyező minős&eacute;get biztos&iacute;t. A fentiekhez k&eacute;pest viszonylag &uacute;j technol&oacute;gi&aacute;nak sz&aacute;m&iacute;t, ugyanis 2018-ban deb&uuml;t&aacute;lt, 2019 m&aacute;jus&aacute;ban pedig meg&eacute;rkezett a Flutter 1.7 verzi&oacute;, ami egy m&eacute;g enn&eacute;l is stabilabb fel&eacute;p&iacute;t&eacute;st k&iacute;n&aacute;l. Fejlesztői felm&eacute;r&eacute;sek szerint a Flutter a top 3 legkedveltebb keretrendszer k&ouml;z&eacute; tartozik. Nemcsak az alkalmaz&aacute;s, de m&aacute;r maga a fejleszt&eacute;s is gyorsabb, &iacute;gy a k&oacute;db&aacute;zisban v&eacute;grehajtott m&oacute;dos&iacute;t&aacute;sok ak&aacute;r m&aacute;sodpercek alatt l&aacute;that&oacute;k a fel&uuml;leten.</p>
        <p>pl: Alibaba, Google, The New York Times</p>
        <p><br></p>
        <p><strong>Fejlesztői k&ouml;rnyezet, IDE</strong></p>
        <p>Az integr&aacute;lt fejlesztői k&ouml;rnyezetek vagy r&ouml;viden IDE-k (Integrated Development Environment) alkalmaz&aacute;sok, melyek jelentősen megk&ouml;nny&iacute;tik &eacute;s meggyors&iacute;tj&aacute;k a szoftverfejleszt&eacute;st. Egy j&oacute; k&ouml;rnyezet jellemzői: Testreszabhat&oacute;, ismeri az adott nyelv szintaxis&aacute;t, tudja futtatni a projektet, rendelkezik valamilyen verzi&oacute;kezelő megold&aacute;ssal.</p>`,
      },
      {
        id: 6,
        title:
          "Egy áruház klimatizálási rendszeréből 10 másodpercenként érkeznek - az egyes helyiségek hőmérsékletét jelző - monitoradatok egy adatbázisba. A megfigyelt helyiségek (beérkező adatok) száma 300 darab. Tegyen javaslatot az adatok rögzítéséhez szükséges adatbázis és alkalmazás felépítésére!",
        task: [
          "Tervezze meg a rendszer működéséhez szükséges architektúrát! ",
          "Tervezze meg az adatok tárolásához szükséges adatbázis felépítését! ",
          "Határozza meg az adatok tárolásához szükséges tárterületet! ",
          "Tervezze meg az adatok rögzítéséhez szükséges alkalmazást! ",
          "Határozza meg a rendszer működése során jelentkező kritikus pontokat, hibákat és javasoljon megoldásokat!",
        ],
        keys: [
          "Adatbázis-kezelő rendszer telepítése, alapvető konfigurációs beállítások",
          "Adatbázisok normalizálása, optimalizálása",
          "Adatmodellezés: egyed-kapcsolat diagramok, tervezési alapelvek, megszorítások (constraint) modellezése",
          "Mezőtulajdonságok: típusok, mezőméret, alapérték",
          "Adatbázis-kapcsolatok megvalósítása. Lokális és hálózati adatbázis használata",
          "Üzenetközvetítő sorok (MQ)",
        ],
        content: `<p><strong>Adatb&aacute;zis architekt&uacute;r&aacute;k</strong></p>
        <p><strong>Egyg&eacute;pes (Local Databases) acrhitekt&uacute;ra:<br></strong>Az adatb&aacute;zis &eacute;s az alkalmaz&aacute;s egy g&eacute;pre ker&uuml;l, csak lok&aacute;lisan, az adott rendszeren &eacute;rhető el minden.</p>
        <p><strong>File-kiszolg&aacute;l&oacute; (File-Server) architekt&uacute;ra:<br></strong>Az adatb&aacute;zis egy file szerverre ker&uuml;l, ahonnan h&aacute;l&oacute;zaton kereszt&uuml;l t&ouml;bb felhaszn&aacute;l&oacute; is el&eacute;rheti az adatokat. A szerver csak az adatok t&aacute;rol&aacute;s&aacute;ra szolg&aacute;l. Viszonylag nagy adatforgalommal j&aacute;r minden adatművelet.</p>
        <p><strong>&Uuml;gyf&eacute;l-kiszolg&aacute;l&oacute; (Client/Server) architekt&uacute;ra:<br></strong>Az adatok kiszolg&aacute;l&aacute;s&aacute;t egy adatb&aacute;zis szerver v&eacute;gzi (MS-SQL Server, Oracle). A rendszer legnagyobb előnye a gyorsas&aacute;g, hiszen un. SQL parancsok kiad&aacute;s&aacute;val csak a sz&uuml;ks&eacute;ges adatokat k&eacute;rj&uuml;k le a szervertől, nincs f&ouml;l&ouml;sleges tartalom utaztat&aacute;s. A SQL parancsok feldolgoz&aacute;s&aacute;t az adatb&aacute;zis szerver v&eacute;gzi.</p>
        <p><strong>T&ouml;bbr&eacute;tegű (Multi-Tier) adatb&aacute;zis architekt&uacute;ra:<br></strong>Az adatok kiszolg&aacute;l&aacute;sa egy k&ouml;zbeiktatott applik&aacute;ci&oacute;s szerveren kereszt&uuml;l t&ouml;rt&eacute;nik, a felhaszn&aacute;l&oacute; nem k&ouml;zvetlen&uuml;l az adatb&aacute;zis-szerverrel kommunik&aacute;l.</p>
        <p><strong>A legoptim&aacute;lisabb megold&aacute;s a client/server architekt&uacute;ra alkalmaz&aacute;sa.</strong></p>
        <p><br></p>
        <p><strong>Az adatb&aacute;zis normaliz&aacute;l&aacute;sa</strong></p>
        <p>A normaliz&aacute;l&aacute;s egy adatb&aacute;zis adatainak rendszerez&eacute;se. Ide tartozik a t&aacute;bl&aacute;k l&eacute;trehoz&aacute;sa &eacute;s a t&aacute;bl&aacute;k k&ouml;z&ouml;tti kapcsolatok kialak&iacute;t&aacute;sa az adatok v&eacute;delm&eacute;re &eacute;s az adatb&aacute;zis rugalmasabb&aacute; l&eacute;trehoz&aacute;s&aacute;ra &uacute;gy, hogy kik&uuml;sz&ouml;b&ouml;li a redundanci&aacute;t &eacute;s a k&ouml;vetkezetlen f&uuml;ggős&eacute;get.</p>
        <p>Redund&aacute;ns adat pazarolja a lemezter&uuml;letet, &eacute;s karbantart&aacute;si probl&eacute;m&aacute;kat okoz. Ha egyn&eacute;l t&ouml;bb helyen tal&aacute;lhat&oacute; adatokat kell m&oacute;dos&iacute;tani, az adatokat minden helyen ugyan&uacute;gy kell m&oacute;dos&iacute;tani.&Aacute;ltal&aacute;noss&aacute;gban elmondhat&oacute;, hogy a normaliz&aacute;l&aacute;shoz tov&aacute;bbi t&aacute;bl&aacute;kra van sz&uuml;ks&eacute;g.</p>
        <p><strong>Normaliz&aacute;l&aacute;si szintek</strong></p>
        <p><strong>1.NF - Első norm&aacute;lforma</strong></p>
        <p>1. Az egyes t&aacute;bl&aacute;zatokban sz&uuml;ntesse meg az ism&eacute;tlődő csoportokat.</p>
        <p>2. Hozzon l&eacute;tre egy k&uuml;l&ouml;n t&aacute;bl&aacute;t minden kapcsol&oacute;d&oacute; adathalmazhoz.</p>
        <p>3. Azonos&iacute;tsa az egyes kapcsol&oacute;d&oacute; adatokat egy elsődleges kulccsal.</p>
        <p><strong>2.NF - M&aacute;sodik norm&aacute;lforma</strong></p>
        <p>1. Hozzon l&eacute;tre k&uuml;l&ouml;n t&aacute;bl&aacute;kat t&ouml;bb rekordra vonatkoz&oacute; &eacute;rt&eacute;khalmazokhoz.</p>
        <p>2. Ezek a t&aacute;bl&aacute;k idegen kulcshoz kapcsol&oacute;dnak.</p>
        <p><strong>3. NF - Harmadik norm&aacute;lforma</strong></p>
        <p>1.T&aacute;vol&iacute;tsa el azokat a mezőket, amelyek nem f&uuml;ggnek a kulcst&oacute;l.</p>
        <p><br></p>
        <p><strong>T&aacute;rter&uuml;let meghat&aacute;roz&aacute;sa</strong></p>
        <p>INT- 4 byte</p>
        <p>FLOAT- 4 byte</p>
        <p>DATETIME - 8 byte</p>
        <p>VARCHAR - 3 byte</p>
        <p><br></p>
        <p><strong>Helyis&eacute;gek T&aacute;bla</strong></p>
        <p>Id (int) 4 byte</p>
        <p>HelyisegNev (varchar) 3 byte</p>
        <p><em>1 rekord: 7 byte</em></p>
        <p>300 rekord: 21000 byte</p>
        <p><br></p>
        <p><strong>M&eacute;r&eacute;sek T&aacute;bla</strong></p>
        <p>Id (int) 4 byte</p>
        <p>FK_Helyiseg (Int) 4 byte</p>
        <p>Homerseklet (Float) 4 byte</p>
        <p>Idopont (DateTime) 8 byte</p>
        <p><em>1 rekord: 20 byte</em></p>
        <p>10s (300 rekord): 6 000 byte</p>
        <p>1h (300 rekord): 36 000 byte</p>
        <p>24h (300 rekord): 864 000 byte (0,864 MB)</p>
        <p>1 &eacute;v (300 rekord): 315 360 000 byte (315,36 MB)</p>`,
      },
      {
        id: 7,
        title:
          "Egy utazási iroda online (webalapú) utazásfoglalási rendszert üzemeltet. A klasszikus MVC alkalmazás a cég szerverén fut. Egy sikeres reklámkampány következtében a rendszer felhasználóinak száma 100-szorosára, csúcsidőszakban(pl.ünnepek, nyári hónapok) pedig akár 10000-szeresére is emelkedik. Feladata, hogy az alkalmazás átalakítása nélkül biztosítsa a megnövelt terhelés költséghatékony kiszolgálását.",
        task: [
          "Ismertesse a többfeladatos, többfelhasználós rendszerek működését! ",
          "Definiálja a klasszikus MVC-alkalmazás felépítését, és térjen ki a skálázhatósági kérdésekre! ",
          "Jellemezze a virtualizációs szoftverek tulajdonságait! ",
          "Definiálja a robosztus alkalmazások jellemzőit! ",
          "Definiálja a csúcsterhelés fogalmát, és magyarázza el ennek költségoldali vonzatát! ",
          "Tervezzen rendszerarchitektúrát a vázolt probléma megoldására!",
        ],
        keys: [
          "Számítógép-architektúrák",
          "Multitask rendszerek. Időosztásos rendszerek. Valósidejű rendszerek",
          "Virtulizációs szoftverek. Fizikai és virtuális gép kapcsolata, beállítások",
          "Többrétegű alkalmazások felépítése",
          "Model–View–Controller (MVC) elv, MVC-elv alkalmazása webtechnológiákban",
          "Hatékonyság és teljesítmény a webalkalmazásokban",
          "Felhőalapú rendszerek",
          "Munkafolyamatokhoz, szolgáltatásokhoz, termékekhez kapcsolódó egyszerű költségkalkuláció.",
        ],
        content: `<p><strong>A t&ouml;bbfeladatos, t&ouml;bbfelhaszn&aacute;l&oacute;s rendszerek műk&ouml;d&eacute;se</strong></p>
        <p>A t&ouml;bbfeladatos ( angolul: multitask, multitasking) kifejez&eacute;st a sz&aacute;m&iacute;t&aacute;stechnik&aacute;ban oper&aacute;ci&oacute;s rendszerekre haszn&aacute;lj&aacute;k, melyek l&aacute;tsz&oacute;lag k&eacute;pesek egyszerre t&ouml;bb programot, programsz&aacute;lat futtatni. Ezek a folyamatok folyamatosan versengenek a CPU-&eacute;rt, mely egy olyan erőforr&aacute;s, amelyet egyszerre csak egy folyamat haszn&aacute;lhat.</p>
        <p>Az egyszerre t&ouml;rt&eacute;nő v&eacute;grehajt&aacute;s az&eacute;rt csak l&aacute;tsz&oacute;lagos, mivel egy fizikai processzor (&aacute;ltal&aacute;nos esetben) egy időben csak egyetlen utas&iacute;t&aacute;st k&eacute;pes v&eacute;grehajtani, pontosabban egy adott időben egyetlen programfolyamat utas&iacute;t&aacute;sait hajtja v&eacute;gre. Emiatt a l&aacute;tsz&oacute;lagosan egyszerre fut&oacute; programok val&oacute;j&aacute;ban felv&aacute;ltva, nagyon gyorsan v&aacute;ltakozva futnak: egy kicsit fut az egyik, majd meg&aacute;ll, &eacute;s fut a m&aacute;sik, majd a harmadik, &eacute;s egy idő m&uacute;lva ism&eacute;t az első. Ha ez a v&aacute;ltakoz&aacute;s el&eacute;g gyors (ak&aacute;r m&aacute;sodpercenk&eacute;nti t&ouml;bb ezer) akkor l&aacute;tsz&oacute;lag a programok egyszerre futnak, mindegyikben &bdquo;t&ouml;rt&eacute;nik valami&rdquo;.</p>
        <p>A t&ouml;bbfelhaszn&aacute;l&oacute;s szoftver olyan szoftver, amely t&ouml;bb felhaszn&aacute;l&oacute;nak ad hozz&aacute;f&eacute;r&eacute;st egy sz&aacute;m&iacute;t&oacute;g&eacute;phez. Az időoszt&aacute;s (time-sharing) rendszerek t&ouml;bbfelhaszn&aacute;l&oacute;s rendszerek. A legt&ouml;bb nagysz&aacute;m&iacute;t&oacute;g&eacute;peken levő batch programoz&oacute; rendszerek is tekinthetőek &quot;t&ouml;bbfelhaszn&aacute;l&oacute;snak&quot;, ezzel elker&uuml;lve, hogy a CPU kihaszn&aacute;latlan legyen, m&iacute;g arra v&aacute;r, hogy az I/O műveletek befejeződjenek. </p>
        <p><strong>MVC-alkalmaz&aacute;s fel&eacute;p&iacute;t&eacute;se</strong></p>
        <p>Az MVC minta tal&aacute;n az első tervez&eacute;si minta. A nev&eacute;t a h&aacute;rom fő komponens&eacute;nek nev&eacute;ből kapta:</p>
        <p>Model (magyarul modell): Az adatokat kezelő, vagyis tulajdonk&eacute;ppen az &uuml;zleti logik&aacute;t megval&oacute;s&iacute;t&oacute; r&eacute;teg. Ez felel az adatok t&aacute;rol&aacute;s&aacute;&eacute;rt, visszaolvas&aacute;s&aacute;&eacute;rt. Itt foglalnak helyet azok a f&uuml;ggv&eacute;nyek is, amik műveleteket v&eacute;geznek az adatokon. R&eacute;sze az adatb&aacute;zis is.</p>
        <p>View (magyarul n&eacute;zet): A felhaszn&aacute;l&oacute;i fel&uuml;let megjelen&iacute;t&eacute;s&eacute;&eacute;rt, a felhaszn&aacute;l&oacute; k&uuml;l&ouml;nf&eacute;le nyűgjeinek a Vez&eacute;rlő fel&eacute; tov&aacute;bb&iacute;t&aacute;s&aacute;&eacute;rt felelős r&eacute;teg. Itt jelennek meg a felhaszn&aacute;l&oacute; sz&aacute;m&aacute;ra a vez&eacute;rlőelemek, a felhaszn&aacute;l&oacute;nak sz&aacute;nt adatok megfelelő form&aacute;ban val&oacute; megjelen&iacute;t&eacute;se is itt t&ouml;rt&eacute;nik.</p>
        <p>Controller (magyarul vez&eacute;rlő): Ez a r&eacute;teg a vez&eacute;rlőelemek esem&eacute;nyeinek alapj&aacute;n megh&iacute;vja a modell megfelelő f&uuml;ggv&eacute;nyeit, illetve ha a megjelen&iacute;t&eacute;sben &eacute;rintett adatok v&aacute;ltoznak, akkor erről &eacute;rtes&iacute;ti a N&eacute;zetet.</p>
        <p><strong>Sk&aacute;l&aacute;zhat&oacute;s&aacute;g</strong></p>
        <p>Nagym&eacute;retű, &ouml;sszetett rendszerek eset&eacute;n gyakori k&ouml;vetelm&eacute;ny a sk&aacute;l&aacute;zhat&oacute;s&aacute;g. Egy rendszert akkor mondunk sk&aacute;l&aacute;zhat&oacute;nak, ha nagyobb terhel&eacute;s alatt k&eacute;pes a teljes&iacute;tm&eacute;ny&eacute;t n&ouml;velni tov&aacute;bbi erőforr&aacute;sok (tipikusan hardver) hozz&aacute;ad&aacute;s&aacute;val.</p>
        <p>A sk&aacute;l&aacute;zhat&oacute;s&aacute;g k&eacute;t fő t&iacute;pusa:</p>
        <p>1. felfel&eacute; vagy vertik&aacute;lisan sk&aacute;l&aacute;zhat&oacute;: nagyobb hardver kapacit&aacute;s (gyorsabb vagy t&ouml;bb processzor, nagyobb vagy gyorsabb mem&oacute;ria &eacute;s merevlemez) nagyobb sz&aacute;m&iacute;t&aacute;si teljes&iacute;tm&eacute;nyt ad</p>
        <p>2. kifel&eacute; vagy horizont&aacute;lisan sk&aacute;l&aacute;zhat&oacute;: &uacute;jabb szerverek hozz&aacute;ad&aacute;s&aacute;val n&ouml;velhető a teljes&iacute;tm&eacute;ny</p>
        <p>Fontos, hogy b&aacute;rmilyen sz&aacute;m&iacute;t&aacute;stechnikai rendszer sk&aacute;l&aacute;zhat&oacute;s&aacute;g&aacute;t a CAP-t&eacute;tel hat&aacute;rozza meg. A t&eacute;tel l&eacute;nyege, hogy az al&aacute;bbi h&aacute;rom felt&eacute;tel k&ouml;z&uuml;l egyidejűleg maximum kettő teljes&uuml;lhet:</p>
        <p>Konzisztencia (C, consistency): Egy kliens &aacute;ltali olvas&aacute;si művelet garant&aacute;ltan a legutols&oacute; &iacute;r&aacute;s eredm&eacute;nye &aacute;ltal l&eacute;trej&ouml;tt rekordot adja vissza (vagy hib&aacute;t jelez).</p>
        <p>El&eacute;rhetős&eacute;g (A, availability): Minden kliens &aacute;ltali k&eacute;r&eacute;sre &eacute;rkezik v&aacute;lasz (időt&uacute;ll&eacute;p&eacute;sek n&eacute;lk&uuml;l), azonban nincs garancia arra, hogy ez a legutols&oacute; &iacute;r&aacute;s eredm&eacute;nye.</p>
        <p>Feloszt&aacute;si tolerancia (P, partition tolerance): A rendszer műk&ouml;dők&eacute;pes marad akkor is, ha bizonyos v&eacute;gpontok kies&eacute;se &aacute;ltal az elosztott rendszer előre nem l&aacute;that&oacute; m&oacute;don k&uuml;l&ouml;n&aacute;ll&oacute; r&eacute;szekre oszlik.</p>
        <p><br></p>
        <p><strong>Virtualiz&aacute;ci&oacute;</strong></p>
        <p>A virtualiz&aacute;l&aacute;s fizikai helyett egy szimul&aacute;lt, azaz virtu&aacute;lis sz&aacute;m&iacute;t&aacute;si k&ouml;rnyezetet hoz l&eacute;tre. A virtualiz&aacute;l&aacute;s folyamat&aacute;ban a hardver, az oper&aacute;ci&oacute;s rendszer, a t&aacute;rol&oacute; &eacute;s m&aacute;s eszk&ouml;z&ouml;k sz&aacute;m&iacute;t&oacute;g&eacute;ppel l&eacute;trehozott v&aacute;ltozatai j&ouml;nnek l&eacute;tre. Ez lehetőv&eacute; teszi, hogy a szervezetek egyetlen fizikai sz&aacute;m&iacute;t&oacute;g&eacute;pet vagy kiszolg&aacute;l&oacute;t t&ouml;bb virtu&aacute;lis g&eacute;pre osszanak fel. Minden virtu&aacute;lis g&eacute;p egym&aacute;st&oacute;l f&uuml;ggetlen&uuml;l műk&ouml;dhet, k&uuml;l&ouml;nf&eacute;le oper&aacute;ci&oacute;s rendszereket &eacute;s alkalmaz&aacute;sokat futtathat, mik&ouml;zben mindannyian egyetlen gazdag&eacute;p erőforr&aacute;sain osztoznak.</p>
        <p>(VMWare, VirtualBox, KVM, Hyper-V)</p>
        <p>C&eacute;lja:</p>
        <p>- sz&aacute;m&iacute;t&oacute;g&eacute;pek hib&aacute;inak felder&iacute;t&eacute;se,</p>
        <p>- fejlesztő c&eacute;gekn&eacute;l keresztplatformos szoftverek tesztel&eacute;se rugalmasan, p&aacute;rhuzamosan t&ouml;bbf&eacute;le g&eacute;pt&iacute;puson, oper&aacute;ci&oacute;s rendszeren</p>
        <p>- egy adott jellemzőkkel rendelkező sz&aacute;m&iacute;t&oacute;g&eacute;pre &iacute;rt program futtat&aacute;sa egy m&aacute;s jellemzőkkel rendelkező sz&aacute;m&iacute;t&oacute;g&eacute;pen.</p>
        <p><strong>K&eacute;t fő virtualiz&aacute;ci&oacute;s rendszer k&uuml;l&ouml;n&iacute;thető el:</strong></p>
        <p><strong>Rendszer szintű virtualiz&aacute;ci&oacute;</strong></p>
        <p>Az &ouml;sszetettebb v&aacute;ltozat a rendszer szintű virtualiz&aacute;ci&oacute;, mellyel komplett sz&aacute;m&iacute;t&oacute;g&eacute;pek emul&aacute;lhat&oacute;k, oper&aacute;ci&oacute;s rendszerrel egy&uuml;tt. Előnyei k&ouml;z&eacute; tartozik, hogy t&ouml;bb oper&aacute;ci&oacute;s rendszer futtathat&oacute; k&ouml;zvetlen az &uacute;n. gazdarendszerből, valamint az elszigetelts&eacute;g&eacute;ből ad&oacute;d&oacute; biztons&aacute;gos szoftvertesztel&eacute;s. (P&eacute;ldak&eacute;nt eml&iacute;thető a k&uuml;l&ouml;nb&ouml;ző k&aacute;rt&eacute;kony k&oacute;dok, v&iacute;rusok tesztel&eacute;se) Főbb h&aacute;tr&aacute;nyai k&ouml;z&eacute; sorolhat&oacute; a magas erőforr&aacute;sig&eacute;ny &eacute;s a viszonylagos megb&iacute;zhatatlans&aacute;ga a k&ouml;zvetlen&uuml;l hardverekkel val&oacute; kommunik&aacute;ci&oacute; ter&eacute;n.</p>
        <p><strong>Folyamat szintű virtualiz&aacute;ci&oacute;</strong></p>
        <p>Itt egy program, egyetlen folyamat futtathat&oacute;. Ezek k&ouml;zvetlen&uuml;l a gazda rendszerből futnak. A virtu&aacute;lis k&ouml;rnyezet a folyamat ind&iacute;t&aacute;sakor j&ouml;n l&eacute;tre, &eacute;s a folyamat befejez&eacute;sekor szűnik meg. C&eacute;lja, hogy platformf&uuml;ggetlen k&ouml;rnyezetet teremtsen, megk&ouml;nny&iacute;tendő a programoz&oacute;k dolg&aacute;t.</p>
        <p><strong>A robusztus alkalmaz&aacute;sok jellemzői</strong></p>
        <p>A tartalomnak el&eacute;g robusztusnak kell lennie ahhoz, hogy a k&uuml;l&ouml;nb&ouml;ző alkalmaz&aacute;sok &aacute;ltal, bele&eacute;rtve a kiseg&iacute;tő technol&oacute;gi&aacute;kat is, megb&iacute;zhat&oacute;an &eacute;rtelmezhető legyen.</p>`,
      },
      {
        id: 8,
        title:
          "Egy alkalmazás naplófájlja az egyes eseményeket sorvégejellel, az eseményen belüli adatokat „;” jellel választja el. Egy eseményhez az alábbi adatok tartoznak: időpont, felhasználó, számítógép IP- címe, eseményüzenet. Feladata egy olyan hordozható (portable) alkalmazás készítése, amely a naplófájlban képes különböző adatok alapján eseménybejegyzéseket keresni.",
        task: [
          "Ismertesse a hordozható (portable) alkalmazások jellemzőit és korlátait! ",
          "Tervezze meg az alkalmazás működését! ",
          "Optimalizálja a kereséseket kétféle szempont szerint: végrehajtási idő, illetve memóriafoglalás!",
        ],
        keys: [
          "Lineáris és logaritmikus keresések",
          "Rendezések",
          "Végrehajtási idők",
          "Állománykezelés, Indexelés",
        ],
        content: `<p><strong>Portable</strong></p>
        <p>Portable, azaz hordozhat&oacute;v&aacute; tett programoknak nevezz&uuml;k az olyan programokat, amit nem kell install&aacute;lni-telep&iacute;teni (ellent&eacute;tben az install&aacute;lt (non-portable) szoftverekkel), &aacute;ltal&aacute;ban egy ind&iacute;that&oacute; .EXE (Executable program vagy Launcher) f&aacute;jlb&oacute;l &eacute;s egy&eacute;b minim&aacute;lis kieg&eacute;sz&iacute;tőf&aacute;jlokb&oacute;l, mapp&aacute;k b&oacute;l&aacute;ll. Ind&iacute;t&aacute;sa-futtat&aacute;sa term&eacute;szetesen ezen kereszt&uuml;l t&ouml;rt&eacute;nik &eacute;s ha j&oacute;l van elk&eacute;sz&iacute;tve, csak az előre be&aacute;ll&iacute;tott mapp&aacute;ban t&aacute;rolja a haszn&aacute;lathoz-be&aacute;ll&iacute;t&aacute;shoz sz&uuml;ks&eacute;ges f&aacute;jlokat;f&uuml;ggetlen&uuml;l att&oacute;l, hogy azhol tal&aacute;lhat&oacute;. Szint&eacute;n fontos krit&eacute;rium a g&eacute;pf&uuml;ggetlen alkalmaz&aacute;si felt&eacute;tele az, hogy az elk&eacute;sz&iacute;tett alkalmaz&aacute;s megfeleljen a gy&aacute;rilag t&aacute;masztott k&ouml;vetelm&eacute;nyeknek(hasonl&oacute;an műk&ouml;dj&ouml;n, mint a telep&iacute;tett v&aacute;ltozat).</p>
        <p><strong>Előnyei:</strong></p>
        <p>Hordozhat&oacute; eszk&ouml;z&ouml;kről futtathat&oacute;.</p>
        <p>Nem ig&eacute;nyel telep&iacute;t&eacute;st vagy fix el&eacute;r&eacute;si utat.</p>
        <p>Minden ind&iacute;t&aacute;sn&aacute;l azonos felt&eacute;telekkel haszn&aacute;lhat&oacute;.</p>
        <p>Nem haszn&aacute;lja a DLL f&aacute;jlokat, a Registry-t &eacute;s a merevlemezt, ez&aacute;ltal nem hagy nyomokat a rendszerben, &eacute;s olyan felhaszn&aacute;l&oacute; is haszn&aacute;lhatja, akinek nincs Rendszergazda jogosults&aacute;ga.</p>
        <p><strong>H&aacute;tr&aacute;nyai:</strong></p>
        <p>Funkci&oacute;k, t&eacute;m&aacute;k, kieg&eacute;sz&iacute;tő modulok hi&aacute;nyozhatnak a telep&iacute;tett programhoz k&eacute;pest.</p>
        <p>Szak&eacute;rtelemre lehet sz&uuml;ks&eacute;g ahhoz, hogy az oper&aacute;ci&oacute;s rendszer megszokott funkci&oacute;it haszn&aacute;ljuk.</p>
        <p><u><strong>KERES&Eacute;SEK</strong></u></p>
        <p><strong>Line&aacute;ris keres&eacute;s</strong><br>A teljes, vagy line&aacute;ris keres&eacute;s a legegyszerűbb keres&eacute;si forma. Egy rendezetlen &aacute;llom&aacute;ny elemeit egyes&eacute;vel vizsg&aacute;ljuk. A folyamat addig fut, am&iacute;g egyez&eacute;s nem lesz.</p>
        <p><strong>Logaritmikus keres&eacute;s</strong><br>A bin&aacute;ris, vagy logaritmikus keres&eacute;s egy olyan kereső algoritmus, amit egy rendezett t&ouml;mb elemein tudunk v&eacute;gezni. A keres&eacute;s l&eacute;nyege, hogy a t&ouml;mb elemeit sorba rendezve felező megold&aacute;sokkal intervallumokra szűk&iacute;t&uuml;nk. A keresett elemet ez&aacute;ltal mindig csak 1 adott intervallumban kell tov&aacute;bb keresni, amiben biztosan szerepel. Az intervallumokat folyamatosan tov&aacute;bb tudjuk felezni, &eacute;s szűk&iacute;teni, m&iacute;g meg nem tal&aacute;ljuk v&eacute;g&uuml;l a keresett elemet.</p>
        <p>A t&ouml;mb elemei: [1, 2, 3, 4, 5, 6, 7, 8, 9]</p>
        <p>A keresett elem: 3</p>
        <p>A keres&eacute;si intervallum: [ 1, 9 ] =&gt; [ 1, 2, 3, 4 ] =&gt; [ 3, 4 ]</p>
        <p><br></p>
        <p><u><strong>RENDEZ&Eacute;SEK</strong></u></p>
        <p>Rendez&eacute;snek nevez&uuml;nk egy algoritmust, ha az valamilyen szempont alapj&aacute;n sorba &aacute;ll&iacute;tja elemek egy list&aacute;j&aacute;t. A rendez&eacute;si algoritmusok a programoz&aacute;s kezdete &oacute;ta jelen vannak &eacute;s &eacute;rdeklőd&eacute;s k&ouml;z&eacute;ppontj&aacute;ban &aacute;llnak, mivel egy rendezett adathalmazzal t&ouml;bb &eacute;s hat&eacute;konyabb műveletek v&eacute;gezhetők, mint egy rendezetlennel.</p>
        <p><strong>&Ouml;sszehasonl&iacute;t&oacute; rendez&eacute;s</strong><br><em>Az elemek &ouml;sszehasonl&iacute;t&aacute;sa alapj&aacute;n &aacute;ll&iacute;tj&aacute;k elő a rendezett kimenetet.</em><br>pl.: bubor&eacute;k rendez&eacute;s, gyorsrendez&eacute;s, besz&uacute;r&oacute; rendez&eacute;s</p>
        <p><strong>Nem &ouml;sszehasonl&iacute;t&oacute; rendez&eacute;s</strong><br><em>Az elemek &ouml;sszehasonl&iacute;t&aacute;sa n&eacute;lk&uuml;l k&eacute;pesek rendezni az elemeket.</em></p>
        <p></p>
        <p><strong><u>MEM&Oacute;RIA FOGLAL&Aacute;S</u></strong></p>
        <p>A program a fut&aacute;sa sor&aacute;n h&aacute;rom j&oacute;l elk&uuml;l&ouml;n&iacute;thető szerepű mem&oacute;riater&uuml;lettel rendelkezik, ezek funkci&oacute;k szerint a glob&aacute;lis v&aacute;ltoz&oacute;k mem&oacute;riater&uuml;letei, a verem &eacute;s a dinamikusan lefoglalt mem&oacute;riater&uuml;letek.</p>
        <p><strong>Glob&aacute;lis mem&oacute;riater&uuml;let</strong><br>A glob&aacute;lis mem&oacute;riater&uuml;leten helyezkednek el, ahogyan a neve is mutatja, a glob&aacute;lis v&aacute;ltoz&oacute;k. Ezek a program eg&eacute;sz fut&aacute;sa alatt l&eacute;teznek. Az ott l&eacute;trehozott v&aacute;ltoz&oacute;k elhelyezked&eacute;se nem v&aacute;ltozik meg. A kioszt&aacute;suk m&aacute;r a program ford&iacute;t&aacute;sakor eldől.</p>
        <p><strong>Verem (stack)</strong><br>A verembe a f&uuml;ggv&eacute;nyek lok&aacute;lis v&aacute;ltoz&oacute;i ker&uuml;lnek. A verem speci&aacute;lis tulajdons&aacute;ga, hogy a tartalma fel-le v&aacute;ltozik; ha egy f&uuml;ggv&eacute;ny belsej&eacute;nek v&eacute;grehajt&aacute;s&aacute;ba kezd&uuml;nk, akkor a verem tetej&eacute;n l&eacute;trej&ouml;nnek a f&uuml;ggv&eacute;ny lok&aacute;lis v&aacute;ltoz&oacute;i, ha pedig a f&uuml;ggv&eacute;nyből visszat&eacute;r&uuml;nk, akkor azok a v&aacute;ltoz&oacute;k megszűnnek. Az adott f&uuml;ggv&eacute;nyh&iacute;v&aacute;shoz tartoz&oacute; mem&oacute;riater&uuml;letet a veremben stack frame-nek nevezz&uuml;k. A veremben minden f&uuml;ggv&eacute;ny csak a saj&aacute;t lok&aacute;lis v&aacute;ltoz&oacute;it l&aacute;tja.</p>
        <p><strong>Kupac (heap)</strong><br>A dinamikus mem&oacute;riater&uuml;let, vagyis a heap olyan ter&uuml;let, amelyből egy adott nagys&aacute;g&uacute; r&eacute;szt a program fut&aacute;sa k&ouml;zben k&eacute;rhet&uuml;nk, &eacute;s ha m&aacute;r nem kell, visszaadhatjuk. &Iacute;gy foglalhatunk le akkora m&eacute;retű mem&oacute;ri&aacute;t, amelynek a nagys&aacute;g&aacute;t a program &iacute;r&aacute;sa, ford&iacute;t&aacute;sa k&ouml;zben m&eacute;g nem ismerj&uuml;k. Referencia t&iacute;pusok</p>
        <p>A lefoglal&aacute;skor egy pointert, vagyis egy mutat&oacute;t kapunk arra a mem&oacute;riahelyre, ahol a g&eacute;p megfelelő nagys&aacute;g&uacute; ter&uuml;letet tal&aacute;lt; amikor arra m&aacute;r nincs sz&uuml;ks&eacute;g&uuml;nk, akkor felszabad&iacute;tjuk azt. A ter&uuml;let a lefoglal&aacute;st&oacute;l kezdve mienk, eg&eacute;szen addig, am&iacute;g vissza nem adjuk.</p>
        <p><strong>memory leak</strong> : Felhaszn&aacute;lt, de fel nem szabad&iacute;tott mem&oacute;ria ter&uuml;let</p>
        <p><em>alacsony szintű, magas teljes&iacute;tm&eacute;nyű nyelvek: C, C++</em></p>
        <p><strong>Garbage collector, szem&eacute;tgyűjtő</strong> : A felhaszn&aacute;lt, &eacute;s fel nem szabad&iacute;tott mem&oacute;riater&uuml;letek karbantart&aacute;s&aacute;t v&eacute;gzi. T&ouml;rdezetts&eacute;gmentes&iacute;t is, illetve visszaadja a heap sz&aacute;m&aacute;ra a mem&oacute;riater&uuml;letet.</p>
        <p><br></p>
        <p><u><strong>INDEXEL&Eacute;S</strong></u></p>
        <p>C&eacute;lok</p>
        <p>&ndash; gyors lek&eacute;rdez&eacute;s</p>
        <p>&ndash; gyors adatm&oacute;dos&iacute;t&aacute;s</p>
        <p>&ndash; min&eacute;l kisebb t&aacute;rol&aacute;si ter&uuml;let</p>
        <p>Indexek haszn&aacute;lat&aacute;val cs&ouml;kken a keres&eacute;si idő, nő a t&aacute;rm&eacute;ret, &eacute;s nő a m&oacute;dos&iacute;t&aacute;si idő</p>
        <p>A mem&oacute;ria műveletek nagys&aacute;grenddel gyorsabbak, mint a h&aacute;tt&eacute;rt&aacute;rol&oacute;r&oacute;l beolvas&aacute;s, ki&iacute;r&aacute;s.</p>
        <p><br></p>`,
      },
      {
        id: 9,
        title:
          "Egy közepes méretű vállalat komplex vállalatirányítási rendszert használ. A különböző jelentésekhez, riportokhoz paraméterezhető lekérdezések állnak rendelkezésre.Feladata egy olyan alkalmazás elkészítése, amely a lekérdezésekből, kapott adatokból kisméretű, védett és hiteles(aláírt) jelentéseket(dokumentumokat) készít!",
        task: [
          "Ismertesse egy dokumentum (pl. PDF, DOC) előállításának (generálásának) lépéseit! ",
          "Mutassa be, hogyan csökkentené a dokumentum méretét! ",
          "Mondja el, hogyan biztosítaná a dokumentum sérthetetlenségét! ",
          "Beszéljen arról, hogyan valósítaná meg a dokumentum hitelességét! ",
          "Ismertesse, hogyan valósítaná meg a dokumentum illetéktelenek általi elolvasásának védelmét!",
        ],
        keys: [
          "Adatbázis-kapcsolatok megvalósítása",
          "Integráció más rendszerekkel. Adatok exportálása, importálása irodai programokból",
          "Message digest (Hash)",
          "Titkosítási algoritmusok (DES, RSA)",
          "Digitális aláírás",
        ],
        content: `<p><strong>Dokumentum elő&aacute;ll&iacute;t&aacute;s&aacute;nak l&eacute;p&eacute;sei</strong></p>
        <p>1. Nyers adat elő&aacute;ll&iacute;t&aacute;s</p>
        <p>adatok kinyer&eacute;se, &aacute;talak&iacute;t&aacute;sa, rendez&eacute;se, c&eacute;lcsoportokra bont&aacute;s</p>
        <p>2. Kompoz&iacute;ci&oacute;</p>
        <p>gyors v&eacute;gleges form&aacute;tumra hoz&aacute;s</p>
        <p>3. Archiv&aacute;l&aacute;s &eacute;s visszakeres&eacute;s</p>
        <p><strong>A dokumentum m&eacute;ret&eacute;nek cs&ouml;kkent&eacute;se</strong></p>
        <p>A dokumentumban szereplő m&eacute;dia elemek, k&eacute;pek m&eacute;ret&eacute;nek cs&ouml;kkent&eacute;se nagyban hozz&aacute;j&aacute;rulhat a v&eacute;gleges dokumentum helytakar&eacute;kos form&aacute;j&aacute;hoz. PDF form&aacute;tum eset&eacute;n haszn&aacute;lhatunk m&aacute;r l&eacute;tező t&ouml;m&ouml;r&iacute;tő programokat. (PDF24)</p>
        <p><strong>Dokumentum s&eacute;rthetetlens&eacute;ge</strong></p>
        <p>Az elektronikus al&aacute;&iacute;r&aacute;s olyan, a dokumentumhoz csatolt digit&aacute;lis jelsorozat, amely a dokumentum tartalm&aacute;b&oacute;l &eacute;s az al&aacute;&iacute;r&oacute; kiz&aacute;r&oacute;lagos tulajdon&aacute;ban l&eacute;vő egyedi kulcsb&oacute;l (ami szint&eacute;n digit&aacute;lis k&oacute;d) bonyolult matematikai elj&aacute;r&aacute;ssal &aacute;ll elő. Az &eacute;rv&eacute;nyes al&aacute;&iacute;r&aacute;s a fogad&oacute; f&eacute;l sz&aacute;m&aacute;ra garancia a k&uuml;ldő szem&eacute;ly&eacute;re n&eacute;zve &eacute;s arra, hogy a dokumentum az al&aacute;&iacute;r&aacute;s elhelyez&eacute;se &oacute;ta nem v&aacute;ltozott meg.</p>
        <p><strong>Az elektronikus al&aacute;&iacute;r&aacute;s fajt&aacute;i</strong></p>
        <p>1. Minős&iacute;tett elektronikus al&aacute;&iacute;r&aacute;s</p>
        <p>A minős&iacute;tett elektronikus al&aacute;&iacute;r&aacute;s mindenk&eacute;ppen kriptogr&aacute;fiai technol&oacute;gi&aacute;kra &eacute;p&uuml;l, a Nemzeti H&iacute;rk&ouml;zl&eacute;si Hat&oacute;s&aacute;g &aacute;ltal meghat&aacute;rozott kriptogr&aacute;fiai algoritmusk&eacute;szletek alapj&aacute;n. Minős&iacute;tett tan&uacute;s&iacute;tv&aacute;nyt kiz&aacute;r&oacute;lag minős&iacute;tett hiteles&iacute;t&eacute;sszolg&aacute;ltat&oacute; bocs&aacute;that ki, m&eacute;ghozz&aacute; kiz&aacute;r&oacute;lag szem&eacute;lyes regisztr&aacute;ci&oacute; sor&aacute;n, azaz a minős&iacute;tett hiteles&iacute;t&eacute;sszolg&aacute;ltat&oacute; munkat&aacute;rs&aacute;nak szem&eacute;lyesen tal&aacute;lkoznia kell a tan&uacute;s&iacute;tv&aacute;nyt ig&eacute;nylő szem&eacute;llyel. Minős&iacute;tett tan&uacute;s&iacute;tv&aacute;ny kiz&aacute;r&oacute;lag ember, azaz term&eacute;szetes szem&eacute;ly sz&aacute;m&aacute;ra bocs&aacute;that&oacute; ki</p>
        <p>2. Fokozott biztons&aacute;g&uacute; elektronikus al&aacute;&iacute;r&aacute;s</p>
        <p>a minős&iacute;tettn&eacute;l alacsonyabb biztons&aacute;gi szintet k&eacute;pvisel, sokkal kevesebb szab&aacute;ly vonatkozik r&aacute;. A fokozott biztons&aacute;g&uacute; al&aacute;&iacute;r&aacute;s is kriptogr&aacute;fiai megold&aacute;sokra &eacute;p&uuml;l, de nem felt&eacute;tlen&uuml;l nyilv&aacute;nos kulcsra &eacute;p&uuml;lő</p>
        <p>3. Egyszerű elektronikus al&aacute;&iacute;r&aacute;s</p>
        <p>ez az ink&aacute;bb jog&aacute;szi, mint technol&oacute;giai szemsz&ouml;gből fel&aacute;ll&iacute;tott kateg&oacute;ria val&oacute;j&aacute;ban alapvetően k&uuml;l&ouml;nb&ouml;zik a t&eacute;nyleges, a fentebb ismertetett tulajdons&aacute;gokkal rendelkező elektronikus al&aacute;&iacute;r&aacute;st&oacute;l, mivel ide tartozik minden olyan al&aacute;&iacute;r&aacute;s, amelyet mondjuk egy e-mail vagy egy sz&ouml;veges dokumentum sz&ouml;veg&eacute;be sz&uacute;r be a felhaszn&aacute;l&oacute;. K&ouml;nnyen bel&aacute;that&oacute;, hogy a dokumentum szerkezet&eacute;be ezek oly m&oacute;don illeszkednek, hogy azok semmif&eacute;le hiteles&iacute;tő erővel nem rendelkeznek, k&ouml;nnyen m&oacute;dos&iacute;that&oacute;ak, nem azonos&iacute;that&oacute;ak stb.</p>
        <p>Az elektronikus al&aacute;&iacute;r&aacute;s fejlett technol&oacute;gi&aacute;ja lehetőv&eacute; teszi, hogy ma m&aacute;r szinte minden&uuml;tt elfogadj&aacute;k az &uuml;gyint&eacute;z&eacute;s sor&aacute;n: Magyarorsz&aacute;gon az elektronikus al&aacute;&iacute;r&aacute;sr&oacute;l sz&oacute;l&oacute; 2001. &eacute;vi XXXV. t&ouml;rv&eacute;ny hat&aacute;lyba l&eacute;p&eacute;se &oacute;ta a legal&aacute;bb fokozott biztons&aacute;g&uacute; elektronikus al&aacute;&iacute;r&aacute;ssal ell&aacute;tott dokumentum megfelel az &iacute;r&aacute;sba foglal&aacute;s k&ouml;vetelm&eacute;nyeinek, a minős&iacute;tett al&aacute;&iacute;r&aacute;ssal ell&aacute;tott dokumentum pedig &ndash; a polg&aacute;ri perrendtart&aacute;sr&oacute;l sz&oacute;l&oacute; t&ouml;rv&eacute;ny &eacute;rtelm&eacute;ben &ndash; teljes bizony&iacute;t&oacute; erejű mag&aacute;nokirat (ak&aacute;rcsak a k&eacute;t tan&uacute; előtt, vagy a k&ouml;zjegyző előtt al&aacute;&iacute;rt dokumentum).</p>
        <p><br></p>`,
      },
      {
        id: 10,
        title:
          "Egy táblajáték program tesztelését kell elvégezni. Feladata, hogy a béta állapotú szoftverben hibákat tárjon fel.",
        task: [
          "Tegyen javaslatot egy teljes körű tesztelési tervre! ",
          "Határozza a „jó teszteset” kritériumait! ",
          "Tegyen javaslatot a tesztelési dokumentum formájára és felépítésére! ",
          "Ismertesse egy hibakezelő rendszer működését!",
        ],
        keys: [
          "Programhibák típusai, felderítési módjuk",
          "Szintaktikus és szemantikus hibák",
          "Hibadetektálás, hibamodellek",
          "Tesztelési módszerek: statikus és dinamikus tesztelés, fekete doboz, fehér doboz",
          "Tesztelési módszertan. Szoftvertesztelés folyamata. Tesztelési vezérelvek",
          "Hibakezelő rendszerek(pl.Bugzilla)",
        ],
        content: `<p><strong>Programhib&aacute;k t&iacute;pusai</strong></p>
        <p><strong>Szoftver-specifik&aacute;ci&oacute;s hib&aacute;k</strong></p>
        <p>A szoftver valamilyen vonatkoz&aacute;sban nem teljes&iacute;ti a felhaszn&aacute;l&oacute;i k&ouml;vetelm&eacute;nyeket. A specifik&aacute;ci&oacute;s hiba ad&oacute;dhat: t&eacute;ves specifik&aacute;ci&oacute;b&oacute;l, ellentmond&aacute;sos specifik&aacute;ci&oacute;b&oacute;l, valamint hi&aacute;nyos specifik&aacute;ci&oacute;b&oacute;l</p>
        <p><strong>Programoz&oacute;i hib&aacute;k</strong></p>
        <p>A szoftver tervez&eacute;se &eacute;s k&oacute;dol&aacute;sa sor&aacute;n a programoz&oacute; &aacute;ltal elk&ouml;vetett hib&aacute;k k&ouml;r&eacute;t foglalja mag&aacute;ban.</p>
        <ul>
            <li>Hi&aacute;nyz&oacute; funkci&oacute;k</li>
            <li>Adatkezel&eacute;si hib&aacute;k az adatb&aacute;zisban</li>
            <li>Ind&iacute;t&aacute;si (inicializ&aacute;l&aacute;si) &eacute;s le&aacute;ll&iacute;t&aacute;si hib&aacute;k</li>
            <li>Felhaszn&aacute;l&oacute;i interf&eacute;sz hib&aacute;i</li>
            <li>Hat&aacute;r&eacute;rt&eacute;kek t&uacute;ll&eacute;p&eacute;se</li>
            <li>Algoritmikus hiba</li>
            <li>Kalkul&aacute;ci&oacute;s hib&aacute;k</li>
            <li>Adattov&aacute;bb&iacute;t&aacute;si hiba</li>
        </ul>
        <p><br></p>
        <p><strong>Szintaktikai hib&aacute;k</strong><br>A programoz&aacute;si nyelv jelleg&eacute;ből sz&aacute;rmaz&oacute; nyelvi hib&aacute;k</p>
        <p><strong>Szemantikai hib&aacute;k<br></strong>Az algoritmus rossz implemet&aacute;l&aacute;sb&oacute;l eredő hib&aacute;k. A program lefordul, elindul, de nem azt csin&aacute;lja, amit szerett&uuml;nk volna. Tesztel&eacute;s sor&aacute;n vagy olyan &eacute;rt&eacute;ket kapunk vissza, ami nem lenne helyes, vagy egyszerűen szab&aacute;lytalan műveletet akar futtatni a program, ami automatikusan futtat&aacute;si hib&aacute;val &eacute;r v&eacute;get (Runtime Error) .</p>
        <p><strong>Hibadetekt&aacute;l&aacute;s</strong><br>Egy hib&aacute;r&oacute;l akkor mondjuk, hogy detekt&aacute;lhat&oacute;, ha legal&aacute;bb egy tesztje l&eacute;tezik.</p>
        <p><strong>Hibamodell</strong><br>Azon szoftver-hib&aacute;k halmaza, amelyeknek a felfed&eacute;s&eacute;re ir&aacute;nyul a teszttervez&eacute;s.</p>
        <p><strong>Tesztel&eacute;si terv</strong><br>A tesztel&eacute;si terv c&eacute;lja a tesztel&eacute;s teljes k&ouml;rűs&eacute;g&eacute;nek biztos&iacute;t&aacute;sa, a tesztel&eacute;s sor&aacute;n alkalmazott elj&aacute;r&aacute;sok &eacute;s megold&aacute;sok meghat&aacute;roz&aacute;s&aacute;val. A tesztel&eacute;si terv le&iacute;rja a teszt t&iacute;pus&aacute;t, a metodol&oacute;gi&aacute;j&aacute;t &eacute;s a riport k&eacute;sz&iacute;t&eacute;s m&oacute;dszer&eacute;t. Emellett meghat&aacute;rozza a teszt elv&aacute;r&aacute;sokat, a teszt-esetek elv&aacute;rt eredm&eacute;nyeit, sikeress&eacute;g&eacute;nek krit&eacute;riumait, a kock&aacute;zatok kezel&eacute;s&eacute;t &eacute;s a hat&aacute;sk&ouml;r&ouml;n k&iacute;v&uuml;li eseteket.</p>
        <p>A teszt v&eacute;grehajt&aacute;s&aacute;&eacute;rt a projektmenedzser felel, &eacute;s a tesztcsapat hajtja v&eacute;gre.</p>
        <p><br></p>
        <p><strong>A j&oacute; tesztel&eacute;s krit&eacute;riumai</strong></p>
        <ul>
            <li>Akkor tudunk a tesztel&eacute;s eredm&eacute;nyeiről b&aacute;rmit is mondani, ha van elk&eacute;pzel&eacute;s&uuml;nk arr&oacute;l, hogy adott bemenő adatra milyen eredm&eacute;nyt v&aacute;runk.<br><br></li>
            <li>A j&oacute; teszteset az, ami nagy val&oacute;sz&iacute;nűs&eacute;ggel egy m&eacute;g felfedetlen hib&aacute;t mutat ki a programban.<br><br></li>
            <li>A teszteset nemcsak bemenő adatokb&oacute;l, hanem a hozz&aacute;juk tartoz&oacute; eredm&eacute;nyekből is &aacute;ll. Egy&eacute;bk&eacute;nt nem tudn&aacute;nk a kapott eredm&eacute;ny helyes vagy hib&aacute;s volt&aacute;r&oacute;l besz&eacute;lni. A k&eacute;sőbbi felhaszn&aacute;l&aacute;s miatt c&eacute;lszerű a teszteseteket is le&iacute;rni a fejlesztői dokument&aacute;ci&oacute;ban vagy egy &ouml;n&aacute;ll&oacute; tesztel&eacute;si jegyzők&ouml;nyvben.<br><br></li>
            <li>A meg nem ism&eacute;telhető tesztesetek ker&uuml;lendők, feleslegesen megn&ouml;velik a program-tesztel&eacute;s k&ouml;lts&eacute;geit, idej&eacute;t.<br><br></li>
            <li>Teszteseteket mind az &eacute;rv&eacute;nytelen, mind az &eacute;rv&eacute;nyes adatokra kell k&eacute;sz&iacute;teni.<br><br></li>
            <li>Minden tesztesetből a lehető legt&ouml;bb inform&aacute;ci&oacute;t &bdquo;ki kell b&aacute;ny&aacute;szni&rdquo;, azaz minden teszteset eredm&eacute;ny&eacute;t alaposan v&eacute;gig kell vizsg&aacute;lni. Ezzel jelentősen cs&ouml;kkenthető a sz&uuml;ks&eacute;ges pr&oacute;b&aacute;k sz&aacute;ma.<br><br></li>
            <li>A program tesztel&eacute;s&eacute;t csak a program &iacute;r&oacute;j&aacute;t&oacute;l k&uuml;l&ouml;nb&ouml;ző szem&eacute;ly k&eacute;pes hat&eacute;konyan elv&eacute;gezni. Ennek oka, hogy a tesztel&eacute;s nem &bdquo;j&oacute;indulat&uacute;&rdquo; tev&eacute;kenys&eacute;g, saj&aacute;t munk&aacute;j&aacute;nak vizsg&aacute;lat&aacute;hoz mindenki &uacute;gy &aacute;ll hozz&aacute;, hogy &ouml;nk&eacute;ntelen&uuml;l j&oacute;nak felt&eacute;telezi.</li>
        </ul>
        <p><br></p>
        <p><strong>Tesztel&eacute;si dokumentum form&aacute;ja &eacute;s fel&eacute;p&iacute;t&eacute;se</strong></p>
        <p><strong>???</strong></p>
        <p><strong>Hibakezelő rendszerek műk&ouml;d&eacute;se</strong></p>
        <p>A fejlesztők, tesztelők, felhaszn&aacute;l&oacute;k &aacute;ltal &ouml;sszegyűjt&ouml;tt hib&aacute;k t&aacute;rol&aacute;s&aacute;ra szolg&aacute;l&oacute; fel&uuml;let, ami v&eacute;gigk&iacute;s&eacute;ri egy fejleszt&eacute;s folyamat&aacute;t. A hibajelens&eacute;gek r&ouml;gz&iacute;t&eacute;s&eacute;n&eacute;l k&uuml;l&ouml;nb&ouml;ző param&eacute;tereket &eacute;rdemes figyelembe venni:</p>
        <ul>
            <li>oper&aacute;ci&oacute;s rendszer t&iacute;pusa, verzi&oacute;ja</li>
            <li>b&ouml;ng&eacute;sző t&iacute;pusa, verzi&oacute;ja</li>
            <li>alkalmaz&aacute;s verzi&oacute;ja</li>
            <li>tesztrendszer neve</li>
            <li>adott modul neve</li>
            <li>adott funkci&oacute; neve</li>
            <li>tesztadatok</li>
        </ul>
        <p>Hibakezelő rendszer pl.: <strong>Bugzilla</strong></p>`,
      },
      {
        id: 11,
        title:
          "Egy autóalkatrész-üzlet raktárkészletét nyilvántartó programot kell fejleszteni. Határozza meg az alkalmazás szerkezeti felépítését!",
        task: [
          "Nevezze meg és jellemezze a tervezés során készítendő dokumentumokat! ",
          "Tegyen javaslatot a szoftver futtatási környezetére (platform)! ",
          "Tegyen javaslatot a szoftverarchitektúra kialakítására! ",
          "Mutasson rá az alkalmazás kritikus pontjaira!",
        ],
        keys: [
          "Rendszerkövetelmények, felhasználói követelmények",
          "Megvalósíthatósági tanulmány",
          "Adatmodell megtervezése (UML adatbázis-diagram), objektumhierarchia megtervezése (UML osztálydiagram), algoritmizálás(UML aktivitás diagram, pszeudokód)",
        ],
        content: "",
      },
      {
        id: 12,
        title:
          "Egy kisáruház részére számlázó programot kell kifejleszteni. Feladata, hogy elkészítse a szoftverfejlesztésre vonatkozó árajánlatot és vállalkozói szerződést.",
        task: [
          "Határozza meg a költségkalkuláció elemeit! ",
          "Ismertesse egy szoftverfejlesztési árajánlat tartalmi és formai elemeire vonatkozó legfontosabb jellemzőket! ",
          "Mutassa be egy vállalkozói szerződés tartalmi és formai elemeire vonatkozó legfontosabb jellemzőket!",
          "Ismertesse egy szoftverfejlesztésre vonatkozó vállalkozói szerződés speciális tartalmi elemeit!",
        ],
        keys: [
          "Árajánlat szerepe, tartalma, felépítése",
          "A bruttó és nettó bevétel, költség, önköltség fogalma, számításának módja",
          "Munkafolyamatokhoz, szolgáltatásokhoz, termékekhez kapcsolódó egyszerű költségkalkuláció, költségszámítás, jövedelmezőség számítása",
          "Pénzügyi adminisztrációra, számvitelre jellemző alaptevékenységek",
          "A vállalkozókat, vállalkozásokat, munkavállalókat terhelő adó- és közterhek",
        ],
        content: `<p><strong><u>A k&ouml;lts&eacute;gkalkul&aacute;ci&oacute; elemei</u></strong></p>
        <p><strong>Előkalkul&aacute;ci&oacute;<br></strong>A v&aacute;rhat&oacute; &ouml;nk&ouml;lts&eacute;g, majd a nyeres&eacute;ggel n&ouml;velt &aacute;r meghat&aacute;roz&aacute;sa. A tev&eacute;kenys&eacute;g megkezd&eacute;se előtt kisz&aacute;m&iacute;t&aacute;sra ker&uuml;l a tervezett &ouml;nk&ouml;lts&eacute;g.</p>
        <p><strong>K&ouml;zbenső kalkul&aacute;ci&oacute;<br></strong>A fejleszt&eacute;si folyamat befejez&eacute;se előtt, ellenőrz&eacute;si-beavatkoz&aacute;si c&eacute;lb&oacute;l k&eacute;sz&iacute;tett sz&aacute;m&iacute;t&aacute;s.</p>
        <p><strong>Ut&oacute;kalkul&aacute;ci&oacute;<br></strong>A tev&eacute;kenys&eacute;g befejez&eacute;se ut&aacute;n hat&aacute;rozzuk meg az adott időszakban elk&eacute;sz&uuml;lt term&eacute;kek t&eacute;nyleges &ouml;nk&ouml;lts&eacute;g&eacute;t.</p>
        <p><em>Bev&eacute;tel &ndash; Direkt k&ouml;lts&eacute;gek &ndash; &Aacute;ltal&aacute;nos k&ouml;lts&eacute;gek</em></p>
        <p>Ha folyamatos az ut&oacute;kalkul&aacute;l&aacute;s a c&eacute;gedben akkor kirajzol&oacute;dik, hogy melyek a nyeres&eacute;ges &eacute;s a vesztes&eacute;ges term&eacute;keid, szolg&aacute;ltat&aacute;said.</p>
        <p></p>
        <p><strong><u>Szoftverfejleszt&eacute;si &aacute;raj&aacute;nlat tartalmi &eacute;s formai elemei</u></strong></p>
        <p><strong>&Aacute;raj&aacute;nlat tartalmi k&ouml;vetelm&eacute;nyei</strong></p>
        <ul>
            <li>&aacute;raj&aacute;nlat műszaki tartalma</li>
            <li>teljes&iacute;t&eacute;si hat&aacute;ridők</li>
            <li>v&aacute;llalkoz&oacute;i d&iacute;j, &eacute;s fizet&eacute;si hat&aacute;ridők</li>
            <li>szerzői jogok, felhaszn&aacute;l&aacute;si felt&eacute;telek</li>
            <li>&aacute;raj&aacute;nlat &eacute;rv&eacute;nyess&eacute;ge</li>
        </ul>
        <p><strong>&Aacute;raj&aacute;nlat formai k&ouml;vetelm&eacute;nyei</strong></p>
        <ul>
            <li>al&aacute;&iacute;r&aacute;s, pecs&eacute;t</li>
            <li>oldalsz&aacute;moz&aacute;s, fejl&eacute;c, l&aacute;bl&eacute;c alapvető adatokkal (c&eacute;gn&eacute;c, ad&oacute;sz&aacute;m, el&eacute;rhetős&eacute;g, sz&aacute;mlasz&aacute;m)</li>
            <li>tartalom &aacute;tl&aacute;that&oacute; tagol&aacute;sa</li>
            <li>k&ouml;nnyű olvashat&oacute;s&aacute;g</li>
            <li>udvarias megfogalmaz&aacute;s</li>
        </ul>
        <p></p>
        <p><strong><u>V&aacute;llalkoz&oacute;i szerződ&eacute;s tartalmi &eacute;s formai elemei</u></strong></p>
        <p>Egy olyan szerződ&eacute;s, amely alapj&aacute;n a v&aacute;llalkoz&oacute; valamely dolog tervez&eacute;s&eacute;re, elk&eacute;sz&iacute;t&eacute;s&eacute;re, a megrendelő pedig a szolg&aacute;ltat&aacute;s &aacute;tv&eacute;tel&eacute;re &eacute;s d&iacute;j fizet&eacute;s&eacute;re k&ouml;teles.</p>
        <p><strong>Szerződ&eacute;s tartalmi k&ouml;vetelm&eacute;nyei</strong></p>
        <ul>
            <li>Megrendelő szem&eacute;lyes adatai (N&eacute;v, anyja neve, sz&uuml;let&eacute;si hely &eacute;s idő, lakc&iacute;m)</li>
            <li>V&aacute;llalkoz&oacute; szem&eacute;lyes adatai (n&eacute;v, sz&eacute;khely, v&aacute;llalkoz&oacute;i sz&aacute;m)</li>
            <li>Szerződ&eacute;s hat&aacute;lya</li>
            <li>Szerződ&eacute;s t&aacute;rgya</li>
            <li>Munkav&eacute;gz&eacute;s &uuml;temez&eacute;se, teljes&iacute;t&eacute;si hat&aacute;ridők</li>
            <li>D&iacute;jak, fizet&eacute;si felt&eacute;telek, m&oacute;dok</li>
            <li>Sz&aacute;ml&aacute;z&aacute;si adatok</li>
            <li>Kifizet&eacute;s &uuml;temez&eacute;se</li>
            <li>Teljes&iacute;t&eacute;sigazol&aacute;si elj&aacute;r&aacute;s</li>
            <li>J&oacute;t&aacute;ll&aacute;s, garancia, szavatoss&aacute;g</li>
            <li>Szerződ&eacute;s megszűn&eacute;se</li>
        </ul>
        <p><strong>Szerződ&eacute;s formai k&ouml;vetelm&eacute;nyei</strong></p>
        <ul>
            <li>oldalsz&aacute;moz&aacute;s, fejl&eacute;c, l&aacute;bl&eacute;c</li>
            <li>tartalom &aacute;tl&aacute;that&oacute; tagol&aacute;sa</li>
            <li>k&ouml;nnyű olvashat&oacute;s&aacute;g</li>
            <li>udvarias megfogalmaz&aacute;s</li>
        </ul>
        <p><br></p>
        <p><strong><u>Egy szoftverfejleszt&eacute;sre vonatkoz&oacute; v&aacute;llalkoz&oacute;i szerződ&eacute;s speci&aacute;lis tartalmi elemei</u></strong></p>
        <p><strong>A szoftverfejleszt&eacute;si szerződ&eacute;s fel&eacute;p&iacute;t&eacute;se:</strong></p>
        <ol>
            <li>v&aacute;llalkoz&aacute;si megb&iacute;z&aacute;si szerződ&eacute;s</li>
            <li>felhaszn&aacute;l&aacute;si vagy jog&aacute;truh&aacute;z&aacute;si szerződ&eacute;s</li>
        </ol>
        <p><strong>A szerződ&eacute;s t&aacute;rgya tartalmazza:</strong></p>
        <ul>
            <li>meghat&aacute;rozott szoftver fejleszt&eacute;se &eacute;s &aacute;tad&aacute;sa a Megrendelőnek a mell&eacute;kletk&eacute;nt csatolt (!) funkci&oacute; specifik&aacute;ci&oacute; szerint;</li>
            <li>a szoftver mellett a forr&aacute;sk&oacute;d vagy forr&aacute;sk&oacute;dok &aacute;tad&aacute;sa (lehetőleg titkos&iacute;tott form&aacute;ban) &eacute;s ezzel annak tulajdonjog&aacute;nak megszerz&eacute;se;</li>
            <li>dokument&aacute;ci&oacute; &aacute;tad&aacute;sa &ndash; szint&eacute;n tulajdonjog megszerz&eacute;ssel;</li>
            <li>szerzői vagyoni jogok &aacute;truh&aacute;z&aacute;sa vagy felhaszn&aacute;l&aacute;si jog enged&eacute;se a Megrendelő sz&aacute;m&aacute;ra.</li>
        </ul>
        <p><strong>A szerzői jogokr&oacute;l k&eacute;tf&eacute;lek&eacute;ppen rendelkezhet&uuml;nk:</strong></p>
        <ul>
            <li>a) felhaszn&aacute;l&aacute;si jog ad&aacute;sa</li>
            <li>b) szerzői vagyoni jogok &aacute;truh&aacute;z&aacute;sa</li>
        </ul>
        <p>Szerzői vagyoni jogok &aacute;truh&aacute;z&aacute;s&aacute;ra is van lehetős&eacute;g&uuml;nk egy szoftver eset&eacute;n, amely egyedileg megrendelt szoftverek vonatkoz&aacute;s&aacute;ban kifejezetten előny&ouml;s, hiszen &iacute;gy valamennyi szerzői vagyoni jogot (kiv&eacute;ve az &aacute;tdolgoz&aacute;s jog&aacute;t) egyszerre &aacute;truh&aacute;zhatjuk a megrendelőre.</p>
        <p><strong>A szerzői vagyoni jogok az al&aacute;bbiak:</strong></p>
        <ul>
            <li><strong>t&ouml;bbsz&ouml;r&ouml;z&eacute;s</strong></li>
            <li>terjeszt&eacute;s</li>
            <li>nyilv&aacute;nos előad&aacute;s</li>
            <li>nyilv&aacute;noss&aacute;ghoz val&oacute; k&ouml;zvet&iacute;t&eacute;s</li>
            <li>&aacute;tdolgoz&aacute;s joga</li>
        </ul>
        <p>A szoftverfejleszt&eacute;si szerződ&eacute;sekben sz&aacute;mos esetben tal&aacute;lkozhatunk &uuml;zleti titoktart&aacute;si k&ouml;telezetts&eacute;get elő&iacute;r&oacute; rendelkez&eacute;sekkel. A titoktart&aacute;sra vonatkoz&oacute; r&eacute;sz kiemelten fontos, hiszen az Szjt. alapj&aacute;n egy &ouml;tlet, elv, elgondol&aacute;s nem eshet szerzői jogi v&eacute;delem hat&aacute;lya al&aacute;.</p>`,
      },
      {
        id: 13,
        title:
          "*** Az Ön által vezetett szoftverfejlesztő csapat egy raktárkezelő program elkészítésére kapott megbízást. Tegyen javaslatot az ügyfélnek a fejlesztés során használandó módszertanra! Ismertesse a választása szempontjait!",
        task: [
          "Ismertesse a szoftverfejlesztés során használható módszertanokat!",
          "Az egyes módszertanoknak milyen válaszai vannak a felhasználói igények változásának kezelésére?",
          "Melyik módszertan mekkora mértékű részvételt vár el az ügyféltől?",
        ],
        keys: [
          "Vízesés modell, „V” modell",
          "Prototípus fogalma",
          "Iterációs lépések",
          "Agilis módszertanok, Scrum",
        ],
        content: "",
      },
      {
        id: 14,
        title:
          "Egy vállalati hibabejelentő szoftverhez felhasználói dokumentációt kell elkészíteni. Tegyen javaslatot a szoftver felhasználóit támogató rendszer elemeire és kialakításuk módjára!",
        task: [
          "Ismertesse a felhasználói dokumentumok jellemzőit! ",
          "Sorolja fel, hogy milyen tartalmi elemeket kell egy felhasználói dokumentumnak tartalmaznia! ",
          "Tegyen javaslatot a szoftver felhasználóit támogató további lehetőségekre (pl. e-learning, screencast, stb.)!",
        ],
        keys: [
          "Kiadványszerkesztés-alapok",
          "Videó- és hangszerkesztés alapjai",
          "Screencast készítése",
          "Animációk készítése",
        ],
        content: "",
      },
      {
        id: 15,
        title:
          "Egy elektronikai szakáruház raktárkezelő szoftverét kell kifejleszteni. Feladata, hogy tervezze meg a szoftver adatbázisának felépítését!",
        task: [
          "Ismertesse az adatbázis-tervezés alapfogalmait! ",
          "Mondja el az adatmodellezés alapfogalmait! ",
          "Vázolja fel a raktárkezelő program főbb adatbázis-szerkezeti elemeit!",
        ],
        keys: [
          "Adatbázisok felépítése: táblák, rekordok, mezők. Adatintegritás, adatvédelem. Relációs adatmodell",
          "Elsődleges kulcs fogalma. Index fogalma, indexelés",
          "Adatbázisok normalizálása, optimalizálása. Redundancia csökkentése, megszüntetése",
          "Adatmodellezés: egyed-kapcsolat diagramok, tervezési alapelvek, megszorítások (constraint) modellezése",
        ],
        content: "",
      },
      {
        id: 16,
        title:
          "Egy banki szoftverben az átutalások kezelését kell megvalósítani. Végezzen elemzést az adatbázis- műveletek során jelentkező hibák és hatékonysági kérdések kezelésének lehetőségeiről!",
        task: [
          "Ismertesse az adatbázis-konzisztencia fogalmát és megsértésének módjait! ",
          "Mondja el a tranzakció fogalmát, védelmi szintjeit és használatának módját! ",
          "Tegyen javaslatot az adatbázis-műveletek hatékonyságának növelésére!",
        ],
        keys: [
          "Tranzakciók fogalma, tranzakciók védelmi szintjei",
          "ACID (Atomicity, Consistency, Isolation, and Durability) tulajdonságok",
          "Biztonsági mentés készítése. Ütemezett mentések",
          "Lekérdezések hatékonysága. Teljesítményjavítás, diagnosztika",
          "Elosztott adatbázisok",
          "Naplózás és hibakezelés",
        ],
        content: "",
      },
      {
        id: 17,
        title:
          "*** Egy ingatlan iroda weboldalát kell megvalósítani. Az oldalon az iroda aktuális hirdetései szerepelnének képekkel, leírásokkal. Tegyen javaslatot a fejlesztési környezet kialakítására!",
        task: [
          "Határozza meg a kliens és szerver oldali funkcióit! ",
          "Határozza meg az alkalmazott program nyelvet, keretrendszert!Döntését indokolja! ",
          "Tegyen javaslatot a kész alkalmazás működtetéséhez szükséges hardver és szoftver környezetre (saját hardver, bérelt eszközök)!",
        ],
        keys: [
          "HTML5, CSS",
          "Szerver oldali környezet (PHP, JAVA, C#, …stb)",
          "Keretrendszerek (jQuery, AngularJS, … stb.)",
          "Alkalmazás kapcsolata az adatbázissal",
          "Saját hardver és a bérelt eszközök előnyei, hátrányai",
        ],
        content: "",
      },
      {
        id: 18,
        title:
          "*** Egy nagykereskedelmi vállalat raktári programját kell kiegészítenie olyan szolgáltatással, hogy a kiskereskedők által használt ügyviteli szoftver le tudja kérdezni az egyes termékekből rendelkezésre álló mennyiséget",
        task: [
          "Ismertesse az informatikai rendszerek interneten történő egymás közötti kommunikációjának lehetőségeit! ",
          "Tegyen javaslatot az alkalmazandó módszerre! ",
          "Határozza meg a működtetéshez szükséges szoftver elemeket! ",
          "Ismertesse az esetleges kockázatokat, és tegyen javaslatot azok elkerülésére!",
        ],
        keys: [
          "Web service (SOAP, REST, XML, JSON)",
          "Web szerver (Apache, IIS, …stb",
          "Titkosítás (egy vagy többkulcsos)",
        ],
        content: "",
      },
      {
        id: 19,
        title:
          "*** Egy mobil eszközöket árusító üzlet számára készít webshop alkalmazást. Feladat az alkalmazás hátterét biztosító adatbázis megtervezése.",
        task: [
          "Ismertesse az adatbázis-tervezés alapfogalmait! ",
          "Mondja el az adatmodellezés alapfogalmait! ",
          "Vázolja fel a webshop főbb adatbázis-szerkezeti elemeit!",
        ],
        keys: [
          "Adatbázisok felépítése: táblák, rekordok, mezők. Adatintegritás, adatvédelem. Relációs adatmodell",
          "Elsődleges kulcs fogalma. Index fogalma, indexelés",
          "Adatbázisok normalizálása, optimalizálása. Redundancia csökkentése, megszüntetése",
          "Adatmodellezés: egyed-kapcsolat diagramok, tervezési alapelvek, megszorítások(constraint) modellezése.",
        ],
        content: "",
      },
      {
        id: 20,
        title:
          "*** Egy szállítmányozással foglalkozó cég GPS alapú nyomkövetőkkel látja el a teherautóit. Ezek az eszközök képesek néhány percenként elküldeni az autó helyzetét és néhány főbb jellemzőt egy szerverre. Az Ön feladata annak a webalapú szoftvernek a megtervezése, amely fogadja az adatokat és valós időben megjeleníti a gépkocsik helyzetét",
        task: [
          "Tervezze meg a rendszer működéséhez szükséges architektúrát! ",
          "Tervezze meg az adatok tárolásához szükséges adatbázis felépítését! ",
          "Milyen technológiát használna az adatok fogadására? ",
          "Hogyan oldaná meg a valós idejű adatok megjelenítését?",
        ],
        keys: [
          "Adatmodellezés, Mezőtulajdonságok: típusok, mezőméret",
          "Üzenetközvetítő sorok (MQ), Web szerviz (SOAP, REST, XML, JSON)",
          "AJAX",
        ],
        content: "",
      },
    ],
  },
  {
    id: 2,
    language: "en-GB",
    name: "Angol szóbeli tételek",
    items: [
      {
        id: 1,
        title:
          "Úgy érzi, hogy a munkahelyén használt számítógépe elavult. Írjon e-mailt a felettesének, amiben egy új számítógépet kér! Kérését indokolja és tegyen javaslatot az új gép konfigurációjára!",
        task: [
          "Határozzon meg egy Ön szerint már elavult, és egy korszerű számítógép konfigurációt!",
          "Ismertesse, hogy miért hatékonyabb dolgozni a korszerűbb géppel!",
        ],
        keys: ["Számítógép részegységek", "Futási idő, fordítási idő"],
        content:
          "Dear Mr Smith, I am writing to complain about the computer I am using at the moment. It seems to be quite outdated. My computer is really slow so it takes me a lot of time to do my job. The processor is very old, it has only one core and the RAM is not enough. The system runs from an old  HDD instead of a fast SSD.What is more, the computer is too loud and it is extremely annoying. I would like to have a new computer which has at least 16Gb RAM, 500Gb SSD and minimum 10th Gen i7 processor. With this configuration the computer will be much faster and much more effective.Last but not least, it will be less noisy. My problem is that my colleague compiles the program in half an hour with the help of more modern configuration while it takes me three hours to do. It would be great if the runtime and compiling time decreased. Thank you in advance.I look forward to your reply.",
      },
      {
        id: 2,
        title:
          " A múlt héten egy szakmai konferencián járt. Tartson róla a kollégáknak egy élménybeszámolót!",
        task: [
          "Milyen új alkalmazásokat, játékokat látott? ",
          "Milyen érdekes, híres emberekkel találkozott? ",
          "Milyen egyéb érdekes újdonságot látott?",
        ],
        keys: ["Szakmai előadás(ok)", "Innováció"],
        content:
          "Hello everybody. Last week I took part in a conference where we were presented the latest applications, softwares and games. During the profession presentation we learnt about the latest VR games and the new innovative softwares. We had the opportunity to get to know the new exclusive version of Fortnite before its launch. There were other innovative softwares at the conference. The one I was really interested in was a kind of security programme which enscripts my files and personal data with the help of face recognising technology. The programme can enscript the security of logging in the system, it can send files with encryption. With the help of this programme we can easily change the group policy security settings. The programme is user-friendly and it will be open for everybody. The basic programme can be downloaded by everybody for free but there will be a pro version available which will cost 20 dollars per month. The pro version will be able to do military level encryption. At the conference I had the opportunity to meet a lot of successful experts, specialists and professionals including Imre Szalay who is the director of Neumann János Computer Technology Society.He made a very interesting presentation about process development.If anybody is interested in this topic, I can send the content of the presentation. After the conference, we could see a test car with the latest self- driving technology.Tesla set up a test ring where the real traffic situations were simulated and they presented how a Tesla car can handle any traffic situation.If someone wants to get to know more about this new technology, they can ask me for more information. Thank you for your attention.",
      },
      {
        id: 3,
        title:
          "Szoftverfejlesztő céghez HTML-PHP környezetbe programozó állásra jelentkezik. Az állásinterjún megkérik, röviden mutassa be magát.",
        task: [
          "Mondjon néhány mondatot magáról! Hány éves, hol él? ",
          "Mondja el miért érzi magát alkalmasnak az állás betöltésére!",
        ],
        keys: [
          "Tanulmányok",
          "Eddigi munkahelyek",
          "Kompetenciák: web fejlesztés, programnyelvek stb...",
        ],
        content:
          "I think I am the most appropriate person for the post because I know a lot of languages for the web development for example, HTML, PHP and JavaScript. I worked for a company which deals with web development. I took part in a lot of projects and we developed websites and web applications for different companies. I already have work experience in web design too. I am able to work in team because I am co-operative, flexible, precise and reliable. I am effective when I work in a team. However, I am ready to work on my own and I am ready to learn new things. I have up-to-date knowledge in the latest technology such as HTML5 and CSS3. Besides, I have experince in modern CMS systems. I hope these skills and work experince are enough to work for your company. I would be glad if I could be a member of your company.",
      },
      {
        id: 4,
        title: "Hasonlítson össze két operációs rendszert a tanultak közül!",
        task: [
          "Pl.: Windows – Linux. Előnyök, hátrányok (ár, felhasználók száma, biztonság). ",
          "Melyiket kinek ajánlja?",
        ],
        keys: ["Fájlkezelés", "Biztonság", "Frissítések"],
        content:
          "Well, what we call operating system at all? An Operating system(OS) is a software which acts as an interface between the end user and the computer hardware. Every computer must have at least one OS to run other programmes. The OS is similar to a steering wheel.It means that it doesn’t have a real function, but it gives the opportunity to make other programmes run. It has two roles. It’s a resourse allocator and a control programme. I would like to compare two operation systems, the Linux and the Windows. Windows is the most wide spread – more than sixty percent, Linux is less popular. Windows is closed source- code.It can’t be changed. If we alter it, it’s against the law. Linux system is an open source - code.Anyone can alter or improve it and it can be freely spread. The Windows licence is precisely given.It means that a company buys a a certain number of licences which can be installed on the computers. The Linux system can be installed on all computers.There is no limit and it is free of charge. The Windows has an official support. It costs a lat of money but you must prove that the OS is original.You can for help on forums as well. As for Linux, you can ask for help only on forums.You decide whether you change for a later version or not. Sometimes Windows download things but we don’t know what. As for the price, there isn’t a free version.You must pay for it.Linux is completely free of charge. Recommendation:I would recommend Windows OS for simple users because they can buy a computer with this Windows system, bat the Linux isn’t on the computer.Linux must be installed first and users must be computer literate.",
      },
      {
        id: 5,
        title:
          "Készítsen egy rövid bemutatkozó e-mailt, amiben bemutatja a cége által készített GPS alapú járműkövető rendszert a lehetséges vevőknek!",
        task: [
          "Mutasson be egy Ön szerint hatékonyan működő céget!",
          "Ismertesse egy GPS alapú rendszer működését!",
          "Mutassa be miért lenne hasznos egy ilyen rendszer bevezetése pl.: egy fuvarozó cégnek!",
        ],
        keys: ["On-line gépjármű követés", "Költség megtakarítás, hatékonyság"],
        content:
          "Dear Customers, I would like to introduce the new GPS vehicle tracking system which was developed by our company.Our company is a well- organised enterprise which was established 20 years ago.It is well - known in Europe.Our professional knowledge can be used worldwide and we cooperate with other experts and companies all over the world.We have a good relationship with suppliers and colleagues because we are reliable, precise and fast.Our company also organises training and courses in order to work more efficiently.As a result of these trainings, our company managed to reach 20 percent(%) cost effenctiveness. As I mentioned earlier, we have a revolutionary GPS- based vehicle tracking system, which I would like to describe in details.This system uses 24 satellites together with cellular data towers.Our system can use all the three GNNS locating systems, Galileo, Glonas and GPS, at the same time.It is able to locate the place of a certain car very accurately, and after that, the system sends the data to our data centre with the help of the new 5G technology.Each customer will have access to the online vehicle tracking system.They can follow the location of the vehicles in real time.A system like this can be really useful for a logistics company because it simplifies administration and CMR.It also assists the maintanance of a broken down truck.The system is easy to use and it is available for everyone who downloads the application to their phone.The system also alerts when the cargo door of a truck is opened or the temperature of the cargo space changes a lot before the truck reaches its destination.The number of the administrative working hours decreases, the payment is given on the basis of real working hours.As a result, the logistics company can lower the costs.With the use of this application, we can follow the location of the vehicles all over the world.Last but not least, this GPS vehicle tracking system can be used in several languages such as Hungarian, English, German, Italian, French, Spanish, Chinese, Russian, etc. I hope our system will draw a lot of customers’ attention.",
      },
      {
        id: 6,
        title:
          "Ön egy raktári szoftvereket készítő cégnél dolgozik, mint projekt vezető. Mutassa be az Önök által készített szoftver tulajdonságait!",
        task: [
          "Mutassa be mit kell tudnia egy raktári programnak!",
          "Részletezze a többfelhasználós rendszerek tulajdonságait!",
        ],
        keys: [
          "Raktári bevételezés, kiadások, leltár, selejtezés",
          "Adatbáziskezelő rendszerek",
        ],
        content:
          "Dear Ladies and Gentlemen, My name is XY and I work for a small software developing company.Our company has developed a new software which makes warehouse management much easier.With the help of this software we can trace the storage works from the expenses, the inventory to the scapping(shipping).This software can handle the management of multiple warehouses at the same time.It can read bar codes so the goods handling is more efficient, the inventory is easier.The goods can be traced faster and more precisely.The programme can also show the amount of the stored goods and it alerts when there is shortage in a certain kind of product.The user can set the limit where it is needed to order more goods.It can make CMRs and reports and it can handle the partner sas well. The programme can handle more users at the same time.The system administrator can enable each user to use a certain function of the programme.We store the database of the users and goods on the central server.That’s why it is possible to use the system from different places at the same time.The central handling of the data makes it possible to ask query(lekérdez) of the stock(készlet) of different warehouses in real time.When it is needed, different warehouses have the opporunity to ask certain goods from another one.As a result of it, warehouses can save some money so it is much more cost- effective. If you are interested in the software, you can download the demo version from our website free of charge.Although the demo version has only restricted functions, it is worth trying it and if you are satisfied with the programme, you can order the full version on 20% discount.If you have any questions, feel free to ask for more information.",
      },
      {
        id: 7,
        title:
          "Önt bízzák meg egy új játékfejlesztési projekt vezetésével. Az első feladat a csapat toborzása. E-mailben tegyen javaslatot, hogy milyen pozíciókba kellene új kollégákat felvenni! Minden pozícióhoz határozzon meg néhány elvárást, amivel ki lehet írni a pályázatot!",
        task: [
          "Ismertesse, hogy Ön szerint milyen kompetenciákkal rendelkező csapattagokra lenne szükség!",
          "Határozzon meg ütemezést, hogy a fejlesztés folyamán mikor, milyen szaktudással rendelkező kollégára van szükség a zökkenőmentes munkához!",
        ],
        keys: ["Programozó", "Grafikus", "Designer"],
        content:
          "Dear Mr Smith, I am writing to make a suggestion for looking for more colleagues for the following positions.Our team would need a programmer, a graphic designer and a designer.The new colleagues should have some special skills. As for the programmer, it would be great if he knew everything about Java, JavaScript and C++.He should also have at least 3 year - work experience.Other requirements are accuracy, reliability, stress resistance, cooperation and problem solving skill.He should know the object oriented programming. To create the new game development project, I would also need a graphic designer team.In this team the graphic and the designer should work on the design of the game together.Their job would be connected tight, that is why it is important for them to be able to work in a team. The new game is a kind of war game, so the caracters will wear fully elaborated clothes and they will have different kinds of weapons.The battles will take place on real venues, so it would be great if the graphic designer were interested in this topic. For the successful and smooth project the first step is to find a professional desinger who can design the whole game including the clothes, characters, vehicles, weapons and the venues.After that we will need the graphic and the programmer at the same time. I am planning to start the whole project is 6 months’ time, so I suppose we will find the perfect colleagues for the positions. I look forward to your approval whether it is possible to employ more colleagues for this project.Thank you in advance.",
      },
      {
        id: 8,
        title:
          "Webfejlesztés tanfolyamon kell előadást tartania. Magyarázza el, mi a reszponzív weboldal!",
        task: [
          "Ismertesse a különböző eszközök eltérő méretéből adódó problémákat! ",
          "Hogyan lehet ugyanazt a tartalmat többféle eszközön is megjeleníteni?",
        ],
        keys: ["Kijelzők méretei", "HTML, CSS, @media", "Bootstrap"],
        content:
          "Ladies and Gentlemen, I would like to talk about the responsive website and explain what it means actually.As you all know, nowadays each website should be responsive which means that it adjusts to different sizes of the screen.The websites can be opened and read on different smart devices such as a laptop, a smart phone, a tablet or a smart television.All of them differ in screen size and screen resolution.For example, if we use a picture with a fixed size, it might not appear properly on a certain smart device.Another problem is that some fuctions can’t be opened at all. There are some simple solutions to build a responsive website.One of them is when we use the CSS(Cascading Style Sheets).It is a computer language for laying out and structuring web pages.If you choose this method to make a website, it is important to give the size of the elements in percentage. There are more complicated options as well, for example, Bootstrap, @media and CMS systems which already contain the responsive feature.One of the most frequently used option is Bootstrap.I would like to describe it in details.It is a framework which uses three technologies, HTML, CSS and JavaScript.It is basically good for creating a good - looking website which can be easily designed and can be displayed on any screen size.It makes prepared solutions for the web developers.It documents well.It is easy to make a responsive website because each module is made responsive.It has strong browsing compatibility.Also, it is easy to learn how to use and customise it.Grid system is the most frequently used element of Bootstrap, it arranges the elements and data in columns in order to have the appropriate layout on every different smart device.",
      },
      {
        id: 9,
        title:
          "Ismertesse az Ön által tanult verziókövető rendszer lehetőségeit!",
        task: [
          "Mi az a verziókövető rendszer? ",
          "Miért érdemes használni? Lehetőségek: összehasonlítás, visszatérés korábbi állapotba, stb.",
        ],
        keys: ["Team Foundation Server, GIT", "Check in, check out"],
        content:
          "First of all, I would like to talk about the version control software which is good for saving all versions of a certain source code. In addition, it helps team work. The members of a team can divide the tasks, prepare each module which is stored in the version control software. Each part can be reached by any member of the team. It is easy to track the changes of the software code and anyone can make a comment ont he certain version. If there is a bug in the latest version, it is possible to go back to the previous version. There are two main types of the version control software. One of them is the client-server approach of centralized systems. In this case, the whole source code is stored in the centre. Only the local version is used and stored on the local computer. When the task is completed, the source code is sent back to the central system. This process is called ’check in’. The other type is the distributed version control in which the complete codebase, including its full history, is mirrored on every developer’s computer. Distributed version control conducts synchronization by exchanging patches from peer to peer. One type is the GIT. This is a version control system which has a lot of advantages. It is fast, it is easy to use, it’s a free and open-sourse software. As defined by Microsoft, Team Foundation Server provides a set of collaborative software development tools that integrate with your existing Integrated Development Environment(IDE) or editor thus enabling your cross- functional team to work effectively on software projects of all sizes. It is useful to use the version control software because it has several advantages.The team can work together successfully, communication is easy and there is little chance to make a mistake.",
      },
      {
        id: 10,
        title:
          "Új kolléga érkezik a céghez, aki még nem dolgozott objektum orientált környezetben. Magyarázza el neki az OOP lényegét!",
        task: [
          "Milyen programozási módszertanokat ismer?",
          "Mi a különbség az objektum orientált és a szekvenciális programozás között? ",
          "Mutassa be egy osztályok felépítését!",
        ],
        keys: [
          "Zártság, öröklődés, polimorfizmus, interface-ek, virtuális metódusok",
          "Jellemzők, metódusok, láthatósági szintek",
        ],
        content:
          "Dear Tom. You are new here so let me introduce our company to you. I’ve heard that you aren’t really familiar with the OOP so I’d like to tell you some useful information about it which is necessary for being able to use it. There are a lot of different kinds of programming techniques such as cascading model, agile programming and iterative programming. However, we mainly use OOP which means that the main programme is divided into set of objects.The emphasis given on objects, not on procedures.All the programming activities revolve around objects.An object is a real world entity.It may be airplane, ship, car, house, horse, customer, bank Account, loan, petrol, fee, courses, and Registration number etc.Objects are tied with functions.Objects are not free for walk without leg of functions.One object talks with other through earphone of functions.Object is a boss but captive of functions.",
      },
      {
        id: 11,
        title:
          "Önt bízták meg egy junior kolléga kódjának átnézésével. Azt vette észre, hogy az elkészült weblap formázása „inline style” használatával valósul meg. Magyarázza el a kollégának, miért érdemes inkább CSS fájlt használni!",
        task: [
          "Udvariasan közölje a kollégával, hogy mivel bízták meg, és milyen hibát talált! ",
          "Design elemek változása esetén nem kell a HTML/PHP/stb. kódot változtatni.",
        ],
        keys: ["Stílusosztályok használata", "CSS szelektorok"],
        content:
          "Good morning Jane. I’m sorry to disturb you but I know you are new at the company so my boss asked me to check the code you have written. You have been working really successfully so far but I’ve found a small problem with the code. I’ve noticed that you used inline style instead of CSS. It is not really good because  each HTML file is desinged individually, however, it should be designed with the help of CSS. HTML is only used to define the structure of the website. CSS is used to display the style of the website. It is enough to create the style of an element only once and we can reuse it several times. If we use CSS, it is easier to make changes in design because it is enough to make the changes only once. All the colleagues use an already existing CSS file and if you work in a team, you must use this CSS. If you make a different style, it won’t fit the style of the websites which are desinged by the other colleagues. CSS is very easy to learn how to use.It has different selectors for such as tags, class or ID.With the help of the selectors, you can set the style of each element. You should look through the already existing CSS and you are allowed to use these files.If you want to create a new disign, you should go to Mr Smith and make a suggestion to him.If this new style is considered to be good and necessary, you can use it. Anyway, we are satisfied with your job and we are glad to work with you since you are a valuable member of the team. If you have any questions, feel free to ask me for help.",
      },
      {
        id: 12,
        title:
          "Ön egy web alkalmazásokat fejlesztő céget vezet. Az egyik ügyfele az ország több pontján dolgozó értékesítő kollégák számára szeretne egy ügyviteli programot készíttetni. Az ügyfél desktop alkalmazást szeretne.Próbálja meggyőzni, hogy egy web alkalmazás jobb döntés lenne!",
        task: [
          "Ismertesse az újabb verziók telepítésének problémáját! ",
          "Egyéb lehetséges érvek: Hálózati kapcsolat a desktop alkalmazáshoz is kell, megfelelő beállítások mellett ugyanolyan biztonságos, operációs rendszertől független.",
        ],
        keys: [
          "On-line rendszerek",
          "Szoftverek életciklusa",
          "Folyamatosan változó üzleti igények, újabb program verziók",
        ],
        content:
          "Dear Customer, I have received your email in which you are inquiring about a desktop application that could meet your business needs. However, I would recommend the web- based application instead.One of the main reasons why I would prefer it is that the deployment of the programme does not require any technical knowlegde.In addition to that, the upgrading is less problematic than in case of the desktop application.Generally, web applications are refreshed centrally at the server and the employees can always use the most up- to - date version with the help of a web browser. What is more, by applying the same settings it can guarantee the same data security regardless of the operating system. The drawback of the desktop application is that it is dependent on the operating system and it requires information techological knowledge as well as a server.The administrator must do the backups regularly and do the system updates which makes its application more expensive.The programmes must be changed according to the custormers’ demands.These changes cannot be done online so the system administrator must go to each location and do the updates personally.It requires a lot of travelling which makes the process much more expensive.These extra costs do not occur in case of the web - based application. In case of the web - based application the clients’ arising questions can be answered more quickly.Web - based applications are becoming more and more popular and technically supported.As a result of technological development, a lot of problems can be solved with the help of the online applications. If you have any questions in connection with the web - based application, you can ask me any time.",
      },
      {
        id: 13,
        title:
          "Ön egy kis szoftverfejlesztő cég vezetője. Mutassa be a cégét az árajánlatot kérő külföldi partnernek!",
        task: [
          "Mikor alakult, hány dolgozója van a cégnek? ",
          "Milyen referenciákkal rendelkezik a cég? ",
          "Miért érdemes az Ön cégét választania a leendő partnernek?",
        ],
        keys: ["Cégtörténet", "Kis cégből méretéből eredő rugalmasság"],
        content:
          "Good morning Mr. Taylor. I would like to introduce my small software developer company, the Qualitate Ltd. (limitid) Company. It was established by my brother and me 15 years ago in 2005. It is a family enterpreise.We started the company four people and we developed contstantly.At the moment we work together with 12 software developers.We aren’t planning further development in the future. The reason is that we can work more efficiently as a small company.We can discuss a new projekt face to face, we can help each other and the colleagues understand others’ (birtokos eset jelölése, de s - sel végződik, így nem írja ki.) task that’s why they can substitute each other. Our company mainly deals with making websites from desing and to production.We focus on following the latest technological developments and our employees regularly take part in courses where they can learn about the new solutions. Our company has already made several websites for different companies, for example MOL, Oracle and Tesco. The reason why it is worth(érdemes – előtte létige van – és ige jön utána inges alakban) choosing our company is that we work precisely, fast and flexibly.We are ready to carry out the demands which occur during the development.WeIt would be great if we could work together with your company.",
      },
      {
        id: 14,
        title:
          "A cég, ahol dolgozik, prototípus alapú agilis módszertannal dolgozik. Minden hét végén elkészül a szoftver egy újabb verziója. Magyarázza el az ügyfélnek, hogy mi a módszer lényege, és mi ebben az ő feladata!",
        task: [
          "Minden héten le kell tesztelnie a szoftvert. ",
          "Folyamatosan kapcsolatban kell lenniük, ami sok idejét igénybe veheti. ",
          "A fejlesztés végén az ügyfél pontosan olyan programot kap, amit szeretne.",
        ],
        keys: ["Szoftverfejlesztés lépései", "Kommunikáció fontossága"],
        content:
          "A prototype is nothing but a mock version of your ideas in an early stage of the production. This gives the client an actual feel of the system. It also helps them to better understand their desired system requirements. Prototype is not a complete system itself.Many details are not built in the test model either.The main reason of the Prototype model is to provide a system which gives a rough idea about the overall functionality. The prototype will only show the basic test environment of the actual software; thus, some features will not be running completely.This is designed to give an example of the working, look and feel of the final product to the users. This model is used when a client is not sure about the project requirements.Therefore, a close and constant communication between company and client is important for the success. Prototype is an iterative process which finalizes the product with trial and error method.",
      },
      {
        id: 15,
        title:
          "Úgy látja, hogy határidőre nem tudja befejezni a kapott feladatot, mert az ügyfél új igényekkel állt elő. Írjon e-mailt, amiben egy hét haladékot kér!",
        task: [
          "Soroljon fel néhány kérést, amit az ügyfél kért. Pl.: egy új riport, át kellett dolgozni a keresés ablakot, megváltoztatták az import fájl szerkezetét, ...stb! ",
          "Adjon becslést arra, hogy mikorra tudja befejezni az Önre bízott feladatot! ",
          "Mire lenne szüksége ahhoz, hogy a határidőt tartani lehessen?",
        ],
        keys: ["Határidő", "Projekt", "Ügyfél igény"],
        content:
          "Dear Mr Taylor, I am writing to you to inform you about the fact that I will not be able to finish the task in time.The reason is that the client has some new request which make it impossible to accomplish the task by the given deadline. The client’s new claims are to make a new report and to change the structure of the import file.Because of the new task, I need to change the structure of the database too.That’s why I need to change more windows which takes more time. To do these additional tasks, I will need three more weeks, unless there is another college help me with the project.If it possible, the project can be finished by next Friday. Thank you for your help in advance.I look forward to you reply.",
      },
      {
        id: 16,
        title:
          "Elkészült a raktárkezelő szoftver legfrissebb verziója. Írjon e-mailt, amiben leírja az ügyfélnek, hogy honnan tudja letölteni az új szoftvert, mi a teendője a telepítés során, és mi változott a programban!",
        task: [
          "Mondja el, mire van szükség az új szoftver letöltéséhet! Pl.: URL, felhasználói név, jelszó. ",
          "Részletezze a telepítés lépéseit! Pl.: szerver oldali teendők, kliens oldali feladatok. ",
          "Mondjon néhány raktári programra jellemző funkciót! pl.: a raktári kivételezés folyamata most már vonalkód olvasóval is működik, a leltári ív nyomtatásánál lehetőség van a darabszámok megjelenítésére.",
        ],
        keys: [
          "Letöltés weboldalról",
          "Adatbázis frissítés",
          "Kliens program telepítése",
        ],
        content:
          "Dear Customer, We are pleased to inform you that our newest stock maganement program has been finalised and the deployment files are available on our company home page under the download menu.Below in this mail you will find the direct URL link.The installation files will be accessible after providing your personal user name and password in the prompted login form.In case you do don’t have your credentials, please contact your customer service center for further assistance. The installation: Thanks to the user friendly deployment process you just need to download the files on the local drive of your computer, decompress the package and then double click on the install.exe file to start the installation.This process runs to the end automatically and you will only be prompted when application is ready to use.When starting the program for the first time you need to enter the connection information, sent ina separate mail, under the Connection / Security menu.Please make sure that your computer is be connected to the internet so that the connection from the client can be established to the server.This step is vital to set up your customer account also at the server side.After these actions no further local updates will be required and the About the new features: Compared to our previous software the new product is a cloud - based inventory management solution for middle size businesses like your, however, the software can be easily adjusted to growing business requirements on demand.Its free plan supports one or multiple user at the same time and lets you manage up to 100 transaction entries per month.I would like to higlight also the product tagging and cataloging functionality that lets users create product catalogs with up to eight photos for each item. If you want to manage more than 100 entries per month, upgrade to the Advanced or Ultimate plans. In addition to the features offered in the free version, these plans offer: QR code as well as bar code tagging and scanning, user activity tracking, document management and customized branding, When printing the inventory sheets for the order picking activities now it is also possible to indicate the quantity per product groups or orders. With the newly introduced enhanced functionalties we hope to enable you to handle your stock of products or materials more efficiently and effectively.Should you encounter any issues or you just have a question you can find our contact details on our homepage under the „Contact us” menu.",
      },
      {
        id: 17,
        title:
          "Projekt vezetőként dolgozik egy szoftverfejlesztő cégnél. Feladatként kapja egy ingatlan iroda weboldalának megvalósítását. Az oldalon az iroda aktuális hirdetései szerepelnének képekkel, leírásokkal.",
        task: [
          "Mondja el milyen lépésekből állna a projekt megvalósítása! ",
          "Milyen szaktudással rendelkező kollégák szükségesek a projekt csapatba? ",
          "Fogalmazzon meg egy álláshirdetést az egyik pozícióra!",
        ],
        keys: ["Programozó, web designer", "Projekt rövid leírása"],
        content:
          "The aim of this meeting is to present our new project. I am the project leader and my task is to present and discuss the necessary steps to carry out this project. Our software company has been asked to design a website with pictures and adverticements for an estate agency. The first step is to chose a colleague to talk to the client and to discuss the details of the project.The next task is to choose the appropriate web developers who have the necessary qualification and competence to do the job.We need frontend and backend developers.First of all, we must look for a backend developer who has already had experience in PHP and JavaScript.It would be nice if the expert had work experience in SQL. After we have found the appropriate experts for the different tasks, the next step is to start the project.The deadline of this project is three months.Meanwhile, we will have a rengular contact with the client who can follow each part of the project and has the opportunity to ask for changes if necessary. During the project the team has a regular meeting every Monday at 10 am.Here everyone can present the completed tasks and ask questions about the next step. Our software developer company is looking for a backend developer who has already had experience in PHP and JavaScript.The candidate can be a member of a successful team so it is important to be accurate, flexible, hard- working, cooperative and to be able to work individually.We offer competitive salary and bonus as well as a stable job.It is also possible to work from home.If you are interested in this job, please contact me on this email address...",
      },
      {
        id: 18,
        title:
          "Junior kolléga érkezik a céghez. Az Ön feladata betanítani. Magyarázza el mi az a „debugolás”!",
        task: [
          "Mutassa be röviden a céget! Mutassa milyen hibakeresési eljárásokat alkalmaznak a cégnél! ",
          "Mondjon példát, amit Ön szerint a hibakeresési eljárások közül debugolással lehet a leggyorsabban megtalálni!",
        ],
        keys: [
          "Lépésenkénti végrehajtás",
          "Változók értéknek, értékváltozásának követése.",
          "Töréspont fogalma",
        ],
        content:
          "Debugging. Debugging is the process of detecting and removing of existing and potential errors (also called as 'bugs') in a software code that can cause it to behave unexpectedly or crash. To prevent incorrect operation of a software or system, debugging is used to find and resolve bugs or defects. In computer programming and software development, debugging is the process of finding and resolving bugs(defects or problems that prevent correct operation) within computer programs, software, or systems. Debugging tactics can involve interactive debugging, control flow analysis, unit testing, integration testing, log file analysis, monitoring at the application or system level, memory dumps, and profiling.Many programming languages and software development tools also offer programs to aid in debugging, known as debuggers. Debuggers are software tools which enable the programmer to monitor the execution of a program, stop it, restart it, set breakpoints, and change values in memory.The term debugger can also refer to the person who is doing the debugging.Generally, high- level programming languages, such as Java, make debugging easier, because they have features such as exception handling and type checking that make real sources of erratic behaviour easier to spot.In programming languages such as C or assembly, bugs may cause silent problems such as memory corruption, and it is often difficult to see where the initial problem happened.In those cases, memory debugger tools may be needed.",
      },
      {
        id: 19,
        title:
          "A céghez – ahol dolgozik – új külföldi ügyvezető érkezik. Mutatkozzon be neki!",
        task: [
          "Mutassa be röviden önmagát! ",
          "Mondja el korábban hol dolgozott! ",
          "Mondja el milyen projekteben dolgozott és dolgozik a cégnél! ",
          "Mondja el miért szeret ennél a cégnél dolgozni!",
        ],
        keys: ["Tanulmányok, tapasztalatok", "Korábbi munkahelyek"],
        content:
          "My name is .... and I work for this company as a software developer. I have been working here for ten years.This is my first workplace.I finished my studies at Óbuda University in Budapest.I am an computer engineering. I have taken part in a lot of projects.For example, our team developed a new banking system, an invoice system.At the moment we are working on a programme which sends data to the tax office. I like working here because my colleagues are reliable(megbízható), hard- working(szorgalmas), flexible(rugalmasak), cooperative and they are experts(jó szakemberek).We can work together successfully.The job is interesting.We can take part in (részt venni) in different courses wher we can learn a lot of new things.The team building courses are also useful. I hope we will be good colleagues and we we will get on on well with each other.",
      },
      {
        id: 20,
        title: "Ismertessen egy Ön által tanult algoritmus leíró eszközt!",
        task: [
          "Milyen algoritmus leíró eszközöket tanult! ",
          "Mutasson be egyet ezek közül részletesen!",
        ],
        keys: ["Folyamatábra", "Mondatszerű leírás", "Struktogram"],
        content:
          "Algorithm descriptive / descpting method. The aim of the algorithm describing method is to use them for introducing the processes.The alg.desc.meth.is independent from the programming languages.Everyone understands it. The programming languages have a strict sintax and they contain a lot of information which isn’t necessary for the alg.desc.methods. A simple and independent language is used to write the whole process. There are 2 types of the the alg.descr.method, the drawings and the texts Drawings are the flowcharts, stuctograms, Jackson- diagrams, tree structures. The texts are the description using a programming language, sentences, phrases, abstract functions. Flowchart It’s one of the oldest(alg.desc.) method.It depicts the processes in details. The program is described as ‘graph’.The graphs contain hubs and spokes. There are hubs which are connected with spokes. geometric shapes are in used to sign the processes.Their use is bound. Types of the hubs: The rectangle is used as an instruction. The diamond is used as a decision. The circle is used to combine flow lines.",
      },
    ],
  },
];

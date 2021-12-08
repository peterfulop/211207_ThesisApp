export const data = [
    {
        id: 1,
        language: 'hu-HU',
        name: "Magyar szóbeli tételek",
        items: [
            {
                id: 1,
                title: "Egy kis vegyesbolt vezetője felkéri, hogy készítsen egy számítógépes programot, amely a bolt raktárkészletét tartja nyilván. Határozza meg a fejlesztendő szoftver funkcionális és minőségi követelményeit, valamint az alkalmazás szerkezeti felépítését!",
                task: "Mutassa be a programtervezés folyamatát! Nevezze meg és jellemezze a tervezés során készítendő dokumentumokat! Határozza meg a fejlesztendő szoftver funkcionális követelményeit! Határozza meg a fejlesztendő szoftver minőségi követelményeit!",
                keys: ["Programtervezés: követelmények meghatározása, specifikáció, tervezés", "Rendszerkövetelmények, felhasználói követelmények", "A követelményfeltárás módszerei", "Követelményspecifikáció"],
                content: ""
            },
            {
                id: 2,
                title: "Egy desktop ügyviteli szoftver tesztelését kell megvalósítani. Készítse el a tesztelési tervet, tegyen javaslatot a tesztelési környezet kialakítására!",
                task: "Definiálja a tesztelés fogalmát és jellemzőit! Határozza meg a szükséges teszttípusokat! Határozza meg a tesztelés szintjeit! Jellemezze a tesztelési módszereket! Definiáljon egy teljes tesztelési környezetet!",
                keys: ["Validáció és verifikáció", "Tesztelés szintjei: komponens teszt, modul teszt, integrációs teszt (alrendszer, rendszer teszt), elfogadási teszt", "Tesztelési módszerek: statikus és dinamikus tesztelés, fekete doboz, fehér doboz", "Szoftvertesztelés módszertana és folyamata", "Tesztelési vezérlevek", "Rendszertesztelés, integrációs tesztelés, végtesztelés", "Teljesítménytesztek (volumen, stressz teszt)", "Automatikus tesztelési eszközök (pl. JUnit, NUnit, xUnit)", "Tesztvezérelt fejlesztés (napi build, release)"],
                content: ""
            },
            {
                id: 3,
                title: "Egy játékszoftver fejlesztésén több programozó dolgozik. Feladata, hogy a projektben résztvevők számára kialakítsa a közös fejlesztési környezetet, valamint gondoskodjon az egyes programváltozatok és frissítések elkészítéséről.",
                task: "Határozza meg a közös fejlesztés során jelentkező problémákat! Ismertesse a verziókezelő rendszerek főbb jellemzőit! Határozza meg – egy tetszőlegesen választott verziókezelő rendszerre alapozva – a programozók számára a közös munkafolyamatokat és szabályokat! Jellemezze a szoftverek életciklusát! Ismertesse egy programfrissítés készítésének módját!",
                keys: ["Verziókezelő rendszerek (pl. GIT, SNV)", "Automatikus dokumentumgeneráló eszközök", "Szoftverek életciklusa: alpha-, béta- és végleges verziók (release) kiadása", "Telepítőcsomag készítése", "Verziókövetés, hibajavítás az egyes verziókba, programfrissítések készítése"],
                content: ""
            },
            {
                id: 4,
                title: "Egy webalapú szoftvert többfelhasználós működésre kell kialakítani. Tervezze meg a webalapú szoftver többfelhasználós működését, definiálja a működéshez szükséges komponenseket, és alakítsa ki a szükséges biztonsági megoldásokat!",
                task: "Ismertesse a webalapú rendszerek felhasználókezelési megoldásait és jellemzőit! Ismertesse a jelszókezelésre és tárolásra vonatkozó alapelveket! Mutasson be - egy webalapú szoftver esetében - egy teljes körű felhasználókezelési megoldást! Ismertesse a leggyakoribb felhasználói fiókok elleni támadási módszereket, és tegyen javaslatot az ellenük való védekezésre!",
                keys: ["HTTP protokoll felépítése, működése. Kérés és válaszüzenet. Biztonság", "Munkamenet (session-kezelés)", "Web alkalmazások biztonsága. Felhasználó- és jogosultságkezelés", "Alkalmazásszerverek biztonsági megoldásai", "Jelszókezelésre vonatkozó szabályok, jelszavak tárolása", "Felhasználói fiókok elleni támadások: nyers erő (brute force) és szótármódszer", "Felhasználói fiókok védelme", "Adatbázisok védelme"],
                content: ""
            },
            {
                id: 5,
                title: "Egy grafikus, több platformon (desktop, web, mobil) is használható kártyajáték programot kell készíteni. Tegyen javaslatot a programozási nyelv és a fejlesztési környezet kiválasztására!",
                task: "Tegyen javaslatot a feladathoz megfelelő programozási nyelv kiválasztására! Hasonlítsa össze a választott programozási nyelvet más nyelvekkel, és indokolja választásának előnyeit! Határozza meg a többplatformú alkalmazásfejlesztés kritikus pontjait és korlátait! Válasszon ki egy fejlesztési környezetet és indokolja döntését!",
                keys: ["Programozási nyelvek típusai és jellemzői", "Alapvető input/output komponensek", "Grafikus komponensek", "GUI alkalmazás készítése", "Alkalmazásplatformok jellemzői", "Multiplatform-alkalmazáskészítés szabályai", "Programozói környezetek (IDE) és jellemzőik"],
                content: ""
            },
            {
                id: 6,
                title: "Egy áruház klimatizálási rendszeréből 10 másodpercenként érkeznek - az egyes helyiségek hőmérsékletét jelző - monitoradatok egy adatbázisba. A megfigyelt helyiségek (beérkező adatok) száma 300 darab. Tegyen javaslatot az adatok rögzítéséhez szükséges adatbázis és alkalmazás felépítésére!",
                task: "Tervezze meg a rendszer működéséhez szükséges architektúrát! Tervezze meg az adatok tárolásához szükséges adatbázis felépítését! Határozza meg az adatok tárolásához szükséges tárterületet! Tervezze meg az adatok rögzítéséhez szükséges alkalmazást! Határozza meg a rendszer működése során jelentkező kritikus pontokat, hibákat és javasoljon megoldásokat!",
                keys: ["Adatbázis-kezelő rendszer telepítése, alapvető konfigurációs beállítások", "Adatbázisok normalizálása, optimalizálása", "Adatmodellezés: egyed-kapcsolat diagramok, tervezési alapelvek, megszorítások (constraint) modellezése", "Mezőtulajdonságok: típusok, mezőméret, alapérték", "Adatbázis-kapcsolatok megvalósítása. Lokális és hálózati adatbázis használata", "Üzenetközvetítő sorok (MQ)"],
                content: ""
            },
            {
                id: 7,
                title: "Egy utazási iroda online (webalapú) utazásfoglalási rendszert üzemeltet. A klasszikus MVC alkalmazás a cég szerverén fut. Egy sikeres reklámkampány következtében a rendszer felhasználóinak száma 100-szorosára, csúcsidőszakban(pl.ünnepek, nyári hónapok) pedig akár 10000-szeresére is emelkedik. Feladata, hogy az alkalmazás átalakítása nélkül biztosítsa a megnövelt terhelés költséghatékony kiszolgálását.",
                task: "Ismertesse a többfeladatos, többfelhasználós rendszerek működését! Definiálja a klasszikus MCV-alkalmazás felépítését, és térjen ki a skálázhatósági kérdésekre! Jellemezze a virtualizációs szoftverek tulajdonságait! Definiálja a robosztus alkalmazások jellemzőit! Definiálja a csúcsterhelés fogalmát, és magyarázza el ennek költségoldali vonzatát! Tervezzen rendszerarchitektúrát a vázolt probléma megoldására!",
                keys: ["Számítógép-architektúrák", "Multitask rendszerek. Időosztásos rendszerek. Valósidejű rendszerek", "Virtulizációs szoftverek. Fizikai és virtuális gép kapcsolata, beállítások", "Többrétegű alkalmazások felépítése", "Model–View–Controller (MVC) elv, MVC-elv alkalmazása webtechnológiákban", "Hatékonyság és teljesítmény a webalkalmazásokban", "Felhőalapú rendszerek", "Munkafolyamatokhoz, szolgáltatásokhoz, termékekhez kapcsolódó egyszerű költségkalkuláció."],
                content: ""
            },
            {
                id: 8,
                title: "Egy alkalmazás naplófájlja az egyes eseményeket sorvégejellel, az eseményen belüli adatokat „;” jellel választja el. Egy eseményhez az alábbi adatok tartoznak: időpont, felhasználó, számítógép IP- címe, eseményüzenet. Feladata egy olyan hordozható (portable) alkalmazás készítése, amely a naplófájlban képes különböző adatok alapján eseménybejegyzéseket keresni.",
                task: "Ismertesse a hordozható (portable) alkalmazások jellemzőit és korlátait! Tervezze meg az alkalmazás működését! Optimalizálja a kereséseket kétféle szempont szerint: végrehajtási idő, illetve memóriafoglalás!",
                keys: ["Lineáris és logaritmikus keresések", "Rendezések", "Végrehajtási idők", "Állománykezelés, Indexelés"],
                content: ""
            },
            {
                id: 9,
                title: "Egy közepes méretű vállalat komplex vállalatirányítási rendszert használ. A különböző jelentésekhez, riportokhoz paraméterezhető lekérdezések állnak rendelkezésre.Feladata egy olyan alkalmazás elkészítése, amely a lekérdezésekből, kapott adatokból kisméretű, védett és hiteles(aláírt) jelentéseket(dokumentumokat) készít!",
                task: "Ismertesse egy dokumentum (pl. PDF, DOC) előállításának (generálásának) lépéseit! Mutassa be, hogyan csökkentené a dokumentum méretét! Mondja el, hogyan biztosítaná a dokumentum sérthetetlenségét! Beszéljen arról, hogyan valósítaná meg a dokumentum hitelességét! Ismertesse, hogyan valósítaná meg a dokumentum illetéktelenek általi elolvasásának védelmét!",
                keys: ["Adatbázis-kapcsolatok megvalósítása", "Integráció más rendszerekkel. Adatok exportálása, importálása irodai programokból", "Message digest (Hash)", "Titkosítási algoritmusok (DES, RSA)", "Digitális aláírás"],
                content: ""
            },
            {
                id: 10,
                title: "Egy táblajáték program tesztelését kell elvégezni. Feladata, hogy a béta állapotú szoftverben hibákat tárjon fel.",
                task: "Tegyen javaslatot egy teljes körű tesztelési tervre! Határozza a „jó teszteset” kritériumait! Tegyen javaslatot a tesztelési dokumentum formájára és felépítésére! Ismertesse egy hibakezelő rendszer működését!",
                keys: ["Programhibák típusai, felderítési módjuk. Szintaktikus és szemantikus hibák", "Hibadetektálás, hibamodellek", "Tesztelési módszerek: statikus és dinamikus tesztelés, fekete doboz, fehér doboz", "Tesztelési módszertan. Szoftvertesztelés folyamata. Tesztelési vezérelvek", "Hibakezelő rendszerek(pl.Bugzilla)"],
                content: ""
            },
            {
                id: 11,
                title: "Egy autóalkatrész-üzlet raktárkészletét nyilvántartó programot kell fejleszteni. Határozza meg az alkalmazás szerkezeti felépítését!",
                task: "Nevezze meg és jellemezze a tervezés során készítendő dokumentumokat! Tegyen javaslatot a szoftver futtatási környezetére (platform)! Tegyen javaslatot a szoftverarchitektúra kialakítására! Mutasson rá az alkalmazás kritikus pontjaira!",
                keys: ["Rendszerkövetelmények, felhasználói követelmények", "Megvalósíthatósági tanulmány", "Adatmodell megtervezése (UML adatbázis-diagram), objektumhierarchia megtervezése (UML osztálydiagram), algoritmizálás(UML aktivitás diagram, pszeudokód)"],
                content: ""
            },
            {
                id: 12,
                title: "Egy kisáruház részére számlázó programot kell kifejleszteni. Feladata, hogy elkészítse a szoftverfejlesztésre vonatkozó árajánlatot és vállalkozói szerződést.",
                task: "Határozza meg a költségkalkuláció elemeit! Ismertesse egy szoftverfejlesztési árajánlat tartalmi és formai elemeire vonatkozó legfontosabb jellemzőket! Mutassa be egy vállalkozói szerződés tartalmi és formai elemeire vonatkozó legfontosabb jellemzőket! Ismertesse egy szoftverfejlesztésre vonatkozó vállalkozói szerződés speciális tartalmi elemeit!",
                keys: ["Árajánlat szerepe, tartalma, felépítése", "A bruttó és nettó bevétel, költség, önköltség fogalma, számításának módja", "Munkafolyamatokhoz, szolgáltatásokhoz, termékekhez kapcsolódó egyszerű költségkalkuláció, költségszámítás, jövedelmezőség számítása", "Pénzügyi adminisztrációra, számvitelre jellemző alaptevékenységek", "A vállalkozókat, vállalkozásokat, munkavállalókat terhelő adó- és közterhek"],
                content: ""
            },
            {
                id: 13,
                title: "Egy raktárkezelő program fejlesztése során olyan riportgeneráló modult kell készíteni, amely különféle formátumú fájlokba (PDF, DOC, ODF, XLS, XML, GIF, PNG, JPG, ZIP, RAR) állítja elő a jelentéseket. Feladata, hogy készítsen elemzést a feladathoz szükséges komponensek és formátumok szerzői jogi helyzetével kapcsolatban.",
                task: "Ismertesse az egyes formátumok felhasználásával kapcsolatos szerzői jogokat! Mutassa be a külső szoftverkomponensek beépíthetőségével kapcsolatos jogi lehetőségeket, korlátokat! Ismertesse a külső szoftverkomponensek beépíthetőségével kapcsolatos felhasználási feltételeket üzleti célú alkalmazások esetében!",
                keys: ["Szoftver fogalma, szoftverek csoportosítása", "Zárt és nyílt forráskódú rendszerek, GPL", "Licenc, licencszerződés, Használati jog", "Szabad szoftverek"],
                content: ""
            },
            {
                id: 14,
                title: "Egy vállalati hibabejelentő szoftverhez felhasználói dokumentációt kell elkészíteni. Tegyen javaslatot a szoftver felhasználóit támogató rendszer elemeire és kialakításuk módjára!",
                task: "Ismertesse a felhasználói dokumentumok jellemzőit! Sorolja fel, hogy milyen tartalmi elemeket kell egy felhasználói dokumentumnak tartalmaznia! Tegyen javaslatot a szoftver felhasználóit támogató további lehetőségekre (pl. e-learning, screencast, stb.)!",
                keys: ["Kiadványszerkesztés-alapok", "Videó- és hangszerkesztés alapjai", "Screencast készítése", "Animációk készítése"],
                content: ""
            },
            {
                id: 15,
                title: "Egy elektronikai szakáruház raktárkezelő szoftverét kell kifejleszteni. Feladata, hogy tervezze meg a szoftver adatbázisának felépítését!",
                task: "Ismertesse az adatbázis-tervezés alapfogalmait! Mondja el az adatmodellezés alapfogalmait! Vázolja fel a raktárkezelő program főbb adatbázis-szerkezeti elemeit!",
                keys: ["Adatbázisok felépítése: táblák, rekordok, mezők. Adatintegritás, adatvédelem. Relációs adatmodell", "Elsődleges kulcs fogalma. Index fogalma, indexelés", "Adatbázisok normalizálása, optimalizálása. Redundancia csökkentése, megszüntetése", "Adatmodellezés: egyed-kapcsolat diagramok, tervezési alapelvek, megszorítások (constraint) modellezése"],
                content: ""
            },
            {
                id: 16,
                title: "Egy banki szoftverben az átutalások kezelését kell megvalósítani. Végezzen elemzést az adatbázis- műveletek során jelentkező hibák és hatékonysági kérdések kezelésének lehetőségeiről!",
                task: "Ismertesse az adatbázis-konzisztencia fogalmát és megsértésének módjait! Mondja el a tranzakció fogalmát, védelmi szintjeit és használatának módját! Tegyen javaslatot az adatbázis-műveletek hatékonyságának növelésére!",
                keys: ["Tranzakciók fogalma, tranzakciók védelmi szintjei", "ACID (Atomicity, Consistency, Isolation, and Durability) tulajdonságok", "Biztonsági mentés készítése. Ütemezett mentések", "Lekérdezések hatékonysága. Teljesítményjavítás, diagnosztika", "Elosztott adatbázisok", "Naplózás és hibakezelés"],
                content: ""
            },
            {
                id: 17,
                title: "Egy vállalat információs rendszerében érzékeny adatokat tárolnak, így fokozott támadásveszélynek van kitéve. Tegyen javaslatot a hálózati környezetben dolgozó kliensgépek védelmére!",
                task: "Ismertesse a kliensgépekre leselkedő informatikai veszélyeket! Javasoljon védekezési módszereket a rosszindulatú programok ellen! Mondja el a biztonságos böngészés módszereit! Javasoljon eszközöket a fokozott védelem megvalósítására!",
                keys: ["Rosszindulatú szoftverek (vírus, trójai, féreg, adware, spyware)", "Védekezési módok a rosszindulatú szoftverek ellen", "Megtévesztési technikák (social engineering, phishing)", "Biztonságos böngészés, böngésző biztonsági beállításai", "Biztonsági szabályzat", "Mobil eszközök védelme, biometrikus azonosítási módszerek", "IT eszközök fizikai védelme"],
                content: ""
            },
            {
                id: 18,
                title: "Egy webalapú információs rendszer védelmét kell megvalósítani. Tegyen javaslatot a szervereket érő támadások kivédésére!",
                task: "Ismertesse a szerverek elleni támadások módjait és jellemzőt! Tegyen javaslatot a szerverek védelmét biztosító eszközökre! Ismertesse a tűzfalak típusait és feladatait!",
                keys: ["Hálózatbiztonsági alapok, hibaelhárítás, biztonságpolitika", "Támadástípusok (felderítés, DoS, DDoS, hozzáférési támadás)", "Megtévesztési technikák (social engineering, phishing)", "Hálózati veszélyek, támadási módszerek, tűzfalak használata", "Tűzfalak feladata, típusai"],
                content: ""
            },
            {
                id: 19,
                title: "Egy Microsoft Windows operációs rendszerre készült játékprogramot kell más platformra (pl.LINUX) átültetni. Készítsen egy megvalósíthatósági tanulmányt a feladat végrehajtásáról!",
                task: "Hasonlítsa össze a két operációs rendszer fontosabb jellemzőit a megvalósíthatóság szempontjából! Sorolja fel a feladat során jelentkező nehézségeket az egyes alrendszerek szempontjából (pl.grafikus alrendszer, rendszerhívások stb.)! Sorolja fel, hogy milyen feltételek teljesülése esetén lehetséges - a kód jelentős újraírása nélkül - a feladatot megoldani!",
                keys: ["Windows API felépítése és használata: WIN32 API, MFC", "Fordító- (pl. gcc, make) és fejlesztőeszközök (pl. kDevelop) Unix/Linux használata. Rendszerhívások használata alkalmazói programokban", "Grafikai és multimédia-alrendszerek"],
                content: ""
            },
            {
                id: 20,
                title: "Egy TCP/IP alapú hálózatbiztonsági szoftver fejlesztését kell elvégezni. Feladata, egy olyan szoftvermodul elkészítése, amely az egyes hálózati csomagok információit elemzi.",
                task: "Ismertesse a hálózati címzés jellemzőit! Mutassa be egy hálózati csomag felépítését és jellemzőit! Beszéljen egy hálózati csomag útjáról a forrásállomástól a célállomásig!",
                keys: ["Hálózati címzés (fizikai és logikai cím), IP-címek szerkezete, csoportosítása", "Hálózati szolgáltatások, ügyfél/kiszolgálók és kapcsolataik", "OSI és TCP/IP rétegelt modell, protokollok", "IP-címzés a LAN-ban, NAT és PAT fogalma", "Forgalomirányítás, irányító protokollok, belső és külső irányító protokollok"],
                content: ""
            }
        ]
    },
    {
        id: 2,
        language: 'en-GB',
        name: "Angol szóbeli tételek",
        items: [
            {
                id: 1,
                title: "Úgy érzi, hogy a munkahelyén használt számítógépe elavult. Írjon e-mailt a felettesének, amiben egy új számítógépet kér! Kérését indokolja és tegyen javaslatot az új gép konfigurációjára!",
                task: "Határozzon meg egy Ön szerint már elavult, és egy korszerű számítógép konfigurációt! Ismertesse, hogy miért hatékonyabb dolgozni a korszerűbb géppel!",
                keys: ["Számítógép részegységek", "Futási idő, fordítási idő"],
                content: "Dear Mr Smith, I am writing to complain about the computer I am using at the moment. It seems to be quite outdated. My computer is really slow so it takes me a lot of time to do my job. The processor is very old, it has only one core and the RAM is not enough. The system runs from an old  HDD instead of a fast SSD.What is more, the computer is too loud and it is extremely annoying. I would like to have a new computer which has at least 16Gb RAM, 500Gb SSD and minimum 10th Gen i7 processor. With this configuration the computer will be much faster and much more effective.Last but not least, it will be less noisy. My problem is that my colleague compiles the program in half an hour with the help of more modern configuration while it takes me three hours to do. It would be great if the runtime and compiling time decreased. Thank you in advance.I look forward to your reply."
            },
            {
                id: 2,
                title: " A múlt héten egy szakmai konferencián járt. Tartson róla a kollégáknak egy élménybeszámolót!",
                task: "Milyen új alkalmazásokat, játékokat látott? Milyen érdekes, híres emberekkel találkozott? Milyen egyéb érdekes újdonságot látott?",
                keys: ["Szakmai előadás(ok)", "Innováció"],
                content: "Hello everybody. Last week I took part in a conference where we were presented the latest applications, softwares and games. During the profession presentation we learnt about the latest VR games and the new innovative softwares. We had the opportunity to get to know the new exclusive version of Fortnite before its launch. There were other innovative softwares at the conference. The one I was really interested in was a kind of security programme which enscripts my files and personal data with the help of face recognising technology. The programme can enscript the security of logging in the system, it can send files with encryption. With the help of this programme we can easily change the group policy security settings. The programme is user-friendly and it will be open for everybody. The basic programme can be downloaded by everybody for free but there will be a pro version available which will cost 20 dollars per month. The pro version will be able to do military level encryption. At the conference I had the opportunity to meet a lot of successful experts, specialists and professionals including Imre Szalay who is the director of Neumann János Computer Technology Society.He made a very interesting presentation about process development.If anybody is interested in this topic, I can send the content of the presentation. After the conference, we could see a test car with the latest self- driving technology.Tesla set up a test ring where the real traffic situations were simulated and they presented how a Tesla car can handle any traffic situation.If someone wants to get to know more about this new technology, they can ask me for more information. Thank you for your attention."
            },
            {
                id: 3,
                title: "Szoftverfejlesztő céghez HTML-PHP környezetbe programozó állásra jelentkezik. Az állásinterjún megkérik, röviden mutassa be magát.",
                task: "Mondjon néhány mondatot magáról! Hány éves, hol él? Mondja el miért érzi magát alkalmasnak az állás betöltésére!",
                keys: ["Tanulmányok", "Eddigi munkahelyek", "Kompetenciák: web fejlesztés, programnyelvek stb..."],
                content: "I think I am the most appropriate person for the post because I know a lot of languages for the web development for example, HTML, PHP and JavaScript. I worked for a company which deals with web development. I took part in a lot of projects and we developed websites and web applications for different companies. I already have work experience in web design too. I am able to work in team because I am co-operative, flexible, precise and reliable. I am effective when I work in a team. However, I am ready to work on my own and I am ready to learn new things. I have up-to-date knowledge in the latest technology such as HTML5 and CSS3. Besides, I have experince in modern CMS systems. I hope these skills and work experince are enough to work for your company. I would be glad if I could be a member of your company."
            },
            {
                id: 4,
                title: "Hasonlítson össze két operációs rendszert a tanultak közül!",
                task: "Pl.: Windows – Linux. Előnyök, hátrányok (ár, felhasználók száma, biztonság). Melyiket kinek ajánlja?",
                keys: ["Fájlkezelés", "Biztonság", "Frissítések"],
                content: "Well, what we call operating system at all? An Operating system(OS) is a software which acts as an interface between the end user and the computer hardware. Every computer must have at least one OS to run other programmes. The OS is similar to a steering wheel.It means that it doesn’t have a real function, but it gives the opportunity to make other programmes run. It has two roles. It’s a resourse allocator and a control programme. I would like to compare two operation systems, the Linux and the Windows. Windows is the most wide spread – more than sixty percent, Linux is less popular. Windows is closed source- code.It can’t be changed. If we alter it, it’s against the law. Linux system is an open source - code.Anyone can alter or improve it and it can be freely spread. The Windows licence is precisely given.It means that a company buys a a certain number of licences which can be installed on the computers. The Linux system can be installed on all computers.There is no limit and it is free of charge. The Windows has an official support. It costs a lat of money but you must prove that the OS is original.You can for help on forums as well. As for Linux, you can ask for help only on forums.You decide whether you change for a later version or not. Sometimes Windows download things but we don’t know what. As for the price, there isn’t a free version.You must pay for it.Linux is completely free of charge. Recommendation:I would recommend Windows OS for simple users because they can buy a computer with this Windows system, bat the Linux isn’t on the computer.Linux must be installed first and users must be computer literate."
            },
            {
                id: 5,
                title: "Készítsen egy rövid bemutatkozó e-mailt, amiben bemutatja a cége által készített GPS alapú járműkövető rendszert a lehetséges vevőknek!",
                task: "Mutasson be egy Ön szerint hatékonyan működő céget! Ismertesse egy GPS alapú rendszer működését! Mutassa be miért lenne hasznos egy ilyen rendszer bevezetése pl.: egy fuvarozó cégnek!",
                keys: ["On-line gépjármű követés", "Költség megtakarítás, hatékonyság"],
                content: "Dear Customers, I would like to introduce the new GPS vehicle tracking system which was developed by our company.Our company is a well- organised enterprise which was established 20 years ago.It is well - known in Europe.Our professional knowledge can be used worldwide and we cooperate with other experts and companies all over the world.We have a good relationship with suppliers and colleagues because we are reliable, precise and fast.Our company also organises training and courses in order to work more efficiently.As a result of these trainings, our company managed to reach 20 percent(%) cost effenctiveness. As I mentioned earlier, we have a revolutionary GPS- based vehicle tracking system, which I would like to describe in details.This system uses 24 satellites together with cellular data towers.Our system can use all the three GNNS locating systems, Galileo, Glonas and GPS, at the same time.It is able to locate the place of a certain car very accurately, and after that, the system sends the data to our data centre with the help of the new 5G technology.Each customer will have access to the online vehicle tracking system.They can follow the location of the vehicles in real time.A system like this can be really useful for a logistics company because it simplifies administration and CMR.It also assists the maintanance of a broken down truck.The system is easy to use and it is available for everyone who downloads the application to their phone.The system also alerts when the cargo door of a truck is opened or the temperature of the cargo space changes a lot before the truck reaches its destination.The number of the administrative working hours decreases, the payment is given on the basis of real working hours.As a result, the logistics company can lower the costs.With the use of this application, we can follow the location of the vehicles all over the world.Last but not least, this GPS vehicle tracking system can be used in several languages such as Hungarian, English, German, Italian, French, Spanish, Chinese, Russian, etc. I hope our system will draw a lot of customers’ attention."
            },
            {
                id: 6,
                title: "Ön egy raktári szoftvereket készítő cégnél dolgozik, mint projekt vezető. Mutassa be az Önök által készített szoftver tulajdonságait!",
                task: "Mutassa be mit kell tudnia egy raktári programnak! Részletezze a többfelhasználós rendszerek tulajdonságait!",
                keys: ["Raktári bevételezés, kiadások, leltár, selejtezés", "Adatbáziskezelő rendszerek"],
                content: "Dear Ladies and Gentlemen, My name is XY and I work for a small software developing company.Our company has developed a new software which makes warehouse management much easier.With the help of this software we can trace the storage works from the expenses, the inventory to the scapping(shipping).This software can handle the management of multiple warehouses at the same time.It can read bar codes so the goods handling is more efficient, the inventory is easier.The goods can be traced faster and more precisely.The programme can also show the amount of the stored goods and it alerts when there is shortage in a certain kind of product.The user can set the limit where it is needed to order more goods.It can make CMRs and reports and it can handle the partner sas well. The programme can handle more users at the same time.The system administrator can enable each user to use a certain function of the programme.We store the database of the users and goods on the central server.That’s why it is possible to use the system from different places at the same time.The central handling of the data makes it possible to ask query(lekérdez) of the stock(készlet) of different warehouses in real time.When it is needed, different warehouses have the opporunity to ask certain goods from another one.As a result of it, warehouses can save some money so it is much more cost- effective. If you are interested in the software, you can download the demo version from our website free of charge.Although the demo version has only restricted functions, it is worth trying it and if you are satisfied with the programme, you can order the full version on 20% discount.If you have any questions, feel free to ask for more information."
            },
            {
                id: 7,
                title: "Önt bízzák meg egy új játékfejlesztési projekt vezetésével. Az első feladat a csapat toborzása. E-mailben tegyen javaslatot, hogy milyen pozíciókba kellene új kollégákat felvenni! Minden pozícióhoz határozzon meg néhány elvárást, amivel ki lehet írni a pályázatot!",
                task: "Ismertesse, hogy Ön szerint milyen kompetenciákkal rendelkező csapattagokra lenne szükség! Határozzon meg ütemezést, hogy a fejlesztés folyamán mikor, milyen szaktudással rendelkező kollégára van szükség a zökkenőmentes munkához!",
                keys: ["Programozó", "Grafikus", "Designer"],
                content: "Dear Mr Smith, I am writing to make a suggestion for looking for more colleagues for the following positions.Our team would need a programmer, a graphic designer and a designer.The new colleagues should have some special skills. As for the programmer, it would be great if he knew everything about Java, JavaScript and C++.He should also have at least 3 year - work experience.Other requirements are accuracy, reliability, stress resistance, cooperation and problem solving skill.He should know the object oriented programming. To create the new game development project, I would also need a graphic designer team.In this team the graphic and the designer should work on the design of the game together.Their job would be connected tight, that is why it is important for them to be able to work in a team. The new game is a kind of war game, so the caracters will wear fully elaborated clothes and they will have different kinds of weapons.The battles will take place on real venues, so it would be great if the graphic designer were interested in this topic. For the successful and smooth project the first step is to find a professional desinger who can design the whole game including the clothes, characters, vehicles, weapons and the venues.After that we will need the graphic and the programmer at the same time. I am planning to start the whole project is 6 months’ time, so I suppose we will find the perfect colleagues for the positions. I look forward to your approval whether it is possible to employ more colleagues for this project.Thank you in advance."
            },
            {
                id: 8,
                title: "Webfejlesztés tanfolyamon kell előadást tartania. Magyarázza el, mi a reszponzív weboldal!",
                task: "Ismertesse a különböző eszközök eltérő méretéből adódó problémákat! Hogyan lehet ugyanazt a tartalmat többféle eszközön is megjeleníteni?",
                keys: ["Kijelzők méretei", "HTML, CSS, @media", "Bootstrap"],
                content: "Ladies and Gentlemen, I would like to talk about the responsive website and explain what it means actually.As you all know, nowadays each website should be responsive which means that it adjusts to different sizes of the screen.The websites can be opened and read on different smart devices such as a laptop, a smart phone, a tablet or a smart television.All of them differ in screen size and screen resolution.For example, if we use a picture with a fixed size, it might not appear properly on a certain smart device.Another problem is that some fuctions can’t be opened at all. There are some simple solutions to build a responsive website.One of them is when we use the CSS(Cascading Style Sheets).It is a computer language for laying out and structuring web pages.If you choose this method to make a website, it is important to give the size of the elements in percentage. There are more complicated options as well, for example, Bootstrap, @media and CMS systems which already contain the responsive feature.One of the most frequently used option is Bootstrap.I would like to describe it in details.It is a framework which uses three technologies, HTML, CSS and JavaScript.It is basically good for creating a good - looking website which can be easily designed and can be displayed on any screen size.It makes prepared solutions for the web developers.It documents well.It is easy to make a responsive website because each module is made responsive.It has strong browsing compatibility.Also, it is easy to learn how to use and customise it.Grid system is the most frequently used element of Bootstrap, it arranges the elements and data in columns in order to have the appropriate layout on every different smart device."
            },
            {
                id: 9,
                title: "Ismertesse az Ön által tanult verziókövető rendszer lehetőségeit!",
                task: "Mi az a verziókövető rendszer? Miért érdemes használni? Lehetőségek: összehasonlítás, visszatérés korábbi állapotba, stb.",
                keys: ["Team Foundation Server, GIT", "Check in, check out"],
                content: "First of all, I would like to talk about the version control software which is good for saving all versions of a certain source code. In addition, it helps team work. The members of a team can divide the tasks, prepare each module which is stored in the version control software. Each part can be reached by any member of the team. It is easy to track the changes of the software code and anyone can make a comment ont he certain version. If there is a bug in the latest version, it is possible to go back to the previous version. There are two main types of the version control software. One of them is the client-server approach of centralized systems. In this case, the whole source code is stored in the centre. Only the local version is used and stored on the local computer. When the task is completed, the source code is sent back to the central system. This process is called ’check in’. The other type is the distributed version control in which the complete codebase, including its full history, is mirrored on every developer’s computer. Distributed version control conducts synchronization by exchanging patches from peer to peer. One type is the GIT. This is a version control system which has a lot of advantages. It is fast, it is easy to use, it’s a free and open-sourse software. As defined by Microsoft, Team Foundation Server provides a set of collaborative software development tools that integrate with your existing Integrated Development Environment(IDE) or editor thus enabling your cross- functional team to work effectively on software projects of all sizes. It is useful to use the version control software because it has several advantages.The team can work together successfully, communication is easy and there is little chance to make a mistake."
            },
            {
                id: 10,
                title: "Új kolléga érkezik a céghez, aki még nem dolgozott objektum orientált környezetben. Magyarázza el neki az OOP lényegét!",
                task: "Milyen programozási módszertanokat ismer? Mi a különbség az objektum orientált és a szekvenciális programozás között? Mutassa be egy osztályok felépítését!",
                keys: ["Zártság, öröklődés, polimorfizmus, interface-ek, virtuális metódusok", "Jellemzők, metódusok, láthatósági szintek"],
                content: "Dear Tom. You are new here so let me introduce our company to you. I’ve heard that you aren’t really familiar with the OOP so I’d like to tell you some useful information about it which is necessary for being able to use it. There are a lot of different kinds of programming techniques such as cascading model, agile programming and iterative programming. However, we mainly use OOP which means that the main programme is divided into set of objects.The emphasis given on objects, not on procedures.All the programming activities revolve around objects.An object is a real world entity.It may be airplane, ship, car, house, horse, customer, bank Account, loan, petrol, fee, courses, and Registration number etc.Objects are tied with functions.Objects are not free for walk without leg of functions.One object talks with other through earphone of functions.Object is a boss but captive of functions."
            },
            {
                id: 11,
                title: "Önt bízták meg egy junior kolléga kódjának átnézésével. Azt vette észre, hogy az elkészült weblap formázása „inline style” használatával valósul meg. Magyarázza el a kollégának, miért érdemes inkább CSS fájlt használni!",
                task: "Udvariasan közölje a kollégával, hogy mivel bízták meg, és milyen hibát talált! Design elemek változása esetén nem kell a HTML/PHP/stb. kódot változtatni.",
                keys: ["Stílusosztályok használata", "CSS szelektorok"],
                content: "Good morning Jane. I’m sorry to disturb you but I know you are new at the company so my boss asked me to check the code you have written. You have been working really successfully so far but I’ve found a small problem with the code. I’ve noticed that you used inline style instead of CSS. It is not really good because  each HTML file is desinged individually, however, it should be designed with the help of CSS. HTML is only used to define the structure of the website. CSS is used to display the style of the website. It is enough to create the style of an element only once and we can reuse it several times. If we use CSS, it is easier to make changes in design because it is enough to make the changes only once. All the colleagues use an already existing CSS file and if you work in a team, you must use this CSS. If you make a different style, it won’t fit the style of the websites which are desinged by the other colleagues. CSS is very easy to learn how to use.It has different selectors for such as tags, class or ID.With the help of the selectors, you can set the style of each element. You should look through the already existing CSS and you are allowed to use these files.If you want to create a new disign, you should go to Mr Smith and make a suggestion to him.If this new style is considered to be good and necessary, you can use it. Anyway, we are satisfied with your job and we are glad to work with you since you are a valuable member of the team. If you have any questions, feel free to ask me for help."
            },
            {
                id: 12,
                title: "Ön egy web alkalmazásokat fejlesztő céget vezet. Az egyik ügyfele az ország több pontján dolgozó értékesítő kollégák számára szeretne egy ügyviteli programot készíttetni. Az ügyfél desktop alkalmazást szeretne.Próbálja meggyőzni, hogy egy web alkalmazás jobb döntés lenne!",
                task: "Ismertesse az újabb verziók telepítésének problémáját! Egyéb lehetséges érvek: Hálózati kapcsolat a desktop alkalmazáshoz is kell, megfelelő beállítások mellett ugyanolyan biztonságos, operációs rendszertől független.",
                keys: ["On-line rendszerek", "Szoftverek életciklusa", "Folyamatosan változó üzleti igények, újabb program verziók"],
                content: "Dear Customer, I have received your email in which you are inquiring about a desktop application that could meet your business needs. However, I would recommend the web- based application instead.One of the main reasons why I would prefer it is that the deployment of the programme does not require any technical knowlegde.In addition to that, the upgrading is less problematic than in case of the desktop application.Generally, web applications are refreshed centrally at the server and the employees can always use the most up- to - date version with the help of a web browser. What is more, by applying the same settings it can guarantee the same data security regardless of the operating system. The drawback of the desktop application is that it is dependent on the operating system and it requires information techological knowledge as well as a server.The administrator must do the backups regularly and do the system updates which makes its application more expensive.The programmes must be changed according to the custormers’ demands.These changes cannot be done online so the system administrator must go to each location and do the updates personally.It requires a lot of travelling which makes the process much more expensive.These extra costs do not occur in case of the web - based application. In case of the web - based application the clients’ arising questions can be answered more quickly.Web - based applications are becoming more and more popular and technically supported.As a result of technological development, a lot of problems can be solved with the help of the online applications. If you have any questions in connection with the web - based application, you can ask me any time."
            },
            {
                id: 13,
                title: "Ön egy kis szoftverfejlesztő cég vezetője. Mutassa be a cégét az árajánlatot kérő külföldi partnernek!",
                task: "Mikor alakult, hány dolgozója van a cégnek? Milyen referenciákkal rendelkezik a cég? Miért érdemes az Ön cégét választania a leendő partnernek?",
                keys: ["Cégtörténet", "Kis cégből méretéből eredő rugalmasság"],
                content: "Good morning Mr. Taylor. I would like to introduce my small software developer company, the Qualitate Ltd. (limitid) Company. It was established by my brother and me 15 years ago in 2005. It is a family enterpreise.We started the company four people and we developed contstantly.At the moment we work together with 12 software developers.We aren’t planning further development in the future. The reason is that we can work more efficiently as a small company.We can discuss a new projekt face to face, we can help each other and the colleagues understand others’ (birtokos eset jelölése, de s - sel végződik, így nem írja ki.) task that’s why they can substitute each other. Our company mainly deals with making websites from desing and to production.We focus on following the latest technological developments and our employees regularly take part in courses where they can learn about the new solutions. Our company has already made several websites for different companies, for example MOL, Oracle and Tesco. The reason why it is worth(érdemes – előtte létige van – és ige jön utána inges alakban) choosing our company is that we work precisely, fast and flexibly.We are ready to carry out the demands which occur during the development.WeIt would be great if we could work together with your company."
            },
            {
                id: 14,
                title: "A cég, ahol dolgozik, prototípus alapú agilis módszertannal dolgozik. Minden hét végén elkészül a szoftver egy újabb verziója. Magyarázza el az ügyfélnek, hogy mi a módszer lényege, és mi ebben az ő feladata!",
                task: "Minden héten le kell tesztelnie a szoftvert. Folyamatosan kapcsolatban kell lenniük, ami sok idejét igénybe veheti. A fejlesztés végén az ügyfél pontosan olyan programot kap, amit szeretne.",
                keys: ["Szoftverfejlesztés lépései", "Kommunikáció fontossága"],
                content: "A prototype is nothing but a mock version of your ideas in an early stage of the production. This gives the client an actual feel of the system. It also helps them to better understand their desired system requirements. Prototype is not a complete system itself.Many details are not built in the test model either.The main reason of the Prototype model is to provide a system which gives a rough idea about the overall functionality. The prototype will only show the basic test environment of the actual software; thus, some features will not be running completely.This is designed to give an example of the working, look and feel of the final product to the users. This model is used when a client is not sure about the project requirements.Therefore, a close and constant communication between company and client is important for the success. Prototype is an iterative process which finalizes the product with trial and error method."
            },
            {
                id: 15,
                title: "Úgy látja, hogy határidőre nem tudja befejezni a kapott feladatot, mert az ügyfél új igényekkel állt elő. Írjon e-mailt, amiben egy hét haladékot kér!",
                task: "Soroljon fel néhány kérést, amit az ügyfél kért. Pl.: egy új riport, át kellett dolgozni a keresés ablakot, megváltoztatták az import fájl szerkezetét, ...stb! Adjon becslést arra, hogy mikorra tudja befejezni az Önre bízott feladatot! Mire lenne szüksége ahhoz, hogy a határidőt tartani lehessen?",
                keys: ["Határidő", "Projekt", "Ügyfél igény"],
                content: "Dear Mr Taylor, I am writing to you to inform you about the fact that I will not be able to finish the task in time.The reason is that the client has some new request which make it impossible to accomplish the task by the given deadline. The client’s new claims are to make a new report and to change the structure of the import file.Because of the new task, I need to change the structure of the database too.That’s why I need to change more windows which takes more time. To do these additional tasks, I will need three more weeks, unless there is another college help me with the project.If it possible, the project can be finished by next Friday. Thank you for your help in advance.I look forward to you reply."
            },
            {
                id: 16,
                title: "Elkészült a raktárkezelő szoftver legfrissebb verziója. Írjon e-mailt, amiben leírja az ügyfélnek, hogy honnan tudja letölteni az új szoftvert, mi a teendője a telepítés során, és mi változott a programban!",
                task: "Mondja el, mire van szükség az új szoftver letöltéséhet! Pl.: URL, felhasználói név, jelszó. Részletezze a telepítés lépéseit! Pl.: szerver oldali teendők, kliens oldali feladatok. Mondjon néhány raktári programra jellemző funkciót! pl.: a raktári kivételezés folyamata most már vonalkód olvasóval is működik, a leltári ív nyomtatásánál lehetőség van a darabszámok megjelenítésére.",
                keys: ["Letöltés weboldalról", "Adatbázis frissítés", "Kliens program telepítése"],
                content: "Dear Customer, We are pleased to inform you that our newest stock maganement program has been finalised and the deployment files are available on our company home page under the download menu.Below in this mail you will find the direct URL link.The installation files will be accessible after providing your personal user name and password in the prompted login form.In case you do don’t have your credentials, please contact your customer service center for further assistance. The installation: Thanks to the user friendly deployment process you just need to download the files on the local drive of your computer, decompress the package and then double click on the install.exe file to start the installation.This process runs to the end automatically and you will only be prompted when application is ready to use.When starting the program for the first time you need to enter the connection information, sent ina separate mail, under the Connection / Security menu.Please make sure that your computer is be connected to the internet so that the connection from the client can be established to the server.This step is vital to set up your customer account also at the server side.After these actions no further local updates will be required and the About the new features: Compared to our previous software the new product is a cloud - based inventory management solution for middle size businesses like your, however, the software can be easily adjusted to growing business requirements on demand.Its free plan supports one or multiple user at the same time and lets you manage up to 100 transaction entries per month.I would like to higlight also the product tagging and cataloging functionality that lets users create product catalogs with up to eight photos for each item. If you want to manage more than 100 entries per month, upgrade to the Advanced or Ultimate plans. In addition to the features offered in the free version, these plans offer: QR code as well as bar code tagging and scanning, user activity tracking, document management and customized branding, When printing the inventory sheets for the order picking activities now it is also possible to indicate the quantity per product groups or orders. With the newly introduced enhanced functionalties we hope to enable you to handle your stock of products or materials more efficiently and effectively.Should you encounter any issues or you just have a question you can find our contact details on our homepage under the „Contact us” menu."
            },
            {
                id: 17,
                title: "Projekt vezetőként dolgozik egy szoftverfejlesztő cégnél. Feladatként kapja egy ingatlan iroda weboldalának megvalósítását. Az oldalon az iroda aktuális hirdetései szerepelnének képekkel, leírásokkal.",
                task: "Mondja el milyen lépésekből állna a projekt megvalósítása! Milyen szaktudással rendelkező kollégák szükségesek a projekt csapatba? Fogalmazzon meg egy álláshirdetést az egyik pozícióra!",
                keys: ["Programozó, web designer", "Projekt rövid leírása"],
                content: "The aim of this meeting is to present our new project. I am the project leader and my task is to present and discuss the necessary steps to carry out this project. Our software company has been asked to design a website with pictures and adverticements for an estate agency. The first step is to chose a colleague to talk to the client and to discuss the details of the project.The next task is to choose the appropriate web developers who have the necessary qualification and competence to do the job.We need frontend and backend developers.First of all, we must look for a backend developer who has already had experience in PHP and JavaScript.It would be nice if the expert had work experience in SQL. After we have found the appropriate experts for the different tasks, the next step is to start the project.The deadline of this project is three months.Meanwhile, we will have a rengular contact with the client who can follow each part of the project and has the opportunity to ask for changes if necessary. During the project the team has a regular meeting every Monday at 10 am.Here everyone can present the completed tasks and ask questions about the next step. Our software developer company is looking for a backend developer who has already had experience in PHP and JavaScript.The candidate can be a member of a successful team so it is important to be accurate, flexible, hard- working, cooperative and to be able to work individually.We offer competitive salary and bonus as well as a stable job.It is also possible to work from home.If you are interested in this job, please contact me on this email address..."
            },
            {
                id: 18,
                title: "Junior kolléga érkezik a céghez. Az Ön feladata betanítani. Magyarázza el mi az a „debugolás”!",
                task: "Mutassa be röviden a céget! Mutassa milyen hibakeresési eljárásokat alkalmaznak a cégnél! Mondjon példát, amit Ön szerint a hibakeresési eljárások közül debugolással lehet a leggyorsabban megtalálni!",
                keys: ["Lépésenkénti végrehajtás", "Változók értéknek, értékváltozásának követése.", "Töréspont fogalma"],
                content: "Debugging. Debugging is the process of detecting and removing of existing and potential errors (also called as 'bugs') in a software code that can cause it to behave unexpectedly or crash. To prevent incorrect operation of a software or system, debugging is used to find and resolve bugs or defects. In computer programming and software development, debugging is the process of finding and resolving bugs(defects or problems that prevent correct operation) within computer programs, software, or systems. Debugging tactics can involve interactive debugging, control flow analysis, unit testing, integration testing, log file analysis, monitoring at the application or system level, memory dumps, and profiling.Many programming languages and software development tools also offer programs to aid in debugging, known as debuggers. Debuggers are software tools which enable the programmer to monitor the execution of a program, stop it, restart it, set breakpoints, and change values in memory.The term debugger can also refer to the person who is doing the debugging.Generally, high- level programming languages, such as Java, make debugging easier, because they have features such as exception handling and type checking that make real sources of erratic behaviour easier to spot.In programming languages such as C or assembly, bugs may cause silent problems such as memory corruption, and it is often difficult to see where the initial problem happened.In those cases, memory debugger tools may be needed."
            },
            {
                id: 19,
                title: "A céghez – ahol dolgozik – új külföldi ügyvezető érkezik. Mutatkozzon be neki!",
                task: "Mutassa be röviden önmagát! Mondja el korábban hol dolgozott! Mondja el milyen projekteben dolgozott és dolgozik a cégnél! Mondja el miért szeret ennél a cégnél dolgozni!",
                keys: ["Tanulmányok, tapasztalatok", "Korábbi munkahelyek"],
                content: "My name is .... and I work for this company as a software developer. I have been working here for ten years.This is my first workplace.I finished my studies at Óbuda University in Budapest.I am an computer engineering. I have taken part in a lot of projects.For example, our team developed a new banking system, an invoice system.At the moment we are working on a programme which sends data to the tax office. I like working here because my colleagues are reliable(megbízható), hard- working(szorgalmas), flexible(rugalmasak), cooperative and they are experts(jó szakemberek).We can work together successfully.The job is interesting.We can take part in (részt venni) in different courses wher we can learn a lot of new things.The team building courses are also useful. I hope we will be good colleagues and we we will get on on well with each other."
            },
            {
                id: 20,
                title: "Ismertessen egy Ön által tanult algoritmus leíró eszközt!",
                task: "Milyen algoritmus leíró eszközöket tanult! Mutasson be egyet ezek közül részletesen!",
                keys: ["Folyamatábra", "Mondatszerű leírás", "Struktogram"],
                content: "Algorithm descriptive / descpting method. The aim of the algorithm describing method is to use them for introducing the processes.The alg.desc.meth.is independent from the programming languages.Everyone understands it. The programming languages have a strict sintax and they contain a lot of information which isn’t necessary for the alg.desc.methods. A simple and independent language is used to write the whole process. There are 2 types of the the alg.descr.method, the drawings and the texts Drawings are the flowcharts, stuctograms, Jackson- diagrams, tree structures. The texts are the description using a programming language, sentences, phrases, abstract functions. Flowchart It’s one of the oldest(alg.desc.) method.It depicts the processes in details. The program is described as ‘graph’.The graphs contain hubs and spokes. There are hubs which are connected with spokes. geometric shapes are in used to sign the processes.Their use is bound. Types of the hubs: The rectangle is used as an instruction. The diamond is used as a decision. The circle is used to combine flow lines."
            }
        ]
    }
]

# bserkansahin.github.io

Bilal Serkan Şahin'in kişisel portföy sitesi. Statik HTML, CSS ve az miktarda
vanilla JavaScript'ten oluşur. Derleme adımı, paket yöneticisi ve bağımlılık
yoktur; dosyalar olduğu gibi yayımlanır.

---

## 1. Sitenin amacı

1. Bilgi teknolojileri alanındaki mesleki tecrübeyi göstermek.
2. Hawk Scan uygulamasını ayrıntılı bir teknik vaka çalışması olarak sunmak.
3. CV ve LinkedIn profilinde paylaşılabilecek profesyonel bir referans olmak.
4. İleride geliştirilecek projelerin aynı yapıya eklenebilmesini sağlamak.

Site bir şirket veya ürün satış sitesi değildir. Ana kimlik kişisel portföydür.
**Hawk Center**, Bilal Serkan Şahin'in sistem yönetimi ve BT araçlarını bir araya
getirdiği kişisel ürün ailesinin adıdır; **Hawk Scan** bu ailenin ilk
uygulamasıdır.

---

## 2. Klasör yapısı

```
bserkansahin.github.io/
├── index.html                       → ana sayfa
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── CONTENT-TODO.md                  → açık kalan içerik maddeleri (yayımlanmaz)
├── .gitignore
├── .nojekyll                        → Pages'in Jekyll işlemesini kapatır
├── projects/
│   ├── index.html                   → proje listesi
│   └── hawk-scan/index.html         → Hawk Scan vaka çalışması
├── indir/                           → yalnızca yerel; .gitignore ile depo dışında
│   └── HawkScanSetup-1.3.0.exe      → GitHub Release ile yayımlanır (45,2 MB)
└── assets/
    ├── css/main.css                 → tek stil dosyası
    ├── js/main.js                   → tek betik
    ├── fonts/                       → Manrope (.ttf) ve OFL lisans metinleri
    ├── icons/                       → favicon.svg, favicon-32.png, apple-touch-icon.png
    └── images/                      → logo ve sosyal paylaşım görselleri
```

### Üst şerit ve alt bilgi neden her sayfada tekrar ediyor?

Site derleme adımı olmadan çalışsın ve JavaScript kapalıyken de eksiksiz
görünsün diye üst şerit (`<header class="site-header">`) ve alt bilgi
(`<footer class="site-footer">`) her HTML dosyasında birebir tekrar eder.
Menüye madde eklerken **dört dosyanın dördünü de** güncelleyin:

- `index.html`
- `projects/index.html`
- `projects/hawk-scan/index.html`
- `404.html`

---

## 3. Tasarım kuralları

Sitenin görsel dili "bohem / kağıt": sıcak krem zemin, serif başlıklar, ferah
boşluk ve tek bir kiremit (terracotta) vurgu rengi. Yeni bölüm eklerken bu
kurallara uyun.

| Kural | Uygulaması |
|---|---|
| **Sıcak kağıt zemin** | Zemin `#F6F1E8`, metin kahverengiye çalan `#2A2520`. Siyah zemin ve neon vurgu kullanılmaz. |
| **Serif başlık** | Başlıklar sistem serif yığınıyla (Georgia ve muadilleri) yazılır. Her bölüm başlığının üstünde 44 piksellik kalın kiremit çubuk (`.section__mark`) bulunur; başlık kendini belli eder. |
| **Tek vurgu rengi** | Kiremit `#A8552F`. Zeytin yeşili yalnızca çok küçük ikincil işaretlerde. |
| **Kutu değil çizgi** | Bölümler ve satırlar ince yatay çizgilerle ayrılır. Çerçeveli kutu yalnızca indirme bloğu ve mobil menü için. |
| **Tek aralıklı yazı yok** | Etiketler `.label` sınıfıyla, harf aralığı açılmış gövde yazısıyla yazılır. Monospace yalnızca gerçek kod için (`code`, `.cmd`, SHA-256 değeri). |
| **Listede tek renk** | Teknoloji ve yetkinlik listelerinde tüm öğeler AYNI renk ve AYNI ağırlıktadır. Bazı adları `<b>` ile kalınlaştırmayın; renk tutarsızlığı buradan çıkmıştı. |
| **İki sütun** | Solda dar `.label` künye sütunu, sağda içerik (`.grid2`). Mobilde alt alta iner. |

### Türkçe büyük harf kuralı

Etiket yazıları HTML'de **doğrudan büyük harfle** yazılır; CSS'te
`text-transform: uppercase` **kullanılmaz**. Gerekçe Hawk Scan'in kendi kuralıyla
aynı: Türkçe'de "i" harfinin büyüğü "İ"dir ve kültüre bağlı dönüşüm tarayıcıdan
tarayıcıya güvenilmez. `MENÜ`, `İSTANBUL, TÜRKİYE`, `EĞİTİM` gibi yazıları
kaynakta büyük harfle yazın.

### Renkler

Tüm renkler `assets/css/main.css` içindeki `:root` bloğunda tanımlıdır. HTML
dosyalarına sabit renk yazmayın.

---

## 4. Yerelde çalıştırma

Bağlantılar kök göreli (`/assets/...`) olduğu için dosyayı çift tıklayarak açmak
yeterli değildir; bir yerel sunucu gerekir.

```powershell
cd <site-klasoru>
py -3 -m http.server 8080
```

Sonra tarayıcıda: <http://localhost:8080/>

`http.server` kendi 404 sayfasını gösterir; `404.html` yalnızca GitHub Pages'te
devreye girer.

---

## 5. İçerikleri güncelleme

| Ne değişecek | Nerede |
|---|---|
| İsim (örn. "Serkan Şahin" kısaltması) | Her dosyada `<title>`, `.brand` bağlantısı, `og:*` etiketleri ve alt bilgi |
| Mesleki unvan | `index.html` → `.hero__role` ve `.facts` listesi |
| Hero tanıtım metni | `index.html` → `.hero__text` |
| Hakkımda paragrafları | `index.html` → `#hakkimda` |
| Yeni iş deneyimi | `index.html` → `#deneyim` içindeki ilk `.rows`; yeni pozisyon en üste eklenir, `row--current` sınıfı yalnızca güncel işte kalır. Görev başlığı + açıklaması ikilileri `<dl class="tasks">` içinde durur. |
| Eğitim / sertifika | `index.html` → `#deneyim` içindeki ikinci `.rows` |
| Yetkinlik satırı | `index.html` → `#yetkinlikler` içindeki `.row` blokları |
| İletişim bağlantıları | `index.html` → `#iletisim` içindeki `.contact` listesi, ayrıca hero düğmeleri ve alt bilgi |
| Renkler | `assets/css/main.css` → `:root` |

### Dil

İlk sürüm Türkçedir. İngilizce sürüm eklenecekse önerilen yapı:

```
/en/index.html
/en/projects/index.html
/en/projects/hawk-scan/index.html
```

Ortak `assets/` klasörü paylaşılır. Dil seçici **ancak İngilizce sayfalar
gerçekten hazır olduğunda** eklenir; çalışmayan seçici eklenmez. Eklendiğinde
her sayfaya `<link rel="alternate" hreflang="...">` etiketleri de yazılmalıdır.

---

## 6. Yeni proje ekleme

1. `projects/<proje-adi>/index.html` klasörünü ve dosyasını oluşturun. En kolay
   yol `projects/hawk-scan/index.html` dosyasını kopyalayıp içeriğini
   değiştirmektir.
2. Yeni sayfadaki şu alanları güncelleyin: `<title>`, `meta description`,
   `link rel="canonical"`, tüm `og:*` ve `twitter:*` etiketleri, site yolu
   (`.breadcrumb`) ve sayfa içeriği.
3. Her bölüm başlığında `<span class="section__mark">` çubuğunun bulunduğundan
   emin olun; başlık işareti bu öğeden geliyor.
4. `projects/index.html` içine yeni bir `<article class="project">` bloğu
   ekleyin (mevcut blok kopyalanabilir).
5. Proje ana sayfada da görünecekse `index.html` → `#projeler` bölümüne aynı
   bloğu ekleyin.
6. `sitemap.xml` dosyasına yeni `<url>` girdisini ekleyin ve `lastmod`
   tarihlerini güncelleyin.

**"Yakında" kartı eklemeyin.** Yalnızca gerçekten var olan projeler listelenir.

---

## 7. Hawk Scan ekran görüntüsü ekleme

Hawk Scan sayfasında şu an ekran görüntüsü **yoktur**. Nedeni:
`Nabiz/build/onizleme/` altındaki mevcut arayüz görüntüleri gerçek bir makinenin
verisiyle üretilmiştir ve bilgisayar adı, yerel IP adresi, disk seri numarası
gibi bilgiler içerir.

Görüntü eklemek için:

1. Görüntüyü alın veya mevcut görüntüyü kullanın.
2. **Maskeleyin.** Bilgisayar adı, kullanıcı adı, etki alanı, IP adresi, MAC
   adresi, disk/cihaz seri numarası, lisans anahtarı ve dosya yollarını
   bulanıklaştırın ya da örnek değerlerle değiştirin. Hangi görüntüde neyin
   maskeleneceği `CONTENT-TODO.md` içinde listelidir.
3. Görüntüyü `assets/images/` altına `hawk-scan-<ekran>.webp` adıyla kaydedin.
   WebP mümkün değilse optimize edilmiş PNG kullanın.
4. `projects/hawk-scan/index.html` içinde "EKRAN GÖRÜNTÜLERİ — HENÜZ
   YAYIMLANMIYOR" başlıklı HTML yorumunu bulun; içindeki iskelet kullanıma
   hazırdır. Yorum işaretlerini kaldırın ve `<figure>` bloklarını çoğaltın.
5. Her `<img>` için `width`, `height`, anlamlı `alt` metni, `loading="lazy"` ve
   `decoding="async"` değerlerini yazın.

---

## 8. Kişisel bağlantılar

| Bağlantı | Değer | Durum |
|---|---|---|
| E-posta | `bserkansahin@gmail.com` | **Yayımlanmıyor.** Onay verilene kadar sitede gösterilmiyor; yalnızca bu README'de kayıtlı. |
| LinkedIn | `linkedin.com/in/bilal-serkan-%C5%9Fahin-7395b4167/` | Yayında — hero düğmesi, `#iletisim`, alt bilgi (4 sayfada) |
| GitHub | `github.com/bserkansahin` | Yayında — hero düğmesi, `#iletisim`, alt bilgi (4 sayfada) |

LinkedIn adresindeki `%C5%9F` dizisi "ş" harfinin URL kodlamasıdır; olduğu gibi
bırakın, "s" ile değiştirmeyin.

**CV indirme bağlantısı yoktur ve eklenmeyecektir** (karar verildi). Mevcut CV
telefon numarası, doğum tarihi, ilçe, askerlik ve ehliyet bilgisi içerdiği için
zaten yayımlanamazdı.

**Hawk Scan kaynak kod bağlantısı yoktur ve eklenmeyecektir** (karar verildi).
Depo özel kalacak; sitede "Kaynak Kod" düğmesi bulunmuyor.

---

## 9. Kurulum paketinin yayımlanması

Kurulum paketi **GitHub Release eklentisi** olarak yayımlanır; EXE dosyası
deponun git geçmişine hiçbir zaman girmez. Yerel kopya
`indir/HawkScanSetup-1.3.0.exe` yolunda durur ve `.gitignore` ile depo dışında
tutulur.

| Alan | Adres |
|---|---|
| Release | `https://github.com/bserkansahin/bserkansahin.github.io/releases/tag/v1.3.0` |
| Doğrudan dosya | `https://github.com/bserkansahin/bserkansahin.github.io/releases/download/v1.3.0/HawkScanSetup-1.3.0.exe` |

Hawk Scan sayfasındaki iki indirme düğmesi (hero ve `#indir` bölümü) doğrudan
bu dosya adresine bağlıdır. Bağlantıda `download` özniteliği ve
`target="_blank"` **kullanılmaz**; GitHub dosyayı zaten indirme olarak sunar ve
indirme aynı sekmede başlar.

### Sürüm bilgisi

| Alan | Değer |
|---|---|
| Sürüm | 1.3.0 |
| Yapı tarihi | 17.09.2026 |
| Boyut | 47.345.331 bayt (45,2 MB) |
| SHA-256 | `06417dda7c4198093a09036a2a1bd35e406092926c9507a29c96ac54924c4eb0` |
| Kaynak | `<hawk-scan-proje-klasoru>\dist\HawkScanSetup.exe` |

### ⚠ Depo boyutu uyarısı

45 MB'lık bir ikili dosya git geçmişine kalıcı olarak yazılır. Dosyanın her yeni
sürümü geçmişi 45 MB daha büyütür ve **geri alınamaz** (geçmişi yeniden yazmadan
silinemez). GitHub'ın sınırları: tek dosya 100 MB, depo için önerilen üst sınır
1 GB, GitHub Pages yayımlanan site için 1 GB ve aylık 100 GB bant genişliği
(yumuşak sınır).

Bu yüzden önerilen yol **GitHub Releases**'tir: dosya sürüm etiketine eklenti
olarak yüklenir, git geçmişine girmez ve sitedeki düğme o adrese bağlanır.
Releases için herkese açık bir depo gerekir; Hawk Scan kaynak deposu özel
kalacağından bu amaçla ayrı ve boş bir genel depo kullanılabilir.

**Sürüm yükseltirken yapılacaklar:**

1. Yeni paketi `v<sürüm>` etiketiyle GitHub Release olarak yükleyin; depoya
   kopyalamayın ve `.gitignore` içindeki `indir/` kuralını kaldırmayın.
2. Yeni SHA-256 değerini hesaplayın:
   `Get-FileHash .\indir\HawkScanSetup-<sürüm>.exe -Algorithm SHA256`
3. `projects/hawk-scan/index.html` içindeki iki indirme bağlantısını yeni
   release adresine; `#indir` bölümündeki dosya adı, sürüm, boyut ve SHA-256
   değerlerini yeni pakete göre güncelleyin.
4. Aynı sayfadaki "SÜRÜM" künyesini (`.figures` bloğu) ve hero'daki sürüm
   satırını güncelleyin.
5. Eski release'i silmeniz gerekmez; önceki sürümler arşiv olarak kalabilir.

---

## 10. GitHub Pages üzerinde yayınlama

> Bu adımlar **kullanıcı onayı verdikten sonra** uygulanır.

1. GitHub'da `bserkansahin` hesabı altında `bserkansahin.github.io` adında
   **herkese açık** bir depo oluşturun. Kullanıcı adıyla birebir aynı ad
   zorunludur; aksi hâlde site kök adreste yayımlanmaz.
2. Yerelde:

   ```powershell
   cd <site-klasoru>
   git init
   git add .
   git commit -m "Kişisel portföy sitesinin ilk sürümü"
   git branch -M main
   git remote add origin https://github.com/bserkansahin/bserkansahin.github.io.git
   git push -u origin main
   ```

3. Depo → **Settings → Pages** → Source: `Deploy from a branch`,
   Branch: `main`, klasör: `/ (root)`.
4. Birkaç dakika sonra site <https://bserkansahin.github.io> adresinde yayımlanır.

Bir `.nojekyll` dosyasına gerek yoktur; sitede alt çizgiyle başlayan klasör
bulunmuyor. İleride `_` ile başlayan bir klasör eklenirse kök dizine boş bir
`.nojekyll` dosyası koyun.

---

## 11. Özel alan adı bağlama

1. Alan adı sağlayıcısında DNS kayıtlarını oluşturun:
   - Kök alan adı (`ornek.com`) için dört `A` kaydı:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Alt alan adı (`www.ornek.com`) için `CNAME` → `bserkansahin.github.io`
2. Depo kök dizinine tek satırlık bir `CNAME` dosyası ekleyin; içinde yalnızca
   alan adı bulunsun.
3. Settings → Pages → Custom domain alanına alan adını yazın ve
   **Enforce HTTPS** seçeneğini işaretleyin.
4. Alan adı değişince şunları güncelleyin: her sayfadaki `canonical`, `og:url`,
   `twitter:*` görsel adresleri, `robots.txt` içindeki sitemap satırı ve
   `sitemap.xml` içindeki tüm `<loc>` değerleri.

---

## 12. Gizlilik kontrol listesi

Aşağıdakiler bu depoya **hiçbir biçimde** girmez — sayfa metnine de, HTML
kaynağına da, meta etiketine de, yorum satırına da:

- [ ] Telefon numarası
- [ ] Doğum tarihi, yaş
- [ ] Açık ev adresi, ilçe bilgisi
- [ ] Medeni durum, aile bilgileri
- [ ] Askerlik durumu, ehliyet bilgisi
- [ ] T.C. kimlik numarası
- [ ] Referans kişileri ve iletişim bilgileri
- [ ] İmza görüntüsü
- [ ] Belge veya sertifika numaraları
- [ ] Kurumsal kullanıcı hesapları ve e-posta adresleri
- [ ] Kurumsal sistem, sunucu, IP ve ağ bilgileri
- [ ] ODAŞ'a veya bağlı şirketlere ait iç doküman, altyapı ayrıntısı, bütçe tutarı
- [ ] API anahtarı, token, parola, connection string
- [ ] `.env` ve kimlik bilgisi dosyaları
- [ ] Hawk Scan rapor çıktıları ve gerçek sistem verisi
- [ ] Maskelenmemiş Hawk Scan ekran görüntüleri

Konum bilgisi yalnızca **"İstanbul, Türkiye"** olarak yazılır. Sitede yayımlanan
kişisel iletişim bilgisi yoktur; yalnızca genel LinkedIn ve GitHub profil
adresleri gösterilir.

### Yayın öncesi tarama komutu

```powershell
cd <site-klasoru>
Get-ChildItem -Recurse -Include *.html,*.css,*.js,*.md,*.txt,*.xml |
  Select-String -Pattern '\b0[\s\-\(]?5\d{2}', '@odas', 'password', 'api[_-]?key', 'secret', 'connectionstring', '\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b', 'T\.?C\.?\s*\d{11}'
```

Çıktıda yalnızca README'nin kendi örnekleri ve GitHub Pages'in belgelenmiş
`185.199.*` IP adresleri görünmelidir.

---

## 13. Yayın öncesi doğrulama adımları

1. Yerel sunucuyu başlatın, dört sayfayı da açın: `/`, `/projects/`,
   `/projects/hawk-scan/`, var olmayan bir adres.
2. Tarayıcı geliştirici araçlarında masaüstü, tablet (768 px) ve mobil (375 px)
   genişliklerini kontrol edin; yatay kaydırma olmamalı.
3. Tüm bağlantıları tıklayın; kırık bağlantı ve eksik görsel olmamalı.
4. İndirme düğmesine basıldığında EXE dosyasının başka bir sayfaya gitmeden
   doğrudan indiğini ve SHA-256 değerinin sayfadaki değerle eşleştiğini
   doğrulayın.
5. Klavyeyle gezinin: `Tab` ile "İçeriğe geç" bağlantısı ilk sırada görünmeli,
   odak halkaları her öğede seçilebilir olmalı, mobil menü `Esc` ile kapanmalı.
6. Tarayıcı konsolunda hata olmadığını doğrulayın.
7. HTML doğrulaması yapın: <https://validator.w3.org/nu/>
8. Yukarıdaki gizlilik taramasını çalıştırın.
9. Site metinlerini Hawk Scan deposundaki güncel belgelerle karşılaştırın
   (`HAWK_SCAN_PROJECT_HANDOFF.md`, `CLAUDE.md`, `KARARLAR-v2.md`).
   `DURUM-RAPORU.md` ve `V2-YOL-HARITASI.md` eskimiştir; oradaki bilgiyi
   doğrulamadan kullanmayın.
10. Hawk Scan sayfasındaki sayıları güncel kodla karşılaştırın: modül sayısı
    (`TaramaYoneticisi.VarsayilanModuller`), bakım işlemi sayısı
    (`BakimYoneticisi`), sürüm (`Directory.Build.props`), test sayısı
    (`dotnet test` çıktısı).
11. İsteğe bağlı: Chrome DevTools → Lighthouse ile performans, erişilebilirlik,
    iyi uygulamalar ve SEO raporu alın.

---

## 14. Yazı tipi lisansı

`assets/fonts/` altındaki **Manrope** yazı tipi SIL Open Font License ile
dağıtılır. Lisans, yazı tipi dosyalarının lisans metniyle birlikte dağıtılmasını
şart koşar; bu nedenle `OFL-Manrope.txt` aynı klasörde tutulur.
**Bu dosyayı silmeyin.**

Başlıklar için ayrı bir yazı tipi indirilmez; işletim sisteminin kendi serif
yazı tipi kullanılır (Georgia ve muadilleri). Bohem yön serif ister, elde
lisanslı bir serif dosyası yoktur ve sistem yığını hem hızlı hem bedelsizdir.
Aynı gerekçeyle Outfit yazı tipi bu sürümde kaldırıldı — yeni tasarımda
kullanılmıyordu.

Manrope harici bir CDN'den değil, siteyle birlikte sunulur; böylece ziyaretçinin
tarayıcısı üçüncü taraf bir sunucuya istek atmaz.

Dosyalar `.ttf` biçimindedir. Ortamda dönüştürme aracı bulunmadığı için `.woff2`
üretilmedi. İleride `woff2_compress` veya benzeri bir araçla dönüştürülürse
toplam yazı tipi boyutu yaklaşık yarıya iner; `main.css` içindeki `@font-face`
bloklarında `src` satırının güncellenmesi yeterlidir.

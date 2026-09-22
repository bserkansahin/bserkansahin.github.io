/*
  Bilal Serkan Şahin — Kişisel Portföy
  Tek betik. Üç iş yapar:
    1. Mobil menüyü açıp kapatmak (klavye ve ekran okuyucu davranışıyla birlikte)
    2. Ana sayfada gezinme bağlantısının etkin bölümü göstermesi
    3. Alt bilgideki yılı güncellemek

  Kural: JavaScript kapalıyken sitenin tamamı okunabilir kalır. Bu dosyanın
  yaptığı hiçbir şey içeriğin görünmesi için gerekli değildir. Bu yüzden
  "kaydırınca belir" türü bir efekt bilinçli olarak eklenmedi.
*/

(function () {
  "use strict";

  /* ---------------------------------------------------------------- */
  /* 1. Mobil menü                                                     */
  /* ---------------------------------------------------------------- */

  var dugme = document.querySelector(".nav-toggle");
  var menu = document.getElementById("ana-gezinme");

  if (dugme && menu) {
    var kapat = function () {
      menu.classList.remove("is-open");
      dugme.setAttribute("aria-expanded", "false");
    };

    var ac = function () {
      menu.classList.add("is-open");
      dugme.setAttribute("aria-expanded", "true");
    };

    dugme.addEventListener("click", function () {
      if (dugme.getAttribute("aria-expanded") === "true") {
        kapat();
      } else {
        ac();
      }
    });

    // Escape menüyü kapatır ve odağı düğmeye geri verir.
    document.addEventListener("keydown", function (olay) {
      if (olay.key === "Escape" && dugme.getAttribute("aria-expanded") === "true") {
        kapat();
        dugme.focus();
      }
    });

    // Menüden bir bağlantıya gidilince menü kapanır.
    menu.addEventListener("click", function (olay) {
      if (olay.target.closest("a")) {
        kapat();
      }
    });

    // Odak menünün ve düğmenin dışına çıkarsa menü kapanır.
    document.addEventListener("focusin", function (olay) {
      if (
        dugme.getAttribute("aria-expanded") === "true" &&
        !menu.contains(olay.target) &&
        !dugme.contains(olay.target)
      ) {
        kapat();
      }
    });

    // Masaüstü genişliğine dönüldüğünde açık kalmış menü durumu temizlenir.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) {
        kapat();
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* 2. Etkin bölüm göstergesi (yalnızca ana sayfada)                  */
  /* ---------------------------------------------------------------- */

  var bolumBaglantilari = Array.prototype.slice.call(
    document.querySelectorAll('#ana-gezinme a[href^="#"]')
  );

  if (bolumBaglantilari.length && "IntersectionObserver" in window) {
    var bolumler = bolumBaglantilari
      .map(function (baglanti) {
        return document.querySelector(baglanti.getAttribute("href"));
      })
      .filter(Boolean);

    // Menüdeki "Ana Sayfa" bağlantısı aria-current="page" taşıyor. Bir bölüm
    // etkinleştiğinde iki madde birden vurgulanmasın diye gezinmeye .nav--spy
    // eklenir; sayfa başına dönüldüğünde geri alınır.
    var temizle = function () {
      bolumBaglantilari.forEach(function (baglanti) {
        baglanti.classList.remove("is-active");
      });
      menu.classList.remove("nav--spy");
    };

    // Sayfanın en üstünde hiçbir bölüm etkin sayılmaz. Bu kontrol şart:
    // IntersectionObserver kurulduğu anda görünür öğeler için bir kez
    // tetikleniyor ve kontrol olmadan sayfa açılışında rastgele bir bölüm
    // işaretli görünüyordu.
    var basaYakin = function () {
      return window.pageYOffset < 160;
    };

    var isaretle = function (kimlik) {
      if (basaYakin()) {
        temizle();
        return;
      }
      bolumBaglantilari.forEach(function (baglanti) {
        baglanti.classList.toggle(
          "is-active",
          baglanti.getAttribute("href") === "#" + kimlik
        );
      });
      menu.classList.add("nav--spy");
    };

    var gozlemci = new IntersectionObserver(
      function (girisler) {
        girisler.forEach(function (giris) {
          if (giris.isIntersecting) {
            isaretle(giris.target.id);
          }
        });
      },
      // Üst şerit yüksekliği kadar pay bırakılır; bölümün üst kenarı şeridin
      // hemen altına geldiğinde etkin sayılır.
      { rootMargin: "-88px 0px -65% 0px", threshold: 0 }
    );

    bolumler.forEach(function (bolum) {
      gozlemci.observe(bolum);
    });

    // Başa dönüldüğünde "Ana Sayfa" vurgusu geri gelir.
    window.addEventListener(
      "scroll",
      function () {
        if (basaYakin()) {
          temizle();
        }
      },
      { passive: true }
    );
  }

  /* ---------------------------------------------------------------- */
  /* 3. Alt bilgideki yıl                                              */
  /* ---------------------------------------------------------------- */

  var yil = document.querySelector("[data-yil]");
  if (yil) {
    yil.textContent = String(new Date().getFullYear());
  }
})();

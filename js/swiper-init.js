  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,     // تعداد کارت در دسکتاپ
      spaceBetween: 10,     // فاصله بین کارت‌ها
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 6
        }
      }
    });
  var swiper = new Swiper(".mySwiperBetween", {
  slidesPerView: 1,       // تعداد اسلایدهای همزمان
  spaceBetween: 30,       // فاصله بین اسلایدها
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
 document.querySelectorAll('.checkbox-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); // جلوگیری از پرش صفحه
      const icon = this.querySelector('.material-symbols-outlined');
      if (icon.textContent.trim() === 'check_box_outline_blank') {
        icon.textContent = 'check_box';
      } else {
        icon.textContent = 'check_box_outline_blank';
      }
    });
  });

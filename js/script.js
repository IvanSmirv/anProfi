let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

document.querySelectorAll(".popupActive").forEach(function (item) {
  item.addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".popupBack").classList.add("active");
    document.body.classList.add("block");
  });
});

document
  .querySelector(".popup__closeBtn")
  .addEventListener("click", function () {
    document.querySelector(".popup.active").classList.remove("active");
    document.querySelector(".popupBack").classList.remove("active");
    document.body.classList.remove("block");
  });

document.querySelector(".popupBack").addEventListener("click", function () {
  document.querySelector(".popup.active").classList.remove("active");
  this.classList.remove("active");
  document.body.classList.remove("block");
});

document
  .querySelector(".header__burger")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".header__content").classList.toggle("active");
  });
